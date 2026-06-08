import cricketIpl from "@/assets/game-cricket-ipl.jpg";
import { GamePageLayout } from "./GamePageLayout";

const Cricket = () => (
  <GamePageLayout
    slug="cricket"
    name="Cricket Betting"
    imgSrc={cricketIpl}
    imgAlt="Live IPL cricket betting on reddyannasite.live — bet on every ball with real-time odds"
    title="Live Cricket Betting India | IPL Betting, Cricket ID & Live Odds"
    description="Access live cricket betting, IPL betting markets, cricket exchange betting, session betting, and fancy betting. Get your cricket ID and enjoy real-time cricket odds across India."
    keywords="cricket betting India, IPL betting, live cricket betting, cricket exchange, session betting, fancy betting, cricket ID, online cricket betting, T20 betting, ODI betting, Test cricket betting"
    hero={{
      eyebrow: "🏏 Live Cricket Markets",
      h1: <>Online <span className="text-gradient-gold">Cricket Betting</span> in India – Live IPL, T20 & World Cup Markets</>,
      lead: "Access live cricket betting, IPL betting markets, cricket exchange betting, session betting, and fancy betting. Get your cricket ID and enjoy real-time cricket odds across India.",
    }}
    intro={
      <>
        <p>
          Cricket is India's most loved sport, and millions of fans follow every IPL match, ICC T20 World Cup game, ODI series, and Test match throughout the year. Whether you support Mumbai Indians, Chennai Super Kings, Royal Challengers Bengaluru, Kolkata Knight Riders, or Team India, live cricket betting adds extra excitement to every over.
        </p>
        <p className="mt-4">
          Our platform offers access to live cricket betting markets, IPL betting odds, cricket exchange betting, session betting, fancy betting, and player performance markets. With real-time odds updates, instant cricket ID activation, and secure UPI transactions, users can enjoy a seamless cricket betting experience from anywhere in India.
        </p>
        <p className="mt-4">
          From Mumbai and Delhi to Hyderabad, Bengaluru, Chennai, Kolkata, Ahmedabad, Jaipur, Lucknow, Patna, and Chandigarh, cricket enthusiasts trust our platform for live IPL betting, T20 betting, ODI betting, and international cricket markets.
        </p>
        <p className="mt-4">
          Reddy Anna Site is one of the leading destinations for online cricket betting in India, offering access to live cricket betting markets, IPL betting, T20 betting, ODI betting, Test match betting, and cricket exchange opportunities. Whether you are following the Indian Premier League (IPL), ICC Cricket World Cup, ICC T20 World Cup, Asia Cup, or international cricket series, our platform provides real-time cricket odds and live in-play markets throughout every match.
        </p>
      </>
    }
    features={[
      { title: "Instant Cricket ID Access", desc: "Get your Online Cricket ID quickly and start exploring cricket markets without lengthy registration processes. A single Cricket ID provides access to multiple cricket betting platforms and exchanges." },
      { title: "Live Cricket Betting", desc: "Follow every ball with live betting markets that update in real time. Live cricket odds change throughout the match, allowing users to engage with the game as it unfolds." },
      { title: "Fancy Betting Markets", desc: "Access popular fancy betting options including Batsman Runs, Partnership Betting, Powerplay Runs, Session Betting, Boundary Betting, Wickets in Powerplay, Team Total Runs, and Player Performance Markets." },
      { title: "IPL & International Cricket", desc: "Bet on Indian Premier League (IPL), ICC T20 World Cup, ICC Cricket World Cup, Asia Cup, India vs Australia, India vs England, Test Championship, and Women's Premier League (WPL)." },
      { title: "10-min UPI Payouts", desc: "Withdraw your cricket betting winnings instantly to UPI, IMPS or NEFT. Verified accounts receive payouts within minutes, not days." },
      { title: "200% Welcome Bonus", desc: "New players get a 200% welcome bonus up to ₹20,000 on first deposit, plus weekly cashback on losing cricket bets." },
    ]}
    howToSteps={[
      "Tap 'Get free cricket ID' and message us on WhatsApp — we'll set up your Reddyanaa account in under 2 minutes.",
      "Make your first deposit via UPI, IMPS, NEFT or crypto and claim the 200% welcome bonus up to ₹20,000.",
      "Open the live cricket section, pick any IPL or international match and choose your market — match winner, runs, wickets, sessions or fancy.",
      "Place your bet at the live odds and track results in real time as the match unfolds.",
      "Withdraw your winnings instantly to UPI — most cashouts land in your bank in under 10 minutes.",
    ]},
    faqs={[
      { q: "What is cricket betting?", a: "Cricket betting involves predicting outcomes related to cricket matches, tournaments, or specific events within a match. Popular markets include match winners, top batsmen, top bowlers, innings totals, and live in-play opportunities. Modern online platforms provide real-time updates and a wide range of cricket-related markets for enthusiasts." },
      { q: "What is Fancy Betting in cricket?", a: "Fancy Betting is one of the most popular cricket betting markets in India. Unlike traditional betting where users predict the match winner, Fancy Bets focus on specific in-game events, player performances, team milestones, and session outcomes. These markets include Batsman Runs, Partnership Betting, Powerplay Runs, Session Betting, Boundary Betting, Wickets in Powerplay, Team Total Runs, and Player Performance Markets." },
      { q: "Is online cricket betting legal in India?", a: "Online cricket betting regulations vary by state in India. Reddyanaa operates through licensed offshore exchanges that legally accept Indian players in most states. Players must be 18+ and are responsible for following their local laws." },
      { q: "How fast are cricket betting payouts?", a: "Verified Reddyanaa accounts receive UPI withdrawals in under 10 minutes for cricket winnings. IMPS/NEFT transfers are typically processed same day." },
      { q: "Which cricket tournaments can I bet on?", a: "You can bet on Indian Premier League (IPL), ICC T20 World Cup, ICC Cricket World Cup, Asia Cup, India vs Australia series, India vs England series, Test Championship matches, Women's Premier League (WPL), BBL, PSL, CPL, and all international cricket series." },
      { q: "What is the minimum cricket bet amount?", a: "The minimum bet starts as low as ₹10 on most cricket markets, making it accessible for beginners to start safely while learning live betting." },
      { q: "Do I get a welcome bonus for cricket betting?", a: "Yes — new players receive a 200% welcome bonus up to ₹20,000 on their first deposit, plus weekly cashback on losing cricket bets." },
    ]}
  />
);

export default Cricket;
