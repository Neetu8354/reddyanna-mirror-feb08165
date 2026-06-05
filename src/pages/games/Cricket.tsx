import cricketIpl from "@/assets/game-cricket-ipl.jpg";
import { GamePageLayout } from "./GamePageLayout";

const Cricket = () => (
  <GamePageLayout
    slug="cricket"
    name="Cricket Betting"
    imgSrc={cricketIpl}
    imgAlt="Live IPL cricket betting on reddyannasite.live — bet on every ball with real-time odds"
    title="Live Cricket Betting Online | IPL & T20 Markets | Reddyanaa"
    description="Bet live on IPL, T20, BBL, PSL & international cricket on reddyannasite.live. Real-time odds, in-play markets, 200% welcome bonus & 10-min UPI payouts."
    keywords="cricket betting India, IPL betting, live cricket betting site, T20 betting online, online cricket id, reddyanna cricket"
    hero={{
      eyebrow: "🏏 Live Cricket Markets",
      h1: <>Live <span className="text-gradient-gold">cricket betting</span> on every ball, every match.</>,
      lead: "From IPL openers to the T20 World Cup final — bet live on runs, wickets, sixes, top batsman and full match markets on reddyannasite.live with the fastest UPI payouts in India.",
    }}
    intro={
      <>
        <p>
          Reddyanaa is India's most trusted <strong>online cricket betting</strong> platform — built around live in-play markets, transparent odds and instant UPI deposits & withdrawals.
          Whether you want to bet on the next ball in IPL, place a series outright on the T20 World Cup, or play long-form session bets on a Test match, reddyannasite.live has the deepest cricket markets in India.
        </p>
        <p className="mt-4">
          Get your <strong>free cricket ID</strong> in under 2 minutes on WhatsApp, claim your 200% welcome bonus, and start betting on live cricket online instantly.
        </p>
      </>
    }
    features={[
      { title: "Every IPL match, live", desc: "In-play odds on every ball of every IPL fixture — runs, wickets, boundaries, dismissals." },
      { title: "T20 World Cup specials", desc: "Outright winners, top batsman, top bowler and group qualification markets with boosted odds." },
      { title: "International cricket", desc: "BBL, PSL, CPL, Asia Cup, Tests, ODIs and bilateral series — all in one place." },
      { title: "Session & fancy bets", desc: "Over-by-over session lines, lunch & tea totals, lambi paari and classic fancy markets." },
      { title: "10-min UPI payouts", desc: "Withdraw winnings to UPI, IMPS or NEFT in minutes — no manual delays for verified accounts." },
      { title: "Cashback on losses", desc: "10% weekly cashback up to ₹5,000 on every losing cricket week. Credited every Monday." },
    ]}
    howToSteps={[
      "Tap 'Get free cricket ID' and message us on WhatsApp — we'll set up your Reddyanaa account in under 2 minutes.",
      "Make your first deposit via UPI, IMPS, NEFT or crypto and claim the 200% welcome bonus up to ₹20,000.",
      "Open the live cricket section, pick any IPL or international match and choose your market — match winner, runs, wickets, sessions or fancy.",
      "Place your bet at the live odds and track results in real time as the match unfolds.",
      "Withdraw your winnings instantly to UPI — most cashouts land in your bank in under 10 minutes.",
    ]}
    faqs={[
      { q: "Is online cricket betting legal in India?", a: "Reddyanaa operates with licensed gaming partners and serves players in jurisdictions where online cricket betting is permitted. Players must be 18+ and follow local laws." },
      { q: "Can I bet live during IPL matches on Reddyanaa?", a: "Yes — every IPL match has full in-play markets including next ball, next wicket, runs in over, top batsman, match winner and many session markets." },
      { q: "How fast are cricket betting payouts?", a: "Verified Reddyanaa accounts get UPI withdrawals in under 10 minutes for cricket winnings. IMPS/NEFT typically same day." },
      { q: "What is the minimum cricket bet on Reddyanaa?", a: "The minimum bet starts as low as ₹10 on most cricket markets, so beginners can play safely while learning live betting." },
      { q: "Do I get a bonus on cricket betting?", a: "Yes — new players get a 200% welcome bonus up to ₹20,000 plus weekly cashback on losing cricket bets." },
    ]}
  />
);

export default Cricket;
