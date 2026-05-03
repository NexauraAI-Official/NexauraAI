import { useState, useEffect } from "react";
import { MessageCircle, Instagram, Facebook, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const WHATSAPP_NUMBER = "94714019108";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi Nexaura AI, I'm interested in the 3-day free trial. Please get me started!"
)}`;

const navLinks = [
  { href: "#problem", label: "Problem" },
  { href: "#demo", label: "Demo" },
  { href: "#roi", label: "ROI" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#pricing", label: "Pricing" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container">
        <div className="mt-4 glass rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <img src={logo} alt="Nexaura AI logo" className="h-8 w-8 rounded-lg glow-primary object-cover" />
            <span className="font-display font-semibold tracking-tight">Nexaura AI</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="https://facebook.com/nexauraai"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-lg hover:scale-105 transition-transform"
              style={{
                background:
                  "linear-gradient(135deg, #1877F2 0%, #166fe5 100%)",
              }}
            >
              <Facebook className="h-4 w-4 text-white" />
            </a>
            <a
              href="https://instagram.com/nexauraai_official"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-lg hover:scale-105 transition-transform"
              style={{
                background:
                  "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
              }}
            >
              <Instagram className="h-4 w-4 text-white" />
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-whatsapp text-whatsapp-foreground px-3 sm:px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            {/* Mobile menu toggle */}
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-foreground hover:bg-muted transition-colors"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown panel */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            open ? "max-h-[480px] opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <div className="glass rounded-2xl p-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                {l.label}
              </a>
            ))}

            <div className="h-px bg-border/60 my-2" />

            <div className="flex items-center justify-between px-3 py-2">
              <span className="text-xs text-muted-foreground">Follow us</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://facebook.com/nexauraai"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, #1877F2 0%, #166fe5 100%)",
                  }}
                >
                  <Facebook className="h-4 w-4 text-white" />
                </a>
                <a
                  href="https://instagram.com/nexauraai_official"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg"
                  style={{
                    background:
                      "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                  }}
                >
                  <Instagram className="h-4 w-4 text-white" />
                </a>
              </div>
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-whatsapp text-whatsapp-foreground px-4 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="h-4 w-4" />
              Claim 3-day free trial
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
