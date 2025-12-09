# Copilot Instructions for danhleth.github.io

## Project Overview
Personal portfolio website built with React 19, TypeScript, Vite, and Tailwind CSS. Features a single-page application with hash-based routing, dark mode, and markdown-based project documentation with KaTeX math rendering.

## Architecture

### Routing System
Hash-based routing without React Router:
- Navigation handled via `window.location.hash` and `hashchange` events in `App.tsx`
- Routes: `#about`, `#publications`, `#projects`, `#photography`, `#project/{id}`
- Project detail pages use pattern `#project/lays-imc`
- See `App.tsx` lines 23-38 for routing logic

### Page Components
Pages are in `src/pages/`:
- `AboutPage.tsx` - Landing/bio page
- `PublicationsPage.tsx` - Academic publications list
- `ProjectsPage.tsx` - Project grid with cards
- `ProjectDetailPage.tsx` - Full project view with markdown rendering
- `PhotographyPage.tsx` - Photography portfolio

### Data Model
Static data in `src/data/`:
- `projects.ts` - Project metadata with typed `Project` interface
- `publications.ts` - Publication metadata with typed `Publication` interface
- Use `getProjectById(id)` helper to fetch project data

## Key Patterns

### Project Content System
Projects support markdown-based documentation:
1. Add markdown file to `/public/projects/{project-id}/{project-id}.md`
2. Reference in project data: `markdownFile: 'project-id/project-id.md'`
3. Fallback to `fullDescription` field if markdown missing
4. See `public/projects/lays-imc/lays-imc.md` for example
5. Images go in `/public/images/projects/{project-id}/`

Markdown rendering (ProjectDetailPage.tsx):
- Uses `marked` library with `marked-katex-extension` for math (KaTeX syntax)
- Fetched at runtime from `/projects/{markdownFile}` path
- Custom CSS classes via `prose` utility classes for styling

### Image Handling
Use `ImageWithFallback` component for all images:
- Provides graceful degradation with placeholder SVG on error
- Located in `src/components/ImageWithFallback.tsx`
- Reference images as `/images/projects/{project-id}/filename.png` in markdown

### Styling & Theming

Design system:
- **Colors**: Accent gold `#B4975A`, burgundy `#800020` (defined in `tailwind.config.js`)
- **Dark mode**: Class-based (`dark:` prefix), toggled via localStorage
- **Typography**: Inter font family
- **Animations**: Framer Motion for all transitions/animations
- **Background**: Animated gradient orbs via `FloatingShapes.tsx`

Color usage:
- Primary text: `text-[#333333] dark:text-white`
- Secondary text: `text-[#333333]/80 dark:text-gray-300`
- Hover states: `hover:text-accent`
- Gradients: Use `from-accent/20 to-burgundy/20` pattern

### Animation Guidelines
Use Framer Motion for all animations:
- Page transitions: `<AnimatePresence mode="wait">` wrapper
- Card hovers: `whileHover={{ scale: 1.05 }}`
- Page entries: `initial={{ opacity: 0, y: 20 }}` → `animate={{ opacity: 1, y: 0 }}`
- See `FloatingShapes.tsx` for ambient animation patterns

### Utility Functions
`src/lib/utils.ts` exports `cn()` for className merging (uses `clsx` + `tailwind-merge`)

## Development Workflow

### Commands
```bash
npm run dev          # Start dev server (Vite)
npm run build        # Production build
npm run preview      # Preview production build
npm run deploy       # Build & deploy to gh-pages
npm run lint         # ESLint check
```

### Adding New Projects
1. Add entry to `projects` array in `src/data/projects.ts` with all required fields
2. Create `/public/projects/{id}/{id}.md` for full documentation
3. Add images to `/public/images/projects/{id}/`
4. Use relative paths in markdown: `![Alt](/images/projects/{id}/image.png)`
5. Set `markdownFile` property to enable markdown rendering

### Adding New Publications
Add entry to `publications` array in `src/data/publications.ts` following the `Publication` interface

## TypeScript Conventions
- Strict mode enabled
- Export interfaces alongside data (e.g., `Project`, `Publication`)
- Props interfaces named `{Component}Props`
- No prop-types (TypeScript only)

## Common Pitfalls
1. **Image paths**: Must start with `/` for public folder (e.g., `/images/...` not `./images/...`)
2. **Markdown files**: Fetched from `/projects/` (maps to `/public/projects/`)
3. **Dark mode**: Always pair light/dark classes (e.g., `text-[#333333] dark:text-white`)
4. **Routing**: Use `window.location.hash` to change pages, not `window.location.href`
5. **Project IDs**: Must match between data file, markdown filename, and URL hash

## Tech Stack
- **Framework**: React 19 + TypeScript
- **Build**: Vite 7
- **Styling**: Tailwind CSS (class-based dark mode)
- **Animation**: Framer Motion
- **Markdown**: marked + marked-katex-extension
- **Math**: KaTeX
- **Icons**: lucide-react
- **Deployment**: GitHub Pages via gh-pages package
