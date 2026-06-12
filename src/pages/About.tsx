import { PageShell } from "@/components/PageShell";
import { useSeo, breadcrumbLd, SITE_URL } from "@/lib/seo";
import { WHATSAPP_LINK } from "@/lib/links";
import { Shield, Trophy, Zap, Users, Heart, Award, ChevronDown } from "lucide-react";

const values = [
  { icon: Shield, title: "Trusted Platform", desc: "We strive to create a secure and reliable environment where users can enjoy their favorite sports and casino games with confidence." },
  { icon: Zap, title: "Fast Registration Process", desc: "Getting started is simple and hassle-free, allowing users to access gaming services quickly." },
  { icon: Trophy, title: "User-Friendly Interface", desc: "Our website is optimized for mobile, tablet, and desktop devices, ensuring smooth navigation across all platforms." },
  { icon: Users, title: "Dedicated Customer Support", desc: "Our support team is available to assist users with account-related queries and platform guidance whenever needed." },
  { icon: Heart, title: "Wide Range of Gaming Options", desc: "From cricket betting and live sports to casino games and card games, users can explore multiple entertainment options from a single platform." },
  { icon: Award, title: "Our Commitment", desc: "We are committed to providing a safe, transparent, and enjoyable gaming experience with continuous platform improvements." },
];

const faqs = [
  { q: "What is Reddy Anna Site?", a: "Reddy Anna Site is an online platform that provides access to cricket betting, sports betting, live casino games, Teen Patti, Aviator, and other popular gaming options for users across India." },
  { q: "How can I get a Cricket Betting ID?", a: "You can request a Cricket Betting ID through the registration process on Reddy Anna Site. Once your details are verified, your ID can be activated quickly." },
  { q: "Is Reddy Anna Site suitable for live cricket betting?", a: "Yes, Reddy Anna Site offers access to live cricket betting markets with real-time odds, match updates, and betting opportunities for major tournaments and leagues." },
  { q: "What sports are available for betting?", a: "Users can explore betting markets for cricket, football, tennis, basketball, kabaddi, and various other sports events throughout the year." },
  { q: "What casino games are available on Reddy Anna Site?", a: "The platform provides access to live casino games, Teen Patti, Aviator, Andar Bahar, Dragon Tiger, Roulette, Blackjack, and other popular gaming options." },
  { q: "Can I access Reddy Anna Site on my mobile device?", a: "Yes, the platform is optimized for smartphones, tablets, and desktop devices, allowing users to enjoy a seamless experience across multiple devices." },
  { q: "How do I register on Reddy Anna Site?", a: "Simply visit the registration page, submit the required details, and follow the instructions provided to create your account." },
  { q: "Does Reddy Anna Site provide customer support?", a: "Yes, dedicated customer support is available to assist users with account-related queries, registration assistance, and general platform guidance." },
  { q: "What makes Reddy Anna Site different from other gaming platforms?", a: "Reddy Anna Site focuses on providing a user-friendly experience, multiple gaming options, fast account access, responsive customer support, and a secure platform environment." },
  { q: "Can beginners use Reddy Anna Site?", a: "Yes, both beginners and experienced users can navigate the platform easily. The simple interface and various gaming options make it accessible to all types of users." },
  { q: "Does Reddy Anna Site offer IPL betting opportunities?", a: "Yes, users can access betting markets for major cricket tournaments, including the Indian Premier League (IPL), international matches, and domestic cricket events." },
  { q: "What is the Aviator Game on Reddy Anna Site?", a: "Aviator is a popular online game where players make decisions based on a multiplier that increases over time, creating an exciting and fast-paced gaming experience." },
  { q: "Is account registration quick and easy?", a: "Yes, the registration process is designed to be straightforward, allowing users to get started with minimal steps." },
  { q: "Can I explore both sports betting and casino games with one account?", a: "Yes, users can access a variety of sports betting and casino gaming options through a single account." },
  { q: "Why do users choose Reddy Anna Site?", a: "Users choose Reddy Anna Site for its wide selection of games, live sports betting options, easy navigation, reliable support, and overall gaming experience." },
];

const About = () => {
  useSeo({
    title: "About Reddy Anna Site | India's Leading Gaming & Betting Platform",
    description: "Welcome to Reddy Anna Site — one of India's leading platforms for online cricket betting, sports betting, casino gaming, and live gaming entertainment. Secure, fast, and user-friendly.",
    path: "/about",
    keywords: "about reddy anna site, reddyanna online, cricket betting site India, sports betting India, online casino India, live gaming platform",
    ogImage: `${SITE_URL}/android-chrome-512x512.png`,
    jsonLd: [
      breadcrumbLd([
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
      ]),
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: "About Reddy Anna Site",
        url: `${SITE_URL}/about`,
        about: {
          "@type": "Organization",
          name: "Reddy Anna Site",
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
        <h1 className="mt-2 max-w-4xl text-4xl font-black leading-tight md:text-5xl">
          About <span className="text-gradient-gold">Reddy Anna Site</span>
        </h1>
        <p className="mt-5 max-w-3xl text-muted-foreground md:text-lg">
          Welcome to Reddy Anna Site, one of India's leading platforms for online cricket betting, sports betting, casino gaming, and live gaming entertainment. Our mission is to provide users with a secure, user-friendly, and engaging platform where sports enthusiasts and gaming fans can enjoy a premium online experience.
        </p>
        <p className="mt-4 max-w-3xl text-muted-foreground md:text-lg">
          Since our inception, we have focused on delivering a seamless environment that combines advanced technology, reliable services, and dedicated customer support. Whether you are interested in live cricket betting, football betting, casino games, Teen Patti, Aviator, or other popular online games, Reddy Anna Site offers everything in one convenient platform.
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
          <h2 className="text-3xl font-black md:text-4xl">Our Vision</h2>
          <div className="mt-5 max-w-3xl text-muted-foreground md:text-lg">
            <p>
              Our vision is to become India's most trusted destination for online gaming and sports entertainment by providing innovative features, secure transactions, and exceptional customer service. We continuously improve our platform to meet the evolving needs of our users while maintaining transparency and reliability.
            </p>
          </div>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <h2 className="text-3xl font-black md:text-4xl">What We Offer</h2>
        <p className="mt-4 max-w-3xl text-muted-foreground md:text-lg">
          At Reddy Anna Site, users can access a wide range of gaming and betting opportunities, including:
        </p>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Live Cricket Betting",
            "IPL Betting Markets",
            "Football Betting",
            "Tennis Betting",
            "Online Casino Games",
            "Live Casino Tables",
            "Teen Patti Online",
            "Aviator Game",
            "Andar Bahar",
            "Dragon Tiger",
            "Instant Cricket ID Services",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-xl border border-border bg-card/60 p-4">
              <div className="h-2 w-2 rounded-full bg-primary"></div>
              <span className="font-medium">{item}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-muted-foreground md:text-lg">
          Our platform is designed to provide fast access, smooth gameplay, and real-time updates to enhance the overall user experience.
        </p>
      </section>

      <section className="container py-16 md:py-24">
        <h2 className="text-3xl font-black md:text-4xl">Why Choose Reddy Anna Site?</h2>
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

      <section className="bg-secondary/40 py-16 md:py-24">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-black md:text-4xl">Join the Reddy Anna Community</h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Thousands of users choose Reddy Anna Site for sports betting and online gaming entertainment. Whether you are following your favorite cricket match, exploring live casino games, or enjoying popular card games, our platform is designed to deliver an exciting and convenient experience.
          </p>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Explore the world of online gaming with Reddy Anna Site and discover why we continue to be a preferred choice for users across India.
          </p>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <h2 className="text-3xl font-black md:text-4xl">Frequently Asked Questions (FAQs)</h2>
        <div className="mt-8 max-w-3xl space-y-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="group rounded-2xl border border-border bg-card p-5 shadow-card">
              <summary className="flex cursor-pointer items-center justify-between text-base font-bold">
                {faq.q}
                <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{faq.a}</p>
            </details>
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
