import { createFileRoute } from "@tanstack/react-router";
import { type FormEvent, Suspense, lazy, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { submitContact } from "@/lib/contact.functions";
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
      { title: "Y-RAMP — Product Engineering for Growing Businesses" },
      {
        name: "description",
        content:
          "Y-RAMP designs, builds, launches, and maintains web apps, mobile apps, SaaS platforms, white-label products, and the backend infrastructure behind them.",
      },
      { property: "og:title", content: "Y-RAMP — Product Engineering for Growing Businesses" },
      {
        property: "og:description",
        content:
          "From frontend to cloud infrastructure, Y-RAMP turns ambitious product ideas into dependable digital businesses.",
      },
    ],
  }),
});

function Nav() {
  const links = [
    { label: "Services", href: "#services" },
    { label: "Mangalya", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contacts", href: "#contact" },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 z-30 px-6 md:px-10 py-6 flex items-center justify-between">
      <a href="/" className="flex items-center" aria-label="Y-RAMP — Grow with passion">
        <img
          src="/branding/transparent/yramp-logo-320w.png"
          srcSet="/branding/transparent/yramp-logo-320w.png 1x, /branding/transparent/yramp-logo-640w.png 2x"
          alt=""
          className="h-9 md:h-10 w-auto"
          aria-hidden="true"
        />
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
        Start a Project
      </a>
    </nav>
  );
}

const services = [
  {
    icon: Layers,
    title: "SaaS Platforms",
    desc: "End-to-end, multi-tenant products designed for launch, growth, and reliable operations.",
  },
  {
    icon: Building2,
    title: "Engineering Services",
    desc: "Product architecture, backend engineering, integrations, automation, and technical delivery.",
  },
  {
    icon: Globe,
    title: "Web Applications",
    desc: "Responsive customer platforms, portals, marketplaces, and business systems.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    desc: "Cross-platform mobile products connected to dependable APIs and cloud services.",
  },
  {
    icon: Package,
    title: "White-label Products",
    desc: "Production foundations that businesses can brand, configure, and take to market faster.",
  },
  {
    icon: Compass,
    title: "Infrastructure & Maintenance",
    desc: "Storage, authentication, CI/CD, cloud foundations, monitoring, updates, and ongoing support.",
  },
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
        <SectionHeader
          eyebrow="01 — Services"
          title="Complete Product Engineering, Beyond the Frontend"
        />
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
    <section
      id="projects"
      className="relative bg-hero-bg px-6 md:px-10 py-28 md:py-40 border-t border-border/40"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="02 — Our Product" title="Meet Mangalya" />

        <Reveal delay={0.1}>
          <div className="group relative rounded-2xl border border-primary/30 bg-gradient-to-br from-card/80 to-hero-bg p-10 md:p-14 overflow-hidden transition-all duration-500 hover:border-primary/60 hover:shadow-[0_40px_120px_-30px_hsl(119_99%_46%/0.35)]">
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 80% 20%, hsl(var(--primary)) 0%, transparent 60%)",
              }}
            />
            <div className="relative flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-primary">
                    First Y-RAMP Product
                  </span>
                  <span className="inline-flex items-center text-[10px] uppercase tracking-[0.22em] text-foreground/70 px-2.5 py-1 rounded-full border border-border/60">
                    Launching by the end of August 2026
                  </span>
                </div>
                <h3
                  className="mt-5 font-semibold text-foreground tracking-[-0.03em] leading-[1.05]"
                  style={{ fontSize: "clamp(1.75rem, 3.6vw, 3rem)" }}
                >
                  Made for <span className="text-primary">Event Managers</span>
                </h3>
                <p className="mt-4 text-base text-muted-foreground font-light leading-relaxed">
                  Mangalya is Y-RAMP's own SaaS platform, created to help event managers bring every
                  part of their work together. It turns complex event operations into a more
                  connected, organised, and confident experience—so professionals can spend less
                  time managing complexity and more time creating memorable events.
                </p>
              </div>
              <a
                href="https://mangalya.yramp.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-primary hover:text-primary/80 transition-colors"
              >
                Explore Mangalya
                <ArrowUpRight className="w-5 h-5 shrink-0" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-hero-bg px-6 md:px-10 py-28 md:py-40 border-t border-border/40"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-7">
          <SectionHeader
            eyebrow="03 — About"
            title="A Product Engineering Partner for Growing Businesses"
          />
          <Reveal delay={0.1}>
            <p className="text-lg md:text-xl text-foreground/80 font-light leading-relaxed max-w-2xl">
              Y-RAMP Technologies LLP is a lean product engineering company for founders and growing
              businesses. We build web applications, mobile applications, SaaS platforms, and
              white-label products with full ownership of delivery.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-2xl">
              AI can accelerate frontend creation, but a dependable business still needs sound
              architecture behind it. We establish storage, authentication, APIs, CI/CD pipelines,
              cloud infrastructure, monitoring, and long-term application maintenance.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-2xl md:text-3xl font-medium text-foreground tracking-[-0.02em] max-w-2xl">
              "We <span className="text-brand-orange">grow with passion</span>, and build{" "}
              <span className="text-primary">dependable products</span> together."
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-5 space-y-4">
          {[
            {
              role: "Product Engineering",
              desc: "Frontend, backend, architecture, infrastructure, and delivery.",
            },
            {
              role: "Project Delivery",
              desc: "Planning, execution, communication, launch, and ongoing support.",
            },
          ].map((m, i) => (
            <Reveal
              key={m.role}
              delay={0.15 + i * 0.1}
              className="rounded-2xl border border-border/60 bg-card/40 p-7 hover:border-primary/40 transition-colors"
            >
              <p className="text-[10px] uppercase tracking-[0.22em] text-primary">Team</p>
              <h4 className="mt-3 text-xl font-medium text-foreground tracking-[-0.01em]">
                {m.role}
              </h4>
              <p className="mt-2 text-sm text-muted-foreground font-light">{m.desc}</p>
            </Reveal>
          ))}

          <Reveal delay={0.4} className="rounded-2xl border border-border/60 bg-card/40 p-7">
            <ul className="space-y-3 text-sm text-foreground/80">
              {[
                "Full-lifecycle ownership",
                "Backend foundations included",
                "Launch and maintenance support",
                "India-first, globally available",
              ].map((p) => (
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
  const [form, setForm] = useState({ name: "", email: "", message: "", companyWebsite: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    try {
      await submitContact({ data: form });
      setStatus("sent");
      setForm({ name: "", email: "", message: "", companyWebsite: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="relative bg-hero-bg px-6 md:px-10 py-28 md:py-40 border-t border-border/40"
    >
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
            Grow with Passion
          </p>
        </Reveal>

        <Reveal delay={0.3} as="form" className="mt-12 text-left space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="contact-name"
              className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground"
            >
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              minLength={2}
              maxLength={100}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="mt-2 w-full bg-transparent border-b border-border/60 focus:border-primary outline-none py-3 text-foreground placeholder:text-muted-foreground/40 transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="contact-email"
              className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground"
            >
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="mt-2 w-full bg-transparent border-b border-border/60 focus:border-primary outline-none py-3 text-foreground placeholder:text-muted-foreground/40 transition-colors"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label
              htmlFor="contact-message"
              className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              required
              minLength={20}
              maxLength={5000}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-2 w-full bg-transparent border-b border-border/60 focus:border-primary outline-none py-3 text-foreground placeholder:text-muted-foreground/40 transition-colors resize-none"
              placeholder="Tell us about your project"
            />
          </div>
          <div className="absolute -left-[10000px]" aria-hidden="true">
            <label htmlFor="company-website">Company website</label>
            <input
              id="company-website"
              name="companyWebsite"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={form.companyWebsite}
              onChange={(e) => setForm({ ...form, companyWebsite: e.target.value })}
            />
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center gap-4">
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-[12px] uppercase tracking-[0.18em] font-medium transition-all duration-300 hover:brightness-110 hover:scale-[1.03]"
            >
              {status === "sending" ? "Sending…" : "Send Enquiry"}
            </button>
            <a
              href="mailto:hello@yramp.com"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              hello@yramp.com
            </a>
          </div>
          <p
            aria-live="polite"
            className={`text-sm ${status === "error" ? "text-destructive" : "text-primary"}`}
          >
            {status === "sent" &&
              "Thank you. Your message was sent, and an acknowledgment is on its way."}
            {status === "error" &&
              "We couldn't send your message. Please email hello@yramp.com directly."}
          </p>
          <p className="text-xs text-muted-foreground">
            By sending this form, you agree to our{" "}
            <a href="/privacy" className="underline hover:text-primary">
              Privacy Policy
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/40 px-6 md:px-10 py-10 bg-hero-bg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        <p>© {new Date().getFullYear()} Y-RAMP Technologies LLP</p>
        <p className="tracking-[0.22em] text-foreground/70">Grow with Passion</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/privacy" className="hover:text-primary">
            Privacy
          </a>
          <a href="/terms" className="hover:text-primary">
            Terms
          </a>
          <a href="/legal-notice" className="hover:text-primary">
            Legal Notice
          </a>
        </div>
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
              background: "linear-gradient(to right, hsl(0 0% 6% / 0.6) 0%, transparent 50%)",
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
                Your ambition, built to grow.
              </p>

              <p
                className="mt-5 text-muted-foreground font-light max-w-xl leading-relaxed animate-fade-up"
                style={{
                  fontSize: "clamp(0.875rem, 1vw, 1rem)",
                  animationDelay: "0.55s",
                }}
              >
                Y-RAMP partners with founders and growing businesses to turn bold ideas into digital
                products people value. From the first conversation to launch and beyond, we bring
                thoughtful strategy, purposeful design, and dependable delivery together to help
                your business move forward with confidence.
              </p>

              <div
                className="mt-8 flex flex-col sm:flex-row gap-3 animate-fade-up"
                style={{ animationDelay: "0.7s" }}
              >
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center bg-primary text-primary-foreground px-7 py-3.5 rounded-full text-[12px] uppercase tracking-[0.18em] font-medium transition-all duration-300 hover:brightness-110 hover:scale-[1.03]"
                >
                  Start a Project
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center bg-foreground text-background px-7 py-3.5 rounded-full text-[12px] uppercase tracking-[0.18em] font-medium transition-all duration-300 hover:bg-foreground/90 hover:scale-[1.03]"
                >
                  Meet Mangalya
                </a>
              </div>

              <p
                className="mt-8 text-[11px] uppercase tracking-[0.22em] text-muted-foreground/80 animate-fade-up flex items-center gap-3"
                style={{ animationDelay: "0.85s" }}
              >
                <span className="inline-block w-6 h-px bg-brand-orange/70" />
                Grow with Passion
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
