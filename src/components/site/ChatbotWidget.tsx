import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { X, Send, Sparkles } from "lucide-react";
import { findAnswer, SUGGESTED_QUESTIONS } from "@/data/faq";
import logo from "@/assets/logo.png";
import nexusIcon from "@/assets/nexus-icon.png";

type Msg = { role: "user" | "bot"; text: string };

const ChatbotWidget = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "bot",
      text: "Hi! 👋 I'm Nexus, the Nexaura assistant. Ask me anything about our agency, pricing, or how to get started.",
    },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const send = (text: string) => {
    const q = text.trim();
    if (!q) return;
    const answer = findAnswer(q).answer;
    setMessages((prev) => [...prev, { role: "user", text: q }, { role: "bot", text: answer }]);
    setInput("");
  };

  return (
    <>
      {/* Floating launcher */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-5 right-5 z-50 h-16 w-16 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center shadow-elegant hover:scale-105 transition-transform overflow-hidden ring-2 ring-primary/30"
      >
        {open ? (
          <X className="h-6 w-6 text-primary-foreground" />
        ) : (
          <img
            src={nexusIcon}
            alt="Nexus AI assistant"
            width={64}
            height={64}
            loading="lazy"
            className="h-full w-full object-contain p-1.5"
          />
        )}
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-24 right-5 z-50 w-[calc(100vw-2.5rem)] sm:w-[380px] max-h-[70vh] card-elevated rounded-2xl flex flex-col overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-gradient-primary text-primary-foreground">
            <img src={logo} alt="Nexaura" className="h-9 w-9 rounded-full object-cover" />
            <div className="flex-1">
              <div className="font-medium text-sm">Nexus</div>
              <div className="text-[11px] opacity-90 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
                Online · Replies instantly
              </div>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-3 py-4 space-y-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex animate-fade-in ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-sm ${
                    m.role === "user"
                      ? "bg-gradient-primary text-primary-foreground rounded-tr-sm"
                      : "bg-secondary text-foreground rounded-tl-sm"
                  }`}
                >
                  {m.role === "bot" ? (
                    <div className="prose prose-sm max-w-none prose-p:my-1 prose-a:text-primary prose-strong:text-foreground">
                      <ReactMarkdown>{m.text}</ReactMarkdown>
                    </div>
                  ) : (
                    m.text
                  )}
                </div>
              </div>
            ))}

            <div className="pt-1 space-y-1.5">
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground flex items-center gap-1.5 px-1">
                <Sparkles className="h-3 w-3" /> Suggested
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {SUGGESTED_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => send(q)}
                    className="text-xs rounded-lg glass px-3 py-2 text-center hover:text-foreground text-muted-foreground transition-colors min-h-[36px] flex items-center justify-center"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 border-t border-border p-2.5"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question…"
              className="flex-1 bg-secondary rounded-xl px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              aria-label="Send"
              className="h-9 w-9 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center hover:scale-105 transition-transform"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;
