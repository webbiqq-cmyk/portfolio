"use client";

import Link from "next/link";
import { useState } from "react";
import type { Project, ProjectCategory } from "@/content/types";
import { ArrowRight } from "./icons";
import { TechList } from "./tech-list";

type Filter = "all" | ProjectCategory;

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "electronics", label: "Electronics & Control" },
  { value: "software", label: "Software" },
];

export function ProjectIndex({ projects, labels }: { projects: Project[]; labels: Record<ProjectCategory, string> }) {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = projects.filter((p) => filter === "all" || p.category === filter);

  return (
    <div>
      <div role="group" aria-label="Filter projects by category" className="mb-6 flex flex-wrap gap-2">
        {filters.map((f) => {
          const count = f.value === "all" ? projects.length : projects.filter((p) => p.category === f.value).length;
          const active = filter === f.value;
          return (
            <button
              key={f.value}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(f.value)}
              className={`rounded-md border px-3 py-1.5 text-sm transition-colors ${
                active ? "border-fg bg-fg text-bg" : "border-line text-muted hover:border-line-strong hover:text-fg"
              }`}
            >
              {f.label} <span className="font-mono text-xs opacity-70">{count}</span>
            </button>
          );
        })}
      </div>
      <p className="sr-only" aria-live="polite">
        Showing {visible.length} projects
      </p>
      <ul className="divide-y divide-line border-y border-line">
        {projects.map((p) => {
          const shown = filter === "all" || p.category === filter;
          return (
            <li key={p.slug} hidden={!shown} className="grid gap-3 py-6 md:grid-cols-[1fr_minmax(0,1.3fr)_auto] md:gap-8">
              <div>
                <p className="label mb-1.5">{labels[p.category]}</p>
                <h3 className="font-medium tracking-tight">
                  {p.featured ? (
                    <Link href={`/projects/${p.slug}`} className="hover:text-accent">
                      {p.title}
                    </Link>
                  ) : (
                    p.title
                  )}
                </h3>
              </div>
              <div className="space-y-3">
                <p className="text-sm leading-relaxed text-muted">{p.summary}</p>
                <TechList items={p.tech} />
              </div>
              <div className="md:pt-6">
                {p.featured && (
                  <Link
                    href={`/projects/${p.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                  >
                    Case study <ArrowRight />
                    <span className="sr-only">: {p.title}</span>
                  </Link>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
