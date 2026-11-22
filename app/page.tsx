import Image from "next/image";
import { Section } from "@/components/section";
import { FeaturedCard } from "@/components/featured-card";
import { ProjectIndex } from "@/components/project-index";
import { ArrowRight, ArrowUpRight, Download, GitHub, LinkedIn, Mail } from "@/components/icons";
import { site } from "@/content/site";
import { projects, featuredProjects, categoryLabels } from "@/content/projects";
import { experience } from "@/content/experience";
import { education, awards } from "@/content/education";
import { skills } from "@/content/skills";
import { hasCv } from "@/lib/cv";

export default function HomePage() {
  const mainRoles = experience.filter((r) => !r.minor);
  const minorRoles = experience.filter((r) => r.minor);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section aria-labelledby="hero-title" className="dot-grid">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-16 pt-14 sm:px-6 sm:pb-24 sm:pt-20 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
          <div>
            <p className="label fade-up mb-6">
              <span className="text-accent">●</span> {site.role} · {site.nationality}
            </p>
            <h1 id="hero-title" className="fade-up fade-up-2 text-[2.6rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              {site.name}
            </h1>
            <p className="fade-up fade-up-3 mt-5 max-w-xl text-lg leading-snug text-muted sm:text-xl">
              {site.tagline}.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex h-11 items-center gap-2 rounded-md bg-fg px-5 text-sm font-medium text-bg transition-opacity hover:opacity-85"
              >
                View projects <ArrowRight />
              </a>
              {hasCv && (
                <a
                  href="/cv.pdf"
                  download="Muhammad-Hassan-CV.pdf"
                  className="inline-flex h-11 items-center gap-2 rounded-md border border-line-strong px-5 text-sm font-medium transition-colors hover:border-fg"
                >
                  <Download /> Download CV
                </a>
              )}
            </div>
            <dl className="mt-12 grid max-w-xl gap-x-8 gap-y-4 border-t border-line pt-6 text-sm sm:grid-cols-2">
              <div>
                <dt className="label mb-1">Now</dt>
                <dd>Junior Electronics Engineer Trainee, WestPoint Home Bahrain</dd>
              </div>
              <div>
                <dt className="label mb-1">Studying</dt>
                <dd>Electronics Engineering, Bahrain Polytechnic (final year)</dd>
              </div>
            </dl>
          </div>
          <figure className="mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px]">
            <div className="relative border border-line-strong bg-surface p-2">
              <span aria-hidden className="absolute -left-px -top-px size-3 border-l-2 border-t-2 border-accent" />
              <span aria-hidden className="absolute -bottom-px -right-px size-3 border-b-2 border-r-2 border-accent" />
              <Image
                src={site.photo.image}
                alt={site.photo.alt}
                preload
                placeholder="blur"
                sizes="(min-width: 1024px) 344px, (min-width: 640px) 304px, 264px"
                className="h-auto w-full"
              />
            </div>
            <figcaption className="label mt-3 flex justify-between">
              <span>Fig. 1</span>
              <span>Bahrain</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────── */}
      <Section id="about" index="01" title="About">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16">
          <div className="max-w-2xl space-y-5 text-lg leading-relaxed">
            {site.intro.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <dl className="grid h-fit grid-cols-[auto_1fr] gap-x-6 gap-y-3 rounded-lg border border-line p-6 text-sm">
            <dt className="label pt-0.5">Focus</dt>
            <dd>Industrial automation · Embedded systems · Web systems</dd>
            <dt className="label pt-0.5">Nationality</dt>
            <dd>{site.nationality}</dd>
            <dt className="label pt-0.5">Based</dt>
            <dd>{site.location}</dd>
            <dt className="label pt-0.5">Studying</dt>
            <dd>Electronics Engineering, Bahrain Polytechnic</dd>
          </dl>
        </div>
      </Section>

      {/* ── Experience ───────────────────────────────────── */}
      <Section id="experience" index="02" title="Experience">
        <ol className="relative space-y-12 border-l border-line pl-6 sm:pl-10">
          {mainRoles.map((r) => (
            <li key={`${r.title}-${r.org}`} className="relative">
              <span aria-hidden className="absolute -left-[29px] top-1.5 size-2.5 rounded-full border-2 border-accent bg-bg sm:-left-[45px]" />
              <div className="grid gap-2 md:grid-cols-[12rem_1fr] md:gap-10">
                <p className="label pt-1 tabular-nums">{r.period}</p>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">{r.title}</h3>
                  <p className="text-muted">
                    {r.org}
                    {r.location ? `, ${r.location}` : ""}
                  </p>
                  {r.link && (
                    <a
                      href={r.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1 font-mono text-xs text-accent hover:underline"
                    >
                      {r.link.label} <ArrowUpRight />
                    </a>
                  )}
                  <ul className="mt-4 space-y-2 text-[15px] leading-relaxed">
                    {r.points.map((pt) => (
                      <li key={pt} className="flex gap-3">
                        <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-line-strong" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
          <li className="relative">
            <span aria-hidden className="absolute -left-[28px] top-1.5 size-2 rounded-full bg-line-strong sm:-left-[44px]" />
            <div className="grid gap-2 md:grid-cols-[12rem_1fr] md:gap-10">
              <p className="label pt-1">Earlier</p>
              <ul className="space-y-1.5 text-sm text-muted">
                {minorRoles.map((r) => (
                  <li key={`${r.title}-${r.org}`}>
                    <span className="text-fg">{r.title}</span>, {r.org} · <span className="tabular-nums">{r.period}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ol>
      </Section>

      {/* ── Projects ─────────────────────────────────────── */}
      <Section id="projects" index="03" title="Selected projects">
        <ul className="grid gap-4 md:grid-cols-2 md:gap-5">
          {featuredProjects.map((p, i) => (
            <li key={p.slug} className="flex">
              <FeaturedCard project={p} index={i} />
            </li>
          ))}
        </ul>
        <h3 className="mb-6 mt-20 text-lg font-semibold tracking-tight">Project index</h3>
        <ProjectIndex projects={projects} labels={categoryLabels} />
      </Section>

      {/* ── Education ────────────────────────────────────── */}
      <Section id="education" index="04" title="Education & recognition">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <ul className="divide-y divide-line border-y border-line">
            {education.map((e) => (
              <li key={e.qualification} className="py-5">
                <p className="label mb-1.5 tabular-nums">{e.period}</p>
                <h3 className="font-medium">{e.qualification}</h3>
                <p className="text-sm text-muted">{e.institution}</p>
              </li>
            ))}
          </ul>
          <div>
            {awards.map((a) => (
              <div key={a.title} className="rounded-lg border border-line p-6">
                <p className="label mb-3">Award</p>
                <h3 className="font-medium">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{a.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Skills ───────────────────────────────────────── */}
      <Section id="skills" index="05" title="Skills">
        <dl className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <div key={s.group} className="bg-bg p-6">
              <dt className="label mb-3">{s.group}</dt>
              <dd>
                <ul className="space-y-1.5 text-[15px]">
                  {s.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
          <div className="bg-bg p-6">
            <dt className="label mb-3">Languages</dt>
            <dd>
              <ul className="space-y-1.5 text-[15px]">
                {site.languages.map((l) => (
                  <li key={l.name}>
                    {l.name} <span className="text-muted">— {l.level}</span>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </Section>

      {/* ── Contact ──────────────────────────────────────── */}
      <Section id="contact" index="06" title="Contact">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <p className="max-w-xl text-lg leading-relaxed">
              For engineering roles, projects or questions about my work, email is the fastest way to
              reach me.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-8 inline-flex items-center gap-2 break-all text-xl font-medium text-accent underline-offset-4 hover:underline sm:text-2xl"
            >
              {site.email}
            </a>
          </div>
          <ul className="divide-y divide-line border-y border-line text-sm">
            {[
              { href: `mailto:${site.email}`, label: "Email", Icon: Mail, value: site.email, external: false },
              { href: site.linkedin, label: "LinkedIn", Icon: LinkedIn, value: "muhammad-hassan", external: true },
              ...site.githubs.map((g) => ({ href: g.href, label: g.label, Icon: GitHub, value: g.handle, external: true })),
            ].map(({ href, label, Icon, value, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center justify-between gap-4 py-4 hover:text-accent"
                >
                  <span className="flex items-center gap-3">
                    <Icon className="text-muted group-hover:text-accent" />
                    <span className="font-medium">{label}</span>
                  </span>
                  <span className="flex min-w-0 items-center gap-1.5 text-muted">
                    <span className="truncate">{value}</span>
                    <ArrowUpRight className="shrink-0" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
