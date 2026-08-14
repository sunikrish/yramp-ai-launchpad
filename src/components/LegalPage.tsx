import type { ReactNode } from "react";

export function LegalPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-hero-bg px-6 py-16 md:px-10 md:py-24">
      <article className="mx-auto max-w-3xl text-foreground">
        <a href="/" className="text-sm text-primary hover:underline">
          ← Back to Y-RAMP
        </a>
        <p className="mt-12 text-[11px] uppercase tracking-[0.22em] text-primary">
          Y-RAMP Technologies LLP
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">{title}</h1>
        <p className="mt-6 text-lg leading-relaxed text-foreground/75">{intro}</p>
        <p className="mt-4 text-sm text-muted-foreground">Effective date: 14 August 2026</p>
        <div className="legal-content mt-12 space-y-8 text-sm leading-7 text-foreground/75">
          {children}
        </div>
      </article>
    </main>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 text-xl font-medium text-foreground">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
