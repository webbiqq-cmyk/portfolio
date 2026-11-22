import { renderOg } from "@/lib/og";
import { categoryLabels, featuredProjects, getProject } from "@/content/projects";
import { site } from "@/content/site";

// Emits real .png files (/og/home.png, /og/<slug>.png) so any static host serves them as image/png.
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ file: "home.png" }, ...featuredProjects.map((p) => ({ file: `${p.slug}.png` }))];
}

export async function GET(_req: Request, { params }: { params: Promise<{ file: string }> }) {
  const { file } = await params;
  const p = getProject(file.replace(/\.png$/, ""));
  if (!p) {
    return renderOg({ eyebrow: `${site.role} · ${site.location}`, title: site.name, subtitle: site.tagline });
  }
  return renderOg({ eyebrow: `Case study · ${categoryLabels[p.category]}`, title: p.title, subtitle: p.summary });
}
