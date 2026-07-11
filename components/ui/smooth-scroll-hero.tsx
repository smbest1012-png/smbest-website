"use client";

import * as React from "react";
import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

interface SmoothScrollHeroProps {
  /**
   * Height of the scroll section in pixels
   * @default 1500
   */
  scrollHeight?: number;

  /**
   * Background image URL for desktop view
   */
  desktopImage?: string;

  /**
   * Background image URL for mobile view
   */
  mobileImage?: string;

  /**
   * Initial clip path percentage
   * @default 25
   */
  initialClipPercentage?: number;

  /**
   * Final clip path percentage
   * @default 75
   */
  finalClipPercentage?: number;
}

const SmoothScrollHeroBackground: React.FC<
  Required<SmoothScrollHeroProps>
> = ({
  scrollHeight,
  desktopImage,
  mobileImage,
  initialClipPercentage,
  finalClipPercentage,
}) => {
  const { scrollY } = useScroll();
  // Respect prefers-reduced-motion: skip the scroll-driven clip/zoom and
  // show the fully revealed image instead.
  const prefersReducedMotion = useReducedMotion();

  const clipStart = useTransform(
    scrollY,
    [0, scrollHeight],
    [initialClipPercentage, 0],
  );

  const clipEnd = useTransform(
    scrollY,
    [0, scrollHeight],
    [finalClipPercentage, 100],
  );

  const clipPath = useMotionTemplate`polygon(
    ${clipStart}% ${clipStart}%,
    ${clipEnd}% ${clipStart}%,
    ${clipEnd}% ${clipEnd}%,
    ${clipStart}% ${clipEnd}%
  )`;

  const backgroundSize = useTransform(
    scrollY,
    [0, scrollHeight + 500],
    ["170%", "100%"],
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full overflow-hidden bg-neutral-950"
      style={{
        clipPath: prefersReducedMotion ? "none" : clipPath,
        willChange: "clip-path",
      }}
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 md:hidden"
        style={{
          backgroundImage: `url(${mobileImage})`,
          backgroundSize: prefersReducedMotion ? "cover" : backgroundSize,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <motion.div
        aria-hidden="true"
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage: `url(${desktopImage})`,
          backgroundSize: prefersReducedMotion ? "cover" : backgroundSize,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/15 to-black/55"
      />
    </motion.div>
  );
};

const SmoothScrollHero: React.FC<SmoothScrollHeroProps> = ({
  scrollHeight = 1500,
  desktopImage = "https://images.unsplash.com/photo-1511884642898-4c92249e20b6",
  mobileImage = "https://images.unsplash.com/photo-1511207538754-e8555f2bc187?q=80&w=2412&auto=format&fit=crop",
  initialClipPercentage = 25,
  finalClipPercentage = 75,
}) => {
  return (
    <div
      style={{ height: `calc(${scrollHeight}px + 100vh)` }}
      className="relative w-full"
    >
      <SmoothScrollHeroBackground
        scrollHeight={scrollHeight}
        desktopImage={desktopImage}
        mobileImage={mobileImage}
        initialClipPercentage={initialClipPercentage}
        finalClipPercentage={finalClipPercentage}
      />
    </div>
  );
};

export default SmoothScrollHero;
