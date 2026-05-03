import { Zap, Globe, Brain, ShieldCheck } from "lucide-react";

const features = [
  { icon: Zap, title: "Instant replies", desc: "Under 5 seconds, every time." },
  { icon: Globe, title: "Natural English", desc: "Speaks clearly to every student." },
  { icon: Brain, title: "Knows your institute", desc: "Trained on your fees, schedules, courses." },
  { icon: ShieldCheck, title: "Never sleeps", desc: "Captures leads at 2am, Sundays, holidays." },
];

const Solution = () => {
  return (
    <section className="py-24 sm:py-32 relative">
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[400px] bg-gradient-glow blur-3xl opacity-30 pointer-events-none" />

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-primary uppercase tracking-wider mb-4">
            The fix
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            One AI that handles{" "}
            <span className="text-gradient-primary">every student inquiry.</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-base sm:text-lg">
            Nexaura AI replies instantly on WhatsApp with accurate info about your classes, fees, and schedules — and saves every lead automatically.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f) => (
            <div key={f.title} className="card-elevated rounded-2xl p-6 group">
              <div className="h-11 w-11 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:glow-primary transition-shadow">
                <f.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
