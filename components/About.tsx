"use client";

import { MapPin } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LANGUAGES, SITE } from "@/lib/constants";
import { pick, useI18n } from "@/lib/i18n";

export function About() {
  const { t, locale } = useI18n();

  const languageLevelFr: Record<string, string> = {
    Native: "Langue maternelle",
    "Advanced (B2)": "Avance (B2)",
    "Intermediate (B1)": "Intermediaire (B1)",
    "Elementary (A2)": "Elementaire (A2)",
  };

  const languageLevelDe: Record<string, string> = {
    Native: "Muttersprache",
    "Advanced (B2)": "Fortgeschritten (B2)",
    "Intermediate (B1)": "Mittelstufe (B1)",
    "Elementary (A2)": "Grundkenntnisse (A2)",
  };

  return (
    <section id="about" className="bg-[#0a0f1e] py-24" aria-label="About">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow={t.about.eyebrow}
            title={t.about.title}
            subtitle={t.about.subtitle}
          />
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <FadeIn delay={0.1}>
            <p className="text-lg leading-relaxed text-text-on-dark">
              {t.about.summary}
            </p>
            <p className="mt-6 flex items-center gap-2 font-mono text-sm text-accent">
              <MapPin className="h-4 w-4 shrink-0" aria-hidden />
              {pick(locale, SITE.location, "Essen, Rhenanie-du-Nord-Westphalie, Allemagne", "Essen, Nordrhein-Westfalen, Deutschland")}
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur p-6 shadow-sm">
              <h3 className="font-sora text-lg font-semibold text-white">
                {t.about.languages}
              </h3>
              <ul className="mt-4 space-y-3" role="list">
                {LANGUAGES.map((lang) => (
                  <li
                    key={lang.name}
                    className="flex items-center justify-between border-b border-white/10 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="font-medium text-white">
                      {lang.name}
                    </span>
                    <span className="font-mono text-xs text-text-on-dark">
                      {pick<string>(locale, lang.level, languageLevelFr[lang.level], languageLevelDe[lang.level])}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
