# hasanportfolio.com

Personal site of Muhammad Hassan. Next.js (App Router) + TypeScript + Tailwind CSS on Vercel.
Every route is statically generated (SSG) at build time, so each page ships real HTML.

## Editing content

All copy lives in typed files under `content/` — no component changes needed:

| File | What |
|---|---|
| `content/site.ts` | Name, tagline, intro, contact links, photo, languages |
| `content/projects.ts` | Projects. `featured: true` creates `/projects/<slug>`. `todo` lists missing info (never rendered). |
| `content/experience.ts` | Roles. `minor: true` renders compactly at the bottom of the timeline. |
| `content/education.ts` | Education and awards |
| `content/skills.ts` | Skill groups |

### Adding project images

Put a high-resolution PNG/JPEG in `public/images/projects/` (e.g. `dental-lab-1.png`, ~2000px wide is plenty) and add
`{ src: "/images/projects/dental-lab-1.png", alt, width, height }` to that project's `images` array, using the file's
real pixel dimensions. `next/image` serves AVIF/WebP at the right size automatically — no manual conversion needed.
Projects with no images simply show no image section.

### CV

Drop the PDF at `public/cv.pdf` and push. The "Download CV" button only appears when that file exists.

## Commands

```bash
npm run dev        # local dev server
npm run build      # production build (all routes pre-rendered)
npm run start      # serve the production build locally
npm run lint
npm run typecheck
```

## Deploying

Vercel, git-connected to `main`. `vercel.json` pins the framework preset to Next.js (the project was previously a
Vite app, so this overrides any old "Vite / dist" setting). Domain and DNS are managed outside this repo.
