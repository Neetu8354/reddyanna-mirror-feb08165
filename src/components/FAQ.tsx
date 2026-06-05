import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Is Reddyanaa safe to play on?", a: "Yes. All transactions are encrypted with TLS, games use certified RNGs, and player funds are held in segregated accounts." },
  { q: "How fast are withdrawals?", a: "Most withdrawals are processed within 10 minutes for verified accounts using UPI, IMPS, NEFT or crypto." },
  { q: "What is the welcome bonus?", a: "New players get a 200% match bonus up to ₹20,000 on their first deposit, plus 50 free spins on Neon 777 Slots." },
  { q: "Can I bet on live IPL & international cricket?", a: "Yes — live in-play markets are available on every IPL match, T20 World Cup, BBL, PSL and major international fixtures." },
  { q: "Which payment methods are supported?", a: "We support UPI (PhonePe, Google Pay, Paytm), IMPS, NEFT, Net Banking and major cryptocurrencies." },
  { q: "Is there a mobile app?", a: "The full Reddyanaa experience runs in your mobile browser — no download required. Add to home screen for an app-like feel." },
];

export const FAQ = () => (
  <section id="about" className="container py-16 md:py-24">
    <div className="mx-auto max-w-3xl">
      <div className="mb-8 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-primary md:text-sm">FAQ</p>
        <h2 className="mt-2 text-3xl font-black md:text-4xl">Frequently asked questions</h2>
      </div>
      <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card p-2">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-border">
            <AccordionTrigger className="px-4 text-left text-base font-semibold hover:text-primary">{f.q}</AccordionTrigger>
            <AccordionContent className="px-4 text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
