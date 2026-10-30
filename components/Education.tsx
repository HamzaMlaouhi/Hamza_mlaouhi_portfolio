"use client";

import { GraduationCap } from "lucide-react";
import { FadeIn, staggerContainer } from "@/components/FadeIn";
import { TiltCard } from "@/components/ui/TiltCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EDUCATION } from "@/lib/constants";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/hooks";
import { pick, useI18n } from "@/lib/i18n";

// Cards swing in from opposite sides like opening doors.
const flipIn = {
  hidden: (i: number) => ({
    opacity: 0,
    rotateY: i % 2 ? -55 : 55,
    x: i % 2 ? 60 : -60,
    transformPerspective: 1000,
  }),
  visible: {
    opacity: 1,
    rotateY: 0,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Education() {
  const reducedMotion = usePrefersReducedMotion();
  const { t, locale } = useI18n();

  const degreeFr: Record<string, string> = {
    "Computer Engineering — Mobile Development":
      "Ingenierie Informatique — Specialisation Developpement Mobile",
    "National Degree in Computer Science & Multimedia":
      "Diplome National en Informatique et Multimedia",
  };

  const degreeDe: Record<string, string> = {
    "Computer Engineering — Mobile Development":
      "Diplom-Ingenieur Informatik — Schwerpunkt Mobile-Entwicklung",
    "National Degree in Computer Science & Multimedia":
      "Nationaler Abschluss in Informatik und Multimedia",
  };

  return (
    <section
      id="education"
      className="bg-[#0a0f1e] py-24"
      aria-label="Education"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow={t.education.eyebrow}
            title={t.education.title}
            subtitle={t.education.subtitle}
          />
        </FadeIn>

        <motion.div
          className="grid gap-6 md:grid-cols-2"
          variants={reducedMotion ? undefined : staggerContainer}
          initial={reducedMotion ? undefined : "hidden"}
          whileInView={reducedMotion ? undefined : "visible"}
          viewport={{ once: true, margin: "-60px" }}
        >
          {EDUCATION.map((entry, index) => (
            <motion.article
              key={entry.school}
              custom={index}
              variants={reducedMotion ? undefined : flipIn}
              className="h-full"
            >
              <TiltCard max={10} className="flex h-full gap-5 rounded-2xl border border-white/10 bg-[#111a2c] p-6">
                {/* Coin-like tile spins slowly and pops forward on hover */}
                <div
                  className="h-14 w-14 shrink-0 transition-transform duration-300 [transform-style:preserve-3d] [transform:translateZ(32px)] group-hover:[transform:translateZ(60px)]"
                >
                  <motion.div
                    className="flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow-[0_10px_30px_rgba(0,201,255,0.3)]"
                    animate={reducedMotion ? undefined : { rotateY: [0, 360] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", repeatDelay: 2, delay: index }}
                  >
                    <GraduationCap className="h-7 w-7" aria-hidden />
                  </motion.div>
                </div>
                <div>
                  <h3 className="font-sora text-lg font-semibold text-white">
                    {entry.school}
                  </h3>
                  <p className="mt-1 text-sm text-text-on-dark">
                    {pick<string>(locale, entry.degree, degreeFr[entry.degree], degreeDe[entry.degree])}
                  </p>
                  <p className="mt-2 font-mono text-xs text-accent">
                    {entry.period}
                  </p>
                </div>
              </TiltCard>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
