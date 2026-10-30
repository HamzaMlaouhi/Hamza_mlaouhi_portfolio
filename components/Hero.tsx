"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PhoneMockup } from "@/components/PhoneMockup";
import { Typewriter } from "@/components/Typewriter";
import { SITE, TYPEWRITER_TECH } from "@/lib/constants";
import { usePrefersReducedMotion } from "@/lib/hooks";
import { useI18n } from "@/lib/i18n";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  const reducedMotion = usePrefersReducedMotion();
  const { t } = useI18n();

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden section-dark"
      aria-label="Introduction"
    >
      {/* 3D grid floor */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 overflow-hidden [perspective:500px]"
        aria-hidden
      >
        <div className="absolute -inset-x-1/2 bottom-0 h-[200%] origin-bottom animate-grid-flow bg-[linear-gradient(rgba(0,201,255,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(0,201,255,0.22)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:linear-gradient(to_top,black,transparent_70%)] [transform:rotateX(72deg)]" />
      </div>

      {/* Ambient orbs */}
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-accent/10 blur-[100px]"
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-primary/20 blur-[90px]"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Copy */}
          <motion.div
            variants={reducedMotion ? undefined : container}
            initial={reducedMotion ? false : "hidden"}
            animate={reducedMotion ? undefined : "show"}
            className="order-2 text-center lg:order-1 lg:text-left"
          >
            <motion.div variants={reducedMotion ? undefined : item}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs text-accent backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" aria-hidden />
                {t.hero.badge}
              </span>
            </motion.div>

            <motion.h1
              variants={reducedMotion ? undefined : item}
              className="mt-6 font-sora text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              {t.hero.greeting}{" "}
              <span className="text-gradient">{SITE.name}</span>
            </motion.h1>

            <motion.p
              variants={reducedMotion ? undefined : item}
              className="mt-4 font-sora text-xl font-medium text-white/90 sm:text-2xl"
            >
              {t.hero.role}
            </motion.p>

            <motion.div
              variants={reducedMotion ? undefined : item}
              className="mt-4 flex min-h-[2rem] items-center justify-center gap-1 font-mono text-sm sm:text-base lg:justify-start"
            >
              <span className="text-text-muted">{t.hero.specializingIn}</span>
              <Typewriter words={TYPEWRITER_TECH} />
            </motion.div>

            <motion.p
              variants={reducedMotion ? undefined : item}
              className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-text-on-dark lg:mx-0"
            >
              {t.hero.tagline}
            </motion.p>

            <motion.div
              variants={reducedMotion ? undefined : item}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
            >
              <Button asChild size="lg">
                <a href="#projects">{t.hero.viewMyWork}</a>
              </Button>
              <Button variant="outline" asChild size="lg">
                <a href="#contact">{t.hero.getInTouch}</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, scale: 0.92 }}
            animate={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 relative lg:order-2"
          >
            <motion.div
              className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-accent/20 blur-3xl"
              animate={reducedMotion ? undefined : { opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden
            />
            <motion.div
              className="pointer-events-none absolute -left-8 bottom-10 h-32 w-32 rounded-full bg-primary/30 blur-3xl"
              animate={reducedMotion ? undefined : { opacity: [0.6, 0.25, 0.6] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden
            />

            <PhoneMockup />

          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.a
          href="#about"
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-text-muted transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark rounded-full"
          aria-label="Scroll to about section"
          animate={reducedMotion ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="font-mono text-[10px] uppercase tracking-widest">
            {t.hero.scroll}
          </span>
          <ArrowDown className="h-4 w-4" aria-hidden />
        </motion.a>
      </div>
    </section>
  );
}
