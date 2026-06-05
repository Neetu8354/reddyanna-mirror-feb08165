import { useParams, Link, Navigate } from "react-router-dom";
import { PageShell } from "@/components/PageShell";
import { useSeo, breadcrumbLd, SITE_URL } from "@/lib/seo";
import { WHATSAPP_LINK } from "@/lib/links";
import { getCity, CITIES } from "@/data/cities";
import { ChevronRight, Star, MapPin, Zap, Shield } from "lucide-react";
import cricketIpl from "@/assets/game-cricket-ipl.jpg";

const CityPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const city = slug ? getCity(slug) : undefined;

  if (!city) return <Navigate to="/404" replace />;

  const path = `/cricket-id/${city.slug}`;
  const title = `Cricket ID in ${city.city} | Online Betting ID via WhatsApp | Reddyanaa`;
  const description = `Get your online cricket ID in ${city.city} in 2 minutes. ${city.iplTeam ? city.iplTeam + " markets, " : ""}live IPL odds, instant UPI payouts to all ${city.state} banks. 200% welcome bonus.`;
  const keywords = `cricket id ${city.city.toLowerCase()}, online betting id ${city.city.toLowerCase()}, ipl betting ${city.city.toLowerCase()}, ${city.city.toLowerCase()} cricket id whatsapp, betting site ${city.state.toLowerCase()}`;

  const faqs = [
    { q: `How do I get a cricket ID in ${city.city}?`, a: `Tap the WhatsApp button on reddyannasite.live, send 'Hi', share your name and pay ₹100 via UPI. Your ${city.city} cricket ID is ready in under 2 minutes.` },
    { q: `Which banks work for UPI deposits in ${city.city}?`, a: city.upiNote },
    { q: `Is online cricket betting legal in ${city.city}?`, a: `Reddyanaa operates via licensed offshore exchanges that legally accept Indian players. ${city.city} players must be 18+ and follow ${city.state} state laws.` },
    { q: `How fast are withdrawals to a ${city.city} bank account?`, a: `Verified Reddyanaa accounts in ${city.city} get UPI withdrawals in under 10 minutes, IMPS/NEFT same day.` },
    { q: `Can I bet on ${city.iplTeam || "my IPL team"} live?`, a: `Yes — every ${city.iplTeam || "IPL"} match on Reddyanaa has full in-play markets including next ball, next wicket, top batsman and session bets.` },
  ];

  useSeo({
    title,
    description,
    path,
    keywords,
    ogImage: `${SITE_URL}/android-chrome-512x512.png`,
    jsonLd: [
      breadcrumbLd([
        { name: "Home", path: "/" },
        { name: "Cricket ID", path: "/cricket-id/mumbai" },
        { name: city.city, path },
      ]),
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: `Reddyanaa Cricket ID — ${city.city}`,
        url: `${SITE_URL}${path}`,
        image: `${SITE_URL}/android-chrome-512x512.png`,
        description,
        areaServed: { "@type": "City", name: city.city },
        address: { "@type": "PostalAddress", addressLocality: city.city, addressRegion: city.state, addressCountry: "IN" },
        priceRange: "₹100 – ₹10,00,000",
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
    ],
  });

  const otherCities = CITIES.filter((c) => c.slug !== city.slug);

  return (
    <PageShell crumbs={[
      { name: "Home", path: "/" },
      { name: "Cricket ID", path: `/cricket-id/${CITIES[0].slug}` },
      { name: city.city, path },
    ]}>
      <section className="relative overflow-hidden">
        <img src={cricketIpl} alt={`Online cricket ID in ${city.city} — IPL betting on Reddyanaa`} width={1920} height={1088} fetchPriority="high" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/40" />
        <div className="container relative z-10 py-16 md:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary md:text-sm">
            <MapPin className="h-3.5 w-3.5" /> {city.city}, {city.state}
          </span>
          <h1 className="mt-4 max-w-3xl text-4xl font-black leading-[1.05] md:text-6xl">
            Get your <span className="text-gradient-gold">cricket ID in {city.city}</span> in 2 minutes
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">{city.localLine}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-gradient-gold px-7 py-3.5 font-bold text-primary-foreground shadow-glow-gold transition-transform hover:scale-105">
              Get my {city.city} cricket ID <ChevronRight className="h-4 w-4" />
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-primary/60 bg-background/40 px-7 py-3.5 font-bold text-primary backdrop-blur transition-colors hover:bg-primary/10">
              Chat on WhatsApp
            </a>
          </div>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs font-semibold backdrop-blur md:text-sm">
            <Star className="h-4 w-4 fill-primary text-primary" /> 4.8 / 5 · trusted by {city.city} players
          </div>
        </div>
      </section>

      <section className="container py-12 md:py-16">
        <div className="prose prose-invert max-w-3xl text-muted-foreground md:text-lg">
          <p>
            Reddyanaa is the most trusted <strong>online cricket ID provider in {city.city}</strong>, serving over 12,000 active players across {city.state}. Whether you're in the heart of the city or the suburbs, you can sign up on WhatsApp, deposit via UPI to any {city.state} bank, and start betting on live IPL{city.iplTeam ? `, ${city.iplTeam}` : ""}, T20 World Cup, Teen Patti and live casino in under two minutes.
          </p>
          <p className="mt-4">
            Every {city.city} cricket ID comes with a 200% welcome bonus up to ₹20,000, 24×7 Hindi & English WhatsApp support, and the fastest UPI withdrawals in the city — most cashouts land in under 10 minutes.
          </p>
        </div>
      </section>

      <section className="bg-secondary/40 py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-black md:text-4xl">Why {city.city} players choose Reddyanaa</h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Zap, title: "Instant UPI to all banks", desc: city.upiNote },
              { icon: Star, title: city.iplTeam ? `Best ${city.iplTeam} odds` : "Best IPL odds", desc: `Live in-play markets on every ${city.iplTeam || "IPL"} match — runs, wickets, top batsman, sessions and fancy bets.` },
              { icon: Shield, title: "Licensed & secure", desc: `Operating via licensed offshore exchanges with SSL encryption and KYC compliance for ${city.state} players.` },
              { icon: MapPin, title: "Local Hindi & English support", desc: `24×7 WhatsApp chat from agents who understand ${city.city} players' needs and banking.` },
              { icon: Zap, title: "₹100 minimum deposit", desc: `Start small — every ${city.city} cricket ID can deposit from just ₹100 via UPI, IMPS, NEFT or crypto.` },
              { icon: Star, title: `Top games in ${city.city}`, desc: `Most-played by ${city.city} users: ${city.topGames.join(", ")}.` },
            ].map((f) => (
              <article key={f.title} className="rounded-2xl border border-border bg-gradient-card p-6 shadow-card">
                <f.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-3 text-lg font-bold text-primary">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <h2 className="text-3xl font-black md:text-4xl">How to get your {city.city} cricket ID</h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            `Tap 'Get my ${city.city} cricket ID' and message us on WhatsApp.`,
            `Share your name and preferred username — no documents needed at signup.`,
            `Deposit ₹100+ via UPI from any ${city.state} bank account.`,
            `Receive your login credentials and 200% welcome bonus instantly.`,
            `Open the live cricket section and bet on ${city.iplTeam || "your favourite IPL team"}.`,
            `Withdraw winnings to your ${city.city} UPI in under 10 minutes.`,
          ].map((s, i) => (
            <li key={i} className="flex gap-4 rounded-2xl border border-border bg-card p-5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-gold font-black text-primary-foreground">{i + 1}</span>
              <p className="text-sm text-foreground md:text-base">{s}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-secondary/40 py-16 md:py-24">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-black md:text-4xl">Cricket ID in {city.city} — FAQs</h2>
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

      <section className="container py-12">
        <h2 className="text-2xl font-black md:text-3xl">Cricket ID in other cities</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {otherCities.map((c) => (
            <Link key={c.slug} to={`/cricket-id/${c.slug}`} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold hover:border-primary hover:text-primary">
              Cricket ID in {c.city}
            </Link>
          ))}
        </div>
      </section>

      <section className="container pb-20">
        <div className="rounded-3xl border border-primary/40 bg-gradient-card p-8 text-center shadow-glow-gold md:p-12">
          <h2 className="text-3xl font-black md:text-4xl">Get your {city.city} cricket ID now</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">200% welcome bonus, instant UPI to any {city.state} bank, 24×7 WhatsApp support.</p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-xl bg-gradient-gold px-7 py-3.5 font-bold text-primary-foreground shadow-glow-gold transition-transform hover:scale-105">
            Get my Reddyanaa ID →
          </a>
        </div>
      </section>
    </PageShell>
  );
};

export default CityPage;
