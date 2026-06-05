import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const nav: { label: string; to: string }[] = [
  { label: "Cricket", to: "/games/cricket" },
  { label: "Casino", to: "/games/casino" },
  { label: "Teen Patti", to: "/games/teen-patti" },
  { label: "Aviator", to: "/games/aviator" },
  { label: "Blog", to: "/blog" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2" aria-label="Reddyanaa home">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-gold text-lg font-black text-primary-foreground shadow-glow-gold">R</span>
          <span className="text-xl font-bold tracking-tight">
            <span className="text-foreground">Reddya</span>
            <span className="text-primary">naa</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link key={n.label} to={n.to} className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Log in
          </Link>
          <Link to="/games" className="rounded-lg bg-gradient-gold px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-glow-gold transition-transform hover:scale-105">
            Sign up &amp; Win
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground" aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container flex flex-col gap-1 py-3">
            {nav.map((n) => (
              <Link key={n.label} to={n.to} onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground">
                {n.label}
              </Link>
            ))}
            <Link to="/games" onClick={() => setOpen(false)} className="mt-2 rounded-lg bg-gradient-gold px-5 py-3 text-center text-sm font-bold text-primary-foreground">
              Sign up &amp; Win
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
