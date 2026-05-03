import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
  return (
    <main className="container max-w-3xl py-24 sm:py-32">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
      >
        <ArrowLeft className="h-4 w-4" /> Back to home
      </Link>

      <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
        Terms & <span className="text-gradient">Conditions</span>
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
      </p>

      <div className="prose prose-invert max-w-none mt-10 space-y-8 text-foreground/90">
        <section>
          <h2 className="font-display text-2xl font-semibold mb-3">1. Agreement</h2>
          <p className="text-muted-foreground leading-relaxed">
            By using Nexaura AI's services, you agree to these Terms & Conditions. If you do not agree, please
            do not use our services.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold mb-3">2. Services</h2>
          <p className="text-muted-foreground leading-relaxed">
            Nexaura AI provides automated WhatsApp AI assistants for educational institutes, including setup,
            integration, and ongoing support as per the chosen plan.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold mb-3">3. Free Trial</h2>
          <p className="text-muted-foreground leading-relaxed">
            We offer a <span className="text-foreground font-medium">3-day free trial</span> so you can fully
            evaluate the service before committing. The trial includes core features and is provided as-is.
            You may cancel at any time during the trial with no charge.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold mb-3">4. Refund Policy</h2>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">All payments are non-refundable.</span> Because we
            provide a 3-day free trial, customers are expected to evaluate the service fully before purchasing.
            Once payment is made, no refunds will be issued — partial or full — under any circumstances.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold mb-3">5. Acceptable Use</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
            <li>Do not use our services for spam, harassment, or any illegal activity.</li>
            <li>Do not attempt to reverse-engineer, copy, or resell our AI systems.</li>
            <li>You are responsible for the accuracy of content you provide for your AI assistant.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold mb-3">6. Service Availability</h2>
          <p className="text-muted-foreground leading-relaxed">
            We strive for 24/7 uptime but do not guarantee uninterrupted service. Maintenance, third-party API
            outages (e.g. WhatsApp), or unforeseen events may temporarily affect availability.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold mb-3">7. Limitation of Liability</h2>
          <p className="text-muted-foreground leading-relaxed">
            Nexaura AI is not liable for indirect, incidental, or consequential damages arising from the use
            or inability to use the service. Our total liability is limited to the amount paid in the previous
            month of service.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold mb-3">8. No Guarantee of Results</h2>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">
              Any numbers, statistics, percentages, response times, or performance figures shown on this
              website, in marketing materials, proposals, or any agreement are illustrative estimates only and
              are not guaranteed.
            </span>{" "}
            Actual results vary based on your industry, audience, content quality, message volume, and other
            factors outside our control. Nothing on this website or in any agreement constitutes a guarantee
            of specific outcomes, enrollments, revenue, or reply times.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold mb-3">9. Changes to Terms</h2>
          <p className="text-muted-foreground leading-relaxed">
            We may update these Terms from time to time. Continued use of the service after changes means you
            accept the updated Terms.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold mb-3">10. Contact</h2>
          <p className="text-muted-foreground leading-relaxed">
            Questions? Reach us on WhatsApp at{" "}
            <a href="https://wa.me/94714019108" className="text-primary hover:underline">
              +94 71 401 9108
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
};

export default Terms;
