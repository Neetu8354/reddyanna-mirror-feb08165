import { WHATSAPP_LINK } from "@/lib/links";
import { Link } from "react-router-dom";

const explore: { label: string; to: string }[] = [
  { label: "Cricket Betting", to: "/games/cricket" },
  { label: "Live Casino", to: "/games/casino" },
  { label: "Teen Patti", to: "/games/teen-patti" },
  { label: "Aviator", to: "/games/aviator" },
];

const company: { label: string; to: string }[] = [
  { label: "About Reddyanaa", to: "/about" },
  { label: "Contact Support", to: "/contact" },
  { label: "Blog & Guides", to: "/blog" },
];

const cities: { label: string; to: string }[] = [
  { label: "Cricket ID Mumbai", to: "/cricket-id/mumbai" },
  { label: "Cricket ID Delhi", to: "/cricket-id/delhi" },
  { label: "Cricket ID Bangalore", to: "/cricket-id/bangalore" },
  { label: "Cricket ID Hyderabad", to: "/cricket-id/hyderabad" },
  { label: "Cricket ID Kolkata", to: "/cricket-id/kolkata" },
];

export const Footer = () => (
  <footer className="border-t border-border bg-card/50">
    <div className="container py-12">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        <div className="col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-gold text-lg font-black text-primary-foreground shadow-glow-gold">R</span>
            <span className="text-xl font-bold">
              <span className="text-foreground">Reddya</span><span className="text-primary">naa</span>
            </span>
          </Link>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            India's most trusted real-money cricket & casino platform. Licensed, secure, and built for Indian players.
          </p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-whatsapp px-4 py-2 text-sm font-bold text-whatsapp-foreground animate-pulse-glow">
            💬 Chat on WhatsApp
          </a>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">Games</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {explore.map((l) => (
              <li key={l.label}><Link to={l.to} className="hover:text-primary">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {company.map((l) => (
              <li key={l.label}><Link to={l.to} className="hover:text-primary">{l.label}</Link></li>
            ))}
            <li><Link to="/contact" className="hover:text-primary">Contact Support</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-10 border-t border-border pt-8">
        <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">Cricket ID by City</h4>
        <ul className="mt-3 flex flex-wrap gap-2 text-sm text-muted-foreground">
          {cities.map((l) => (
            <li key={l.label}>
              <Link to={l.to} className="rounded-full border border-border px-3 py-1 hover:border-primary hover:text-primary">{l.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} Reddyanaa. All rights reserved. 18+ Play Responsibly.</p>
        <p>Licensed & secured · UPI · IMPS · NEFT · Crypto</p>
      </div>
    </div>
  </footer>
);
