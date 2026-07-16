import heroBg from "@/assets/hero-cricket.jpg";
import { WHATSAPP_LINK } from "@/lib/links";
import { Link } from "react-router-dom";
import { ChevronRight, Shield, Trophy, Zap, Star } from "lucide-react";

export const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden">
      <img src={heroBg} alt="Cricket betting and live casino platform background" title="Cricket betting and live casino platform background" width={1920} height={1088} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/60" />

      <div className="container relative z-10 flex min-h-[640px] flex-col items-center justify-center py-20 text-center md:py-28">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary md:text-sm">
          <Trophy className="h-4 w-4" /> 200% Welcome Bonus · Up to ₹20,000
        </span>

        <h1 className="max-w-4xl text-4xl font-black leading-[1.05] md:text-6xl lg:text-7xl">
          Reddy Anna <span className="text-gradient-hero">Cricket Betting ID</span> & Online Casino Platform in India
        </h1>

        <p className="mt-6 max-w-3xl text-base text-muted-foreground md:text-lg">
          Join Reddy Anna and experience online cricket betting, live casino games, <Link to="/games/teen-patti" className="text-primary hover:underline">Teen Patti</Link>, <Link to="/games/aviator" className="text-primary hover:underline">Aviator</Link>, and sports betting on a single platform. Get fast UPI deposits and withdrawals, competitive odds, live match markets, and a smooth mobile betting experience. Whether you enjoy <Link to="/games/cricket" className="text-primary hover:underline">IPL betting</Link>, international cricket, <Link to="/games/casino" className="text-primary hover:underline">live casino tables</Link>, or popular card games, Reddy Anna provides access to multiple gaming options with secure transactions and round-the-clock support.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-gradient-gold px-7 py-3.5 font-bold text-primary-foreground shadow-glow-gold transition-transform hover:scale-105">
            Get Your ID on WhatsApp <ChevronRight className="h-4 w-4" />
          </a>
          <Link to="/games/cricket" className="inline-flex items-center gap-2 rounded-xl border border-primary/60 bg-background/40 px-7 py-3.5 font-bold text-primary backdrop-blur transition-colors hover:bg-primary/10">
            Explore Cricket Games
          </Link>
        </div>

        <div className="mt-12 grid w-full max-w-3xl grid-cols-2 gap-3 md:grid-cols-4">
          {[
            { icon: Trophy, label: "₹50Cr+ paid" },
            { icon: Zap, label: "10-min payouts" },
            { icon: Shield, label: "Licensed & secure" },
            { icon: Star, label: "4.8/5 rating" },
          ].map((s) => (
            <div key={s.label} className="flex items-center justify-center gap-2 rounded-xl border border-border bg-card/60 px-3 py-3 text-xs font-semibold backdrop-blur md:text-sm">
              <s.icon className="h-4 w-4 text-primary" /> {s.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
