const logos = [
  "BrightMinds Academy",
  "EduPro Institute",
  "ScholarHub",
  "NextGen Learning",
  "Apex Tutors",
  "GlobalEd",
];

const LogoStrip = () => {
  return (
    <section aria-label="Trusted by institutes" className="py-10 border-y border-border/60 bg-card/30">
      <div className="container">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
          Trusted by forward-thinking institutes
        </p>
        <div className="relative overflow-hidden">
          <div className="flex gap-12 animate-[scroll_30s_linear_infinite] whitespace-nowrap">
            {[...logos, ...logos, ...logos].map((name, i) => (
              <div
                key={i}
                className="font-display text-lg sm:text-xl font-semibold text-muted-foreground/70 hover:text-foreground transition-colors shrink-0"
              >
                {name}
              </div>
            ))}
          </div>
          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;
