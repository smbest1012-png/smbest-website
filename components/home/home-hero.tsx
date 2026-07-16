"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SmoothScrollHero from "@/components/ui/smooth-scroll-hero";
import { LogoMark } from "@/components/shared/logo-mark";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

const SCROLL_HEIGHT = 1500;

export function HomeHero({
  locale,
  hero,
}: {
  locale: Locale;
  hero: Dictionary["hero"];
}) {
  const prefersReducedMotion = useReducedMotion();

  const enter = (delay: number) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section className="relative w-full bg-neutral-950">
      {/*
       * Temporary hero imagery (Unsplash, 3D printing / prototyping — the
       * full scope of SMBEST's business: materials, print services and
       * prototype production). Replace with official brand photography in
       * /public/images/hero when available.
       */}
      <SmoothScrollHero
        scrollHeight={SCROLL_HEIGHT}
        desktopImage="/images/hero/3d-printing-prototype-desktop.webp"
        mobileImage="/images/hero/3d-printing-prototype-mobile.webp"
        initialClipPercentage={25}
        finalClipPercentage={75}
      />

      {/* Content overlay — pinned alongside the background while it reveals */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0"
        style={{ height: `calc(${SCROLL_HEIGHT}px + 100vh)` }}
      >
        <div className="sticky top-0 flex h-svh flex-col items-center justify-center px-5 text-center text-white">
          <motion.p
            {...enter(0.05)}
            className="hero-shadow flex items-center gap-2.5 text-[0.6875rem] font-medium tracking-[0.28em] uppercase text-white/85 sm:text-xs"
          >
            <LogoMark className="size-4" />
            {hero.tagline}
          </motion.p>

          <motion.h1
            {...enter(0.15)}
            className="hero-shadow font-display mt-6 max-w-4xl text-balance text-[2.4rem] leading-[1.12] font-medium sm:text-6xl md:text-7xl"
          >
            {hero.headline[0]}
            <br />
            {hero.headline[1]}
          </motion.h1>

          <motion.p
            {...enter(0.3)}
            className="hero-shadow mt-6 max-w-xl text-balance text-[0.9375rem] leading-relaxed text-white/85 sm:text-lg"
          >
            {hero.description}
          </motion.p>

          <motion.div
            {...enter(0.45)}
            className="pointer-events-auto mt-9 flex w-full max-w-md flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row"
          >
            <Link
              href={`/${locale}/contact`}
              className="inline-flex h-12 items-center justify-center rounded-md bg-background px-7 text-[0.9375rem] font-medium text-foreground transition-colors outline-none hover:bg-background/90 focus-visible:ring-2 focus-visible:ring-white"
            >
              {hero.ctaContact}
            </Link>
            <Link
              href={`/${locale}/products`}
              className="inline-flex h-12 items-center justify-center rounded-md border border-white/50 px-7 text-[0.9375rem] font-medium text-white transition-colors outline-none hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white"
            >
              {hero.ctaProducts}
            </Link>
          </motion.div>

          <motion.div
            {...enter(0.7)}
            aria-hidden="true"
            className="absolute bottom-8 flex flex-col items-center gap-1.5 text-white/60"
          >
            <span className="text-[0.625rem] tracking-[0.3em] uppercase">
              {hero.scroll}
            </span>
            <ChevronDown className="size-4 motion-safe:animate-bounce" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
