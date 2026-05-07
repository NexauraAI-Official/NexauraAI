// ============================================================
// Nexaura AI — Chatbot FAQ database
// Add / edit entries below. The chatbot matches user questions
// against the `keywords` array (case-insensitive). The first
// entry is the default fallback.
//
// Tip: keep keywords short and lowercase. Add common misspellings.
// ============================================================

export type FAQEntry = {
  id: string;
  keywords: string[];
  question: string;
  answer: string;
};

export const FAQS: FAQEntry[] = [
  {
    id: "fallback",
    keywords: [], // matched when nothing else matches
    question: "Default",
    answer:
      "I'm not 100% sure about that one 🤔 — but our team can help directly on WhatsApp: https://wa.me/94714019108",
  },
  {
    id: "what-is",
    keywords: ["what", "who", "about", "nexaura", "agency", "do you do"],
    question: "What is Nexaura AI?",
    answer:
      "Nexaura AI builds **automated WhatsApp assistants** for educational institutes. We reply to every student inquiry instantly, 24/7, so you never lose a lead to slow replies.",
  },
  {
    id: "pricing",
    keywords: ["price", "pricing", "cost", "fee", "plan", "how much", "$"],
    question: "How much does it cost?",
    answer:
      "Our pricing is **per student**: Starter is **$0.62/student** (was $3) and Growth is **$1.15/student** (was $5). Larger institutes get custom pricing. See the Pricing section above for full details.",
  },
  {
    id: "trial",
    keywords: ["trial", "free", "test", "try"],
    question: "Is there a free trial?",
    answer:
      "Yes — we offer a **3-day free trial** so you can fully evaluate the service before paying anything.",
  },
  {
    id: "refund",
    keywords: ["refund", "money back", "cancel payment"],
    question: "Do you offer refunds?",
    answer:
      "All payments are **non-refundable** because of the 3-day free trial. Make sure to test thoroughly during the trial.",
  },
  {
    id: "setup",
    keywords: ["setup", "install", "how long", "start", "onboard", "begin"],
    question: "How long does setup take?",
    answer:
      "Most institutes are live within **24–48 hours**. We handle the WhatsApp setup, train the AI on your classes & fees, and run tests with you before going live.",
  },
  {
    id: "languages",
    keywords: ["language", "english", "sinhala", "tamil", "multilingual"],
    question: "What languages does it support?",
    answer:
      "The AI replies naturally in **English** by default. We can train it on additional languages on request.",
  },
  {
    id: "whatsapp",
    keywords: ["whatsapp", "number", "official", "api"],
    question: "Does it use my WhatsApp number?",
    answer:
      "Yes — we connect to your existing WhatsApp Business number using the official WhatsApp Business API. No new number needed.",
  },
  {
    id: "data",
    keywords: ["data", "secure", "privacy", "safe", "gdpr"],
    question: "Is my student data safe?",
    answer:
      "Yes. All conversations are encrypted and stored securely. See our [Privacy Policy](/privacy) for full details.",
  },
  {
    id: "contact",
    keywords: ["contact", "talk", "human", "demo", "book", "call", "speak"],
    question: "How do I talk to a human?",
    answer:
      "Easiest way: WhatsApp us at **+94 71 401 9108** — https://wa.me/94714019108.",
  },
  {
    id: "hello",
    keywords: ["hi", "hello", "hey", "yo", "hola"],
    question: "Greeting",
    answer:
      "Hey there! 👋 I'm Nexus, the Nexaura assistant. Ask me about pricing, the free trial, setup, or anything about our agency.",
  },
  {
    id: "services",
    keywords: ["service", "services", "offer", "build", "make", "telegram", "platforms", "platform"],
    question: "What do you build?",
    answer:
      "We build **AI auto-reply systems for WhatsApp _and_ Telegram**, fully personalized for each institute. Your bot is trained on your classes, fees, schedules, and admissions info.",
  },
  {
    id: "delivery",
    keywords: ["deliver", "delivery", "deploy", "deployment", "timeline", "ready", "live", "days", "14", "how fast", "how long"],
    question: "How fast do you deliver?",
    answer:
      "We **build and deploy your system within 14 days of payment** — fully trained, tested, and live on your WhatsApp or Telegram number.",
  },
  {
    id: "benefits",
    keywords: ["benefit", "benefits", "why", "advantage", "advantages", "value", "help", "good"],
    question: "What are the benefits?",
    answer:
      "Here's what Nexaura gives your institute:\n\n- ⚡ **Instant replies** — every inquiry answered in seconds, 24/7\n- 👥 **Reduced staff workload** — your team focuses on real work, not repetitive questions\n- 📈 **No more lost enrollments** from slow replies\n- 🔥 **Handles peak hours effortlessly** — even hundreds of parents at once",
  },
];

/**
 * Find the best matching FAQ by counting keyword hits.
 * Falls back to the entry with id="fallback".
 */
export const findAnswer = (input: string): FAQEntry => {
  const text = input.toLowerCase().trim();
  if (!text) return FAQS[0];

  let best: { entry: FAQEntry; score: number } | null = null;

  for (const entry of FAQS) {
    if (entry.id === "fallback") continue;
    let score = 0;
    for (const kw of entry.keywords) {
      if (text.includes(kw.toLowerCase())) score += kw.length; // longer keyword = stronger match
    }
    if (score > 0 && (!best || score > best.score)) {
      best = { entry, score };
    }
  }

  return best?.entry ?? FAQS[0];
};

export const SUGGESTED_QUESTIONS = [
  "What is Nexaura AI?",
  "What do you build?",
  "What are the benefits?",
  "How much does it cost?",
  "Is there a free trial?",
  "How fast do you deliver?",
  "Is my student data safe?",
  "How do I talk to a human?",
];
