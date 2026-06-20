/**
 * @typedef {object} ProjectColor
 * @property {string} background
 * @property {string} text
 *
 * @typedef {object} ProjectDecision
 * @property {string} title
 * @property {string} description
 *
 * @typedef {object} ProjectCaseStudy
 * @property {string} title
 * @property {string} problem
 * @property {string[]} constraints
 * @property {ProjectDecision[]} decisions
 * @property {string[]} capabilities
 * @property {string[]} quality
 * @property {string} outcome
 * @property {string} lesson
 *
 * @typedef {object} Project
 * @property {string} title
 * @property {string} name
 * @property {string} keywords
 * @property {string} summary
 * @property {string} description
 * @property {string} tags
 * @property {ProjectColor[]} palette
 * @property {string} imgUrl
 * @property {number} imgHeight
 * @property {string} repoUrl
 * @property {string} webUrl
 * @property {string} webLabel
 * @property {ProjectCaseStudy=} caseStudy
 */

/** @type {Project} */
const drawly = {
  title: "Drawly",
  name: "drawly",
  keywords: "Real-time multiplayer game",
  summary:
    "A browser drawing game built around private rooms, live reactions, voting, and playful social competition.",
  description:
    "Drawly is a real-time multiplayer drawing game with room-based sessions, reconnect-safe player identity, synchronized drawing rounds, voting, chat, reactions, and a prompt-author Spy Mode. Its React client and Socket.IO server are backed by shared TypeScript contracts, input validation, rate limits, memory controls, integration tests, and secure deployment defaults.",
  tags: "React · TypeScript · Socket.IO · Express",
  palette: [
    { background: "#F9EDD1", text: "#383B3D" },
    { background: "#383B3D", text: "#FFFFFF" },
    { background: "#34D399", text: "#052E16" },
    { background: "#60A5FA", text: "#172554" },
    { background: "#FB923C", text: "#431407" },
  ],
  imgUrl: "drawly.png",
  imgHeight: 750,
  repoUrl: "https://github.com/TheRoro/Drawly",
  webUrl: "https://drawly.vercel.app/",
  webLabel: "Play Drawly",
  caseStudy: {
    title: "Making real-time play feel dependable",
    problem:
      "A social drawing game only works when every player sees the same round, timer, submissions, and result. Drawly needed to keep that shared experience coherent across independent browsers without introducing accounts or permanent user data.",
    constraints: [
      "The server had to own game phases, timers, voting, and scoring while clients stayed responsive.",
      "Players needed a short recovery path after transient disconnects, but the product intentionally had no account system or database.",
      "Text, reactions, reconnect credentials, and canvas images all arrived as untrusted network input and required explicit limits.",
    ],
    decisions: [
      {
        title: "Keep progression authoritative",
        description:
          "Room membership, phase transitions, timers, voting, and scoring live on the server. Clients render typed events instead of independently deciding when the game advances.",
      },
      {
        title: "Share contracts, validate at runtime",
        description:
          "The React client and Socket.IO server consume the same TypeScript event contracts, while server-side validation still treats every incoming payload as untrusted.",
      },
      {
        title: "Reconnect without accounts",
        description:
          "Short-lived reconnect tokens are randomly generated, stored as hashes, compared safely, and rotated after use so an interrupted player can recover an active session.",
      },
    ],
    capabilities: [
      "Private rooms for up to ten players with host transfer and duplicate-name protection.",
      "Synchronized prompts, drawing rounds, timers, anonymous voting, scoring, and final results.",
      "Pointer and touch drawing with brush controls, erasing, undo, redo, and optional live previews.",
      "Chat, reactions, downloadable drawings, recap generation, and native sharing when supported.",
    ],
    quality: [
      "Rate limits, bounded text, allowlisted reactions, PNG validation, and drawing-memory controls.",
      "Reconnect tests cover token rotation, non-serialization, and disconnect-aware submissions.",
      "A deterministic integration test exercises a complete multiplayer round.",
      "Health checks and explicit Vercel and Render configuration support deployment.",
    ],
    outcome:
      "Drawly evolved from a drawing prototype into a deployable multiplayer game with coordinated rounds, reconnect support, voting, social reactions, and explicit operational safeguards.",
    lesson:
      "Keeping state in memory made the no-account experience simple and fast to iterate, but server restarts remain a clear durability boundary and future scaling work would require shared persistence.",
  },
}

/** @type {Project} */
const pokeapp = {
  title: "PokeApp",
  name: "pokeapp",
  keywords: "Pokédex and team analysis",
  summary:
    "An accessible Pokédex, move explorer, type calculator, and six-slot team builder powered by PokeAPI.",
  description:
    "PokeApp combines Pokémon search, stats, evolutions, moves, type matchups, and a six-slot team builder in a responsive Pokédex-inspired interface. The modernized Vite application includes request cancellation, classified API errors, keyboard-accessible autocomplete, deterministic team analysis, regression tests, and a static deployment pipeline.",
  tags: "React · TypeScript · Vite · PokeAPI",
  palette: [
    { background: "#2A2D32", text: "#FFFFFF" },
    { background: "#DC0A2D", text: "#FFFFFF" },
    { background: "#3B4CCA", text: "#FFFFFF" },
    { background: "#FFDE00", text: "#1F2937" },
    { background: "#F5F5F0", text: "#2A2D32" },
  ],
  imgUrl: "pokeapp.png",
  imgHeight: 675,
  repoUrl: "https://github.com/TheRoro/PokeApp",
  webUrl: "https://pokeapp.onrender.com/search",
  webLabel: "Open PokeApp",
  caseStudy: {
    title: "Making third-party data feel reliable",
    problem:
      "Pokémon research is usually split across search, move references, type charts, and separate team tools. PokeApp brings those workflows together while depending entirely on live browser requests to PokeAPI.",
    constraints: [
      "There is no application backend, database, account system, or API key; state and caches live in the browser.",
      "Searches can overlap, complete out of order, fail, or be interrupted while the user changes a six-slot team.",
      "Team guidance must remain deterministic and clearly scoped to defensive typing rather than imply full competitive simulation.",
    ],
    decisions: [
      {
        title: "Keep analysis local and deterministic",
        description:
          "Type effectiveness and team coverage are calculated in the browser from complete type data. This keeps deployment simple and results reproducible while deliberately excluding abilities, held items, moves, and format-specific rules.",
      },
      {
        title: "Treat requests as cancellable work",
        description:
          "Abort signals, generation checks, and slot checks prevent stale responses from changing a team after a newer search, removal, or reset.",
      },
      {
        title: "Bound expensive API work",
        description:
          "Promise caches deduplicate in-flight requests, failed entries remain retryable, and move details load in controlled batches rather than flooding the public API.",
      },
    ],
    capabilities: [
      "Search by Pokémon name or National Pokédex number with special-name normalization.",
      "Stats, artwork, typing, evolution chains, moves, and matchup exploration.",
      "A six-slot unique team builder with autocomplete and defensive coverage summaries.",
      "Distinct, retryable handling for not-found, network, rate-limit, server, and unexpected failures.",
    ],
    quality: [
      "Tests cover request races, overlapping removals, resets, normalization, and team calculations.",
      "Autocomplete exposes combobox and listbox semantics with keyboard navigation.",
      "Loading, error, and team-analysis updates use status, alert, and live-region semantics.",
      "CI tests and builds the application on Ubuntu and Windows and reviews pull-request dependencies.",
    ],
    outcome:
      "PokeApp delivers a client-only toolkit for Pokémon discovery, move lookup, type analysis, and team weakness review with explicit failure states and tested asynchronous behavior.",
    lesson:
      "A client-only architecture keeps deployment small, but reliability still depends on a live third-party API. Cancellation, caching, and honest error states became product features rather than implementation details.",
  },
}

/** @type {Project} */
const vsquote = {
  title: "VSQuote",
  name: "vsquote",
  keywords: "Developer productivity extension",
  summary:
    "An offline VS Code extension that brings configurable motivational, funny, and chaotic quotes into coding sessions.",
  description:
    "VSQuote is a privacy-first VS Code extension with eight quote modes, configurable delivery intervals, favorites, history, copy actions, and accessible status-bar previews. More than one thousand bundled quotes work entirely offline, with no telemetry, network access, workspace reading, or runtime dependencies.",
  tags: "VS Code API · JavaScript · Offline",
  palette: [
    { background: "#181A1F", text: "#FFFFFF" },
    { background: "#252A34", text: "#FFFFFF" },
    { background: "#007ACC", text: "#FFFFFF" },
    { background: "#C586C0", text: "#271327" },
    { background: "#DCDCAA", text: "#292900" },
  ],
  imgUrl: "vsquote.png",
  imgHeight: 520,
  repoUrl: "https://github.com/TheRoro/VSQuote",
  webUrl:
    "https://marketplace.visualstudio.com/items?itemName=RodrigoRamirez.vsquote",
  webLabel: "View on Marketplace",
  caseStudy: {
    title: "Adding personality without adding noise",
    problem:
      "VSQuote needed to add motivation and humor inside the editor without becoming another distracting popup, requiring a web service, or inspecting a developer's workspace.",
    constraints: [
      "Every quote had to remain available offline with no telemetry, accounts, remote loading, or workspace-file access.",
      "The status bar has limited space, but users and assistive technology still need access to the complete quote and attribution.",
      "Preferences should persist intentionally while ordinary viewing history should disappear with the session.",
    ],
    decisions: [
      {
        title: "Bundle and validate the corpus",
        description:
          "Local JSON removes runtime network and third-party data exposure. A validation script checks structure, collection counts, length limits, unsafe characters, normalized duplicates, and provenance coverage.",
      },
      {
        title: "Project a compact status",
        description:
          "The status bar shows a configurable excerpt while the tooltip and accessible label retain the complete quote and attribution, balancing low visual noise with discoverability.",
      },
      {
        title: "Separate transient and durable state",
        description:
          "Recent history and repeat suppression stay in session memory, while favorites and onboarding state use VS Code global storage because users explicitly expect those choices to persist.",
      },
    ],
    capabilities: [
      "Eight quote modes with configurable intervals and bounded status-bar length.",
      "Commands for new quotes, copying, favorites, history, and mode selection.",
      "Searchable Quick Picks, first-run setup, repeat suppression, and enable or disable behavior.",
      "A packaged VSIX and tag-driven Visual Studio Marketplace release workflow.",
    ],
    quality: [
      "Extension-host tests cover activation, commands, accessible rendering, settings, and disposal.",
      "Tests also cover repeat suppression, clipboard behavior, favorites, onboarding, and fallback configuration.",
      "CI runs tests, package inspection, and VSIX creation before release.",
      "The documented privacy model excludes telemetry, network access, usage reporting, and workspace reads.",
    ],
    outcome:
      "VSQuote is a self-contained offline extension with configurable delivery, explicit persistence boundaries, accessible status output, automated validation, and a repeatable Marketplace release path.",
    lesson:
      "Removing runtime services reduces privacy and reliability risks, but bundled third-party content still creates an ongoing responsibility to verify attribution and redistribution rights.",
  },
}

/** @type {Project} */
const upspell = {
  title: "UpSpell",
  name: "upspell",
  keywords: "Daily language practice",
  summary:
    "A daily spelling challenge for learning accented characters and distinctive letters across 12 languages.",
  description:
    "UpSpell offers 4,380 validated prompts, deterministic daily challenges, missed-word practice, pronunciation, spelling guidance, streaks, statistics, and a character reference across 12 languages. The installable Nuxt PWA works with locally cached assets and includes accessibility, content-integrity, gameplay, and offline-delivery checks.",
  tags: "Nuxt · Vue · TypeScript · PWA",
  palette: [
    { background: "#3B82F6", text: "#0F172A" },
    { background: "#F9FAFB", text: "#111827" },
    { background: "#111827", text: "#FFFFFF" },
    { background: "#9333EA", text: "#FFFFFF" },
    { background: "#16A34A", text: "#052E16" },
  ],
  imgUrl: "upspell.png",
  imgHeight: 560,
  repoUrl: "https://github.com/TheRoro/UpSpell",
  webUrl: "https://upspell.vercel.app/",
  webLabel: "Practice with UpSpell",
}

/** @type {Project} */
const repoColors = {
  title: "Repo Colors",
  name: "repo-colors",
  keywords: "Accessible Chrome extension",
  summary:
    "Language-inspired, accessible palettes for pinned repositories on GitHub profiles.",
  description:
    "Repo Colors is a dependency-free Chrome extension that follows GitHub's dynamic navigation and applies accessible language palettes without disabling native controls. Users can disable effects, retain GitHub's native contrast, and override individual palettes. The release is protected by DOM fixtures, real Chromium tests, permission checks, and deterministic packaging.",
  tags: "Chrome MV3 · JavaScript · Playwright",
  palette: [
    { background: "#0D1117", text: "#FFFFFF" },
    { background: "#2A3868", text: "#FFFFFF" },
    { background: "#E8D559", text: "#1F2328" },
    { background: "#42B883", text: "#052E16" },
    { background: "#DE63A2", text: "#2D0A1D" },
  ],
  imgUrl: "repo-colors.png",
  imgHeight: 750,
  repoUrl: "https://github.com/TheRoro/Repo-Colors",
  webUrl:
    "https://chrome.google.com/webstore/detail/repo-colors/ahhjhoodedfhbolbkfifengmbnhemjoj",
  webLabel: "View on Chrome Web Store",
}

/** @type {Project} */
const portfolio = {
  title: "Front End Portfolio",
  name: "portfolio",
  keywords: "Interactive portfolio",
  summary:
    "A space-inspired portfolio combining responsive React content with interactive WebGL scenes.",
  description:
    "This portfolio uses React, Vite, React Three Fiber, React Spring, and Framer Motion to create a distinctive space-inspired presentation for selected engineering work.",
  tags: "Vite · React · Three.js",
  palette: [
    { background: "#121921", text: "#FFFFFF" },
    { background: "#12CBAE", text: "#062E28" },
    { background: "#8AD9CB", text: "#123832" },
    { background: "#9F76E6", text: "#24143D" },
    { background: "#FF8798", text: "#48151D" },
  ],
  imgUrl: "portfolio.png",
  imgHeight: 686,
  repoUrl: "https://github.com/TheRoro/Portfolio",
  webUrl: "https://rodrigoramirez.dev/",
  webLabel: "Open Portfolio",
}

/** @type {Project} */
const bodega = {
  title: "Bodega",
  name: "bodega",
  keywords: "Archived e-commerce concept",
  summary:
    "An early Vue storefront concept inspired by neighborhood Peruvian bodegas.",
  description:
    "Bodega is an archived e-commerce learning project built with Vue, Vuex, Bootstrap, and SCSS. It models product browsing and a persistent cart while reflecting an earlier stage of my front-end work.",
  tags: "Vue · Vuex · Sass · Archived",
  palette: [
    { background: "#FAFAFA", text: "#353535" },
    { background: "#FF6699", text: "#3B0A1E" },
    { background: "#1A1A1A", text: "#FFFFFF" },
    { background: "#777777", text: "#000000" },
    { background: "#FFA5C3", text: "#000000" },
  ],
  imgUrl: "bodega.png",
  imgHeight: 675,
  repoUrl: "https://github.com/TheRoro/Bodega",
  webUrl: "https://bodega.onrender.com/shop",
  webLabel: "Open Archived Demo",
}

/** @type {Project[]} */
const selectedProjects = [drawly, pokeapp, vsquote]
/** @type {Project[]} */
const allProjects = [
  drawly,
  pokeapp,
  vsquote,
  upspell,
  repoColors,
  portfolio,
  bodega,
]

export {
  allProjects,
  bodega,
  drawly,
  pokeapp,
  portfolio,
  repoColors,
  selectedProjects,
  upspell,
  vsquote,
}
