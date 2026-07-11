import type { Dictionary } from "@/lib/i18n/types";

export function IntroSection({ intro }: { intro: Dictionary["intro"] }) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <div className="grid gap-10 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <p className="eyebrow">{intro.eyebrow}</p>
          <h2 className="font-display mt-4 text-balance text-3xl leading-[1.2] font-medium md:text-[2.5rem]">
            {intro.heading}
          </h2>
        </div>
        <div className="space-y-5 md:col-span-6 md:col-start-7">
          <p className="text-pretty leading-relaxed text-foreground/90 md:text-lg">
            {intro.body[0]}
          </p>
          {intro.body.slice(1).map((paragraph) => (
            <p
              key={paragraph}
              className="text-pretty text-[0.9375rem] leading-relaxed text-muted-foreground md:text-base"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <dl className="mt-16 grid gap-8 sm:grid-cols-3 md:mt-20">
        {intro.values.map((value) => (
          <div key={value.title} className="border-t border-border pt-6">
            <dt className="font-display text-xl italic">{value.title}</dt>
            <dd className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
              {value.description}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
