import { Link } from "react-router-dom";

export const CTABanner = () => (
  <section className="container py-16 md:py-20">
    <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-card p-8 text-center shadow-glow-gold md:p-14">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-emerald/10" />
      <div className="relative">
        <h2 className="text-3xl font-black md:text-5xl">Ready to win <span className="text-gradient-gold">big on cricket?</span></h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Get your Reddyanaa ID instantly on WhatsApp. ₹20,000 welcome bonus waiting.</p>
        <Link to="/games" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-gold px-8 py-4 text-base font-bold text-primary-foreground shadow-glow-gold transition-transform hover:scale-105 md:text-lg">
          Explore All Games →
        </Link>
      </div>
    </div>
  </section>
);
