# Personal Portfolio - Dmitry Grigorovich

![Astro](https://img.shields.io/badge/Astro-4.0-blueviolet?logo=astro)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2023-yellow?logo=javascript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38bdf8?logo=tailwindcss)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

A modern, high-performance portfolio built with **Astro**,
**JavaScript**, and tailored custom UI components, showcasing selected
professional software projects in C++, Qt, UI/UX, and system-level
development.

**Live website → [dgrigorovich.com](https://www.dgrigorovich.com)**


# 📑 Table of Contents

-   [Tech Stack](#-tech-stack)
-   [Installation](#-installation)
-   [Development](#-development)
-   [Production Build](#-production-build)
-   [Deploying to Vercel](#-deploying-to-vercel)
-   [Astro Starter Kit Notes](#astro-starter-kit-minimal)
-   [Project Structure](#-project-structure)
-   [Commands](#-commands)
-   [Learn More](#-want-to-learn-more)
-   [License](#-license)


## 🚀 Tech Stack

-   Astro 4\
-   JavaScript 
-   Tailwind / Custom CSS architecture\
-   Client-side filtering (skills, companies, search)\
-   Responsive, accessibility-friendly components\
-   Optimized images & lazy loading


## 📦 Installation

``` bash
git clone https://github.com/Naguales/dgfolio
cd dgfolio
npm install
```

## 🧪 Development

``` bash
npm run dev
```

Local server runs at:\
**http://localhost:4321**

## 🔧 Production Build

``` bash
npm run build
```

Generates optimized build in `/dist`.

Astro automatically: - Minifies HTML, CSS, JS\
- Tree-shakes unused code\
- Creates asset hashes\
- Prerenders pages for static delivery

## 🌐 Deploying to Vercel

### **Option A --- 1-Click Deployment (Recommended)**

Push project → Import repo into Vercel → Done.

**Vercel auto-detected settings:** - Framework: **Astro**\
- Build Command: **npm run build**\
- Output Directory: **dist**

### **Option B --- Manual Deployment**

``` bash
npm i -g vercel
vercel
```

# Astro Starter Kit: Minimal

*(Default Astro README content merged for reference)*

``` bash
npm create astro@latest -- --template minimal
```

## 📁 Project Structure

    /
    ├── public/
    ├── src/
    │   ├── components/
    │   ├── data/
    │   ├── layouts/
    │   └── pages/
    │       └── index.astro
    └── package.json

Astro looks for `.astro` or `.md` files in the `src/pages/` directory.
Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we
like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/`
directory.

## 💻 Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview the local production build |
| `npm run astro ...` | Run Astro CLI commands |
| `npm run astro -- --help` | Show Astro CLI help |

## 👀 Want to learn more?

-   Official Docs: https://docs.astro.build

## 📝 License

MIT License --- free to reuse with attribution.
