import { Star, Quote, PlayCircle } from "lucide-react";

const stats = [
  { v: "40+", l: "Institutes onboarded" },
  { v: "120K+", l: "Inquiries handled" },
  { v: "<5s", l: "Avg. reply time" },
  { v: "38%", l: "Avg. enrollment lift" },
];

// TODO: Replace `embedUrl` with your YouTube/Vimeo embed link
// e.g. "https://www.youtube.com/embed/VIDEO_ID" or "https://player.vimeo.com/video/VIDEO_ID"
const videoTestimonials: { embedUrl: string; title: string }[] = [
  { embedUrl: "", title: "Testimonial video 1" },
  { embedUrl: "", title: "Testimonial video 2" },
  { embedUrl: "", title: "Testimonial video 3" },
];

const testimonials = [
  {
    quote:
      "We used to lose students just because we replied late. Within the first month with Nexaura, our enrollments jumped by almost 30%. The AI replies before we even see the message.",
    name: "Dinesh Perera",
    role: "Owner, BrightPath Tuition",
    initials: "DP",
  },
  {
    quote:
      "Parents message us at 10pm asking about fees and timetables. Now they get a perfect reply in seconds. Our front-desk team finally has time to focus on actual students.",
    name: "Anusha Fernando",
    role: "Director, Colombo IT Academy",
    initials: "AF",
  },
  {
    quote:
      "The setup was painless and the AI sounds exactly like our staff. We've stopped using a separate inquiry sheet — every lead is automatically saved and followed up.",
    name: "Ruwan Jayasuriya",
    role: "Principal, NextGen Institute",
    initials: "RJ",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 sm:py-32 relative">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-primary uppercase tracking-wider mb-4">
            What we've done
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Real institutes.{" "}
            <span className="text-gradient">Real results.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            A few of the institutes already turning missed messages into enrollments with Nexaura AI.
          </p>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          {stats.map((s) => (
            <div key={s.l} className="card-elevated rounded-2xl p-5 text-center">
              <div className="font-display text-3xl sm:text-4xl font-bold text-gradient-primary">
                {s.v}
              </div>
              <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>

        {/* Video testimonials */}
        <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto mb-12">
          {videoTestimonials.map((v, i) => (
            <div
              key={i}
              className="card-elevated rounded-2xl overflow-hidden aspect-video relative group"
            >
              {v.embedUrl ? (
                <iframe
                  src={v.embedUrl}
                  title={v.title}
                  className="w-full h-full"
                  allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground bg-secondary/30">
                  <PlayCircle className="h-10 w-10 mb-2 text-primary/60" />
                  <div className="text-xs">Video {i + 1} — embed coming soon</div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="card-elevated rounded-2xl p-6 sm:p-7 flex flex-col">
              <Quote className="h-6 w-6 text-primary/50 mb-4" />
              <p className="text-sm sm:text-[15px] leading-relaxed text-foreground/90 flex-1">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-1 mt-5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-border flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-display font-semibold text-sm">
                  {t.initials}
                </div>
                <div>
                  <div className="font-medium text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
