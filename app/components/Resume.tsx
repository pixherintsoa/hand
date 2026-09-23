import { education, experience } from "@/app/data/portfolio";

type Item = { title: string; subtitle: string; period: string; description?: string };

function Timeline({ heading, items }: { heading: string; items: Item[] }) {
  return (
    <div>
      <h3 className="mb-6 text-xl font-semibold">{heading}</h3>
      <ol className="relative space-y-8 border-l-2 border-border pl-6">
        {items.map((item) => (
          <li key={item.title + item.subtitle} className="relative">
            <span className="absolute top-1.5 -left-[31px] h-3.5 w-3.5 rounded-full border-2 border-background bg-accent" />
            {item.period && (
              <span className="inline-block rounded-full bg-accent-soft px-3 py-0.5 text-xs font-medium text-accent">
                {item.period}
              </span>
            )}
            <h4 className="mt-2 font-semibold">{item.title}</h4>
            <p className="text-sm text-muted">{item.subtitle}</p>
            {item.description && <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Resume() {
  return (
    <section id="parcours" className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-medium text-accent">Parcours</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight">Formation & Expérience</h2>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <Timeline
            heading="Formation"
            items={education.map((e) => ({ title: e.degree, subtitle: e.school, period: e.period }))}
          />
          <Timeline
            heading="Expérience"
            items={experience.map((e) => ({
              title: e.role,
              subtitle: e.company,
              period: e.period,
              description: e.description,
            }))}
          />
        </div>
      </div>
    </section>
  );
}
