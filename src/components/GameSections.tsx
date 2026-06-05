import { GameCard, type Game } from "./GameCard";
import cricketIpl from "@/assets/game-cricket-ipl.jpg";
import cricketT20 from "@/assets/game-cricket-t20.jpg";
import cricketTest from "@/assets/game-cricket-test.jpg";
import roulette from "@/assets/game-roulette.jpg";
import poker from "@/assets/game-poker.jpg";
import slots from "@/assets/game-slots.jpg";
import andarbahar from "@/assets/game-andarbahar.jpg";
import teenpatti from "@/assets/game-teenpatti.jpg";
import blackjack from "@/assets/game-blackjack.jpg";
import aviator from "@/assets/game-aviator.jpg";

const featured: Game[] = [
  { img: cricketIpl, title: "IPL Cricket Live", category: "Cricket", rating: 4.9, desc: "Bet live on every ball with real-time odds across the IPL season.", badges: ["Hot", "Live"] },
  { img: roulette, title: "Lightning Roulette", category: "Casino", rtp: "97.3%", rating: 4.9, desc: "Live dealer roulette with electrified multipliers up to 500x.", badges: ["High Payout", "Hot"] },
  { img: teenpatti, title: "Teen Patti Royal", category: "Casino", rtp: "97.8%", rating: 4.8, desc: "India's favourite three-card game with side bets and jackpots.", badges: ["Hot"] },
  { img: aviator, title: "Aviator", category: "Crash", rtp: "97.0%", rating: 4.8, desc: "Cash out before the plane flies away. Multipliers up to 1000x.", badges: ["New", "Hot"] },
];

export const FeaturedGames = () => (
  <section id="games" className="container py-16 md:py-24">
    <div className="mb-8 flex items-end justify-between">
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-emerald md:text-sm">Featured Games</p>
        <h2 className="mt-2 text-3xl font-black md:text-4xl">Top picks of the week</h2>
      </div>
    </div>
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {featured.map((g) => <GameCard key={g.title} game={g} />)}
    </div>
  </section>
);

const cricketGames: Game[] = [
  { img: cricketIpl, title: "IPL 2026 Live", category: "Cricket", rating: 4.9, desc: "Live in-play markets on every IPL match — runs, wickets, sixes & more.", badges: ["Hot", "Live"] },
  { img: cricketT20, title: "T20 World Cup", category: "Cricket", rating: 4.8, desc: "Outright winners, top batsman & top bowler markets. Boosted odds.", badges: ["Hot"] },
  { img: cricketTest, title: "Test Series", category: "Cricket", rating: 4.7, desc: "Day-by-day session bets, lunch / tea totals and full match markets.", badges: ["New"] },
];

export const CricketSection = () => (
  <section id="cricket" className="bg-secondary/40 py-16 md:py-24">
    <div className="container">
      <div className="mb-8">
        <p className="text-xs font-bold uppercase tracking-widest text-primary md:text-sm">🏏 Cricket Hub</p>
        <h2 className="mt-2 text-3xl font-black md:text-4xl">Cricket betting <span className="text-gradient-gold">made for India</span></h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">From IPL to international tours — every match, every market, fastest UPI payouts.</p>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cricketGames.map((g) => <GameCard key={g.title} game={g} />)}
      </div>
    </div>
  </section>
);

const casinoGames: Game[] = [
  { img: roulette, title: "Lightning Roulette", category: "Live Casino", rtp: "97.3%", rating: 4.9, desc: "Multipliers up to 500x with stunning live dealer studios.", badges: ["High Payout", "Live"] },
  { img: poker, title: "Royal Poker Pro", category: "Casino", rtp: "98.1%", rating: 4.8, desc: "Texas Hold'em tables, global tournaments and side bets.", badges: ["High Payout"] },
  { img: andarbahar, title: "Andar Bahar", category: "Live Casino", rtp: "97.5%", rating: 4.8, desc: "Classic Indian card game live with side bets and bonuses.", badges: ["Hot", "Live"] },
  { img: teenpatti, title: "Teen Patti Royal", category: "Live Casino", rtp: "97.8%", rating: 4.8, desc: "India's favourite three-card game with progressive jackpots.", badges: ["Hot"] },
  { img: blackjack, title: "Live Blackjack VIP", category: "Live Casino", rtp: "99.5%", rating: 4.9, desc: "Real dealers, low house edge, side bets and unlimited seats.", badges: ["High Payout", "Live"] },
  { img: slots, title: "Neon 777 Slots", category: "Slots", rtp: "96.4%", rating: 4.7, desc: "Classic three-reel slot reimagined with progressive jackpots.", badges: ["New"] },
];

export const CasinoSection = () => (
  <section id="casino" className="container py-16 md:py-24">
    <div className="mb-8">
      <p className="text-xs font-bold uppercase tracking-widest text-emerald md:text-sm">🎰 Casino Floor</p>
      <h2 className="mt-2 text-3xl font-black md:text-4xl">Casino classics & <span className="text-gradient-gold">live tables</span></h2>
      <p className="mt-3 max-w-2xl text-muted-foreground">1,000+ verified games — live dealers, slots, poker and Indian favourites.</p>
    </div>
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {casinoGames.map((g) => <GameCard key={g.title} game={g} />)}
    </div>
  </section>
);
