import { ReactNode } from "react";
import { PageShell } from "@/components/PageShell";
import { useSeo, breadcrumbLd, SITE_URL } from "@/lib/seo";
import { WHATSAPP_LINK } from "@/lib/links";
import { ChevronRight, Star } from "lucide-react";

export type GamePageProps = {
  slug: string;
  name: string; // e.g. "Cricket Betting"
  imgSrc: string;
  imgAlt: string;
  title: string; // <title>
  description: string; // meta description
  keywords: string;
  hero: { eyebrow: string; h1: ReactNode; lead: string };
  intro: ReactNode;
  features: { title: string; desc: string }[];
  howToSteps: string[];
  faqs: { q: string; a: string }[];
};

export const GamePageLayout = ({
  slug, name, imgSrc, imgAlt, title, description, keywords, hero, intro, features, howToSteps, faqs,
}: GamePageProps) => {
  useSeo({
    title,
    description,
    path: `/games/${slug}`,
    keywords,
    ogImage: `${SITE_URL}/android-chrome-512x512.png`,
    jsonLd: [
      breadcrumbLd([
        { name: "Home", path: "/" },
        { name: "Games", path: "/#games" },
        { name, path: `/games/${slug}` },
      ]),
      {
        "@context": "https://schema.org",
        "@type": "Game",
        name,
        url: `${SITE_URL}/games/${slug}`,
        description,
        image: `${SITE_URL}/android-chrome-512x512.png`,
        publisher: { "@type": "Organization", name: "Reddyanaa", url: SITE_URL },
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "1284", bestRating: "5" },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: `How to play ${name} on Reddyanaa`,
        step: howToSteps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: `Step ${i + 1}`, text: s })),
      },
    ],
  });

  return (
    <PageShell crumbs={[
      { name: "Home", path: "/" },
      { name: "Games", path: "/#games" },
      { name, path: `/games/${slug}` },
    ]}>
      <section className="relative overflow-hidden">
        <img src={imgSrc} alt={imgAlt} width={1920} height={1088} fetchPriority="high" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/40" />
        <div className="container relative z-10 py-16 md:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary md:text-sm">
            {hero.eyebrow}
          </span>
          <h1 className="mt-4 max-w-3xl text-4xl font-black leading-[1.05] md:text-6xl">{hero.h1}</h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">{hero.lead}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-gradient-gold px-7 py-3.5 font-bold text-primary-foreground shadow-glow-gold transition-transform hover:scale-105">
              Play Now <ChevronRight className="h-4 w-4" />
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-primary/60 bg-background/40 px-7 py-3.5 font-bold text-primary backdrop-blur transition-colors hover:bg-primary/10">
              Get free cricket ID
            </a>
          </div>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs font-semibold backdrop-blur md:text-sm">
            <Star className="h-4 w-4 fill-primary text-primary" /> 4.8 / 5 · 1,284 player reviews
          </div>
        </div>
      </section>

      <section className="container py-12 md:py-16">
        <div className="prose prose-invert max-w-3xl text-muted-foreground md:text-lg">{intro}</div>
      </section>

      <section className="bg-secondary/40 py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-black md:text-4xl">Why play {name} on Reddyanaa</h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <article key={f.title} className="rounded-2xl border border-border bg-gradient-card p-6 shadow-card">
                <h3 className="text-lg font-bold text-primary">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <h2 className="text-3xl font-black md:text-4xl">How to play {name} on reddyannasite.live</h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-2">
          {howToSteps.map((s, i) => (
            <li key={i} className="flex gap-4 rounded-2xl border border-border bg-card p-5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-gold font-black text-primary-foreground">{i + 1}</span>
              <p className="text-sm text-foreground md:text-base">{s}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-secondary/40 py-16 md:py-24">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-black md:text-4xl">{name} FAQs</h2>
          <div className="mt-6 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-border bg-card p-5">
                <summary className="cursor-pointer text-base font-semibold hover:text-primary">{f.q}</summary>
                <p className="mt-3 text-sm text-muted-foreground md:text-base">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="container pb-20">
        <div className="rounded-3xl border border-primary/40 bg-gradient-card p-8 text-center shadow-glow-gold md:p-12">
          <h2 className="text-3xl font-black md:text-4xl">Start playing {name} now</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Claim your 200% welcome bonus and get your Reddyanaa ID instantly on WhatsApp.</p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-xl bg-gradient-gold px-7 py-3.5 font-bold text-primary-foreground shadow-glow-gold transition-transform hover:scale-105">
            Get my Reddyanaa ID →
          </a>
        </div>
      </section>
    </PageShell>
  );
};
