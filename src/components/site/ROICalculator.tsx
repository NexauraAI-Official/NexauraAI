import { useMemo, useState } from "react";
import { TrendingUp } from "lucide-react";

const ROICalculator = () => {
  const [inquiries, setInquiries] = useState(20);
  const [conversion, setConversion] = useState(20);
  const [fee, setFee] = useState(80);

  const monthlyLoss = useMemo(() => {
    // Assume 40% of inquiries are missed/delayed without AI; AI recovers 80% of those
    const missedPerDay = inquiries * 0.4;
    const lostStudentsPerMonth = missedPerDay * 30 * (conversion / 100);
    return Math.round(lostStudentsPerMonth * fee);
  }, [inquiries, conversion, fee]);

  const recovered = Math.round(monthlyLoss * 0.8);

  const fmt = (n: number) =>
    "$" + n.toLocaleString("en-US", { maximumFractionDigits: 0 });

  return (
    <section id="roi" className="py-24 sm:py-32 relative">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-primary uppercase tracking-wider mb-4">
            ROI Calculator
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            How much are you{" "}
            <span className="text-destructive">losing every month?</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Adjust the sliders. The numbers are usually worse than owners think.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Inputs */}
          <div className="card-elevated rounded-3xl p-6 sm:p-8 space-y-6">
            <Slider
              label="Daily inquiries"
              value={inquiries}
              min={5}
              max={150}
              step={1}
              onChange={setInquiries}
              suffix=" / day"
            />
            <Slider
              label="Conversion rate"
              value={conversion}
              min={5}
              max={60}
              step={1}
              onChange={setConversion}
              suffix=" %"
            />
            <Slider
              label="Average course fee"
              value={fee}
              min={10}
              max={500}
              step={5}
              onChange={setFee}
              prefix="$"
            />
          </div>

          {/* Output */}
          <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-primary text-primary-foreground overflow-hidden glow-primary">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            <div className="relative">
              <div className="text-sm opacity-80">Estimated monthly loss</div>
              <div className="font-display text-4xl sm:text-5xl font-bold mt-2 break-words">
                {fmt(monthlyLoss)}
              </div>
              <div className="text-sm opacity-80 mt-1">due to missed or delayed replies</div>

              <div className="mt-6 rounded-2xl bg-black/20 backdrop-blur p-4 sm:p-5">
                <div className="flex items-center gap-2 text-sm">
                  <TrendingUp className="h-4 w-4" />
                  With Nexaura AI you could recover
                </div>
                <div className="font-display text-2xl sm:text-3xl font-bold mt-1">
                  {fmt(recovered)} <span className="text-sm font-normal opacity-80">/ month</span>
                </div>
              </div>

              <a
                href="https://wa.me/94714019108?text=Hi%20Nexaura%20AI%2C%20I'm%20interested%20in%20the%203-day%20free%20trial.%20Please%20get%20me%20started!"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-background text-foreground py-3.5 font-medium hover:bg-secondary transition-colors"
              >
                Stop the loss → Chat now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Slider = ({
  label,
  value,
  min,
  max,
  step,
  onChange,
  prefix = "",
  suffix = "",
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (n: number) => void;
  prefix?: string;
  suffix?: string;
}) => (
  <div>
    <div className="flex items-center justify-between mb-3">
      <label className="text-sm text-muted-foreground">{label}</label>
      <div className="font-display font-semibold tabular-nums">
        {prefix}
        {value.toLocaleString()}
        {suffix}
      </div>
    </div>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full h-2 rounded-full appearance-none bg-secondary accent-[hsl(var(--primary))] cursor-pointer"
    />
  </div>
);

export default ROICalculator;
