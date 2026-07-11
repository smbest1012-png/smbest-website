import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { localeAlternates } from "@/lib/seo";
import { PageHeader } from "@/components/shared/page-header";
import { LogoMark } from "@/components/shared/logo-mark";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  return {
    title: dict.meta.aboutTitle,
    description: dict.meta.aboutDescription,
    alternates: localeAlternates(locale, "/about"),
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const about = dict.about;

  return (
    <>
      <PageHeader
        eyebrow={about.eyebrow}
        title={about.heading}
        lead={about.lead}
      />

      {/* CEO greeting — editorial two-column */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <h2 className="eyebrow md:col-span-4">{about.greetingTitle}</h2>
          <div className="md:col-span-7 md:col-start-6">
            <p className="font-display text-pretty text-2xl leading-snug font-medium md:text-3xl">
              {about.greeting[0]}
            </p>
            {about.greeting.slice(1).map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="mt-5 text-pretty leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
            <p className="mt-8 text-sm text-muted-foreground">
              {about.ceoRole}{" "}
              <span className="font-display text-lg text-foreground italic">
                {about.ceoName}
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Vision — deep green statement panel */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center md:px-8 md:py-24">
          <p className="text-[0.6875rem] font-medium tracking-[0.18em] uppercase text-primary-foreground/60">
            {about.visionTitle}
          </p>
          <LogoMark className="mx-auto mt-6 size-7" />
          <p className="font-display mx-auto mt-5 max-w-3xl text-balance text-3xl leading-tight font-medium md:text-[2.75rem]">
            {about.vision}
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-pretty leading-relaxed text-primary-foreground/80">
            {about.visionBody}
          </p>
        </div>
      </section>

      {/* Business areas */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <h2 className="eyebrow">{about.areasTitle}</h2>
        <dl className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2">
          {about.areas.map((area) => (
            <div key={area.title} className="border-t border-border pt-5">
              <dt className="text-lg font-semibold">{area.title}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {area.description}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* History */}
      <section className="border-t border-border bg-muted/40">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <h2 className="eyebrow">{about.historyTitle}</h2>
          <ol className="mt-8 max-w-3xl">
            {about.history.map((entry) => (
              <li
                key={`${entry.date}-${entry.event.slice(0, 12)}`}
                className="grid grid-cols-[6rem_1fr] gap-4 border-b border-border py-4 last:border-b-0 md:grid-cols-[8rem_1fr]"
              >
                <span className="font-display text-sm italic text-muted-foreground md:text-base">
                  {entry.date}
                </span>
                <span className="text-sm leading-relaxed md:text-[0.9375rem]">
                  {entry.event}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
