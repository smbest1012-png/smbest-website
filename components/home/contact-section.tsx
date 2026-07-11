import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { site } from "@/lib/constants/site";

export function ContactSection({
  contact,
  newTabLabel,
  showHeading = true,
}: {
  locale: Locale;
  contact: Dictionary["contact"];
  newTabLabel: string;
  showHeading?: boolean;
}) {
  const rows = [
    { label: contact.addressLabel, value: contact.address },
    { label: contact.phoneLabel, value: contact.phone, href: `tel:${site.phoneIntl}` },
    { label: contact.faxLabel, value: contact.fax },
    { label: contact.emailLabel, value: contact.email, href: `mailto:${site.email}` },
  ];

  return (
    <section className="border-t border-border bg-muted/40">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2 md:gap-16 md:px-8 md:py-24">
        <div>
          {showHeading ? (
            <>
              <p className="eyebrow">{contact.eyebrow}</p>
              <h2 className="font-display mt-4 text-3xl leading-tight font-medium md:text-[2.5rem]">
                {contact.heading}
              </h2>
              <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
                {contact.description}
              </p>
            </>
          ) : null}
          <div className="mt-8 flex flex-col gap-3 first:mt-0 sm:flex-row">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 text-[0.9375rem] font-medium text-primary-foreground transition-colors outline-none hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Mail className="size-4" aria-hidden="true" />
              {contact.mailCta}
            </a>
            <a
              href={site.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-border bg-card px-6 text-[0.9375rem] font-medium text-foreground transition-colors outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring"
            >
              <MapPin className="size-4" aria-hidden="true" />
              {contact.mapCta}
              <ArrowUpRight className="size-3.5 text-muted-foreground" aria-hidden="true" />
              <span className="sr-only">({newTabLabel})</span>
            </a>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">{contact.hoursNote}</p>
        </div>

        <dl className="self-center">
          {rows.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-[5.5rem_1fr] gap-4 border-b border-border py-4 first:border-t md:py-5"
            >
              <dt className="text-sm font-medium text-muted-foreground">
                {row.label}
              </dt>
              <dd className="text-sm leading-relaxed text-foreground md:text-[0.9375rem]">
                {row.href ? (
                  <a
                    href={row.href}
                    className="rounded-sm underline-offset-4 outline-none hover:underline focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {row.value}
                  </a>
                ) : (
                  row.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
