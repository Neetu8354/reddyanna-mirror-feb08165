import { Link } from "react-router-dom";
import { Radio } from "lucide-react";

const matches = [
  { league: "IPL 2026", time: "12.4 ov", a: "MI", b: "CSK", oa: "1.85", ob: "2.10" },
  { league: "T20I Series", time: "8.2 ov", a: "IND", b: "AUS", oa: "1.65", ob: "2.30" },
  { league: "BBL", time: "15.1 ov", a: "SYD", b: "MEL", oa: "2.10", ob: "1.75" },
  { league: "Asia Cup", time: "5.3 ov", a: "PAK", b: "SL", oa: "1.95", ob: "1.92" },
  { league: "PSL Live", time: "11.0 ov", a: "KAR", b: "LAH", oa: "2.40", ob: "1.60" },
  { league: "Test Match", time: "Day 3", a: "ENG", b: "NZ", oa: "2.05", ob: "1.85" },
];

export const LiveBetting = () => (
  <section id="live" className="bg-secondary/40 py-16 md:py-24">
    <div className="container">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-destructive md:text-sm">
            <Radio className="h-3.5 w-3.5 animate-pulse" /> Live Now
          </p>
          <h2 className="mt-2 text-3xl font-black md:text-4xl">In-play cricket markets</h2>
        </div>
        <Link to="/games/cricket" className="hidden text-sm font-semibold text-primary hover:underline md:block">
          View all cricket games →
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {matches.map((m) => (
          <Link key={`${m.a}-${m.b}`} to="/games/cricket"
            className="group rounded-2xl border border-border bg-card p-4 shadow-card transition-all hover:-translate-y-0.5 hover:border-primary/40">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-emerald">{m.league}</span>
              <span className="text-muted-foreground">{m.time}</span>
            </div>
            <div className="my-3 flex items-center justify-center gap-3 text-lg font-bold">
              <span>{m.a}</span><span className="text-xs text-muted-foreground">vs</span><span>{m.b}</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-lg border border-border bg-secondary py-2 text-center text-sm font-bold transition-colors group-hover:border-primary/50 group-hover:text-primary">{m.oa}</div>
              <div className="rounded-lg border border-border bg-secondary py-2 text-center text-sm font-bold transition-colors group-hover:border-primary/50 group-hover:text-primary">{m.ob}</div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link to="/games/cricket" className="inline-flex items-center gap-2 rounded-xl bg-gradient-gold px-7 py-3.5 font-bold text-primary-foreground shadow-glow-gold transition-transform hover:scale-105">
          View All Cricket Games →
        </Link>
      </div>
    </div>
  </section>
);
