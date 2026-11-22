import Link from "next/link";
import type { Project } from "@/content/types";
import { categoryLabels } from "@/content/projects";
import { ArrowRight } from "./icons";
import { TechList } from "./tech-list";

export function FeaturedCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="group relative flex flex-col rounded-lg border border-line bg-surface p-6 transition-colors hover:border-line-strong sm:p-7">
      <div className="mb-6 flex items-center justify-between">
        <span className="label">{categoryLabels[project.category]}</span>
        <span className="label tabular-nums">P-{String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3 className="text-xl font-semibold tracking-tight">
        <Link href={`/projects/${project.slug}`} className="after:absolute after:inset-0 after:rounded-lg">
          {project.title}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">{project.summary}</p>
      <div className="mt-6 flex items-end justify-between gap-4">
        <TechList items={project.tech.slice(0, 4)} />
        <ArrowRight className="shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-accent" />
      </div>
    </article>
  );
}
