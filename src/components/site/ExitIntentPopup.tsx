import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { MessageCircle, Sparkles, Check } from "lucide-react";

const WHATSAPP_NUMBER = "94714019108";
const TRIAL_MESSAGE = "Hi Nexaura AI, I'm interested in the 3-day free trial. Please get me started!";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(TRIAL_MESSAGE)}`;

const STORAGE_KEY = "nexaura_exit_popup_shown";

const ExitIntentPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    let triggered = false;
    const trigger = () => {
      if (triggered) return;
      triggered = true;
      sessionStorage.setItem(STORAGE_KEY, "1");
      setOpen(true);
    };

    // Desktop: detect mouse leaving viewport from the top
    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) trigger();
    };

    // Mobile fallback: trigger after 30s on page
    const timer = window.setTimeout(trigger, 30000);

    document.addEventListener("mouseleave", onMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", onMouseLeave);
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md border-border/60 bg-card overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-accent/20 blur-3xl pointer-events-none" />

        <DialogHeader className="relative">
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs text-muted-foreground w-fit mx-auto sm:mx-0 mb-2">
            <Sparkles className="h-3 w-3 text-primary" />
            Limited offer
          </div>
          <DialogTitle className="font-display text-2xl sm:text-3xl font-bold leading-tight text-center sm:text-left">
            Wait! Get Your <span className="text-gradient">3-Day Free Trial</span>
          </DialogTitle>
          <DialogDescription className="text-sm sm:text-base text-muted-foreground text-center sm:text-left">
            See your AI WhatsApp assistant in action with your own institute's data — no commitment, no card required.
          </DialogDescription>
        </DialogHeader>

        <ul className="relative space-y-2 py-2">
          {[
            "Live AI replies on your WhatsApp number",
            "Setup in under 24 hours",
            "Cancel anytime — zero risk",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm">
              <Check className="h-4 w-4 text-success shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
          className="relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary text-primary-foreground px-6 py-3.5 font-semibold glow-primary hover:scale-[1.02] transition-transform"
        >
          <MessageCircle className="h-4 w-4" />
          Claim My 3-Day Free Trial
        </a>
        <button
          onClick={() => setOpen(false)}
          className="relative text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          No thanks, I'll pass on the free trial
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;
