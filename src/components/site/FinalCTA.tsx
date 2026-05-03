import { MessageCircle, Calendar, Instagram, Phone, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const FinalCTA = () => {
  return (
    <section className="py-24 sm:py-32 relative">
      <div className="container">
        <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden p-8 sm:p-14 text-center bg-gradient-primary glow-primary">
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

          <div className="relative text-primary-foreground">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Stop Losing Students to Slow Replies.
            </h2>
            <p className="mt-5 text-base sm:text-lg opacity-90 max-w-xl mx-auto">
              Get your AI WhatsApp assistant live in under 14 days. No tech skills needed.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/94714019108?text=Hi%20Nexaura%20AI%2C%20I'm%20interested%20in%20the%203-day%20free%20trial.%20Please%20get%20me%20started!"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-background text-foreground px-6 py-3.5 font-semibold hover:bg-secondary transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Now
              </a>
              <a
                href="https://tally.so/r/xXj5Gr"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-black/30 backdrop-blur text-primary-foreground border border-white/20 px-6 py-3.5 font-semibold hover:bg-black/40 transition-colors"
              >
                <Calendar className="h-4 w-4" />
                Book a Demo
              </a>
            </div>

          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-10 border-t border-border/60">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Brand */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <a href="#top" className="flex items-center gap-2 group">
                <img src={logo} alt="Nexaura AI" className="h-7 w-7 rounded-md object-cover" />
                <span className="font-display font-semibold text-foreground">Nexaura AI</span>
              </a>
              <p className="text-xs text-muted-foreground max-w-[200px] text-center md:text-left">
                AI-powered WhatsApp automation for educational institutes.
              </p>
            </div>

            {/* Navigation */}
            <div className="flex flex-col items-center gap-4">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Links</span>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
                <a href="#problem" className="text-muted-foreground hover:text-foreground transition-colors">Problem</a>
                <a href="#demo" className="text-muted-foreground hover:text-foreground transition-colors">Demo</a>
                <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
                <a href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
                <a href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms</a>
              </div>
              <span className="text-xs text-muted-foreground mt-2">© {new Date().getFullYear()} Nexaura AI (Pvt) Ltd. All rights reserved.</span>
            </div>

            {/* Social */}
            <div className="flex flex-col items-center md:items-end gap-4">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Follow Us</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://wa.me/94714019108?text=Hi%20Nexaura%20AI%2C%20I'm%20interested%20in%20the%203-day%20free%20trial.%20Please%20get%20me%20started!"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-secondary hover:bg-muted transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-4 w-4 text-foreground" />
                </a>
                <a
                  href="https://instagram.com/nexauraai_official"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-secondary hover:bg-muted transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4 text-foreground" />
                </a>
                <a
                  href="https://facebook.com/nexauraai"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-secondary hover:bg-muted transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4 text-foreground" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default FinalCTA;
