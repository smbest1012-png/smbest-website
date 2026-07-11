import { cn } from "@/lib/utils";
import { LogoMark } from "@/components/shared/logo-mark";

/**
 * SMBEST wordmark lockup — garamond-style lowercase wordmark with the
 * diamond symbol nestled above the "e", following the original logo.
 *
 * ⚠ Interim asset: lettering approximates the original with EB Garamond.
 * Swap for the official vector logo when SMBEST provides it.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-display inline-flex items-baseline leading-none tracking-tight",
        className,
      )}
    >
      <span>smb</span>
      <span className="relative inline-block">
        <LogoMark className="absolute -top-[0.52em] left-[0.02em] h-[0.46em] w-[0.46em]" />
        est
      </span>
    </span>
  );
}
