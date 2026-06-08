import teenpatti from "@/assets/game-teenpatti.jpg";
import { GamePageLayout } from "./GamePageLayout";

const TeenPatti = () => (
  <GamePageLayout
    slug="teen-patti"
    name="Teen Patti"
    imgSrc={teenpatti}
    imgAlt="Play live Teen Patti online on reddyannasite.live — India's favourite three-card game with real dealers"
    title="Play Teen Patti Online India | Live 3 Patti Tables | Reddyanaa"
    description="Play Teen Patti online for real money on reddyannasite.live — live dealers 24/7, side bets, jackpots, low ₹10 limits, 200% welcome bonus & 10-min UPI payouts."
    keywords="teen patti online, live teen patti India, 3 patti real money, play teen patti online, teen patti reddyanna, teen patti real cash"
    hero={{
      eyebrow: "♣️ Teen Patti Live",
      h1: <>Play <span className="text-gradient-gold">Teen Patti online</span> — India's favourite card game, live 24/7.</>,
      lead: "Real dealers, real cards, real cash. Play Teen Patti Royal on reddyannasite.live with side bets, progressive jackpots and limits from just ₹10.",
    }}
    intro={
      <>
        <p>
          Teen Patti — also known as <strong>3 Patti</strong> or Indian Poker — is the heart of every Indian Diwali night, and Reddyanaa brings the same magic to your phone, live, 24 hours a day.
          Our Teen Patti Royal tables stream from a real studio with English and Hindi-speaking dealers, side bets, progressive jackpots and INR limits starting from ₹10.
        </p>
        <p className="mt-4">
          Whether you're a casual player or a high-stakes pro, reddyannasite.live has the right Teen Patti table for you — with the fastest UPI payouts and a 200% welcome bonus on your first deposit.
        </p>
      </>
    }
    features={[
      { title: "Live Teen Patti 24/7", desc: "Real human dealers stream HD Teen Patti Royal tables around the clock — never wait for a seat." },
      { title: "Side bets & jackpots", desc: "Pair Plus, 6-Card Bonus and progressive jackpots that hit life-changing amounts every week." },
      { title: "Low ₹10 minimum", desc: "Beginner-friendly stakes start at ₹10 — VIP tables go up to ₹1L per hand for high rollers." },
      { title: "Hindi-speaking dealers", desc: "Most Teen Patti tables are dealt in Hindi — feels exactly like playing at home." },
      { title: "97.8% RTP", desc: "One of the highest RTPs of any Indian card game — fair odds, transparent payouts." },
      { title: "Instant UPI cashout", desc: "Won a big Teen Patti hand? Withdraw to UPI in under 10 minutes." },
    ]}
    howToSteps={[
      "Message us on WhatsApp to create your free Reddyanaa Teen Patti ID in under 2 minutes.",
      "Deposit via UPI, Paytm, PhonePe, Google Pay, IMPS or NEFT — claim 200% welcome bonus.",
      "Open the casino lobby, tap Live Casino → Teen Patti and pick a table by stake.",
      "Place your ante, get your 3 cards from the live dealer, and choose to bet, fold or play blind.",
      "Win the hand with the best 3-card combo and instantly withdraw winnings to UPI.",
    ]},
    faqs={[
      { q: "Can I play Teen Patti for real money on Reddyanaa?", a: "Yes — Teen Patti Royal on reddyannasite.live is real money, with INR stakes from ₹10 up to ₹1,00,000 per hand." },
      { q: "Is online Teen Patti rigged?", a: "No. Reddyanaa uses live dealers with real cards on certified tables — every hand is dealt in front of you on HD video." },
      { q: "What is the best Teen Patti hand?", a: "The strongest hand is a Trail (three of a kind) — for example three Aces. After that comes Pure Sequence, Sequence, Colour, Pair, and High Card." },
      { q: "What is the Teen Patti welcome bonus?", a: "New players get a 200% match bonus up to ₹20,000 on their first deposit, usable on Teen Patti and all other casino games." },
      { q: "How fast are Teen Patti payouts?", a: "Verified players get Teen Patti withdrawals to UPI in under 10 minutes." },
    ]}
  />
);

export default TeenPatti;
