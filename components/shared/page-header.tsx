export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <header className="border-b border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-5 pt-28 pb-10 md:px-8 md:pt-36 md:pb-14">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="font-display mt-3 text-balance text-4xl leading-[1.15] font-medium md:text-5xl">
          {title}
        </h1>
        {lead ? (
          <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground md:text-lg">
            {lead}
          </p>
        ) : null}
      </div>
    </header>
  );
}
