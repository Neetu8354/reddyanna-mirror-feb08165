import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PromoSlider } from "@/components/PromoSlider";
import { FeaturedGames, CricketSection, CasinoSection } from "@/components/GameSections";
import { LiveBetting } from "@/components/LiveBetting";
import { Promotions } from "@/components/Promotions";
import { WhyChoose } from "@/components/WhyChoose";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Reddy Anna Cricket Betting ID | Online Casino, Teen Patti & Aviator";
    const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.content = content;
    };
    setMeta("description", "Get your Reddy Anna Cricket Betting ID and enjoy online cricket betting, live casino games, Teen Patti, Aviator. Fast UPI payouts, 24/7 support. Join now!");
    setMeta("og:title", "Reddy Anna Cricket Betting ID | Online Casino, Teen Patti & Aviator", "property");
    setMeta("og:description", "Get your Reddy Anna Cricket Betting ID and enjoy online cricket betting, live casino games, Teen Patti, Aviator. Fast UPI payouts, 24/7 support. Join now!", "property");
    setMeta("og:type", "website", "property");

    // Inject structured data: Organization + FAQPage + BreadcrumbList
    const ldScripts: HTMLScriptElement[] = [];
    const addLd = (data: Record<string, unknown>) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.text = JSON.stringify(data);
      document.head.appendChild(s);
      ldScripts.push(s);
    };

    addLd({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Reddyanaa",
      alternateName: ["Reddyanna", "Reddy Anna"],
      url: "https://reddyannasite.live/",
      logo: "https://reddyannasite.live/android-chrome-512x512.png",
      description: "Join Reddy Anna and experience online cricket betting, live casino games, Teen Patti, Aviator, and sports betting on a single platform. Get fast UPI deposits and withdrawals, competitive odds, live match markets, and a smooth mobile betting experience.",
      sameAs: ["https://wa.link/reddyanna_"],
      contactPoint: [{
        "@type": "ContactPoint",
        contactType: "customer support",
        availableLanguage: ["English", "Hindi"],
        url: "https://wa.link/reddyanna_",
      }],
    });

    addLd({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Is Reddyanaa safe to play on?", acceptedAnswer: { "@type": "Answer", text: "Yes. All transactions are encrypted with TLS, games use certified RNGs, and player funds are held in segregated accounts." } },
        { "@type": "Question", name: "How fast are withdrawals on Reddyanaa?", acceptedAnswer: { "@type": "Answer", text: "Most withdrawals are processed within 10 minutes for verified accounts using UPI, IMPS, NEFT or crypto." } },
        { "@type": "Question", name: "What is the Reddyanaa welcome bonus?", acceptedAnswer: { "@type": "Answer", text: "New players get a 200% match bonus up to ₹20,000 on their first deposit, plus 50 free spins on Neon 777 Slots." } },
        { "@type": "Question", name: "Can I bet on live IPL & international cricket on Reddyanaa?", acceptedAnswer: { "@type": "Answer", text: "Yes — live in-play markets are available on every IPL match, T20 World Cup, BBL, PSL and major international fixtures." } },
        { "@type": "Question", name: "Which payment methods does Reddyanaa support?", acceptedAnswer: { "@type": "Answer", text: "Reddyanaa supports UPI (PhonePe, Google Pay, Paytm), IMPS, NEFT, Net Banking and major cryptocurrencies." } },
        { "@type": "Question", name: "Does Reddyanaa have a mobile app?", acceptedAnswer: { "@type": "Answer", text: "The full Reddyanaa experience runs in your mobile browser — no download required. Add to home screen for an app-like feel." } },
      ],
    });

    addLd({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://reddyannasite.live/" },
        { "@type": "ListItem", position: 2, name: "Cricket", item: "https://reddyannasite.live/#cricket" },
        { "@type": "ListItem", position: 3, name: "Casino", item: "https://reddyannasite.live/#casino" },
        { "@type": "ListItem", position: 4, name: "Live Betting", item: "https://reddyannasite.live/#live" },
      ],
    });

    return () => { ldScripts.forEach((s) => s.remove()); };
  }, []);

  return (
    <main id="main">
      <Header />
      <Hero />
      <PromoSlider />
      <FeaturedGames />
      <CricketSection />
      <CasinoSection />
      <LiveBetting />
      <Promotions />
      <WhyChoose />
      <Testimonials />
      <FAQ />
      <CTABanner />
      <Footer />
      <WhatsAppChat />
    </main>
  );
};

export default Index;
