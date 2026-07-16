/**
 * @typedef {object} CareerRole
 * @property {string} title
 * @property {string=} logo
 * @property {string=} start
 * @property {string=} end
 * @property {string} summary
 * @property {string[]} highlights
 *
 * @typedef {object} CareerEntry
 * @property {string} organization
 * @property {string} logo
 * @property {string} location
 * @property {string} start
 * @property {string} end
 * @property {string=} label
 * @property {CareerRole[]} roles
 *
 * @typedef {object} EducationEntry
 * @property {string} institution
 * @property {string} logo
 * @property {string} program
 * @property {string} date
 * @property {string} detail
 */

const careerIntro =
  "Building reliable systems across cloud infrastructure, diagnostics, and Xbox product experiences."

/** @type {CareerEntry[]} */
const experience = [
  {
    organization: "Microsoft",
    logo: "/organizations/microsoft.svg",
    location: "Seattle, Washington",
    start: "October 2023",
    end: "Present",
    roles: [
      {
        title: "Software Engineer · Xbox",
        logo: "/organizations/xbox.svg",
        start: "October 2025",
        end: "Present",
        summary:
          "Building Xbox Playtest experiences that help teams configure audiences, deliver game packages, publish playtests, and diagnose failures reliably.",
        highlights: [
          "Build connected Playtest workflows for product configuration, audience targeting, package delivery, image management, validation, review, and publishing.",
          "Standardized exception handling across three service layers and centralized idempotent save behavior, giving users more consistent failures while making service issues easier to diagnose.",
          "Instrumented creation and save journeys with end to end telemetry, separating client failures from downstream ingestion problems and giving the team clearer product health signals.",
          "Improve reliability across React and TypeScript interfaces and C# services through resilient loading, automated tests, monitoring, and incident response.",
        ],
      },
      {
        title: "Software Engineer · Azure Infrastructure & Diagnostics",
        logo: "/organizations/azure.svg",
        start: "October 2023",
        end: "October 2025",
        summary:
          "Built automated diagnostics and fault attribution for large scale Linux GPU infrastructure, reducing manual triage and accelerating recovery from hardware failures.",
        highlights: [
          "Developed multi signal kernel panic and unexpected reboot detection for H100, H200, and MI300X servers, automating fault code and exception detection for failures affecting approximately 3% of the fleet.",
          "Improved hardware fault attribution accuracy by 15% after redefining diagnostic contracts, metrics, and ownership boundaries with infrastructure stakeholders.",
          "Automated previously manual failure classification, shortening triage and reducing time spent in unnecessary on call bridges while producing more consistent recovery signals.",
          "Led diagnostic readiness for new GPU server models, aligning monitoring, fault codes, escalation paths, and operational expectations before fleet adoption.",
        ],
      },
    ],
  },
  {
    organization: "Belcorp",
    logo: "/organizations/belcorp.png",
    location: "Lima, Peru",
    start: "August 2021",
    end: "January 2022",
    roles: [
      {
        title: "Software Engineer Intern",
        summary:
          "Improved customer reporting, commercial automation, and mobile product workflows for cross functional business teams.",
        highlights: [
          "Optimized SQL reporting for customer behavior, purchases by web and mobile channel, account points, subscription history, and estimated earnings, improving query performance by 10%.",
          "Automated recurring commercial reports with RPA, reducing weekly manual effort by 50% and making customer and sales information easier to use.",
          "Contributed product and UI feedback for mobile application improvements based on customer and business workflows.",
          "Partnered with the commercial team on QR and barcode scanning capabilities for the mobile application, helping translate operational needs into a customer facing feature.",
        ],
      },
    ],
  },
  {
    organization: "Meta",
    logo: "/organizations/meta.svg",
    location: "Remote",
    start: "November 2021",
    end: "February 2022",
    roles: [
      {
        title: "LATAM Tech Mentorship Program · Selected Mentee",
        summary:
          "Selected through an interview and coding assessment for a four month engineering mentorship preparing Latin American students for Meta software engineering interviews.",
        highlights: [
          "Selected from a Latin American applicant pool for an approximately 30 participant cohort spanning Brazil, Mexico, Peru, and other countries, representing Peru in the program.",
          "Prepared for software engineering opportunities connected to Meta's London offices through advanced data structures, algorithms, coding practice, and technical interview preparation.",
          "Learned directly from Facebook engineers working across Oculus, Instagram, Facebook, and infrastructure through recurring mentorship sessions and technical discussions.",
          "Built a broader understanding of engineering careers, large scale systems, and technical communication through exposure to engineers' projects, experiences, and career paths.",
        ],
      },
    ],
  },
]

/** @type {EducationEntry[]} */
const education = [
  {
    institution: "Universidad Peruana de Ciencias Aplicadas",
    logo: "/organizations/upc.png",
    program: "BS in Software Engineering · GPA 3.5",
    date: "December 2022",
    detail:
      "Honors Program, Competitive Programming Team, and Coaching/Mentorship Program.",
  },
  {
    institution: "University of Hertfordshire",
    logo: "/organizations/hertfordshire.jpg",
    program: "Study Abroad",
    date: "2020",
    detail:
      "Coursework in web services, machine learning, quantum computing, and software quality.",
  },
]

export { careerIntro, education, experience }
