const experience = [
  {
    organization: "Microsoft",
    location: "Seattle, Washington",
    start: "October 2023",
    end: "Present",
    roles: [
      {
        title: "Software Engineer · Xbox",
        start: "October 2025",
        end: "Present",
        summary:
          "Building Xbox Playtest product experiences and the services that support reliable configuration, delivery, and diagnostics.",
        highlights: [
          "Build Playtest workflows spanning product configuration, audience targeting, package delivery, image upload, and review-and-publish experiences.",
          "Standardized exception handling across 3 service layers and centralized idempotent save behavior to make failures more consistent and diagnosable.",
          "Added telemetry to creation and save paths, validating events end to end and distinguishing client behavior from downstream ingestion issues.",
          "Improve reliability across React and TypeScript interfaces and C# services through resilient loading, automated tests, monitoring, and incident response.",
        ],
      },
      {
        title: "Software Engineer · Cloud Infrastructure & Diagnostics",
        start: "October 2023",
        end: "October 2025",
        summary:
          "Improved diagnostics and recovery for large-scale Linux GPU infrastructure.",
        highlights: [
          "Developed kernel-panic detection for H100, H200, and MI300X servers, addressing failures affecting approximately 3% of the fleet.",
          "Improved diagnostic signal processing and attribution algorithms, reducing misattribution errors by 15%.",
          "Led monitoring and incident response as DRI for new server models, reducing recovery effort and preventing recurring failures.",
        ],
      },
    ],
  },
  {
    organization: "Belcorp",
    location: "Lima, Peru",
    start: "August 2021",
    end: "January 2022",
    roles: [
      {
        title: "Software Engineer Intern",
        summary:
          "Automated reporting and improved data workflows for cross-functional teams.",
        highlights: [
          "Optimized complex SQL reporting queries, improving performance by 10%.",
          "Automated weekly reporting workflows with RPA, reducing manual effort by 50%.",
          "Troubleshot web and mobile applications with product and engineering partners.",
        ],
      },
    ],
  },
  {
    organization: "Meta",
    location: "Remote",
    start: "November 2021",
    end: "February 2022",
    roles: [
      {
        title: "Tech Mentorship Program",
        summary:
          "Worked with Meta engineers to strengthen data structures, algorithms, technical communication, and industry understanding.",
        highlights: [
          "Collaborated with engineers to deepen my understanding of data structures and algorithms and strengthen technical problem-solving skills.",
          "Developed communication skills and industry perspective through mentorship with experienced software engineers.",
        ],
      },
    ],
  },
]

const education = [
  {
    institution: "Universidad Peruana de Ciencias Aplicadas",
    program: "BS in Software Engineering · GPA 3.5",
    date: "December 2022",
    detail:
      "Honors Program, Competitive Programming Team, and Coaching/Mentorship Program.",
  },
  {
    institution: "University of Hertfordshire",
    program: "Study Abroad",
    date: "2020",
    detail:
      "Coursework in web services, machine learning, quantum computing, and software quality.",
  },
]

export { education, experience }
