import { useEffect, useState } from "react";
import promoIpl from "@/assets/promo-ipl.jpg";
import promoCasino from "@/assets/promo-casino.jpg";
import promoBonus from "@/assets/promo-bonus.jpg";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { img: promoIpl, eyebrow: "IPL 2026 Special", title: "Bet Live on Every Ball", desc: "Real-time odds across the IPL season. Cashback on losing bets up to ₹5,000.", cta: "Bet on IPL", link: "/games/cricket" },
  { img: promoBonus, eyebrow: "Welcome Offer", title: "200% Match Bonus + 50 Free Spins", desc: "Triple your first deposit up to ₹20,000 and get 50 free spins on Neon 777.", cta: "Claim Bonus", link: "/games" },
  { img: promoCasino, eyebrow: "Live Casino", title: "Royal Roulette & Teen Patti Tables", desc: "Play with live dealers 24/7. Multipliers up to 500x on Lightning Roulette.", cta: "Play Live", link: "/games/casino" },
];

export const PromoSlider = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <section id="promotions" className="container -mt-12 relative z-20 md:-mt-16">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-card">
        <div className="relative aspect-[21/9] md:aspect-[21/8]">
          {slides.map((s, idx) => (
            <div key={idx} className={`absolute inset-0 transition-opacity duration-700 ${idx === i ? "opacity-100" : "opacity-0"}`}>
              <img src={s.img} alt={`${s.title} - ${s.eyebrow} promotion at Reddy Anna`} title={`${s.title} - ${s.eyebrow} promotion at Reddy Anna`} width={1920} height={768} loading={idx === 0 ? "eager" : "lazy"} decoding="async" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="container max-w-2xl">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary md:text-sm">{s.eyebrow}</span>
                  <h3 className="mt-2 text-2xl font-black leading-tight md:text-4xl lg:text-5xl">{s.title}</h3>
                  <p className="mt-3 hidden max-w-md text-sm text-muted-foreground md:block md:text-base">{s.desc}</p>
                  <Link to={s.link} className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-gold px-6 py-3 text-sm font-bold text-primary-foreground shadow-glow-gold md:text-base">
                    {s.cta} <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button onClick={() => setI((i - 1 + slides.length) % slides.length)} aria-label="Previous slide" className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-background/60 p-2 text-foreground backdrop-blur hover:bg-background/90 md:left-5">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button onClick={() => setI((i + 1) % slides.length)} aria-label="Next slide" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-background/60 p-2 text-foreground backdrop-blur hover:bg-background/90 md:right-5">
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2 md:bottom-5">
          {slides.map((_, idx) => (
            <button key={idx} onClick={() => setI(idx)} aria-label={`Go to slide ${idx + 1}`} className={`h-2 rounded-full transition-all ${idx === i ? "w-8 bg-primary" : "w-2 bg-foreground/40"}`} />
          ))}
        </div>
      </div>
    </section>
  );
};
