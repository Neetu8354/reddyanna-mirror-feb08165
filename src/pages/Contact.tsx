import { PageShell } from "@/components/PageShell";
import { useSeo, breadcrumbLd, SITE_URL } from "@/lib/seo";
import { WHATSAPP_LINK } from "@/lib/links";
import { MessageCircle, Clock, Globe, ShieldCheck } from "lucide-react";

const Contact = () => {
  useSeo({
    title: "Contact Reddyanaa | 24/7 WhatsApp Support for Cricket ID & Payouts",
    description: "Get instant help on reddyannasite.live — 24/7 WhatsApp support for cricket ID signup, deposits, withdrawals and bonuses. English & Hindi. Real humans, no bots.",
    path: "/contact",
    keywords: "contact reddyanaa, reddyanna whatsapp support, cricket id help, reddyanna customer support India",
    ogImage: `${SITE_URL}/android-chrome-512x512.png`,
    jsonLd: [
      breadcrumbLd([
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" },
      ]),
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact Reddyanaa",
        url: `${SITE_URL}/contact`,
        mainEntity: {
          "@type": "Organization",
          name: "Reddyanaa",
          url: SITE_URL,
          contactPoint: [{
            "@type": "ContactPoint",
            contactType: "customer support",
            availableLanguage: ["English", "Hindi"],
            url: WHATSAPP_LINK,
            hoursAvailable: "Mo-Su 00:00-23:59",
          }],
        },
      },
    ],
  });

  return (
    <PageShell crumbs={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]}>
      <section className="container py-12 md:py-20">
        <p className="text-xs font-bold uppercase tracking-widest text-primary md:text-sm">Contact</p>
        <h1 className="mt-2 max-w-3xl text-4xl font-black leading-tight md:text-5xl">
          Talk to a real human on <span className="text-gradient-gold">WhatsApp 24/7</span>
        </h1>
        <p className="mt-5 max-w-2xl text-muted-foreground md:text-lg">
          The fastest way to get your free Reddyanaa cricket ID, claim a bonus, deposit, or withdraw — message us on WhatsApp and a real support agent will reply within minutes.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-whatsapp px-7 py-4 text-base font-bold text-whatsapp-foreground shadow-glow-emerald transition-transform hover:scale-105">
            <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
          </a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary/60 bg-background/40 px-7 py-4 text-base font-bold text-primary backdrop-blur transition-colors hover:bg-primary/10">
            Get my cricket ID →
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Clock, title: "24/7 availability", desc: "Always-on support, including IPL match nights." },
            { icon: Globe, title: "English & Hindi", desc: "Native-language agents, never a bot." },
            { icon: ShieldCheck, title: "Verified replies only", desc: "All support comes from our official wa.link." },
            { icon: MessageCircle, title: "Avg reply <2 min", desc: "Faster than email, faster than tickets." },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-gradient-card p-6 shadow-card">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald/15 text-emerald">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-16 md:py-24">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-black md:text-4xl">What can support help with?</h2>
          <ul className="mt-6 grid gap-3 text-muted-foreground md:grid-cols-2 md:text-lg">
            <li className="rounded-xl border border-border bg-card p-4">✅ Free cricket ID signup on reddyannasite.live</li>
            <li className="rounded-xl border border-border bg-card p-4">✅ UPI deposits & instant withdrawals</li>
            <li className="rounded-xl border border-border bg-card p-4">✅ Claim 200% welcome bonus & free spins</li>
            <li className="rounded-xl border border-border bg-card p-4">✅ Live IPL & cricket betting questions</li>
            <li className="rounded-xl border border-border bg-card p-4">✅ Teen Patti, Andar Bahar, Aviator help</li>
            <li className="rounded-xl border border-border bg-card p-4">✅ Account, KYC & responsible gaming</li>
          </ul>
        </div>
      </section>
    </PageShell>
  );
};

export default Contact;
