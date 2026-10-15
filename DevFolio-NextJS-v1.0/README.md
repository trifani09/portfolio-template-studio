# DevFolio — Next.js Developer Portfolio Template

DevFolio is a responsive dark portfolio template for software engineers, full-stack developers, and independent product developers.

## Requirements

- Node.js 20.9 or newer
- npm 10 or newer

## Installation

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Customize the portfolio

Most personal content is stored in one file:

```text
src/data/devfolio.ts
```

Edit it to change the name, title, introduction, email address, social links, technology stack, projects, experience, and achievements.

Replace project artwork in:

```text
public/images/devfolio/
```

Keep the filenames or update the image paths in `src/data/devfolio.ts`. Colors, typography, spacing, responsive rules, and animation styling are in `src/app/globals.css`.

## Quality checks

```bash
npm run format:check
npm run lint
npm run typecheck
npm run build
```

## Deployment

Import the project into Vercel and keep the detected Next.js defaults. No environment variables are required.

## Assets and licenses

- The included abstract SVG project artwork is local and replaceable.
- Icons are supplied by Lucide React under the ISC License.
- No stock photography, external fonts, API keys, analytics, or paid assets are included.
- Replace the placeholder terms in `LICENSE.txt` before commercial distribution.
