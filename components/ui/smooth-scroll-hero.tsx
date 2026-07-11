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

  // Zoom-out reveal. We animate a GPU-composited `transform: scale()` rather
  // than `background-size` — the latter re-rasterizes the image on the main
  // thread every frame (worst at the top, where it starts most zoomed in),
  // which is what made the reveal stutter. The background layers stay at a
  // fixed `cover` size and are scaled on the compositor instead.
  const scale = useTransform(scrollY, [0, scrollHeight + 500], [1.7, 1]);

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
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{
          backgroundImage: `url(${mobileImage})`,
          scale: prefersReducedMotion ? 1 : scale,
          willChange: "transform",
        }}
      />

      <motion.div
        aria-hidden="true"
        className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat md:block"
        style={{
          backgroundImage: `url(${desktopImage})`,
          scale: prefersReducedMotion ? 1 : scale,
          willChange: "transform",
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
