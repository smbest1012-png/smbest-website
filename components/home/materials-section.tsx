import type { Dictionary } from "@/lib/i18n/types";

/**
 * Materials & technology — rendered entirely with type and hairlines
 * (no stock photos), on the deep forest ground for section rhythm.
 */
export function MaterialsSection({
  materials,
}: {
  materials: Dictionary["materials"];
}) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="text-[0.6875rem] font-medium tracking-[0.18em] uppercase text-primary-foreground/60">
              {materials.eyebrow}
            </p>
            <h2 className="font-display mt-4 text-balance text-3xl leading-[1.2] font-medium md:text-[2.5rem]">
              {materials.heading}
            </h2>
          </div>
          <p className="text-pretty leading-relaxed text-primary-foreground/80 md:col-span-6 md:col-start-7 md:text-lg">
            {materials.description}
          </p>
        </div>

        <dl className="mt-14 border-y border-primary-foreground/15">
          {materials.items.map((item) => (
            <div
              key={item.title}
              className="grid gap-1.5 border-b border-primary-foreground/15 py-6 last:border-b-0 md:grid-cols-[1fr_2fr] md:gap-8"
            >
              <dt className="text-lg font-medium">{item.title}</dt>
              <dd className="text-[0.9375rem] leading-relaxed text-primary-foreground/75">
                {item.description}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-16">
          <h3 className="text-[0.6875rem] font-medium tracking-[0.18em] uppercase text-primary-foreground/60">
            {materials.processTitle}
          </h3>
          {/* A real sequence — numbering carries meaning here */}
          <ol className="mt-6 grid gap-8 sm:grid-cols-3 sm:gap-6">
            {materials.process.map((step, index) => (
              <li
                key={step.title}
                className="relative border-t border-primary-foreground/25 pt-5"
              >
                <span
                  aria-hidden="true"
                  className="absolute -top-[3px] left-0 size-[5px] rounded-full bg-accent"
                />
                <span className="font-display text-sm italic text-primary-foreground/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-1.5 text-lg font-medium">{step.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-primary-foreground/70">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
