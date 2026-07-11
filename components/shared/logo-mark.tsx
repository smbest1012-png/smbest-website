import { useId } from "react";

/**
 * SMBEST diamond symbol — vector recreation of the four-color diamond
 * from the supplied brand logo. The central four-point sparkle is cut
 * out with a mask so the mark works on any background.
 *
 * ⚠ Interim asset: replace with the original vector file (AI/SVG) from
 * SMBEST when available for a pixel-perfect match.
 */
export function LogoMark({
  className,
  title,
}: {
  className?: string;
  title?: string;
}) {
  const id = useId();
  const gradientId = `${id}-g`;
  const maskId = `${id}-m`;

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
    >
      {title ? <title>{title}</title> : null}
      <defs>
        <linearGradient
          id={gradientId}
          x1="50"
          y1="0"
          x2="100"
          y2="50"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ffd400" />
          <stop offset="1" stopColor="#f7941e" />
        </linearGradient>
        <mask id={maskId} maskUnits="userSpaceOnUse">
          <rect width="100" height="100" fill="#fff" />
          {/* Four-point sparkle cut-out */}
          <path
            d="M50 8 C53.5 32 68 46.5 92 50 C68 53.5 53.5 68 50 92 C46.5 68 32 53.5 8 50 C32 46.5 46.5 32 50 8 Z"
            fill="#000"
          />
        </mask>
      </defs>
      <g mask={`url(#${maskId})`}>
        <path d="M50 0 L0 50 L50 50 Z" fill="#c7017f" />
        <path d="M50 0 L100 50 L50 50 Z" fill={`url(#${gradientId})`} />
        <path d="M0 50 L50 100 L50 50 Z" fill="#4ca946" />
        <path d="M100 50 L50 100 L50 50 Z" fill="#29abe2" />
      </g>
    </svg>
  );
}
