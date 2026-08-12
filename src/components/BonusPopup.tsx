import { useEffect, useState } from "react";
import { X, Gift } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/links";

export const BonusPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const checkAndShow = () => {
      const sessionKey = "bonus_popup_shown";
      const alreadyShown = sessionStorage.getItem(sessionKey);
      
      if (!alreadyShown && !hasShown) {
        const timer = setTimeout(() => {
          setIsOpen(true);
          setHasShown(true);
          sessionStorage.setItem(sessionKey, "true");
        }, 1500);
        
        return () => clearTimeout(timer);
      }
    };

    checkAndShow();
  }, [hasShown]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleWhatsApp = () => {
    window.open(WHATSAPP_LINK, "_blank", "noopener,noreferrer");
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={handleClose}
        aria-hidden="true"
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300"
      />

      {/* Popup */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="bonus-popup-title"
        className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm mx-4 animate-in zoom-in-95 fade-in duration-300"
      >
        <div className="relative rounded-2xl border border-primary/40 bg-gradient-to-br from-card to-card/80 shadow-2xl overflow-hidden">
          {/* Decorative background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />

          {/* Close button */}
          <button
            onClick={handleClose}
            aria-label="Close popup"
            className="absolute top-4 right-4 z-10 rounded-full p-1.5 hover:bg-secondary transition-colors"
          >
            <X className="h-5 w-5 text-muted-foreground hover:text-foreground" />
          </button>

          {/* Content */}
          <div className="relative p-8 text-center">
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gradient-gold/20 text-primary animate-bounce">
                <Gift className="h-8 w-8" />
              </div>
            </div>

            {/* Main heading */}
            <h2 id="bonus-popup-title" className="text-3xl font-black text-foreground mb-2">
              🎁 100% BONUS
            </h2>

            {/* Supporting text */}
            <p className="text-base text-muted-foreground mb-6">
              Claim your 100% bonus now!
            </p>

            {/* CTA Button */}
            <button
              onClick={handleWhatsApp}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-gold px-6 py-3.5 font-bold text-primary-foreground shadow-glow-gold transition-all hover:shadow-lg hover:scale-105 active:scale-95"
            >
              CLICK HERE — WHATSAPP
            </button>

            {/* Secondary text */}
            <p className="text-xs text-muted-foreground mt-4">
              Limited time offer. New players only.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
