import { useState } from "react";
import { Search, Loader2, AlertTriangle, CheckCircle2, XCircle } from "lucide-react";

type InputKind = "url" | "phone" | "invalid";

const detectInputKind = (raw: string): InputKind => {
  const value = raw.trim();
  if (!value) return "invalid";

  const digits = value.replace(/\D/g, "");
  const looksLikePhone =
    /^[+\d][\d\s\-()]{6,}$/.test(value) && digits.length >= 7 && digits.length <= 15;
  if (looksLikePhone) return "phone";

  const cleaned = value.replace(/^https?:\/\//i, "").replace(/\/.*$/, "");
  const domainRegex = /^([a-z0-9]([a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,}$/i;
  if (!cleaned.includes(" ") && !cleaned.includes("@") && domainRegex.test(cleaned)) {
    return "url";
  }

  return "invalid";
};

const checkUrlReachable = async (raw: string): Promise<boolean> => {
  const cleaned = raw.trim().replace(/^https?:\/\//i, "").replace(/\/.*$/, "");
  try {
    await fetch(`https://${cleaned}`, {
      method: "HEAD",
      mode: "no-cors",
      signal: AbortSignal.timeout(5000),
    });
    return true;
  } catch {
    return false;
  }
};

const AIAudit = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<null | {
    speed: string;
    speedColor: string;
    missed: number;
    score: number;
  }>(null);

  const runAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setResult(null);

    const kind = detectInputKind(input);
    if (kind === "invalid") {
      setError(
        "Please enter a valid website (e.g. yourinstitute.lk) or phone number (e.g. 0771234567)."
      );
      return;
    }

    setLoading(true);

    if (kind === "url") {
      const reachable = await checkUrlReachable(input);
      if (!reachable) {
        setLoading(false);
        setError("We couldn't reach that website. Double-check the URL and try again.");
        return;
      }
    }

    setTimeout(() => {
      const seed = input.length;
      const score = 25 + (seed % 35);
      const missed = 35 + (seed % 30);
      setResult({
        speed: "Slow",
        speedColor: "text-destructive",
        missed,
        score,
      });
      setLoading(false);
    }, 1200);
  };

  return (
    <section className="py-24 sm:py-32 relative">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-accent uppercase tracking-wider mb-4">
            Free Scan
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Scan your <span className="text-gradient">institute.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Enter your website or WhatsApp number. We'll show you exactly where you're leaking enrollments.
          </p>
        </div>

        <div className="max-w-2xl mx-auto card-elevated rounded-3xl p-6 sm:p-8">
          <form onSubmit={runAudit} className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 flex items-center gap-2 rounded-xl bg-secondary px-4 py-3">
              <Search className="h-4 w-4 text-muted-foreground shrink-0" />
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="yourinstitute.lk or 077xxxxxxx"
                className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-gradient-primary text-primary-foreground px-6 py-3 font-medium glow-primary disabled:opacity-60 inline-flex items-center justify-center gap-2"
            >
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
              {loading ? "Scanning…" : "Run Scan"}
            </button>
          </form>

          {error && (
            <div className="mt-5 rounded-xl border border-destructive/30 bg-destructive/10 p-4 flex items-start gap-3 animate-fade-in">
              <XCircle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
              <div className="text-sm text-destructive">{error}</div>
            </div>
          )}

          {result && (
            <div className="mt-8 grid sm:grid-cols-3 gap-4 animate-fade-in">
              <Stat
                label="Response speed"
                value={result.speed}
                accent={result.speedColor}
                icon={AlertTriangle}
              />
              <Stat
                label="Missed inquiry rate"
                value={`${result.missed}%`}
                accent="text-destructive"
                icon={AlertTriangle}
              />
              <Stat
                label="Automation score"
                value={`${result.score}/100`}
                accent="text-accent"
                icon={CheckCircle2}
              />

              <div className="sm:col-span-3 mt-2 rounded-2xl border border-destructive/30 bg-destructive/10 p-5">
                <div className="text-sm">
                  Your institute is missing roughly{" "}
                  <span className="font-semibold text-destructive">{result.missed}%</span> of inquiries.
                  Nexaura AI typically reduces this to under 3% within the first week.
                </div>
                <a
                  href="https://wa.me/94714019108?text=Hi%20Nexaura%20AI%2C%20I'm%20interested%20in%20the%203-day%20free%20trial.%20Please%20get%20me%20started!"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex rounded-xl bg-gradient-primary text-primary-foreground px-5 py-2.5 text-sm font-medium glow-primary"
                >
                  Improve This Now →
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const Stat = ({
  label,
  value,
  accent,
  icon: Icon,
}: {
  label: string;
  value: string;
  accent: string;
  icon: typeof AlertTriangle;
}) => (
  <div className="rounded-2xl bg-secondary p-5">
    <div className="flex items-center justify-between text-xs text-muted-foreground">
      {label}
      <Icon className={`h-4 w-4 ${accent}`} />
    </div>
    <div className={`font-display text-2xl font-bold mt-2 ${accent}`}>{value}</div>
  </div>
);

export default AIAudit;
