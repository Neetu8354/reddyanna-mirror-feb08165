export type CityData = {
  slug: string;
  city: string;
  state: string;
  population: string;
  bigClub?: string;
  iplTeam?: string;
  localLine: string; // unique opening line
  upiNote: string;
  topGames: string[];
};

export const CITIES: CityData[] = [
  {
    slug: "mumbai",
    city: "Mumbai",
    state: "Maharashtra",
    population: "2 crore+",
    iplTeam: "Mumbai Indians",
    localLine: "From Wankhede to Worli, Mumbai bets harder on cricket than any other Indian city — and Reddyanaa gives you the fastest live odds on every Mumbai Indians fixture.",
    upiNote: "All major Mumbai banks supported — HDFC, ICICI, Kotak, Axis, SBI, Yes Bank — UPI deposits land in under 30 seconds.",
    topGames: ["IPL Cricket", "Teen Patti Royal", "Lightning Roulette", "Aviator"],
  },
  {
    slug: "delhi",
    city: "Delhi",
    state: "NCR",
    population: "3.2 crore+",
    iplTeam: "Delhi Capitals",
    localLine: "From Connaught Place to Dwarka, Delhi players have backed Delhi Capitals on Reddyanaa with India's fastest UPI cricket payouts since 2022.",
    upiNote: "Delhi NCR banking partners include PNB, SBI, HDFC, ICICI and Paytm Payments Bank — withdrawals processed 24×7.",
    topGames: ["IPL Cricket", "Andar Bahar", "Live Blackjack", "Dragon Tiger"],
  },
  {
    slug: "bangalore",
    city: "Bangalore",
    state: "Karnataka",
    population: "1.4 crore+",
    iplTeam: "Royal Challengers Bengaluru",
    localLine: "Bangalore's tech crowd loves data, and that's exactly what Reddyanaa delivers — real-time RCB odds, in-play stats and instant UPI cashouts to any Karnataka bank.",
    upiNote: "Canara Bank, Karnataka Bank, SBI, ICICI, HDFC and Federal Bank all supported — UPI works 24×7 even on bank holidays.",
    topGames: ["IPL Cricket", "Aviator", "Lightning Roulette", "Teen Patti"],
  },
  {
    slug: "hyderabad",
    city: "Hyderabad",
    state: "Telangana",
    population: "1.1 crore+",
    iplTeam: "Sunrisers Hyderabad",
    localLine: "Hyderabad's biryani may be famous, but its Sunrisers fans on Reddyanaa are even more passionate — get the best live SRH odds with instant UPI payouts.",
    upiNote: "Andhra Bank, SBI Hyderabad, HDFC, ICICI and Telangana Grameena Bank are all supported with sub-10-minute withdrawals.",
    topGames: ["IPL Cricket", "Teen Patti Royal", "Andar Bahar", "Aviator"],
  },
  {
    slug: "kolkata",
    city: "Kolkata",
    state: "West Bengal",
    population: "1.5 crore+",
    iplTeam: "Kolkata Knight Riders",
    localLine: "From Eden Gardens to Salt Lake, Kolkata's KKR faithful trust Reddyanaa for the deepest IPL markets and lightning-quick Bengali bank withdrawals.",
    upiNote: "United Bank, Bandhan Bank, SBI, HDFC, ICICI and Allahabad Bank all process Reddyanaa UPI deposits and withdrawals instantly.",
    topGames: ["IPL Cricket", "Lightning Roulette", "Teen Patti", "Live Blackjack"],
  },
];

export const getCity = (slug: string) => CITIES.find((c) => c.slug === slug);
