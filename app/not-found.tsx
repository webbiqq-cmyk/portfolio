import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-start px-4 py-32 sm:px-6">
      <p className="label mb-4">Error 404</p>
      <h1 className="text-4xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-4 text-muted">That route doesn&apos;t exist on this site.</p>
      <Link href="/" className="mt-8 rounded-md bg-fg px-5 py-2.5 text-sm font-medium text-bg hover:opacity-85">
        Back to home
      </Link>
    </div>
  );
}
