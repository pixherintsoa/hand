import { profile } from "@/app/data/portfolio";
import ContactForm from "./ContactForm";
import { FacebookIcon, GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from "./icons";

export default function Contact() {
  const items = [
    { icon: <MailIcon />, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: <PhoneIcon />, label: "Téléphone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: <GithubIcon />, label: "GitHub", value: "github.com/pixherintsoa", href: profile.socials.github },
    { icon: <LinkedinIcon />, label: "LinkedIn", value: "Herintsoa Narindra", href: profile.socials.linkedin },
    { icon: <FacebookIcon />, label: "Facebook", value: "Herintsoa Pix", href: profile.socials.facebook },
  ];

  return (
    <section id="contact" className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-medium text-accent">Contact</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight">Travaillons ensemble</h2>
        <p className="mt-4 max-w-xl text-muted">
          Un projet, une opportunité ou simplement une question ? N&apos;hésitez pas à me contacter.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <ul className="space-y-4">
            {items.map((it) => (
              <li key={it.label}>
                <a
                  href={it.href}
                  target={it.href.startsWith("http") ? "_blank" : undefined}
                  rel={it.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 rounded-xl border border-border bg-background p-4 transition-colors hover:border-accent"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                    {it.icon}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-muted">{it.label}</span>
                    <span className="block truncate font-medium">{it.value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
