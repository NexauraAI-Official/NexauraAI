import { useState } from "react";
import { Check, Sparkles, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Currency = "USD" | "LKR";

const RATE = 320.22; // 1 USD ≈ 300 LKR

const formatPrice = (usd: number | null, currency: Currency) => {
  if (usd === null) return "Custom";
  if (currency === "USD") {
    return `$${usd.toFixed(2).replace(/\.00$/, "")}`;
  }
  const lkr = Math.round(usd * RATE);
  return `Rs ${lkr.toLocaleString()}`;
};

const tiers = [
  {
    name: "Starter",
    priceUsd: 0.62,
    originalUsd: 3,
    discount: "79% OFF",
    perStudent: true,
    desc: "For small tuition classes getting started.",
    features: [
      "WhatsApp AI auto-replies",
      "Up to 2000 inquiries / month",
      "Natural English replies",
      "Basic lead capture",
      "Setup support",
    ],
    cta: "Start with Starter",
    message: "Hi Nexaura AI, I want to try the Starter plan. Get me started today!",
    highlight: false,
  },
  {
    name: "Growth",
    priceUsd: 1.15,
    originalUsd: 5,
    discount: "77% OFF",
    perStudent: true,
    desc: "Most popular — for growing institutes.",
    features: [
      "Everything in Starter",
      "Up to 8000 inquiries / month",
      "Lead capture & export",
      "Class & fee customization",
      "Priority support",
    ],
    cta: "Choose Growth",
    message: "Hi Nexaura AI, I want to try the Growth plan. Get me started today!",
    highlight: true,
  },
  {
    name: "Advanced",
    priceUsd: null as number | null,
    originalUsd: null as number | null,
    discount: "",
    perStudent: false,
    desc: "For universities & multi-branch institutes.",
    features: [
      "Everything in Growth",
      "8000+ inquiries / month",
      "Multi-branch routing",
      "Custom integrations",
      "Priority onboarding & support",
      "Custom AI training",
    ],
    cta: "Talk to us",
    message: "Hi Nexaura AI, I'm interested in a Custom/Advanced plan for my institute. Let's talk!",
    highlight: false,
  },
];

const Pricing = () => {
  const [currency, setCurrency] = useState<Currency>("USD");

  return (
    <section id="pricing" className="py-24 sm:py-32 relative">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-primary uppercase tracking-wider mb-4">
            Pricing
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Simple plans. <span className="text-gradient">Real returns.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Custom pricing available based on number of students. Most institutes recover the cost in the first 2 weeks.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-success/15 text-success px-4 py-1.5 text-sm font-semibold">
            <Sparkles className="h-3.5 w-3.5" />
            3-day free trial included on every plan
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-3xl p-7 flex flex-col ${
                t.highlight
                  ? "bg-gradient-primary text-primary-foreground glow-primary"
                  : "card-elevated"
              }`}
            >
              {t.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-background text-foreground px-3 py-1 text-xs font-medium border border-border">
                  <Sparkles className="h-3 w-3 text-primary" />
                  Most popular
                </div>
              )}

              <div className="font-display text-lg font-semibold">{t.name}</div>
              <div className={`text-sm mt-1 ${t.highlight ? "opacity-80" : "text-muted-foreground"}`}>
                {t.desc}
              </div>

              <div className="mt-6 flex items-baseline gap-2 flex-wrap">
                {t.originalUsd !== null && (
                  <span
                    className={`font-display text-2xl font-semibold line-through ${
                      t.highlight ? "opacity-60" : "text-muted-foreground/70"
                    }`}
                  >
                    {formatPrice(t.originalUsd, currency)}
                  </span>
                )}
                <span className="font-display text-4xl font-bold">
                  {formatPrice(t.priceUsd, currency)}
                </span>
                {t.perStudent && (
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      className={`inline-flex items-center gap-0.5 rounded-md px-1 -mx-1 hover:bg-foreground/10 transition-colors outline-none ${
                        t.highlight ? "opacity-80" : "text-muted-foreground"
                      }`}
                    >
                      /student
                      <ChevronDown className="h-3.5 w-3.5" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="min-w-[7rem]">
                      <DropdownMenuItem onClick={() => setCurrency("USD")}>
                        USD {currency === "USD" && "✓"}
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setCurrency("LKR")}>
                        LKR {currency === "LKR" && "✓"}
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
                {t.discount && (
                  <span
                    className={`ml-1 inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ${
                      t.highlight
                        ? "bg-background/20 text-primary-foreground"
                        : "bg-success/15 text-success"
                    }`}
                  >
                    {t.discount}
                  </span>
                )}
              </div>

              <ul className="mt-6 space-y-3 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className={`h-4 w-4 mt-0.5 shrink-0 ${t.highlight ? "" : "text-success"}`} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/94714019108?text=${encodeURIComponent(t.message)}`}
                target="_blank"
                rel="noreferrer"
                className={`mt-7 inline-flex justify-center rounded-xl py-3 font-medium transition-colors ${
                  t.highlight
                    ? "bg-background text-foreground hover:bg-secondary"
                    : "bg-secondary hover:bg-muted"
                }`}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
