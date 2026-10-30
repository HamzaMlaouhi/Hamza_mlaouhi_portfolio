"use client";

import { FadeIn, staggerContainer, fadeUpVariants } from "@/components/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SKILL_CATEGORIES } from "@/lib/constants";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/hooks";
import { pick, useI18n } from "@/lib/i18n";

export function Skills() {
  const reducedMotion = usePrefersReducedMotion();
  const { t, locale } = useI18n();

  const categoryTitleFr: Record<string, string> = {
    Mobile: "Mobile",
    Architecture: "Architecture",
    "Backend & APIs": "Backend et APIs",
    "DevOps & Tools": "DevOps et Outils",
    Testing: "Tests",
    Collaboration: "Collaboration",
  };

  const categoryTitleDe: Record<string, string> = {
    Architecture: "Architektur",
    "DevOps & Tools": "DevOps & Tools",
    Testing: "Testing",
    Collaboration: "Zusammenarbeit",
  };

  return (
    <section id="skills" className="bg-bg-dark py-24" aria-label="Skills">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            dark
            eyebrow={t.skills.eyebrow}
            title={t.skills.title}
            subtitle={t.skills.subtitle}
          />
        </FadeIn>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={reducedMotion ? undefined : staggerContainer}
          initial={reducedMotion ? undefined : "hidden"}
          whileInView={reducedMotion ? undefined : "visible"}
          viewport={{ once: true, margin: "-60px" }}
        >
          {SKILL_CATEGORIES.map((category) => (
            <motion.article
              key={category.title}
              variants={reducedMotion ? undefined : fadeUpVariants}
              className="rounded-2xl border border-white/10 bg-bg-surface/60 p-6 backdrop-blur transition-colors hover:border-accent/30"
            >
              <h3 className="font-sora text-lg font-semibold text-white">
                {pick<string>(locale, category.title, categoryTitleFr[category.title], categoryTitleDe[category.title])}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2" role="list">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-text-on-dark"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
