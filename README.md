# hasanportfolio.com

Personal site of Muhammad Hassan. Next.js (App Router) + TypeScript + Tailwind CSS, statically exported —
every route is pre-rendered HTML in `dist/`.

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

```bash
npm run images -- path/to/screenshot.png public/images/projects/<slug>-1.webp 1600
```

Then add `{ src, alt, width, height }` to that project's `images` array (use the size the script prints).

### CV

Drop the PDF at `public/cv.pdf` and rebuild. The hero button switches from "Request CV" (mailto) to
"Download CV" automatically.

## Commands

```bash
npm run dev        # local dev server
npm run build      # static export to dist/
npm run start      # serve dist/ locally
npm run lint
npm run typecheck
```

## Deploying

Build command `npm run build`, output directory `dist`. Works on Vercel, Netlify, Cloudflare Pages or any
static host. Hosts must map `/projects/x` to `projects/x.html` (all of the above do by default).
