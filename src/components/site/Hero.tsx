import { ArrowRight, Sparkles, Check, CheckCheck } from "lucide-react";
import logo from "@/assets/logo.png";

const WHATSAPP_LINK = `https://wa.me/94714019108?text=${encodeURIComponent(
  "Hi Nexaura AI, I'm interested in the 3-day free trial. Please get me started!"
)}`;

const Hero = () => {
  return (
    <section id="top" className="relative pt-32 sm:pt-40 pb-20 overflow-hidden">
      {/* Background grid + glows */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-[500px] w-[500px] bg-gradient-glow blur-3xl opacity-60 pointer-events-none" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left — Copy */}
          <div className="text-center lg:text-left animate-slide-up">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs sm:text-sm text-muted-foreground mb-6">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Built for global educational institutes
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05]">
              Never Miss a{" "}
              <span className="text-gradient">Student Inquiry</span> Again
            </h1>

            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Automated WhatsApp AI that replies instantly to every student inquiry
              and converts it into a real enrollment. 24/7. Without lifting a finger.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="#demo"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary text-primary-foreground px-6 py-3.5 font-medium glow-primary hover:scale-[1.02] transition-transform"
              >
                See Live Demo
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl glass px-6 py-3.5 font-medium hover:bg-secondary transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              {[
                { v: "<5s", l: "Reply time" },
                { v: "24/7", l: "Always on" },
                { v: "+38%", l: "Avg. enrollments" },
              ].map((s) => (
                <div key={s.l} className="text-center lg:text-left">
                  <div className="font-display text-2xl font-bold text-gradient-primary">{s.v}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — WhatsApp mockup */}
          <div className="relative animate-fade-in lg:pl-8">
            <div className="absolute inset-0 bg-gradient-glow blur-2xl opacity-60" />
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

const PhoneMockup = () => (
  <div className="relative mx-auto max-w-[340px] sm:max-w-[380px]">
    <div className="relative rounded-[2.5rem] border border-border bg-card p-3 shadow-elegant animate-float">
      <div className="rounded-[2rem] overflow-hidden bg-[#0b141a]">
        {/* WhatsApp header */}
        <div className="bg-[#202c33] px-4 py-3 flex items-center gap-3">
          <img src={logo} alt="Nexaura Institute" className="h-9 w-9 rounded-full object-cover" />
          <div className="flex-1">
            <div className="text-sm font-medium text-white">Nexaura Institute</div>
            <div className="text-[11px] text-emerald-400">online</div>
          </div>
        </div>

        {/* Chat */}
        <div
          className="px-3 py-4 space-y-2 min-h-[420px]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 10%, rgba(129,140,248,0.12), transparent 40%), radial-gradient(circle at 80% 80%, rgba(99,102,241,0.08), transparent 40%)",
          }}
        >
          <Bubble side="out" time="10:42">
            Class fee?
          </Bubble>
          <Bubble side="in" time="10:42">
            <div className="space-y-1.5">
              <div className="font-medium">Hi! 👋 Thanks for reaching out.</div>
              <div className="text-[13px] opacity-90">
                Our 2025 ICT class fees:
                <br />• Grade 10–11 — $25/month
                <br />• Grade 12–13 — $35/month
              </div>
              <div className="text-[13px] opacity-90">
                Classes start every Monday. Want me to reserve a free trial seat?
              </div>
            </div>
          </Bubble>
          <Bubble side="out" time="10:43">What time are the classes?</Bubble>
          <Bubble side="in" time="10:43">
            <div className="space-y-1.5">
              <div className="text-[13px]">
                Classes run weekdays from 4:00 PM to 6:00 PM. 📅
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <QuickReply>Book trial</QuickReply>
                <QuickReply>Talk to staff</QuickReply>
              </div>
            </div>
          </Bubble>
          <div className="flex items-center gap-1 pl-2 pt-1">
            <span className="typing-dot h-1.5 w-1.5 rounded-full bg-muted-foreground" />
            <span className="typing-dot h-1.5 w-1.5 rounded-full bg-muted-foreground" />
            <span className="typing-dot h-1.5 w-1.5 rounded-full bg-muted-foreground" />
          </div>
        </div>
      </div>
    </div>

    {/* Floating badge */}
    <div className="absolute -left-4 sm:-left-10 top-16 glass rounded-xl px-3 py-2 flex items-center gap-2 text-xs animate-float" style={{ animationDelay: "1s" }}>
      <Check className="h-3.5 w-3.5 text-success" />
      Lead saved
    </div>
    <div className="absolute -right-2 sm:-right-6 bottom-20 glass rounded-xl px-3 py-2 flex items-center gap-2 text-xs animate-float" style={{ animationDelay: "2s" }}>
      <CheckCheck className="h-3.5 w-3.5 text-accent" />
      Replied in 4.2s
    </div>
  </div>
);

const Bubble = ({ side, time, children }: { side: "in" | "out"; time: string; children: React.ReactNode }) => (
  <div className={`flex ${side === "out" ? "justify-end" : "justify-start"}`}>
    <div
      className={`max-w-[78%] rounded-2xl px-3 py-2 text-[13px] leading-snug text-white relative ${
        side === "out" ? "bg-[#005c4b] rounded-tr-sm" : "bg-[#202c33] rounded-tl-sm"
      }`}
    >
      {children}
      <div className="text-[10px] opacity-60 mt-1 text-right flex items-center justify-end gap-1">
        {time}
        {side === "out" && <CheckCheck className="h-3 w-3 text-sky-300" />}
      </div>
    </div>
  </div>
);

const QuickReply = ({ children }: { children: React.ReactNode }) => (
  <button className="rounded-full bg-white/10 hover:bg-white/20 transition-colors px-2.5 py-1 text-[11px] text-white border border-white/10">
    {children}
  </button>
);

export default Hero;
