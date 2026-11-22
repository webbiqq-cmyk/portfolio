import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

const nav = [
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills", hideOnMobile: true },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur supports-[backdrop-filter]:bg-bg/70">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-sm focus:text-accent-fg"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="font-mono text-sm font-medium tracking-tight">
          M.HASSAN<span className="text-accent">_</span>
        </Link>
        <div className="flex items-center gap-1 sm:gap-3">
          <nav aria-label="Primary">
            <ul className="flex items-center gap-0.5 sm:gap-2">
              {nav.map((item) => (
                <li key={item.href} className={item.hideOnMobile ? "hidden sm:block" : undefined}>
                  <Link
                    href={item.href}
                    className="rounded px-2 py-2 text-[13px] text-muted transition-colors hover:text-fg sm:text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
