<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# WhitePlus Solution — project notes

White-label B2B trading platform marketing site. Next.js 16 (App Router, Turbopack), React 19,
Tailwind CSS v4, TypeScript, lucide-react icons.

## Commands

| Task       | Command          |
| ---------- | ---------------- |
| Dev server | `npm run dev`    |
| Production build (also runs TS) | `npm run build` |
| Lint       | `npm run lint`   |
| Typecheck  | `npx tsc --noEmit` |

Verification before shipping: `npx tsc --noEmit && npm run lint && npm run build`.

## Structure

- `src/content/site.ts` — all homepage copy (nav, hero, features, about, FAQ, footer, CTA labels).
- `src/content/posts.ts` — blog articles as structured `Block[]`; typed by `src/content/types.ts`.
- `src/components/sections/` — one file per homepage section, composed in `src/app/page.tsx`.
- `src/components/ui/` — `button`, `section-heading`, `mockups` (CSS-only terminal/phone mockups).
- `src/components/contact-provider.tsx` + `contact-dialog.tsx` — global quick lead-capture modal;
  any CTA calls `useContact().open()`.
- `src/components/sections/contact.tsx` — full support form at `#contact` (name, company, email,
  phone, topic, message).
- `src/components/video-showcase.tsx` — hero video teaser (looping, muted) that opens a
  fullscreen player. Assets in `public/media/` (`whiteplus-teaser.mp4` 360×640 loop,
  `whiteplus-demo.mp4` 720×1280 full, `whiteplus-demo-poster.jpg`), encoded with ffmpeg from a
  1080×1920 source. Keep the teaser small — it autoplays on page load.

Copy changes belong in `src/content/*`, not in components.

## Leads / form handling

Both forms post to the `submitLead` server action in `src/app/actions.ts`, which validates through
`src/lib/leads.ts` and calls `deliverLead()`. **Email delivery is not wired up yet** —
`deliverLead()` only logs to the server console. Add the provider there (Resend or SMTP via
nodemailer; both run on Vercel, see the doc comment) and both forms start emailing with no UI
changes. Credentials go in `.env.local` / Vercel env vars, never in the repo.

## Design system

Premium blue/white fintech. Tokens live in the `@theme` block of `src/app/globals.css`
(Tailwind v4 has no `tailwind.config`):

- `navy-*` for dark surfaces (hero, footer, dark sections), `brand-*` for accents/CTAs
- `canvas` page background, `surface` white, `line` borders, `ink` / `ink-muted` text
- Fonts: Sora (`--font-display`, headings) + Inter (`--font-sans`, body), via `next/font`

Conventions: every page opens with a dark hero, so the fixed navbar swaps to light text while
transparent. Minimum touch target 44px (`min-h-11`), `cursor-pointer` on all clickables, SVG icons
only (never emoji), and `prefers-reduced-motion` is honoured in `globals.css` and the stat counter.

## Lint gotchas (React Compiler rules in eslint-config-next 16)

`react-hooks/set-state-in-effect` is an error. Do not call `setState` synchronously in an effect
body — reset state by unmounting the component (see `ContactDialog`), handle it in an event handler,
or set it inside a callback such as `requestAnimationFrame` (see `sections/stats.tsx`).

## Content provenance

Copy is adapted from a reference site and rebranded to WhitePlus Solution. The scrape/extract
scripts and the generated content PDF live in `../_scrape` and `../SunTrader-Website-Content.pdf`.
`../_scrape/gen_blog_ts.py` regenerates `src/content/posts.ts` (needs `../_scrape/.venv`).
