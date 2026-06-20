# Hay Mar Maw — Developer Portfolio

A modern, animated personal portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS 3.4 with a custom dark theme (indigo/purple + fuchsia accent)
- **Animations:** Framer Motion 12 — parallax, staggered reveals, floating elements, scroll-triggered animations
- **Icons:** React Icons (Heroicons, Font Awesome 6, Simple Icons)
- **Fonts:** Inter, Space Grotesk, JetBrains Mono (via `next/font/google`)

## Features

- **Floating Navigation** — scroll-aware active highlighting with animated pill indicator and mobile hamburger menu
- **Hero Section** — animated grid background, floating shapes, glow orbs, gradient text, social links
- **About Section** — stats grid, profile placeholder, floating tech-bubble icons, highlight cards
- **Skills Section** — three category cards (Frontend, Backend, DevOps & Tools) with animated skill bars
- **Projects Showcase** — 6 project cards with featured badges, animated backgrounds, hover overlays
- **Contact Section** — contact info, social links, and a contact form (client-side simulated)
- **Responsive Design** — fully responsive across all breakpoints
- **Smooth Scrolling** — anchor-based navigation with scroll-aware active states

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Tailwind base + custom utilities
│   ├── layout.js            # Root layout: metadata, fonts, body
│   └── page.js              # Home page: composes all sections
├── components/
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── FloatingNav.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Projects.jsx
│   └── Skills.jsx
├── public/                  # Static assets
├── tailwind.config.js       # Custom colors, fonts, animations
├── next.config.js
├── postcss.config.js
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm (or yarn / pnpm)

### Installation

```bash
git clone <repository-url>
cd portfolio
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Customization

- **Content:** Edit the constants in each component under `components/` to update stats, skills, projects, and contact info.
- **Colors:** Modify the `primary`, `accent`, and `dark` color palettes in `tailwind.config.js`.
- **Animations:** Custom keyframes (`float`, `pulse-glow`, `shimmer`, `gradient`, `slide-up`, `border-glow`) are defined in `tailwind.config.js`.
- **Global styles:** Reusable utility classes (`glass`, `gradient-text`, `card-glow`, `shimmer-bg`) are in `app/globals.css`.

## License

Private — not licensed for public use.
