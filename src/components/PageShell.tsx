import { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

type Crumb = { name: string; path: string };

export const PageShell = ({ children, crumbs }: { children: ReactNode; crumbs: Crumb[] }) => (
  <main id="main">
    <Header />
    <nav aria-label="Breadcrumb" className="border-b border-border/60 bg-card/40">
      <ol className="container flex flex-wrap items-center gap-1 py-3 text-xs text-muted-foreground md:text-sm">
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1;
          return (
            <li key={c.path} className="flex items-center gap-1">
              {i > 0 && <ChevronRight className="h-3.5 w-3.5 opacity-60" />}
              {last ? (
                <span aria-current="page" className="font-semibold text-foreground">{c.name}</span>
              ) : (
                <Link to={c.path} className="hover:text-primary">{c.name}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
    {children}
    <Footer />
    <WhatsAppChat />
  </main>
);
