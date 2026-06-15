/**
 * @typedef {object} CapabilityIcon
 * @property {"react"|"typescript"|"csharp"|"dotnet"|"linux"|"telemetry"|"sql"|"reporting"} id
 * @property {string=} className
 *
 * @typedef {object} Capability
 * @property {string} id
 * @property {string} label
 * @property {string} title
 * @property {string} tools
 * @property {CapabilityIcon[]} icons
 */

/** @type {Capability[]} */
const capabilities = [
  {
    id: "product",
    label: "Product",
    title: "Product interfaces",
    tools: "React · TypeScript",
    icons: [{ id: "react" }, { id: "typescript" }],
  },
  {
    id: "services",
    label: "Services",
    title: "Backend systems",
    tools: "C# · .NET",
    icons: [{ id: "csharp" }, { id: "dotnet" }],
  },
  {
    id: "infrastructure",
    label: "Infrastructure",
    title: "Cloud diagnostics",
    tools: "Linux · Telemetry",
    icons: [{ id: "linux", className: "monochrome-logo" }, { id: "telemetry" }],
  },
  {
    id: "data",
    label: "Data",
    title: "Insights & automation",
    tools: "SQL · Reporting",
    icons: [{ id: "sql" }, { id: "reporting" }],
  },
]

export { capabilities }
