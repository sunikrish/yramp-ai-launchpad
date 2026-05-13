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
      { title: "YRAMP AI — Modern AI Infrastructure & Security" },
      {
        name: "description",
        content:
          "YRAMP AI builds modern AI infrastructure with zero-trust architecture. Production-ready deployments for real-world operations across Europe.",
      },
      { property: "og:title", content: "YRAMP AI — Modern AI Infrastructure & Security" },
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
      <a href="/" className="text-foreground font-bold tracking-[-0.02em] text-xl">
        YRAMP
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

function Index() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-hero-bg">
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

      <Nav />

      {/* Hero content — bottom left */}
      <section className="relative z-20 h-full flex flex-col justify-end px-6 md:px-10 pb-12 md:pb-16 pointer-events-none">
        <div className="max-w-4xl pointer-events-auto">
          <h1
            className="font-bold uppercase leading-[0.9] tracking-[-0.05em] text-foreground animate-fade-up"
            style={{
              fontSize: "clamp(3.5rem, 14vw, 12rem)",
              animationDelay: "0.2s",
            }}
          >
            YRAMP <span className="text-primary">AI</span>
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
            <button
              className="group inline-flex items-center justify-center bg-primary text-primary-foreground px-7 py-3.5 rounded-full text-[12px] uppercase tracking-[0.18em] font-medium transition-all duration-300 hover:brightness-110 hover:scale-[1.03]"
            >
              Book a Call
            </button>
            <button
              className="inline-flex items-center justify-center bg-foreground text-background px-7 py-3.5 rounded-full text-[12px] uppercase tracking-[0.18em] font-medium transition-all duration-300 hover:bg-foreground/90 hover:scale-[1.03]"
            >
              Our Work
            </button>
          </div>

          <p
            className="mt-8 text-[11px] uppercase tracking-[0.18em] text-muted-foreground/70 animate-fade-up"
            style={{ animationDelay: "0.85s" }}
          >
            Trusted AI systems partner. Europe. Production-ready deployments.
          </p>
        </div>
      </section>
    </main>
  );
}
