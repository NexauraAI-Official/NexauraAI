import { useState } from "react";
import { X, Check } from "lucide-react";

const beforeItems = [
  "Messages missed at night & weekends",
  "Replies after 2–6 hours",
  "Manual follow-ups (or none)",
  "Leads lost in chat scroll",
  "Staff overwhelmed",
];

const afterItems = [
  "Replies in under 5 seconds, 24/7",
  "Every inquiry answered instantly",
  "Auto follow-ups & reminders",
  "Every lead saved & organized",
  "Staff focused on teaching",
];

const BeforeAfter = () => {
  const [after, setAfter] = useState(true);

  return (
    <section className="py-24 sm:py-32 relative">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-primary uppercase tracking-wider mb-4">
            Future projection
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Your institute, <span className="text-gradient">30 days from now.</span>
          </h2>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-10">
          <div className="glass rounded-full p-1 inline-flex">
            <button
              onClick={() => setAfter(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                !after ? "bg-destructive text-destructive-foreground" : "text-muted-foreground"
              }`}
            >
              Before AI
            </button>
            <button
              onClick={() => setAfter(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                after ? "bg-gradient-primary text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              After AI
            </button>
          </div>
        </div>

        <div className="max-w-2xl mx-auto card-elevated rounded-3xl p-6 sm:p-10">
          <div className="space-y-3 animate-fade-in" key={after ? "a" : "b"}>
            {(after ? afterItems : beforeItems).map((item) => (
              <div
                key={item}
                className={`flex items-center gap-3 rounded-2xl p-4 ${
                  after ? "bg-success/10 border border-success/20" : "bg-destructive/10 border border-destructive/20"
                }`}
              >
                <div
                  className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${
                    after ? "bg-success/20 text-success" : "bg-destructive/20 text-destructive"
                  }`}
                >
                  {after ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                </div>
                <div className="text-sm sm:text-base">{item}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-3 text-center">
            <Metric label="Reply time" before="4h+" after="<5s" active={after} />
            <Metric label="Missed leads" before="40%" after="<3%" active={after} />
            <Metric label="Workload" before="High" after="Low" active={after} />
          </div>
        </div>
      </div>
    </section>
  );
};

const Metric = ({ label, before, after, active }: { label: string; before: string; after: string; active: boolean }) => (
  <div>
    <div className={`font-display text-2xl sm:text-3xl font-bold ${active ? "text-gradient-primary" : "text-destructive"}`}>
      {active ? after : before}
    </div>
    <div className="text-xs text-muted-foreground mt-1">{label}</div>
  </div>
);

export default BeforeAfter;
