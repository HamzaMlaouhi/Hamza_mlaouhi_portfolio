"use client";

import { GraduationCap } from "lucide-react";
import { FadeIn, fadeUpVariants, staggerContainer } from "@/components/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EDUCATION } from "@/lib/constants";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/hooks";
import { useI18n } from "@/lib/i18n";

export function Education() {
  const reducedMotion = usePrefersReducedMotion();
  const { t, locale } = useI18n();

  const degreeFr: Record<string, string> = {
    "Computer Engineering — Mobile Development":
      "Ingenierie Informatique — Specialisation Developpement Mobile",
    "National Degree in Computer Science & Multimedia":
      "Diplome National en Informatique et Multimedia",
  };

  return (
    <section
      id="education"
      className="bg-bg-light py-24"
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
          {EDUCATION.map((entry) => (
            <motion.article
              key={entry.school}
              variants={reducedMotion ? undefined : fadeUpVariants}
              className="flex gap-5 rounded-2xl border border-primary/10 bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-bg-light-card text-primary">
                <GraduationCap className="h-6 w-6" aria-hidden />
              </div>
              <div>
                <h3 className="font-sora text-lg font-semibold text-[#0D1B2B]">
                  {entry.school}
                </h3>
                <p className="mt-1 text-sm text-[#4A6B8A]">
                  {locale === "fr" ? degreeFr[entry.degree] ?? entry.degree : entry.degree}
                </p>
                <p className="mt-2 font-mono text-xs text-primary">
                  {entry.period}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
