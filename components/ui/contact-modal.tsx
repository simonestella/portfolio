"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
  labels: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
    sending: string;
    successTitle: string;
    successBody: string;
    errorBody: string;
    close: string;
  };
}

export function ContactModal({ open, onClose, labels }: ContactModalProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          ...form,
        }),
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStatus("idle");
      setForm({ name: "", email: "", message: "" });
    }, 300);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-4 top-[50%] z-50 mx-auto max-w-md -translate-y-1/2 overflow-hidden rounded-[1.4rem] border border-[var(--modal-border)] bg-gradient-to-br from-[var(--modal-bg)] to-[var(--modal-bg-end)] shadow-[0_32px_64px_rgba(0,0,0,0.22),0_2px_16px_rgba(0,0,0,0.12)] sm:inset-x-0"
          >
            {/* Header */}
            <div className="relative flex items-start justify-between border-b border-[var(--surface-border)] px-6 py-5">
              <div>
                <h2 className="text-[17px] font-semibold tracking-tight text-[var(--ink)]">
                  {labels.title}
                </h2>
                <p className="mt-0.5 text-[13px] text-[var(--ink-3)]">{labels.subtitle}</p>
              </div>
              <button
                onClick={handleClose}
                aria-label={labels.close}
                className="ml-4 mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--card-bg)] text-[var(--muted)] transition hover:bg-[var(--surface)] hover:text-[var(--ink)]"
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="px-6 py-6">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center gap-4 py-4 text-center"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--apple-blue)]/10">
                      <svg viewBox="0 0 24 24" className="h-7 w-7 text-[var(--apple-blue)]" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-base font-semibold text-[var(--ink)]">{labels.successTitle}</p>
                      <p className="mt-1 text-sm text-[var(--ink-3)]">{labels.successBody}</p>
                    </div>
                    <Button size="sm" variant="secondary" onClick={handleClose}>
                      {labels.close}
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                  >
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[12px] font-medium uppercase tracking-[0.1em] text-[var(--muted)]">
                        {labels.name}
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        className="rounded-xl border border-[var(--surface-border)] bg-[var(--card-bg)] px-4 py-2.5 text-sm text-[var(--ink)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--apple-blue)]/50 focus:ring-2 focus:ring-[var(--apple-blue)]/15"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[12px] font-medium uppercase tracking-[0.1em] text-[var(--muted)]">
                        {labels.email}
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        className="rounded-xl border border-[var(--surface-border)] bg-[var(--card-bg)] px-4 py-2.5 text-sm text-[var(--ink)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--apple-blue)]/50 focus:ring-2 focus:ring-[var(--apple-blue)]/15"
                      />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[12px] font-medium uppercase tracking-[0.1em] text-[var(--muted)]">
                        {labels.message}
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={form.message}
                        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                        className="resize-none rounded-xl border border-[var(--surface-border)] bg-[var(--card-bg)] px-4 py-2.5 text-sm text-[var(--ink)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--apple-blue)]/50 focus:ring-2 focus:ring-[var(--apple-blue)]/15"
                      />
                    </div>

                    {status === "error" && (
                      <p className="rounded-xl border border-red-400/20 bg-red-500/10 px-4 py-2.5 text-xs text-red-500">
                        {labels.errorBody}
                      </p>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      disabled={status === "sending"}
                      className="mt-1 w-full shadow-[0_8px_20px_rgba(0,113,227,0.25)]"
                    >
                      {status === "sending" ? labels.sending : labels.send}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
