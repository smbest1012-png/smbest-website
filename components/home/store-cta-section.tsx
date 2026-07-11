import { ArrowUpRight } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/types";
import { site } from "@/lib/constants/site";
import { LogoMark } from "@/components/shared/logo-mark";

export function StoreCtaSection({
  storeCta,
  newTabLabel,
}: {
  storeCta: Dictionary["storeCta"];
  newTabLabel: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 text-center md:px-8 md:py-32">
      <LogoMark className="mx-auto size-8" />
      <h2 className="font-display mt-6 text-balance text-3xl leading-tight font-medium md:text-5xl">
        {storeCta.heading}
      </h2>
      <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground md:text-lg">
        {storeCta.body}
      </p>
      <a
        href={site.smartStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-9 inline-flex h-13 items-center justify-center gap-2 rounded-md bg-[#03c75a] px-8 text-base font-medium text-white transition-colors outline-none hover:bg-[#02b152] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        {storeCta.button}
        <ArrowUpRight className="size-4.5" aria-hidden="true" />
        <span className="sr-only">({newTabLabel})</span>
      </a>
    </section>
  );
}
