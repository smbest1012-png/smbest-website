import { cn } from "@/lib/utils";

/**
 * Brand rule — a hairline of the four logo-diamond colors.
 * The one recurring signature detail; use sparingly (footer, hero accent).
 */
export function BrandRule({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("flex h-0.5 w-full", className)}>
      <span className="flex-1 bg-brand-magenta" />
      <span className="flex-1 bg-brand-orange" />
      <span className="flex-1 bg-brand-green" />
      <span className="flex-1 bg-brand-blue" />
    </div>
  );
}
