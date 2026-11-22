export type ProjectCategory = "electronics" | "software";

export interface ProjectImage {
  /** Path under /public, e.g. "/images/projects/dental-lab-1.webp". Generate with `npm run images`. */
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  /** Featured projects get a detail page at /projects/[slug]. */
  featured: boolean;
  /** One or two sentences, shown on cards and as the page meta description. */
  summary: string;
  tech: string[];
  /** Short key/value facts shown in the spec table on the detail page. */
  specs?: { label: string; value: string }[];
  problem?: string;
  whatIDid?: string[];
  results?: string[];
  images: ProjectImage[];
  links: ProjectLink[];
  /** Missing information. Never rendered on the site; listed in TODO.md. */
  todo: string[];
}

export interface Role {
  title: string;
  org: string;
  location?: string;
  period: string;
  /** Minor roles render compactly at the bottom of the timeline. */
  minor?: boolean;
  /** Optional public link, e.g. the company website you built. */
  link?: { label: string; href: string };
  points: string[];
}

export interface EducationItem {
  qualification: string;
  institution: string;
  period: string;
  note?: string;
}
