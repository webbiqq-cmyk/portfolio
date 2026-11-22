import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear(); // evaluated at build time
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © {year} {site.name} · {site.location}
        </p>
        <ul className="flex gap-5">
          <li><a className="hover:text-fg" href={`mailto:${site.email}`}>Email</a></li>
          <li><a className="hover:text-fg" href={site.linkedin} rel="noopener noreferrer" target="_blank">LinkedIn</a></li>
          {site.githubs.map((g) => (
            <li key={g.href}><a className="hover:text-fg" href={g.href} rel="noopener noreferrer" target="_blank">{g.label}</a></li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
