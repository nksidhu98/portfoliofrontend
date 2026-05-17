"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Code2,
  ExternalLink,
  GitBranch,
  Layers3,
  Mail,
  Menu,
  Rocket,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import Link from "next/link";
import * as React from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { projects, type Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    items: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Backend",
    icon: Layers3,
    items: ["Node.js", "APIs", "Supabase"],
  },
  {
    title: "Design",
    icon: Sparkles,
    items: ["Figma", "UI/UX", "Design Systems"],
  },
  {
    title: "Tools",
    icon: Rocket,
    items: ["GitHub", "Vercel", "Cursor AI", "Codex"],
  },
];

const process = [
  "Research",
  "Wireframing",
  "UI Design",
  "Frontend Development",
  "Deployment",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function PortfolioPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <SkillsSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/82 backdrop-blur-2xl">
      <nav className="mx-auto flex h-[68px] w-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="Home">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-slate-950 text-sm font-semibold text-white shadow-sm shadow-slate-950/10 dark:border-border dark:bg-white dark:text-slate-950">
            FD
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:inline">
            Frontend Studio
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-border/80 bg-white/80 p-1 shadow-sm shadow-slate-900/5 backdrop-blur-xl dark:bg-card/70 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition hover:bg-slate-100 hover:text-foreground dark:hover:bg-muted"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href="#contact">
              Start a project
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button
            aria-label={open ? "Close navigation" : "Open navigation"}
            title="Navigation"
            variant="secondary"
            size="icon"
            onClick={() => setOpen((value) => !value)}
            className="h-9 w-9 md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </nav>
      {open ? (
        <div className="mx-5 mb-4 rounded-lg border border-border bg-white/95 p-2 shadow-xl shadow-slate-900/10 backdrop-blur-2xl dark:bg-card/95 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-lg px-4 py-3 text-sm text-muted-foreground transition hover:bg-slate-100 hover:text-foreground dark:hover:bg-muted"
            >
              {item.label}
              <ChevronRight className="h-4 w-4" />
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center border-b border-border/70 bg-[radial-gradient(circle_at_50%_0%,#e0f2fe_0%,transparent_32%),linear-gradient(180deg,#ffffff_0%,var(--background)_88%)] px-5 pt-24 dark:bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.13)_0%,transparent_34%),linear-gradient(180deg,#111827_0%,var(--background)_90%)] sm:px-8"
    >
      <div className="premium-grid absolute inset-0 opacity-75" />
      <div className="noise absolute inset-0 opacity-[0.025]" />
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-200/45 blur-3xl dark:bg-sky-400/10" />
      <div className="absolute bottom-12 right-0 h-80 w-80 rounded-full bg-emerald-100/60 blur-3xl dark:bg-emerald-400/8" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 py-20 lg:grid-cols-[1fr_0.84fr]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-3 py-1.5 text-sm text-muted-foreground shadow-sm shadow-slate-900/5 backdrop-blur-xl dark:bg-card/75">
            <BadgeCheck className="h-4 w-4 text-emerald-500" />
            Available for SaaS and dashboard engagements
          </div>
          <h1 className="max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.03em] text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
            Premium frontend systems for ambitious SaaS teams.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
            Frontend Developer specializing in SaaS dashboards, analytics
            platforms, and modern web applications.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <a href="#projects">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a href="#contact">
                Contact Me
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="mt-12 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              ["7+", "SaaS launches"],
              ["48h", "Prototype sprint"],
              ["99%", "Core Web Vitals"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-lg border border-border/80 bg-white/75 p-4 shadow-sm shadow-slate-900/5 backdrop-blur-xl dark:bg-card/70"
              >
                <div className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">{value}</div>
                <div className="mt-1 text-xs leading-5 text-muted-foreground">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.75, ease: "easeOut" }}
          className="relative"
        >
          <DashboardPreview />
        </motion.div>
      </div>
    </section>
  );
}

function DashboardPreview() {
  return (
    <div className="relative rounded-lg border border-border bg-white/88 p-3 shadow-2xl shadow-slate-900/10 backdrop-blur-2xl dark:bg-card/82 dark:shadow-black/25">
      <div className="flex items-center justify-between border-b border-border px-3 pb-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="text-xs text-muted-foreground">ops.console</div>
      </div>
      <div className="grid gap-3 p-3 sm:grid-cols-[0.72fr_1fr]">
        <div className="space-y-3">
          {["Revenue", "Activation", "Retention"].map((item, index) => (
            <div key={item} className="rounded-lg border border-border bg-slate-50/90 p-4 dark:bg-muted/55">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{item}</span>
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              </div>
              <div className="mt-4 h-2 rounded-full bg-slate-200/80 dark:bg-background">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${74 + index * 7}%` }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.7 }}
                  className="h-full rounded-full bg-slate-900 dark:bg-white"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-border bg-white/78 p-4 shadow-sm shadow-slate-900/5 dark:bg-background/60">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-sm font-medium">Product analytics</div>
              <div className="mt-1 text-xs text-muted-foreground">
                Live cohort performance
              </div>
            </div>
            <BarChart3 className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="mt-8 flex h-44 items-end gap-2">
            {[42, 64, 51, 82, 73, 91, 86, 98].map((height, index) => (
              <motion.div
                key={index}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ delay: 0.25 + index * 0.07, duration: 0.55 }}
                className="min-w-0 flex-1 rounded-t bg-slate-800/88 dark:bg-white/80"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectsSection() {
  return (
    <Section id="projects" eyebrow="Featured work" title="Dashboard products with enterprise polish.">
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.08, duration: 0.55 }}
            className="group rounded-lg border border-border bg-white p-4 shadow-sm shadow-slate-900/5 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-900/10 dark:bg-card/78 dark:hover:border-border"
          >
            <ProjectVisual project={project} />
            <div className="mt-7">
              <div className="text-sm font-medium text-muted-foreground">{project.label}</div>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">{project.name}</h3>
              <p className="mt-3 min-h-24 text-sm leading-7 text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-slate-50 px-3 py-1 text-xs text-slate-600 dark:bg-muted/60 dark:text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <Button asChild size="sm">
                  <a href="#contact">
                    Live Demo
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </Button>
                <Button asChild size="sm" variant="secondary">
                  <a href="https://github.com" target="_blank" rel="noreferrer">
                    GitHub
                    <GitBranch className="h-3.5 w-3.5" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function ProjectVisual({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="relative h-64 overflow-hidden rounded-lg border border-border bg-slate-50">
      <div className={cn("absolute inset-0 bg-gradient-to-br", project.accent)} />
      <div className="absolute inset-4 rounded-lg border border-white/90 bg-white/82 p-4 shadow-xl shadow-slate-900/10 backdrop-blur-xl dark:border-border/80 dark:bg-background/78">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-muted-foreground">Preview</div>
            <div className="mt-1 text-lg font-semibold">{project.metric}</div>
          </div>
          <div className="rounded-full border border-border bg-white p-2 shadow-sm dark:bg-card">
            <ShieldCheck className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
        <div className="mt-7 flex h-24 items-end gap-2">
          {project.chart.map((height, index) => (
            <div
              key={index}
              style={{ height: `${height}%` }}
              className="flex-1 rounded-t bg-slate-800/82 transition duration-300 group-hover:bg-slate-950 dark:bg-white/72 dark:group-hover:bg-white"
            />
          ))}
        </div>
        <div className="mt-5 grid grid-cols-3 gap-2">
          {["API", "UX", "Ops"].map((item) => (
            <div key={item} className="h-8 rounded border border-border bg-slate-50/80 px-2 py-1 text-xs text-muted-foreground dark:bg-muted/55">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <Section id="about" eyebrow="About" title="Frontend engineering shaped around product outcomes.">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-lg border border-border bg-white p-8 shadow-sm shadow-slate-900/5 dark:bg-card/78">
          <p className="text-xl leading-9 text-slate-600 dark:text-muted-foreground">
            I build React and Next.js interfaces for SaaS startups that need
            fast, reliable product surfaces: analytics dashboards, admin
            consoles, customer portals, and design-system-driven workflows.
            The work combines frontend architecture, UI/UX systems, responsive
            implementation, and tight product judgment.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ["Product UI", "Dashboard flows that make dense data readable."],
            ["React Systems", "Reusable components with predictable state boundaries."],
            ["Responsive UX", "Interfaces tuned for desktop, tablet, and mobile work."],
            ["Startup Delivery", "Clear scope, fast iteration, and deployable output."],
          ].map(([title, copy]) => (
            <div key={title} className="rounded-lg border border-border bg-white/78 p-6 shadow-sm shadow-slate-900/5 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md dark:bg-card/58 dark:hover:bg-card">
              <BriefcaseBusiness className="h-5 w-5 text-muted-foreground" />
              <h3 className="mt-5 font-semibold tracking-tight text-slate-950 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function SkillsSection() {
  return (
    <Section id="skills" eyebrow="Capabilities" title="A focused stack for modern product teams.">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-lg border border-border bg-white p-6 shadow-sm shadow-slate-900/5 transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/10 dark:bg-card/78 dark:hover:border-border"
          >
            <group.icon className="h-5 w-5 text-muted-foreground" />
            <h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-950 dark:text-white">{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-slate-50 px-3 py-1.5 text-sm text-slate-600 dark:bg-muted/60 dark:text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function ProcessSection() {
  return (
    <Section id="process" eyebrow="Process" title="From product context to polished deployment.">
      <div className="relative rounded-lg border border-border bg-white p-6 shadow-sm shadow-slate-900/5 sm:p-8 dark:bg-card/78">
        <div className="absolute left-8 top-12 hidden h-[calc(100%-6rem)] w-px bg-border md:block" />
        <div className="grid gap-4">
          {process.map((step, index) => (
            <motion.div
              key={step}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.07, duration: 0.5 }}
              className="relative grid gap-4 rounded-lg border border-border bg-slate-50/80 p-5 md:grid-cols-[10rem_1fr] md:border-0 md:bg-transparent md:p-0 dark:bg-background/60 md:dark:bg-transparent"
            >
              <div className="flex items-center gap-3">
                <span className="z-10 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-sm font-semibold text-slate-900 shadow-sm dark:bg-card dark:text-white">
                  {index + 1}
                </span>
                <span className="font-semibold tracking-tight text-slate-950 dark:text-white">{step}</span>
              </div>
              <p className="text-sm leading-7 text-muted-foreground md:pt-1.5">
                {processCopy(step)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="bg-[linear-gradient(180deg,var(--background)_0%,#ffffff_100%)] px-5 py-24 dark:bg-[linear-gradient(180deg,var(--background)_0%,#111827_100%)] sm:px-8">
      <div className="mx-auto max-w-7xl rounded-lg border border-border bg-white p-8 shadow-2xl shadow-slate-900/10 sm:p-12 dark:bg-card/82 dark:shadow-black/25">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-slate-50 px-3 py-1.5 text-sm text-muted-foreground dark:bg-muted/60">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              Freelance availability open
            </div>
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.025em] text-slate-950 dark:text-white sm:text-5xl">
              Need a frontend partner for your SaaS product?
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              I help founders and product teams turn complex workflows into
              refined interfaces that are fast to use, easy to scale, and ready
              for customers.
            </p>
          </div>
          <div className="grid gap-3">
            <Button asChild>
              <a href="mailto:hello@frontendstudio.dev">
                <Mail className="h-4 w-4" />
                hello@frontendstudio.dev
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <GitBranch className="h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <BriefcaseBusiness className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-white px-5 py-8 dark:bg-background sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>Frontend Studio. SaaS dashboards and modern product interfaces.</p>
        <a href="#top" className="inline-flex items-center gap-1 transition hover:text-foreground">
          Back to top
          <ChevronRight className="h-4 w-4 rotate-[-90deg]" />
        </a>
      </div>
    </footer>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-b border-border/70 px-5 py-24 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mb-14 max-w-3xl"
        >
          <div className="text-sm font-medium text-muted-foreground">{eyebrow}</div>
          <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-[-0.025em] text-slate-950 dark:text-white sm:text-5xl">
            {title}
          </h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function processCopy(step: string) {
  const copy: Record<string, string> = {
    Research:
      "Clarify goals, users, constraints, and core product metrics before design decisions harden.",
    Wireframing:
      "Map workflows, information hierarchy, empty states, and edge cases with fast iteration loops.",
    "UI Design":
      "Translate product direction into clean visual systems, dashboard patterns, and accessible components.",
    "Frontend Development":
      "Build responsive React interfaces with reusable primitives, thoughtful motion, and reliable state.",
    Deployment:
      "Prepare production builds, verify performance, and ship polished experiences through modern hosting.",
  };

  return copy[step];
}
