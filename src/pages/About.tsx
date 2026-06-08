import { PageShell } from "@/components/PageShell";
import { useSeo, breadcrumbLd, SITE_URL } from "@/lib/seo";
import { WHATSAPP_LINK } from "@/lib/links";
import { Shield, Trophy, Zap, Users, Heart, Award } from "lucide-react";

const values = [
  { icon: Shield, title: "Player-first security", desc: "TLS encryption, certified RNGs and segregated funds keep every rupee safe on reddyannasite.live." },
  { icon: Zap, title: "Lightning-fast payouts", desc: "10-minute UPI withdrawals — no hidden delays, no manual reviews for verified players." },
  { icon: Trophy, title: "Built for cricket India", desc: "Live IPL, T20 and international markets curated for Indian players, in INR." },
  { icon: Users, title: "Real human support", desc: "24/7 WhatsApp support — talk to a real person, never a bot." },
  { icon: Heart, title: "Responsible gaming", desc: "Self-exclusion, deposit limits and reality checks built into every account." },
  { icon: Award, title: "Licensed & audited", desc: "Independently audited operations and licensed gaming partners only." },
];

const About = () => {
  useSeo({
    title: "About Reddyanaa | India's Trusted Cricket Betting & Casino Brand",
    description: "Learn about Reddyanaa — India's #1 cricket betting and live casino platform. Licensed, secure, 10-min UPI payouts and 24/7 WhatsApp support on reddyannasite.live.",
    path: "/about",
    keywords: "about reddyanaa, reddyanna online, cricket betting site India, trusted online casino India, reddyanna company",
    ogImage: `${SITE_URL}/android-chrome-512x512.png`,
    jsonLd: [
      breadcrumbLd([
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
      ]),
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: "About Reddyanaa",
        url: `${SITE_URL}/about`,
        about: {
          "@type": "Organization",
          name: "Reddyanaa",
          url: SITE_URL,
          sameAs: ["https://wa.link/reddyanna_"],
        },
      },
    ],
  });

  return (
    <PageShell crumbs={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]}>
      <section className="container py-12 md:py-20">
        <p className="text-xs font-bold uppercase tracking-widest text-primary md:text-sm">About Us</p>
        <h1 className="mt-2 max-w-3xl text-4xl font-black leading-tight md:text-5xl">
          About <span className="text-gradient-gold">Reddyanaa</span> — India's most trusted cricket betting & live casino platform
        </h1>
        <p className="mt-5 max-w-2xl text-muted-foreground md:text-lg">
          Reddyanaa.online was built for one mission: give Indian cricket fans a safe, fast and fair place to bet on the sport they love and play the casino classics they grew up with.
          From IPL and T20 World Cup markets to Teen Patti, Andar Bahar, Aviator and live roulette — every game on Reddyanaa is curated, audited and tuned for Indian players.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            { k: "1L+", v: "active players" },
            { k: "₹50Cr+", v: "paid out" },
            { k: "1,000+", v: "premium games" },
            { k: "10 min", v: "average payout" },
          ].map((s) => (
            <div key={s.v} className="rounded-2xl border border-border bg-card/60 p-5 text-center">
              <div className="text-2xl font-black text-primary md:text-3xl">{s.k}</div>
              <div className="mt-1 text-xs text-muted-foreground md:text-sm">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-black md:text-4xl">Our story</h2>
          <div className="mt-5 grid gap-6 text-muted-foreground md:grid-cols-2 md:text-lg">
            <p>
              Reddyanaa started with a simple frustration: Indian players deserved better than slow withdrawals, confusing bonuses and clunky interfaces.
              We built reddyannasite.live from the ground up around UPI-first payments, INR wallets, real human support on WhatsApp, and live cricket markets that update in real time.
            </p>
            <p>
              Today Reddyanaa is one of India's fastest-growing real-money gaming brands — trusted by over a lakh active players across Mumbai, Delhi, Bangalore, Hyderabad, Chennai and beyond.
              Every game is provably fair, every payout is processed in minutes, and every player gets the same VIP-grade support.
            </p>
          </div>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <h2 className="text-3xl font-black md:text-4xl">What we stand for</h2>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <article key={v.title} className="rounded-2xl border border-border bg-gradient-card p-6 shadow-card">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container py-12">
        <h2 className="text-2xl font-black md:text-3xl">Popular Guides & Games</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <a href="/blogblog/how-to-get-cricket-id-online-india" className="rounded-xl border border-primary/20 bg-gradient-card p-4 transition-all hover:border-primary/40 hover:shadow-glow-gold">
            <h3 className="font-semibold text-lg">How to Get Cricket ID Online in India</h3>
            <p className="mt-2 text-sm text-muted-foreground">Step-by-step guide to get your cricket betting ID via WhatsApp</p>
          </a>
          <a href="/games/cricket" className="rounded-xl border border-primary/20 bg-gradient-card p-4 transition-all hover:border-primary/40 hover:shadow-glow-gold">
            <h3 className="font-semibold text-lg">Live Cricket Betting</h3>
            <p className="mt-2 text-sm text-muted-foreground">Bet on IPL, T20 and international cricket matches</p>
          </a>
          <a href="/games/teen-patti" className="rounded-xl border border-primary/20 bg-gradient-card p-4 transition-all hover:border-primary/40 hover:shadow-glow-gold">
            <h3 className="font-semibold text-lg">Teen Patti Online</h3>
            <p className="mt-2 text-sm text-muted-foreground">Play India's favourite card game with live dealers</p>
          </a>
          <a href="/games/aviator" className="rounded-xl border border-primary/20 bg-gradient-card p-4 transition-all hover:border-primary/40 hover:shadow-glow-gold">
            <h3 className="font-semibold text-lg">Aviator Game</h3>
            <p className="mt-2 text-sm text-muted-foreground">Crash game with multipliers up to 1000x</p>
          </a>
          <a href="/games/casino" className="rounded-xl border border-primary/20 bg-gradient-card p-4 transition-all hover:border-primary/40 hover:shadow-glow-gold">
            <h3 className="font-semibold text-lg">Live Casino</h3>
            <p className="mt-2 text-sm text-muted-foreground">1000+ live casino games with real dealers</p>
          </a>
          <a href="/blogblog/best-online-casino-india-real-money" className="rounded-xl border border-primary/20 bg-gradient-card p-4 transition-all hover:border-primary/40 hover:shadow-glow-gold">
            <h3 className="font-semibold text-lg">Best Online Casino India</h3>
            <p className="mt-2 text-sm text-muted-foreground">Complete guide to online casinos in India</p>
          </a>
        </div>
      </section>

      <section className="container pb-20">
        <div className="rounded-3xl border border-primary/40 bg-gradient-card p-8 text-center shadow-glow-gold md:p-12">
          <h2 className="text-3xl font-black md:text-4xl">Ready to join Reddyanaa?</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Get your free cricket ID instantly on WhatsApp and claim your 200% welcome bonus on reddyannasite.live.</p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-xl bg-gradient-gold px-7 py-3.5 font-bold text-primary-foreground shadow-glow-gold transition-transform hover:scale-105">
            Get my Reddyanaa ID →
          </a>
        </div>
      </section>
    </PageShell>
  );
};

export default About;
