export type ProjectScreenshot = {
  title: string;
  caption: string;
  alt: string;
  accent: string;
  pattern: "dashboard" | "workflow" | "insights";
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  overview: string;
  problemStatement: string;
  solution: string;
  architectureDecisions: string[];
  techStack: string[];
  screenshots: ProjectScreenshot[];
  githubLink: string;
  liveDemoLink: string;
  year: string;
  role: string;
  impact: string;
  metric: string;
  chart: number[];
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "pulse-iq",
    title: "PulseIQ",
    subtitle: "AI healthcare operations dashboard",
    overview:
      "A clinical operations workspace that turns appointment volume, triage pressure, and care-team capacity into a calmer command center for healthcare operators.",
    problemStatement:
      "Operations leads were moving between exports, scheduling tools, and manual notes to understand where care delivery was slowing down. The workflow made high-priority issues visible too late and gave teams little confidence in what to act on first.",
    solution:
      "I designed and built a dashboard-led experience with AI-assisted prioritization, cohort filters, capacity forecasting, and compact drill-downs that keep the primary decision loop on one surface.",
    architectureDecisions: [
      "Separated data summaries from presentational panels so future API-backed metrics can replace static content without redesigning the UI.",
      "Used route-level case-study content and reusable layout sections to make each project page easy to extend.",
      "Kept motion restrained to reveal hierarchy and state changes without making a dense operations interface feel theatrical.",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "AI UX"],
    screenshots: [
      {
        title: "Operations overview",
        caption: "A high-signal executive view for triage load, capacity, and service health.",
        alt: "PulseIQ operations dashboard overview mock screenshot",
        accent: "from-cyan-200 via-sky-100 to-white dark:from-cyan-500/20 dark:via-sky-500/10 dark:to-transparent",
        pattern: "dashboard",
      },
      {
        title: "Care queue",
        caption: "Prioritized worklists with risk tags and next-best actions.",
        alt: "PulseIQ prioritized care queue mock screenshot",
        accent: "from-emerald-200 via-teal-100 to-white dark:from-emerald-500/20 dark:via-teal-500/10 dark:to-transparent",
        pattern: "workflow",
      },
    ],
    githubLink: "https://github.com/nksidhu98/portfoliofrontend.git",
    liveDemoLink: "https://devportfoliotemplate.vercel.app/",
    year: "2026",
    role: "Product UI, frontend ",
    impact: "Reduced decision latency across daily ops reviews",
    metric: "94%",
    chart: [42, 58, 48, 72, 66, 84, 78],
    accent: "from-cyan-200/70 via-sky-100/70 to-white dark:from-cyan-500/18 dark:via-sky-500/10 dark:to-transparent",
  },
  {
    slug: "crm-analytics",
    title: "CRM Analytics",
    subtitle: "Customer intelligence platform",
    overview:
      "A revenue intelligence experience for customer success teams that need account health, pipeline risk, and campaign performance in one polished workspace.",
    problemStatement:
      "The existing CRM experience buried relationship signals behind table-heavy screens. Teams could not quickly compare account health, spot revenue expansion moments, or explain performance changes to leadership.",
    solution:
      "I created a case-management style analytics surface with narrative KPI modules, segment comparisons, account timelines, and reusable visualization components tuned for scanning.",
    architectureDecisions: [
      "Modeled the interface as composable insight sections so campaign, account, and revenue views can share the same primitives.",
      "Designed responsive chart containers with stable dimensions to prevent layout shifts as filters change.",
      "Used content-first project data to keep case-study copy, links, screenshots, and tech decisions outside the UI layer.",
    ],
    techStack: ["React", "Next.js", "Tailwind CSS", "Charts", "CRM"],
    screenshots: [
      {
        title: "Revenue intelligence",
        caption: "Segmented pipeline health with clear account-level next steps.",
        alt: "CRM revenue intelligence dashboard mock screenshot",
        accent: "from-lime-200 via-emerald-100 to-white dark:from-lime-500/20 dark:via-emerald-500/10 dark:to-transparent",
        pattern: "insights",
      },
      {
        title: "Account timeline",
        caption: "A compact activity stream for relationship context and retention signals.",
        alt: "CRM account timeline mock screenshot",
        accent: "from-teal-200 via-slate-100 to-white dark:from-teal-500/20 dark:via-slate-500/10 dark:to-transparent",
        pattern: "workflow",
      },
    ],
    githubLink: "https://github.com",
    liveDemoLink: "https://example.com",
    year: "2026",
    role: "Dashboard UX, component systems",
    impact: "Improved account review clarity for CS teams",
    metric: "$1.8M",
    chart: [28, 44, 62, 56, 70, 82, 88],
    accent: "from-lime-200/70 via-emerald-100/70 to-white dark:from-lime-500/18 dark:via-emerald-500/10 dark:to-transparent",
  },
  {
    slug: "admin-os",
    title: "AdminOS",
    subtitle: "Enterprise admin and access platform",
    overview:
      "A scalable admin console for SaaS teams managing roles, permissions, customer environments, audit trails, and operational settings.",
    problemStatement:
      "Admin workflows had grown organically across multiple screens, creating inconsistent controls and risky permission changes. Internal users needed confidence, traceability, and speed.",
    solution:
      "I consolidated the admin experience into a structured operating system with role-aware navigation, permission previews, audit context, and dense settings flows that stay readable.",
    architectureDecisions: [
      "Built around predictable layout primitives for navigation, page headers, tables, and detail panels.",
      "Used clear content boundaries between marketing portfolio pages and product case-study pages.",
      "Kept styling token-driven through Tailwind utilities and CSS variables for maintainable light/dark themes.",
    ],
    techStack: ["Next.js", "TypeScript", "Supabase", "RBAC", "Design Systems"],
    screenshots: [
      {
        title: "Permission matrix",
        caption: "Role comparison and change previews for safer admin decisions.",
        alt: "AdminOS permission matrix mock screenshot",
        accent: "from-fuchsia-200 via-rose-100 to-white dark:from-fuchsia-500/18 dark:via-rose-500/10 dark:to-transparent",
        pattern: "dashboard",
      },
      {
        title: "Audit trail",
        caption: "A clean review surface for high-risk configuration changes.",
        alt: "AdminOS audit trail mock screenshot",
        accent: "from-amber-200 via-stone-100 to-white dark:from-amber-500/18 dark:via-stone-500/10 dark:to-transparent",
        pattern: "insights",
      },
    ],
    githubLink: "https://github.com",
    liveDemoLink: "https://example.com",
    year: "2026",
    role: "Frontend systems, UX architecture",
    impact: "Created a safer operating surface for internal teams",
    metric: "12k",
    chart: [72, 64, 68, 52, 74, 79, 92],
    accent: "from-fuchsia-200/70 via-rose-100/70 to-white dark:from-fuchsia-500/16 dark:via-rose-500/10 dark:to-transparent",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
