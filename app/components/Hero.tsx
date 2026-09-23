import Image from "next/image";
import { profile } from "@/app/data/portfolio";
import { FacebookIcon, GithubIcon, LinkedinIcon } from "./icons";

export default function Hero() {
  return (
    <section id="accueil" className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-4 pt-32 pb-20 sm:px-6 md:flex-row md:pt-40">
      <div className="flex-1 text-center md:text-left">
        <p className="mb-3 font-medium text-accent">Bonjour, je suis</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {profile.firstName}
          <span className="mt-1 block text-2xl font-semibold text-muted sm:text-3xl">
            {profile.lastName}
          </span>
        </h1>
        <p className="mt-5 text-xl font-medium">{profile.title}</p>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted md:mx-0">{profile.tagline}</p>

        <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
          <a href="#contact" className="rounded-full bg-accent px-6 py-3 font-medium text-white transition-opacity hover:opacity-90">
            Me contacter
          </a>
          <a href="#projets" className="rounded-full border border-border px-6 py-3 font-medium transition-colors hover:border-accent hover:text-accent">
            Voir mes projets
          </a>
        </div>

        <div className="mt-8 flex justify-center gap-4 md:justify-start">
          <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted transition-colors hover:text-accent">
            <GithubIcon className="h-6 w-6" />
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted transition-colors hover:text-accent">
            <LinkedinIcon className="h-6 w-6" />
          </a>
          <a href={profile.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted transition-colors hover:text-accent">
            <FacebookIcon className="h-6 w-6" />
          </a>
        </div>
      </div>

      <div className="relative h-64 w-64 shrink-0 sm:h-80 sm:w-80">
        <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-full bg-accent-soft" />
        <Image
          src={profile.photo}
          alt={`${profile.firstName} ${profile.lastName}`}
          fill
          priority
          sizes="(min-width: 640px) 320px, 256px"
          className="rounded-full border-4 border-background object-cover shadow-xl"
        />
      </div>
    </section>
  );
}
