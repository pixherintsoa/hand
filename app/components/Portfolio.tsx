import Image from "next/image";
import { projects } from "@/app/data/portfolio";
import { ExternalIcon } from "./icons";

export default function Portfolio() {
  return (
    <section id="projets" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-medium text-accent">Portfolio</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight">Mes projets</h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-video overflow-hidden bg-linear-to-br from-accent to-accent-soft">
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <span className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white/80">
                    {p.tags[0]}
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li key={t} className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
                      {t}
                    </li>
                  ))}
                </ul>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
                  >
                    Voir le projet <ExternalIcon />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
