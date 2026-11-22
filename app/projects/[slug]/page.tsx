import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "@/components/icons";
import { TechList } from "@/components/tech-list";
import { categoryLabels, featuredProjects, getProject } from "@/content/projects";
import { site } from "@/content/site";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return featuredProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const url = `/projects/${project.slug}`;
  const image = { url: `/og/${project.slug}.png`, width: 1200, height: 630, alt: `${project.title} — case study` };
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: url },
    openGraph: { type: "article", url, title: `${project.title} — ${site.name}`, description: project.summary, images: [image] },
    twitter: { card: "summary_large_image", title: `${project.title} — ${site.name}`, description: project.summary, images: [image.url] },
  };
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project || !project.featured) notFound();

  const i = featuredProjects.findIndex((p) => p.slug === project.slug);
  const next = featuredProjects[(i + 1) % featuredProjects.length];

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Projects", item: `${site.url}/#projects` },
      { "@type": "ListItem", position: 3, name: project.title, item: `${site.url}/projects/${project.slug}` },
    ],
  };

  return (
    <article className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 sm:pt-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <nav aria-label="Breadcrumb" className="mb-10">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg">
          <ArrowLeft /> All projects
        </Link>
      </nav>

      <header className="grid gap-10 border-b border-line pb-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16">
        <div>
          <p className="label mb-4">
            {categoryLabels[project.category]} · P-{String(i + 1).padStart(2, "0")}
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">{project.title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{project.summary}</p>
        </div>
        {project.specs && (
          <dl className="h-fit divide-y divide-line rounded-lg border border-line text-sm">
            {project.specs.map((s) => (
              <div key={s.label} className="grid grid-cols-[8rem_1fr] gap-4 px-5 py-3">
                <dt className="label pt-0.5">{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </header>

      <div className="grid gap-12 pt-12 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-16">
        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <p className="label mb-3">Stack</p>
          <TechList items={project.tech} />
        </aside>

        <div className="max-w-2xl space-y-12">
          {project.problem && (
            <section aria-labelledby="problem">
              <h2 id="problem" className="label mb-3">Problem</h2>
              <p className="text-lg leading-relaxed">{project.problem}</p>
            </section>
          )}
          {project.whatIDid && (
            <section aria-labelledby="work">
              <h2 id="work" className="label mb-3">What I did</h2>
              <ol className="space-y-3 text-[17px] leading-relaxed">
                {project.whatIDid.map((w, n) => (
                  <li key={w} className="grid grid-cols-[2rem_1fr]">
                    <span className="font-mono text-sm leading-[1.9] text-muted tabular-nums">{String(n + 1).padStart(2, "0")}</span>
                    <span>{w}</span>
                  </li>
                ))}
              </ol>
            </section>
          )}
          {project.results && project.results.length > 0 && (
            <section aria-labelledby="results">
              <h2 id="results" className="label mb-3">Results</h2>
              <ul className="space-y-2 text-[17px] leading-relaxed">
                {project.results.map((r) => (
                  <li key={r} className="flex gap-3">
                    <span aria-hidden className="mt-[0.75em] h-px w-3 shrink-0 bg-accent" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
          {project.images.length > 0 && (
            <section aria-labelledby="images">
              <h2 id="images" className="label mb-3">Images</h2>
              <div className="space-y-6">
                {project.images.map((img) => (
                  <figure key={img.src}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={img.width}
                      height={img.height}
                      sizes="(min-width: 1024px) 672px, 100vw"
                      className="h-auto w-full rounded-md border border-line"
                    />
                    {img.caption && <figcaption className="mt-2 text-sm text-muted">{img.caption}</figcaption>}
                  </figure>
                ))}
              </div>
            </section>
          )}
          {project.links.length > 0 && (
            <section aria-labelledby="links">
              <h2 id="links" className="label mb-3">Links</h2>
              <ul className="flex flex-wrap gap-3">
                {project.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md border border-line-strong px-4 py-2 text-sm hover:border-fg"
                    >
                      {l.label} <ArrowUpRight />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>

      <nav aria-label="Next project" className="mt-20 border-t border-line pt-8">
        <Link href={`/projects/${next.slug}`} className="group flex items-center justify-between gap-6">
          <span>
            <span className="label block">Next project</span>
            <span className="mt-1 block text-xl font-semibold tracking-tight group-hover:text-accent">{next.title}</span>
          </span>
          <ArrowRight className="size-5 shrink-0 text-muted group-hover:text-accent" />
        </Link>
      </nav>
    </article>
  );
}
