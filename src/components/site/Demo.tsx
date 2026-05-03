import { useEffect, useState } from "react";
import { Send, CheckCheck, Save, Bell } from "lucide-react";
import logo from "@/assets/logo.png";

type InstituteType = "tuition" | "university" | "institute";

const SCRIPTS: Record<InstituteType, { q: string; a: string; followup: string }> = {
  tuition: {
    q: "Hi, do you have A/L Physics classes for 2025?",
    a: "Yes! 🎓 Our A/L Physics 2025 batch starts Jan 6.\n• Theory + Revision: $45/month\n• Free first class\nWant me to reserve your seat?",
    followup: "Reminder sent: free trial class — Saturday 4:00 PM.",
  },
  university: {
    q: "What's the fee for the Software Engineering degree?",
    a: "Our BSc Software Engineering (4 yrs) is $2,850/semester. 💻\nNext intake: March 2025.\nShall I share the brochure & application link?",
    followup: "Brochure + application link sent. Counsellor will follow up tomorrow.",
  },
  institute: {
    q: "Do you offer Spoken English classes?",
    a: "Yes — both Beginner & Advanced. 🗣️\n• 8 weeks, twice a week\n• $65 total\nWant to start next Monday?",
    followup: "Slot held for Monday 6 PM. Confirmation message sent.",
  },
};

type Step = { side: "in" | "out" | "system"; text: string; icon?: typeof Save };

const Demo = () => {
  const [type, setType] = useState<InstituteType>("tuition");
  const [steps, setSteps] = useState<Step[]>([]);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    runSimulation(type);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  const runSimulation = (t: InstituteType) => {
    const s = SCRIPTS[t];
    setSteps([]);
    setRunning(true);

    const sequence: { delay: number; step: Step }[] = [
      { delay: 400, step: { side: "in", text: s.q } },
      { delay: 1400, step: { side: "out", text: s.a } },
      { delay: 2400, step: { side: "system", text: "Lead captured", icon: Save } },
      { delay: 3200, step: { side: "system", text: s.followup, icon: Bell } },
    ];

    sequence.forEach(({ delay, step }) => {
      setTimeout(() => {
        setSteps((prev) => [...prev, step]);
      }, delay);
    });

    setTimeout(() => setRunning(false), 3500);
  };

  return (
    <section id="demo" className="py-24 sm:py-32 relative">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-accent uppercase tracking-wider mb-4">
            Live demo
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Watch it{" "}
            <span className="text-gradient">close a lead in real time.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Pick your institute type below and see exactly what happens when a student messages you at 11pm.
          </p>
        </div>

        {/* Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {(["tuition", "university", "institute"] as InstituteType[]).map((t) => (
            <button
              key={t}
              onClick={() => setType(t)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all capitalize ${
                type === t
                  ? "bg-gradient-primary text-primary-foreground glow-primary"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {t === "tuition" ? "Tuition Class" : t === "university" ? "University" : "Institute"}
            </button>
          ))}
          <button
            onClick={() => runSimulation(type)}
            disabled={running}
            className="px-4 py-2 rounded-xl text-sm font-medium glass text-muted-foreground hover:text-foreground disabled:opacity-50"
          >
            ↻ Replay
          </button>
        </div>

        <div className="max-w-2xl mx-auto card-elevated rounded-3xl p-4 sm:p-6">
          {/* Chat header */}
          <div className="flex items-center gap-3 px-2 pb-4 border-b border-border">
            <img src={logo} alt="Nexaura AI" className="h-10 w-10 rounded-full object-cover" />
            <div className="flex-1">
              <div className="font-medium">Nexaura AI Assistant</div>
              <div className="text-xs text-success flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
                Online · Replying in &lt;5s
              </div>
            </div>
          </div>

          {/* Chat */}
          <div className="min-h-[380px] py-5 space-y-3">
            {steps.length === 0 && (
              <div className="text-center text-muted-foreground text-sm py-10">Starting simulation…</div>
            )}
            {steps.map((s, i) => {
              if (s.side === "system") {
                const Icon = s.icon ?? Save;
                return (
                  <div key={i} className="flex justify-center animate-fade-in">
                    <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-success">
                      <Icon className="h-3.5 w-3.5" />
                      {s.text}
                    </div>
                  </div>
                );
              }
              return (
                <div key={i} className={`flex animate-fade-in ${s.side === "in" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm whitespace-pre-line ${
                      s.side === "in"
                        ? "bg-gradient-primary text-primary-foreground rounded-tr-sm"
                        : "bg-secondary text-foreground rounded-tl-sm"
                    }`}
                  >
                    {s.text}
                    {s.side === "in" && (
                      <div className="text-[10px] opacity-70 mt-1 flex items-center justify-end gap-1">
                        Now <CheckCheck className="h-3 w-3" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Fake input */}
          <div className="flex items-center gap-2 rounded-xl bg-secondary px-3 py-2 mt-2 opacity-60">
            <input
              disabled
              placeholder="Type a message…"
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
            <Send className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
