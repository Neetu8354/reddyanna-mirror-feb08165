import { Link } from "react-router-dom";
import { Shield, Zap, Trophy, IndianRupee, Headphones, Smartphone } from "lucide-react";

const features = [
  { icon: Zap, title: "10-Minute UPI Payouts", desc: "Instant withdrawals straight to your UPI, IMPS or bank account." },
  { icon: Shield, title: "Bank-Grade Security", desc: "TLS encryption, certified RNGs and segregated player funds." },
  { icon: Trophy, title: "1,000+ Premium Games", desc: "Live cricket, casino, slots, poker, Teen Patti, Andar Bahar & more." },
  { icon: IndianRupee, title: "INR Wallet & UPI", desc: "Play in rupees with all major Indian payment methods supported." },
  { icon: Headphones, title: "24/7 WhatsApp Support", desc: "Reach a real human on WhatsApp anytime — no bots, no waiting." },
  { icon: Smartphone, title: "Mobile-First Experience", desc: "Buttery smooth on every Android & iPhone — no app needed." },
];

export const WhyChoose = () => (
  <section className="bg-secondary/40 py-16 md:py-24">
    <div className="container">
      <div className="mb-10 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-emerald md:text-sm">Why Reddyanaa</p>
        <h2 className="mt-2 text-3xl font-black md:text-4xl">India's most trusted <span className="text-gradient-gold">cricket & casino</span> platform</h2>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="rounded-2xl border border-border bg-gradient-card p-6 shadow-card">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <f.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link to="/games" className="inline-flex rounded-xl bg-gradient-gold px-7 py-3.5 font-bold text-primary-foreground shadow-glow-gold transition-transform hover:scale-105">
          Explore All Games
        </Link>
      </div>
    </div>
  </section>
);
