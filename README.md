<img align="left" width="80" height="80" src="static/planet-logo.svg" alt="Portfolio planet icon">

# Rodrigo Ramirez

Software Engineer Portfolio

[View the portfolio](https://rodrigoramirez.dev) ·
[LinkedIn](https://www.linkedin.com/in/rodrigoramirezb/) ·
[GitHub](https://github.com/TheRoro)

## About the project

This site combines a simple editorial portfolio with a playful planetary
interface. It includes my professional experience, engineering capabilities,
selected projects, and detailed case studies that explain the constraints and
decisions behind the work.

The featured projects are:

- [Drawly](https://github.com/TheRoro/Drawly), a real time multiplayer drawing
  game built with React, TypeScript, Socket.IO, and Express.
- [PokeApp](https://github.com/TheRoro/PokeApp), a client side Pokémon research
  and team analysis toolkit built with React, TypeScript, Vite, and PokeAPI.
- [VSQuote](https://github.com/TheRoro/VSQuote), an offline, privacy conscious
  Visual Studio Code extension with configurable quotes and no runtime
  dependencies.

Each case study is based on implementation evidence from its repository rather
than invented product or usage metrics.

## Highlights

- Interactive React Three Fiber planets on capable displays, with lightweight
  CSS artwork on small screens.
- Responsive layouts designed for desktop, touch, and narrow mobile devices.
- Keyboard navigation, visible focus states, semantic landmarks, accessible
  project links, and reduced motion support.
- Structured content modules for profile, career, projects, navigation, and
  capabilities.
- Metadata for every route, Open Graph data, JSON LD, sitemap, and robots
  directives.
- Local Sora and Raleway fonts with no runtime font provider requests.
- Generated HTML entry points for every public project route.
- Automated component, content, metadata, media query, and deployment tests.
- Netlify redirects, security headers, Content Security Policy, and cache rules
  stored with the application.

## Technology

- React 19 and React Router
- Vite
- React Three Fiber, Drei, Three.js, and React Spring
- Framer Motion
- Sass
- Vitest, Testing Library, and jsdom
- Netlify

## Local development

Use Node.js 20.19 or newer. The repository includes an `.nvmrc` for Node 20.

```sh
npm ci
npm run dev
```

Vite serves the site at `http://localhost:5173`. To open it from another device
on the same network, use:

```sh
npm run local
```

## Commands

`npm run dev` starts the local Vite development server.

`npm run local` exposes the development server on the network.

`npm run test` runs the Vitest suite once.

`npm run test:watch` runs tests in watch mode.

`npm run format:check` checks formatting without changing files.

`npm run build` builds the site and generates route HTML.

`npm run serve` previews the production build locally.

`npm run check` runs formatting, tests, and the production build.

`npm run clean` removes the generated `dist` directory.

The production build is written to `dist`.

## Anonymous analytics

Production deployments can send anonymous page views and meaningful click
events to PostHog. Analytics are disabled unless `VITE_POSTHOG_KEY` is present
at build time and are never enabled during local development or tests.

The integration intentionally disables autocapture, session recordings,
personal profiles, heatmaps, surveys, experiments, durable browser
persistence, and external PostHog modules. It records only explicit portfolio
events, approximate geographic information added by PostHog, and standard
device and referral context. Captured URLs have query strings and fragments
removed before transmission, campaign and advertising identifiers are
discarded, and browser Do Not Track preferences are respected.

To enable analytics:

1. Create a PostHog Cloud project in the US region.
2. Copy its public project key.
3. Set `VITE_POSTHOG_KEY` in the Netlify site's environment variables.
4. Trigger a new production deployment because Vite embeds the public key at
   build time.

For local production-build testing, copy `.env.example` to `.env.production.local`
and replace the placeholder. Never store a PostHog personal API key in this
repository; only the public `phc_` project key belongs in the Vite variable.

Tracked events include route views, project-detail opens, product and
repository clicks, résumé opens, contact/profile actions, project pagination,
and primary navigation. Event properties use stable project and interface
identifiers rather than visible text or personal visitor data.

## Project structure

```text
src/
  components/   Reusable interface and project detail components
  content/      Profile, career, project, navigation, and capability data
  hooks/        Responsive and motion preference hooks
  navigation/   Global and project navigation
  pages/        Route level page composition
  styles/       Shared Sass variables and global styles
static/
  fonts/        Local fonts and license files
  projects/     Project artwork
scripts/
  Route metadata generation
```

The application keeps editorial data separate from rendering. Most portfolio
updates begin in `src/content`:

- `profile.js` contains identity, biography, portrait, résumé, and social links.
- `career.js` contains professional experience and education.
- `projects.js` contains project metadata, palettes, links, and optional
  engineering case studies.
- `capabilities.js` and `navigation.js` define their respective interface data.

Older project pages do not require case study content. The shared detail page
renders that section only when structured case study data is present.

## Quality and deployment

Before opening a pull request, run:

```sh
npm run check
npm audit
```

GitHub Actions repeats installation, formatting, tests, build, and the serious
dependency audit for pushes to `main` and pull requests.

Netlify builds with Node 20 and publishes `dist`. The checked in
`netlify.toml` also:

- redirects the Netlify subdomain to `rodrigoramirez.dev`;
- preserves direct navigation to generated and client side routes;
- applies a restrictive Content Security Policy and other browser protections;
- caches fingerprinted build assets immutably while revalidating HTML.

## License

The source code is available under the [0BSD license](LICENSE).

Made with 🦔 by [Rodrigo Ramirez](https://rodrigoramirez.dev).
