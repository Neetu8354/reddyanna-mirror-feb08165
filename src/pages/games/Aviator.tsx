import aviator from "@/assets/game-aviator.jpg";
import { GamePageLayout } from "./GamePageLayout";

const Aviator = () => (
  <GamePageLayout
    slug="aviator"
    name="Aviator"
    imgSrc={aviator}
    imgAlt="Play Aviator crash game online on reddyannasite.live — cash out before the plane flies away, multipliers up to 1000x"
    title="Play Aviator Game Online India | 1000x Multipliers | Reddyanaa"
    description="Play Aviator crash game online on reddyannasite.live — multipliers up to 1000x, provably fair, ₹10 minimum bet, instant UPI payouts and 200% welcome bonus."
    keywords="aviator game online, play aviator real money, aviator predictor India, crash game online India, aviator reddyanna, aviator betting site"
    hero={{
      eyebrow: "✈️ Crash Game",
      h1: <>Play <span className="text-gradient-gold">Aviator online</span> — cash out before the plane flies away.</>,
      lead: "The world's most popular crash game, live on reddyannasite.live. Multipliers up to 1000x, provably fair, ₹10 minimum bet and instant UPI cashouts.",
    }}
    intro={
      <>
        <p>
          Aviator is the crash game that took India by storm — simple, fast, and addictive. Place your bet, watch the multiplier climb as the plane takes off, and cash out before it flies away.
          The longer you wait, the bigger the multiplier — but if the plane disappears before you cash out, you lose the round.
        </p>
        <p className="mt-4">
          On reddyannasite.live you can play <strong>Aviator real money</strong> with stakes from just ₹10, double-bet strategy, auto cash-out, and a fully provably fair RNG audited for fairness.
        </p>
      </>
    }
    features={[
      { title: "Multipliers up to 1000x", desc: "Some rounds fly past 1000x — turn ₹100 into ₹1,00,000 in a single round." },
      { title: "Provably fair", desc: "Every Aviator round uses cryptographic provably fair RNG — verifiable by every player." },
      { title: "Auto cash-out", desc: "Set your auto cash-out at 1.5x, 2x, 10x — the system locks your win automatically." },
      { title: "Double bet strategy", desc: "Place two simultaneous bets per round — a safe early cash-out and a high-risk moonshot." },
      { title: "Live chat & stats", desc: "See live cash-outs from other players and track the last 100 multipliers in real time." },
      { title: "Instant UPI cashouts", desc: "Big Aviator win? Withdraw to UPI in under 10 minutes." },
    ]}
    howToSteps={[
      "Get your free Reddyanaa Aviator ID on WhatsApp — takes under 2 minutes.",
      "Deposit ₹100+ via UPI, IMPS or NEFT and claim your 200% welcome bonus on reddyannasite.live.",
      "Open the casino lobby → Crash Games → Aviator. Set your bet (minimum ₹10).",
      "Watch the plane take off — the multiplier rises every second. Tap Cash Out before it flies away.",
      "Win = stake × multiplier at cash-out. Withdraw instantly to UPI.",
    ]},
    faqs={[
      { q: "Is Aviator a real game or a scam?", a: "Aviator is a real, provably fair crash game by Spribe, played by millions worldwide. Reddyanaa runs the official certified version with verifiable RNG." },
      { q: "What is the best Aviator strategy?", a: "Many players use double-bet: one bet auto-cashes at 1.5x for safe profit, the other rides for a higher multiplier. There's no guaranteed strategy — Aviator is a game of chance." },
      { q: "Can I really win 1000x on Aviator?", a: "Yes — high multipliers do appear, but they're rare. Most rounds crash early, so risk management is key." },
      { q: "What is the minimum Aviator bet on Reddyanaa?", a: "The minimum bet on Aviator is ₹10 per round, with maximum bets up to ₹1,00,000 per round." },
      { q: "Are Aviator winnings paid instantly?", a: "Yes — Aviator cashouts hit your wallet immediately, and UPI withdrawals are processed within 10 minutes for verified accounts." },
    ]}
  />
);

export default Aviator;
