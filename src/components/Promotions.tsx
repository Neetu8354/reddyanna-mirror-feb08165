import { Link } from "react-router-dom";
import { Gift, Wallet, Users, Crown } from "lucide-react";
import promoBonus from "@/assets/promo-bonus.jpg";

const offers = [
  { icon: Gift, tag: "Welcome Offer", title: "200% Match Bonus + 50 Free Spins", desc: "Triple your first deposit up to ₹20,000 and get 50 free spins on Neon 777.", link: "/games" },
  { icon: Wallet, tag: "Cashback", title: "10% Weekly Cashback up to ₹5,000", desc: "Get back a slice of every losing week — credited every Monday morning.", link: "/games/casino" },
  { icon: Users, tag: "Referral", title: "Refer & Earn ₹2,000 per friend", desc: "Invite friends, both you and they get instant bonus on first deposit.", link: "/games" },
  { icon: Crown, tag: "VIP Club", title: "Exclusive VIP Perks & Faster Payouts", desc: "Personal manager, custom limits, birthday bonuses and luxury rewards.", link: "/games/casino" },
];

export const Promotions = () => (
  <section className="container py-16 md:py-24">
    <div className="mb-10 text-center">
      <p className="text-xs font-bold uppercase tracking-widest text-primary md:text-sm">Promotions</p>
      <h2 className="mt-2 text-3xl font-black md:text-4xl">Bonuses that <span className="text-gradient-gold">actually pay out</span></h2>
    </div>

    <div className="relative mb-6 overflow-hidden rounded-3xl border border-primary/30 shadow-glow-gold">
      <img src={promoBonus} alt="200% welcome bonus promotion at Reddy Anna" width={1920} height={768} loading="lazy" decoding="async" className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      <div className="absolute inset-0 flex items-center">
        <div className="container max-w-xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Welcome Offer</span>
          <h3 className="mt-2 text-2xl font-black md:text-4xl">200% Match Bonus + 50 Free Spins</h3>
          <p className="mt-3 hidden text-muted-foreground md:block">Triple your first deposit up to ₹20,000 and get 50 free spins on Neon 777.</p>
          <Link to="/games" className="mt-5 inline-flex rounded-xl bg-gradient-gold px-6 py-3 text-sm font-bold text-primary-foreground md:text-base">
            Claim Bonus
          </Link>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
      {offers.map((o) => (
        <Link key={o.title} to={o.link}
          className="group flex flex-col gap-3 rounded-2xl border border-border bg-gradient-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-emerald/40 hover:shadow-glow-emerald">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald/15 text-emerald">
            <o.icon className="h-6 w-6" />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-emerald">{o.tag}</span>
          <h3 className="text-lg font-bold leading-tight">{o.title}</h3>
          <p className="text-sm text-muted-foreground">{o.desc}</p>
          <span className="mt-auto pt-3 text-sm font-bold text-primary">Learn more →</span>
        </Link>
      ))}
    </div>
  </section>
);
