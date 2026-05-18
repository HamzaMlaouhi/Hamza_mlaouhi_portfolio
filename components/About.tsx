"use client";

import { MapPin } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LANGUAGES, SITE } from "@/lib/constants";
import { useI18n } from "@/lib/i18n";

export function About() {
  const { t, locale } = useI18n();

  const languageLevelFr: Record<string, string> = {
    Native: "Langue maternelle",
    "Advanced (B2)": "Avance (B2)",
    "Intermediate (B1)": "Intermediaire (B1)",
  };

  return (
    <section id="about" className="bg-bg-light py-24" aria-label="About">
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
            <p className="text-lg leading-relaxed text-[#4A6B8A]">
              {t.about.summary}
            </p>
            <p className="mt-6 flex items-center gap-2 font-mono text-sm text-primary">
              <MapPin className="h-4 w-4 shrink-0" aria-hidden />
              {locale === "fr" ? "Tunis, Tunisie" : SITE.location}
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="rounded-2xl border border-primary/10 bg-white p-6 shadow-sm">
              <h3 className="font-sora text-lg font-semibold text-[#0D1B2B]">
                {t.about.languages}
              </h3>
              <ul className="mt-4 space-y-3" role="list">
                {LANGUAGES.map((lang) => (
                  <li
                    key={lang.name}
                    className="flex items-center justify-between border-b border-[#E8F4FD] pb-3 last:border-0 last:pb-0"
                  >
                    <span className="font-medium text-[#0D1B2B]">
                      {lang.name}
                    </span>
                    <span className="font-mono text-xs text-[#4A6B8A]">
                      {locale === "fr" ? languageLevelFr[lang.level] ?? lang.level : lang.level}
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
