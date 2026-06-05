import { useEffect, useRef, useState } from "react";
import { WHATSAPP_LINK } from "@/lib/links";
import { MessageCircle, X, Send, Phone } from "lucide-react";

const quickReplies = [
  "How do I sign up?",
  "Claim ₹20,000 welcome bonus",
  "IPL betting odds today",
  "How to deposit via UPI?",
  "Withdraw winnings",
  "Speak to an agent",
];

const buildWaUrl = (text?: string) => {
  if (!text) return WHATSAPP_LINK;
  const sep = WHATSAPP_LINK.includes("?") ? "&" : "?";
  return `${WHATSAPP_LINK}${sep}text=${encodeURIComponent(text)}`;
};

export const WhatsAppChat = () => {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const panelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Lock body scroll on mobile when open (prevents background scroll behind sheet)
  useEffect(() => {
    if (!open) return;
    const isMobile = window.matchMedia("(max-width: 639px)").matches;
    if (!isMobile) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Autofocus the input on open (desktop only — avoid mobile keyboard pop)
  useEffect(() => {
    if (!open) return;
    const isDesktop = window.matchMedia("(min-width: 640px)").matches;
    if (isDesktop) inputRef.current?.focus();
  }, [open]);

  const sendDraft = () => {
    const text = draft.trim();
    window.open(buildWaUrl(text || undefined), "_blank", "noopener,noreferrer");
    setDraft("");
    setOpen(false);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Chat with us on WhatsApp"}
        aria-expanded={open}
        aria-controls="wa-chat-panel"
        className="fixed z-50 flex items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-2xl animate-pulse-glow transition-transform hover:scale-110 active:scale-95
                   h-14 w-14 sm:h-16 sm:w-16
                   bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 sm:bottom-6 sm:right-6"
      >
        {open ? <X className="h-6 w-6 sm:h-7 sm:w-7" /> : <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" />}
      </button>

      {/* Mobile backdrop */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          aria-hidden="true"
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm sm:hidden"
        />
      )}

      {/* Chat panel — bottom sheet on mobile, floating card on sm+ */}
      {open && (
        <div
          id="wa-chat-panel"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="wa-chat-title"
          className="fixed z-50 flex flex-col overflow-hidden border border-border bg-card shadow-2xl
                     inset-x-0 bottom-0 max-h-[85svh] rounded-t-2xl animate-in slide-in-from-bottom duration-300
                     sm:inset-auto sm:bottom-24 sm:right-6 sm:w-[22rem] sm:max-h-[36rem] sm:rounded-2xl"
        >
          {/* Header */}
          <div className="flex items-center gap-3 bg-whatsapp p-4 text-whatsapp-foreground shrink-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-whatsapp-foreground/20 text-lg font-bold">
              R
            </div>
            <div className="flex-1 min-w-0">
              <p id="wa-chat-title" className="font-bold leading-tight truncate">Reddyanaa Support</p>
              <p className="text-xs opacity-90 flex items-center gap-1.5">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Online · Replies in ~1 min
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-full p-1.5 hover:bg-whatsapp-foreground/20 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages + quick replies (scrollable) */}
          <div className="flex-1 space-y-3 overflow-y-auto p-4 overscroll-contain">
            <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-secondary p-3 text-sm">
              👋 Hi! Welcome to <strong>Reddyanaa</strong>. How can we help you today?
            </div>
            <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-secondary p-3 text-sm">
              Tap a quick option below, or type your question and we'll continue on WhatsApp 🏏
            </div>

            <div className="space-y-2 pt-1">
              {quickReplies.map((q) => (
                <a
                  key={q}
                  href={buildWaUrl(q)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl border border-border bg-background px-3 py-2.5 text-sm transition-colors hover:border-whatsapp hover:text-whatsapp active:bg-secondary"
                >
                  {q}
                </a>
              ))}
            </div>
          </div>

          {/* Composer */}
          <div className="shrink-0 border-t border-border bg-card p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendDraft();
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                inputMode="text"
                enterKeyHint="send"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Type a message…"
                aria-label="Type a message"
                className="flex-1 rounded-full border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-whatsapp"
              />
              <button
                type="submit"
                aria-label="Send on WhatsApp"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground transition-opacity hover:opacity-90 active:scale-95"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <a
                href={buildWaUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-whatsapp px-3 py-2 text-xs font-bold text-whatsapp-foreground transition-opacity hover:opacity-90"
              >
                <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
              </a>
              <a
                href={buildWaUrl("Hi, I'd like to speak to an agent.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-border bg-background px-3 py-2 text-xs font-bold transition-colors hover:border-whatsapp hover:text-whatsapp"
              >
                <Phone className="h-3.5 w-3.5" /> Live agent
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
