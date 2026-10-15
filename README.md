# Frame & Form — Premium Portfolio Template Collection

Three distinct, production-ready portfolio templates in one Next.js project:

- **DevFolio** (`/templates/devfolio`) — dark developer portfolio
- **Forma** (`/templates/forma`) — editorial creative portfolio
- **Elevate** (`/templates/elevate`) — structured professional portfolio

The homepage at `/` presents and compares the collection. All people, companies, projects, results, and testimonials are fictional sample content intended to be replaced.

## Prerequisites

- Node.js 20.9 or newer
- npm 10 or newer

## Install and run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. For a production build:

```bash
npm run typecheck
npm run lint
npm run build
npm start
```

## Customize a template

Most buyer edits happen in one file:

| Template | Content file           | Component                                  | Artwork                   |
| -------- | ---------------------- | ------------------------------------------ | ------------------------- |
| DevFolio | `src/data/devfolio.ts` | `src/components/devfolio/DevfolioPage.tsx` | `public/images/devfolio/` |
| Forma    | `src/data/forma.ts`    | `src/components/forma/FormaPage.tsx`       | `public/images/forma/`    |
| Elevate  | `src/data/elevate.ts`  | `src/components/elevate/ElevatePage.tsx`   | `public/images/elevate/`  |

1. Replace names, introductions, links, projects, roles, and contact details in the relevant data file.
2. Replace the SVG artwork in the matching `public/images/` folder. Keep filenames unchanged, or update the image paths in the data file.
3. Update colors in `src/app/globals.css`. Each template begins with a clearly labeled CSS section and local color variables.
4. Update page titles and descriptions in each route's `page.tsx`.
5. Replace `public/mark.svg` to change the collection favicon.

External social and project links use safe example destinations. Email links use `example.com` addresses and must be replaced before launch.

## Deploy to Vercel

1. Push the project to a Git provider.
2. Import the repository at [vercel.com/new](https://vercel.com/new).
3. Keep the detected **Next.js** framework preset and default build settings.
4. Deploy. No environment variables are required.

You can also install the Vercel CLI and run `vercel` from this directory.

## Asset and attribution notes

- All abstract SVG artwork in `public/images/` and the brand mark were created specifically for this template collection and have no third-party attribution requirement.
- Icons are provided by [Lucide](https://lucide.dev/) under the ISC License.
- The project uses system font stacks and does not bundle third-party font files.
- No stock photography, paid assets, analytics, trackers, or external APIs are included.

Review `LICENSE.txt` before commercial distribution and replace the placeholder terms with your final license.
