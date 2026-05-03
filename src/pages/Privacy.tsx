import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Privacy = () => {
  return (
    <main className="container max-w-3xl py-24 sm:py-32">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
      >
        <ArrowLeft className="h-4 w-4" /> Back to home
      </Link>

      <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
        Privacy <span className="text-gradient">Policy</span>
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
      </p>

      <div className="prose prose-invert max-w-none mt-10 space-y-8 text-foreground/90">
        <section>
          <h2 className="font-display text-2xl font-semibold mb-3">1. Introduction</h2>
          <p className="text-muted-foreground leading-relaxed">
            Nexaura AI ("we", "our", "us") respects your privacy. This Privacy Policy explains how we collect,
            use, and protect your information when you use our website and WhatsApp AI services.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold mb-3">2. Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
            <li>Contact details (name, phone number, email, institute name) you submit via forms or WhatsApp.</li>
            <li>Conversation data exchanged with our AI assistant for the purpose of replying and improving service.</li>
            <li>Basic analytics data (pages visited, device type) to understand how the site is used.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold mb-3">3. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
            <li>To respond to inquiries and provide our services.</li>
            <li>To send service-related updates and follow-ups.</li>
            <li>To improve our AI models and overall product quality.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold mb-3">4. Data Sharing</h2>
          <p className="text-muted-foreground leading-relaxed">
            We do not sell your data. We may share information with trusted service providers
            (e.g. hosting, messaging APIs) strictly to operate our services, and when required by law.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold mb-3">5. Data Security</h2>
          <p className="text-muted-foreground leading-relaxed">
            We use reasonable technical and organizational measures to protect your data. No method of
            transmission over the internet is 100% secure, but we work to keep your information safe.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold mb-3">6. Your Rights</h2>
          <p className="text-muted-foreground leading-relaxed">
            You may request access, correction, or deletion of your personal data at any time by contacting us.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold mb-3">7. Contact</h2>
          <p className="text-muted-foreground leading-relaxed">
            For any privacy-related questions, contact us on WhatsApp at{" "}
            <a href="https://wa.me/94714019108" className="text-primary hover:underline">
              +94 71 401 9108
            </a>{" "}
            or via Instagram{" "}
            <a
              href="https://instagram.com/nexauraai_official"
              className="text-primary hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              @nexauraai_official
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
};

export default Privacy;
