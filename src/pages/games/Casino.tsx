import roulette from "@/assets/game-roulette.jpg";
import { GamePageLayout } from "./GamePageLayout";

const Casino = () => (
  <GamePageLayout
    slug="casino"
    name="Live Casino"
    imgSrc={roulette}
    imgAlt="Play live casino on reddyannasite.live — Lightning Roulette, Teen Patti, Andar Bahar with live dealers"
    title="Live Online Casino India | Roulette, Blackjack, Slots | Reddyanaa"
    description="Play 1,000+ live casino games on reddyannasite.live — Lightning Roulette, Live Blackjack, Teen Patti, Andar Bahar, Aviator and slots. Real dealers, instant UPI payouts."
    keywords="online casino India, live casino India, lightning roulette India, live blackjack online, online slots India, reddyanna casino"
    hero={{
      eyebrow: "🎰 Live Casino Floor",
      h1: <>India's premium <span className="text-gradient-gold">live online casino</span> — 1,000+ games.</>,
      lead: "Play live roulette, blackjack, baccarat, Teen Patti and Andar Bahar with real dealers in HD studios — plus 800+ slots and crash games on reddyannasite.live.",
    }}
    intro={
      <>
        <p>
          Reddyanaa's <strong>live online casino</strong> brings real Vegas-grade studios straight to your phone — Lightning Roulette with 500x multipliers, Live Blackjack VIP with 99.5% RTP, Royal Poker tables and India's favourite Teen Patti and Andar Bahar with live dealers 24/7.
        </p>
        <p className="mt-4">
          Sign up on reddyannasite.live, claim your 200% welcome bonus and 50 free spins on Neon 777 Slots, and play in INR with UPI deposits and 10-minute withdrawals.
        </p>
      </>
    }
    features={[
      { title: "Live dealer studios", desc: "HD live streams of Roulette, Blackjack, Baccarat, Andar Bahar and Teen Patti with professional dealers." },
      { title: "1,000+ slot games", desc: "Megaways, jackpots, classic three-reel and branded slots from top providers — RTPs up to 99%." },
      { title: "Indian favourites", desc: "Teen Patti, Andar Bahar, Sic Bo and Dragon Tiger live tables with INR limits and English/Hindi dealers." },
      { title: "Crash & instant games", desc: "Aviator, JetX, Mines and Plinko with multipliers up to 1000x and instant cashouts." },
      { title: "High RTP tables", desc: "Live Blackjack VIP at 99.5% RTP, European Roulette and Baccarat with the lowest house edge online." },
      { title: "Provably fair", desc: "Every game uses certified RNGs and live tables are independently audited for fairness." },
    ]}
    howToSteps={[
      "Get your free Reddyanaa casino ID on WhatsApp in under 2 minutes — no long forms.",
      "Deposit via UPI, IMPS, NEFT or crypto and claim your 200% welcome bonus + 50 free spins.",
      "Open the casino lobby and choose Live Casino, Slots, Crash or Indian Tables.",
      "Pick your table or game, set your stake and play live with real dealers in HD.",
      "Cash out winnings to UPI in under 10 minutes — straight to your bank.",
    ]},
    faqs={[
      { q: "Is the live casino on Reddyanaa real?", a: "Yes. All live tables stream from licensed studios with real human dealers, real cards and real wheels — no animations." },
      { q: "Can I play Teen Patti and Andar Bahar live?", a: "Absolutely. Reddyanaa runs live Teen Patti Royal and Andar Bahar tables 24/7 with Hindi-speaking dealers and side bets." },
      { q: "What's the highest payout casino game?", a: "Live Blackjack VIP has the highest RTP at 99.5%. Lightning Roulette can pay up to 500x on a single straight-up number." },
      { q: "Can I play casino games on mobile?", a: "Yes — every Reddyanaa casino game is fully optimised for Android and iPhone browsers. No app download needed." },
      { q: "Are casino winnings paid instantly?", a: "Verified accounts get casino payouts to UPI in under 10 minutes — among the fastest in India." },
    ]}
  />
);

export default Casino;
