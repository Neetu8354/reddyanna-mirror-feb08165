import { Star } from "lucide-react";

const reviews = [
  { quote: "Withdrawals hit my UPI in under 5 minutes. The live cricket markets are unbeatable.", name: "Rahul S.", city: "Mumbai" },
  { quote: "Cleanest interface I've used. The slots are gorgeous and the bonuses actually pay out.", name: "Priya K.", city: "Bangalore" },
  { quote: "I love the Teen Patti tables. Live dealers are professional and the odds are spot on.", name: "Arjun M.", city: "Delhi" },
];

export const Testimonials = () => (
  <section className="bg-secondary/40 py-16 md:py-24">
    <div className="container">
      <div className="mb-10 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-emerald md:text-sm">Player Reviews</p>
        <h2 className="mt-2 text-3xl font-black md:text-4xl">Trusted by 1L+ players in India</h2>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {reviews.map((r) => (
          <div key={r.name} className="rounded-2xl border border-border bg-gradient-card p-6 shadow-card">
            <div className="mb-3 flex gap-0.5 text-primary">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-primary" />)}
            </div>
            <blockquote className="text-base">"{r.quote}"</blockquote>
            <p className="mt-4 text-sm font-semibold">{r.name} <span className="text-muted-foreground font-normal">· {r.city}</span></p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
