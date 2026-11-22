export function TechList({ items, label = "Technologies" }: { items: string[]; label?: string }) {
  return (
    <ul aria-label={label} className="flex flex-wrap gap-1.5">
      {items.map((t) => (
        <li key={t} className="rounded border border-line px-1.5 py-0.5 font-mono text-[11px] leading-4 text-muted">
          {t}
        </li>
      ))}
    </ul>
  );
}
