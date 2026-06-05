import { Star } from "lucide-react";
import { Link } from "react-router-dom";

export type Game = {
  img: string;
  title: string;
  category: string;
  rtp?: string;
  rating: number;
  desc: string;
  badges: ("Hot" | "New" | "High Payout" | "Live")[];
  link?: string;
};

const badgeStyles: Record<string, string> = {
  Hot: "bg-destructive/15 text-destructive border-destructive/30",
  New: "bg-emerald/15 text-emerald border-emerald/30",
  "High Payout": "bg-primary/15 text-primary border-primary/30",
  Live: "bg-whatsapp/15 text-whatsapp border-whatsapp/30",
};

const getGameLink = (title: string): string => {
  if (title.toLowerCase().includes("cricket") || title.toLowerCase().includes("ipl") || title.toLowerCase().includes("t20") || title.toLowerCase().includes("test")) {
    return "/games/cricket";
  }
  if (title.toLowerCase().includes("teen patti")) {
    return "/games/teen-patti";
  }
  if (title.toLowerCase().includes("aviator")) {
    return "/games/aviator";
  }
  if (title.toLowerCase().includes("roulette") || title.toLowerCase().includes("poker") || title.toLowerCase().includes("andar") || title.toLowerCase().includes("blackjack") || title.toLowerCase().includes("slots")) {
    return "/games/casino";
  }
  return "/games/casino";
};

export const GameCard = ({ game }: { game: Game }) => {
  const link = game.link || getGameLink(game.title);
  return (
  <Link
    to={link}
    className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-gradient-card shadow-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow-gold"
  >
    <div className="relative aspect-[4/3] overflow-hidden">
      <img src={game.img} alt={`${game.title} - ${game.category} game at Reddy Anna`} width={1024} height={768} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
        {game.badges.map((b) => (
          <span key={b} className={`rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider backdrop-blur ${badgeStyles[b]}`}>{b}</span>
        ))}
      </div>
    </div>
    <div className="flex flex-1 flex-col gap-2 p-4">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-bold">{game.title}</h3>
        <span className="flex shrink-0 items-center gap-1 text-sm font-semibold text-primary">
          <Star className="h-3.5 w-3.5 fill-primary" /> {game.rating}
        </span>
      </div>
      <p className="line-clamp-2 text-sm text-muted-foreground">{game.desc}</p>
      <div className="mt-2 flex items-center justify-between border-t border-border pt-3">
        <span className="text-xs text-muted-foreground">{game.category}{game.rtp ? ` · RTP ${game.rtp}` : ""}</span>
        <span className="rounded-lg bg-gradient-gold px-3 py-1 text-xs font-bold text-primary-foreground">Play</span>
      </div>
    </div>
  </Link>
  );
};
