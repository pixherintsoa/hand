"use client";

import { profile } from "@/app/data/portfolio";

export default function ContactForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(String(data.get("subject") || "Contact depuis le portfolio"));
    const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  const input =
    "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent";

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-border bg-background p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" required placeholder="Votre nom" className={input} />
        <input name="email" type="email" required placeholder="Votre email" className={input} />
      </div>
      <input name="subject" placeholder="Sujet" className={input} />
      <textarea name="message" required rows={5} placeholder="Votre message" className={input} />
      <button type="submit" className="w-full rounded-full bg-accent px-6 py-3 font-medium text-white transition-opacity hover:opacity-90 sm:w-auto">
        Envoyer le message
      </button>
    </form>
  );
}
