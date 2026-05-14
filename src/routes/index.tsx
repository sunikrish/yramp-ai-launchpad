import { createFileRoute } from "@tanstack/react-router";
import { Suspense, lazy, useState } from "react";
import { Reveal } from "@/components/Reveal";
import {
  Layers,
  Building2,
  Globe,
  Smartphone,
  Package,
  Compass,
  ArrowUpRight,
  Mail,
} from "lucide-react";

const Spline = lazy(() => import("@splinetool/react-spline"));

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Y-RAMP — Modern AI Infrastructure & Security" },
      {
        name: "description",
        content:
          "Y-RAMP builds modern AI infrastructure with zero-trust architecture. Production-ready deployments for real-world operations across Europe.",
      },
      { property: "og:title", content: "Y-RAMP — Modern AI Infrastructure & Security" },
      {
        property: "og:description",
        content:
          "Secure AI deployments with zero-trust architecture. Built for scale, not experiments.",
      },
    ],
  }),
});

function Nav() {
  const links = [
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contacts", href: "#contact" },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 z-30 px-6 md:px-10 py-6 flex items-center justify-between">
      <a href="/" className="flex items-center" aria-label="Y-RAMP — Grow with respect">
        <svg
          viewBox="0 0 220 56"
          className="h-9 md:h-10 w-auto"
          role="img"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Stylized orange Y mark */}
          <path
            d="M16 6 C16 18, 8 22, 8 34 L8 44"
            fill="none"
            stroke="#F26B2A"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M16 6 C16 18, 24 22, 24 34 L24 44"
            fill="none"
            stroke="#F26B2A"
            strokeWidth="6"
            strokeLinecap="round"
          />
          {/* RAMP wordmark */}
          <text
            x="38"
            y="36"
            fontFamily="Inter, system-ui, sans-serif"
            fontSize="30"
            fontWeight="800"
            letterSpacing="-0.5"
            fill="#E5E7EB"
          >
            -RAMP
          </text>
          {/* Tagline */}
          <text
            x="40"
            y="50"
            fontFamily="Inter, system-ui, sans-serif"
            fontSize="7"
            fontWeight="700"
            letterSpacing="2"
            fill="#04E83A"
          >
            GROW WITH RESPECT
          </text>
        </svg>
      </a>
      <ul className="hidden md:flex items-center gap-8">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-[11px] uppercase tracking-[0.18em] text-foreground/70 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className="hidden md:inline-flex items-center text-[11px] uppercase tracking-[0.18em] text-foreground bg-nav-button hover:bg-nav-button/80 px-5 py-2.5 rounded-full transition-colors"
      >
        Get Quote
      </a>
    </nav>
  );
}

const services = [
  {
    icon: Layers,
    title: "SaaS Product Development",
    desc: "End-to-end SaaS systems with scalable multi-tenant architecture.",
  },
  {
    icon: Building2,
    title: "Enterprise Software",
    desc: "Internal tools, dashboards, automation systems, secure infrastructure.",
  },
  {
    icon: Globe,
    title: "Web Applications",
    desc: "React-based platforms, portals, and business systems.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    desc: "Cross-platform apps for business and SaaS ecosystems.",
  },
  {
    icon: Package,
    title: "White-label Products",
    desc: "Rebrandable SaaS foundations for fast go-to-market.",
  },
  {
    icon: Compass,
    title: "Technical Consultancy",
    desc: "Architecture, scaling strategy, and product planning.",
  },
];

const projects = [
  { tag: "Mobile", title: "Mobile App", desc: "Production-ready business mobile application." },
  { tag: "Web", title: "Web App", desc: "Scalable web platform delivered for real use." },
  { tag: "SaaS", title: "SaaS Product", desc: "Full multi-tenant SaaS system." },
  { tag: "White-label", title: "White-label Platform", desc: "Reusable system deployed for multiple clients." },
];

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-16 max-w-3xl">
      <Reveal>
        <p className="text-[11px] uppercase tracking-[0.22em] text-primary mb-5">{eyebrow}</p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2
          className="font-semibold tracking-[-0.03em] leading-[1.05] text-foreground"
          style={{ fontSize: "clamp(2rem, 4.6vw, 3.75rem)" }}
        >
          {title}
        </h2>
      </Reveal>
    </div>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="relative bg-hero-bg px-6 md:px-10 py-28 md:py-40">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="01 — Services" title="Engineering Services for Scalable Systems" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/60 border border-border/60 rounded-2xl overflow-hidden">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal
                key={s.title}
                delay={0.05 * i}
                className="group relative bg-hero-bg p-8 md:p-10 transition-colors duration-300 hover:bg-card"
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-secondary/60 border border-border/60 text-foreground/80 group-hover:text-primary group-hover:border-primary/40 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="mt-7 text-lg md:text-xl font-medium text-foreground tracking-[-0.01em]">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed font-light">
                  {s.desc}
                </p>
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="relative bg-hero-bg px-6 md:px-10 py-28 md:py-40 border-t border-border/40">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="02 — Projects" title="Built Systems in Production" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <Reveal
              key={p.title}
              delay={0.05 * i}
              className="group relative rounded-2xl border border-border/60 bg-card/40 p-8 md:p-10 overflow-hidden transition-all duration-500 hover:border-primary/40 hover:-translate-y-1 hover:shadow-[0_30px_80px_-30px_hsl(119_99%_46%/0.25)]"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    {p.tag}
                  </span>
                  <h3 className="mt-4 text-2xl md:text-3xl font-medium text-foreground tracking-[-0.02em]">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground font-light leading-relaxed max-w-md">
                    {p.desc}
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-foreground/60 group-hover:text-primary transition-colors" />
              </div>
              <div className="mt-10 h-32 rounded-xl bg-gradient-to-br from-secondary/60 to-hero-bg border border-border/40" />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-6">
          <div className="group relative rounded-2xl border border-primary/30 bg-gradient-to-br from-card/80 to-hero-bg p-10 md:p-14 overflow-hidden transition-all duration-500 hover:border-primary/60 hover:shadow-[0_40px_120px_-30px_hsl(119_99%_46%/0.35)]">
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, hsl(var(--primary)) 0%, transparent 60%)" }} />
            <div className="relative flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-primary">Featured</span>
                  <span className="inline-flex items-center text-[10px] uppercase tracking-[0.22em] text-foreground/70 px-2.5 py-1 rounded-full border border-border/60">
                    In Development
                  </span>
                </div>
                <h3
                  className="mt-5 font-semibold text-foreground tracking-[-0.03em] leading-[1.05]"
                  style={{ fontSize: "clamp(1.75rem, 3.6vw, 3rem)" }}
                >
                  Project Management <span className="text-primary">SaaS</span>
                </h3>
                <p className="mt-4 text-base text-muted-foreground font-light leading-relaxed">
                  Our flagship internal SaaS product. Built to become a scalable commercial
                  platform — engineered for real teams, real workflows, real scale.
                </p>
              </div>
              <ArrowUpRight className="w-6 h-6 text-primary shrink-0" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="relative bg-hero-bg px-6 md:px-10 py-28 md:py-40 border-t border-border/40">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-7">
          <SectionHeader eyebrow="03 — About" title="Small Team. Full Ownership." />
          <Reveal delay={0.1}>
            <p className="text-lg md:text-xl text-foreground/80 font-light leading-relaxed max-w-2xl">
              Y-RAMP is a lean 2-person engineering studio. No outsourcing.
              Full ownership of delivery. Fast iteration cycles. Long-term product thinking.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-2xl">
              We build and scale digital systems with respect—for product, process, and people.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-2xl md:text-3xl font-medium text-foreground tracking-[-0.02em] max-w-2xl">
              "We grow with <span className="text-brand-orange">respect</span>, and build <span className="text-primary">better systems</span> together."
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-5 space-y-4">
          {[
            { role: "Software Engineer", desc: "Full-stack, architecture, systems." },
            { role: "Project Manager", desc: "Delivery, execution, client coordination." },
          ].map((m, i) => (
            <Reveal
              key={m.role}
              delay={0.15 + i * 0.1}
              className="rounded-2xl border border-border/60 bg-card/40 p-7 hover:border-primary/40 transition-colors"
            >
              <p className="text-[10px] uppercase tracking-[0.22em] text-primary">Team</p>
              <h4 className="mt-3 text-xl font-medium text-foreground tracking-[-0.01em]">{m.role}</h4>
              <p className="mt-2 text-sm text-muted-foreground font-light">{m.desc}</p>
            </Reveal>
          ))}

          <Reveal delay={0.4} className="rounded-2xl border border-border/60 bg-card/40 p-7">
            <ul className="space-y-3 text-sm text-foreground/80">
              {["No outsourcing", "Full ownership of delivery", "Fast iteration cycles", "Long-term product thinking"].map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative bg-hero-bg px-6 md:px-10 py-28 md:py-40 border-t border-border/40">
      <div className="max-w-2xl mx-auto text-center">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.22em] text-primary mb-5">04 — Contact</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            className="font-semibold tracking-[-0.03em] leading-[1.05] text-foreground"
            style={{ fontSize: "clamp(2rem, 4.6vw, 3.75rem)" }}
          >
            Let's Build Something <span className="text-primary">Scalable</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 text-sm uppercase tracking-[0.22em] text-muted-foreground flex items-center justify-center gap-3">
            <span className="inline-block w-6 h-px bg-brand-orange/70" />
            Grow with Respect
          </p>
        </Reveal>

        <Reveal delay={0.3} as="form" className="mt-12 text-left space-y-4">
          <div>
            <label className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="mt-2 w-full bg-transparent border-b border-border/60 focus:border-primary outline-none py-3 text-foreground placeholder:text-muted-foreground/40 transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="mt-2 w-full bg-transparent border-b border-border/60 focus:border-primary outline-none py-3 text-foreground placeholder:text-muted-foreground/40 transition-colors"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Message</label>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-2 w-full bg-transparent border-b border-border/60 focus:border-primary outline-none py-3 text-foreground placeholder:text-muted-foreground/40 transition-colors resize-none"
              placeholder="Tell us about your project"
            />
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center gap-4">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                if (form.name && form.email && form.message) setSent(true);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-[12px] uppercase tracking-[0.18em] font-medium transition-all duration-300 hover:brightness-110 hover:scale-[1.03]"
            >
              {sent ? "Sent — we'll be in touch" : "Book a Call"}
            </button>
            <a
              href="mailto:hello@yramp.ai"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              hello@yramp.ai
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/40 px-6 md:px-10 py-10 bg-hero-bg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        <p>© {new Date().getFullYear()} Y<span className="text-brand-orange">-</span>RAMP</p>
        <p className="tracking-[0.22em] text-foreground/70">Grow with Respect</p>
        <p>Engineered for Business Ramp-<span className="text-primary">Up</span></p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <>
      <Nav />
      <main className="relative w-full bg-hero-bg">
        <section className="relative w-full h-screen overflow-hidden bg-hero-bg">
          {/* Spline 3D background */}
          <div className="absolute inset-0 z-0">
            <Suspense fallback={<div className="w-full h-full bg-hero-bg" />}>
              <Spline scene="https://prod.spline.design/Slk6b8kz3LRlKiyk/scene.splinecode" />
            </Suspense>
          </div>

          {/* Dark overlay for readability */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, hsl(0 0% 6% / 0.85) 0%, hsl(0 0% 6% / 0.45) 40%, hsl(0 0% 6% / 0.15) 70%, transparent 100%)",
            }}
          />
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, hsl(0 0% 6% / 0.6) 0%, transparent 50%)",
            }}
          />

          {/* Hero content — bottom left */}
          <div className="relative z-20 h-full flex flex-col justify-end px-6 md:px-10 pb-12 md:pb-16 pointer-events-none">
            <div className="max-w-4xl pointer-events-auto">
              <h1
                className="font-bold uppercase leading-[0.9] tracking-[-0.05em] text-foreground animate-fade-up"
                style={{
                  fontSize: "clamp(3.5rem, 14vw, 12rem)",
                  animationDelay: "0.2s",
                }}
              >
                Y<span className="text-brand-orange">-</span>RAMP
              </h1>

              <p
                className="mt-6 text-foreground/80 font-light animate-fade-up"
                style={{
                  fontSize: "clamp(1.125rem, 1.8vw, 1.5rem)",
                  animationDelay: "0.4s",
                }}
              >
                We implement systems correctly.
              </p>

              <p
                className="mt-5 text-muted-foreground font-light max-w-xl leading-relaxed animate-fade-up"
                style={{
                  fontSize: "clamp(0.875rem, 1vw, 1rem)",
                  animationDelay: "0.55s",
                }}
              >
                Modern AI infrastructure built fast.
                <br />
                Secure deployments with zero-trust architecture.
                <br />
                Intelligent systems for real-world operations.
                <br />
                Built for scale, not experiments.
              </p>

              <div
                className="mt-8 flex flex-col sm:flex-row gap-3 animate-fade-up"
                style={{ animationDelay: "0.7s" }}
              >
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center bg-primary text-primary-foreground px-7 py-3.5 rounded-full text-[12px] uppercase tracking-[0.18em] font-medium transition-all duration-300 hover:brightness-110 hover:scale-[1.03]"
                >
                  Book a Call
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center bg-foreground text-background px-7 py-3.5 rounded-full text-[12px] uppercase tracking-[0.18em] font-medium transition-all duration-300 hover:bg-foreground/90 hover:scale-[1.03]"
                >
                  Our Work
                </a>
              </div>

              <p
                className="mt-8 text-[11px] uppercase tracking-[0.22em] text-muted-foreground/80 animate-fade-up flex items-center gap-3"
                style={{ animationDelay: "0.85s" }}
              >
                <span className="inline-block w-6 h-px bg-brand-orange/70" />
                Grow with Respect
              </p>
            </div>
          </div>
        </section>

        <ServicesSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
