"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTED_QUESTIONS = [
  "What are Marcelo's main projects?",
  "Tell me about the Life Expectancy ML project",
  "What technologies does Marcelo know?",
];

export function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm an AI assistant that knows everything about Marcelo's portfolio. Ask me about his projects, skills, or background.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: text.trim() };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      const data = await response.json();

      if (data.message) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.message },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, something went wrong. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const showSuggestions = messages.length === 1;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-[360px] rounded-2xl border border-border bg-card shadow-2xl shadow-black/20 overflow-hidden flex flex-col"
            style={{ height: "480px" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-gradient-to-r from-indigo-600 to-purple-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white font-semibold text-sm">
                  Portfolio Assistant
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex gap-2 items-start",
                    msg.role === "user" ? "flex-row-reverse" : "flex-row"
                  )}
                >
                  <div
                    className={cn(
                      "flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center",
                      msg.role === "user"
                        ? "bg-indigo-600"
                        : "bg-muted border border-border"
                    )}
                  >
                    {msg.role === "user" ? (
                      <User size={14} className="text-white" />
                    ) : (
                      <Bot size={14} className="text-muted-foreground" />
                    )}
                  </div>
                  <div
                    className={cn(
                      "max-w-[78%] rounded-2xl px-3 py-2 text-sm leading-relaxed",
                      msg.role === "user"
                        ? "bg-indigo-600 text-white rounded-tr-sm"
                        : "bg-muted text-foreground rounded-tl-sm"
                    )}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-2 items-start">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-muted border border-border flex items-center justify-center">
                    <Bot size={14} className="text-muted-foreground" />
                  </div>
                  <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-3">
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50"
                          animate={{ y: [0, -4, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: i * 0.15,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {showSuggestions && (
                <div className="flex flex-col gap-2 pt-1">
                  {SUGGESTED_QUESTIONS.map((q) => (
                    <button
                      key={q}
                      onClick={() => sendMessage(q)}
                      className="text-left text-xs px-3 py-2 rounded-xl border border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/10 transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="flex gap-2 p-3 border-t border-border"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                disabled={isLoading}
                className="flex-1 bg-muted rounded-xl px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500/50 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="flex-shrink-0 w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-500 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Send size={15} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30 flex items-center justify-center hover:shadow-indigo-500/50 transition-shadow"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open portfolio assistant"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X size={22} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle size={22} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
