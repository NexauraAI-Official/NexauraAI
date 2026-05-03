import { Clock, TrendingDown, MessageSquareOff } from "lucide-react";

const items = [
  {
    icon: Clock,
    title: "Students message you… you reply 4 hours later",
    desc: "By then, they've already enrolled at the institute down the road. The window to convert is minutes — not hours.",
  },
  {
    icon: TrendingDown,
    title: "You lose enrollments without even knowing",
    desc: "Missed WhatsApp messages don't show up on a report. They just quietly vanish — along with the revenue.",
  },
  {
    icon: MessageSquareOff,
    title: "Staff can't handle messages 24/7",
    desc: "Parents message at 9pm. Students ask at midnight. Your team sleeps. Every silent hour is a lost lead.",
  },
];

const Problem = () => {
  return (
    <section id="problem" className="py-24 sm:py-32 relative">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-destructive uppercase tracking-wider mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-destructive animate-pulse" />
            The silent problem
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Every unanswered message is{" "}
            <span className="text-destructive">a lost student.</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-base sm:text-lg">
            You're not losing enrollments because of price or quality. You're losing them because someone else replied first.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {items.map((it) => (
            <div key={it.title} className="card-elevated rounded-2xl p-6 sm:p-7">
              <div className="h-11 w-11 rounded-xl bg-destructive/10 border border-destructive/20 flex items-center justify-center mb-5">
                <it.icon className="h-5 w-5 text-destructive" />
              </div>
              <h3 className="font-display text-lg font-semibold leading-snug">{it.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
