"use client";

import { Download, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { Globe3D } from "@/components/Globe3D";
import { TiltCard } from "@/components/ui/TiltCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";
import { pick, useI18n } from "@/lib/i18n";

export function Contact() {
  const { t, locale } = useI18n();
  const CONTACT_LINKS = [
    {
      label: t.contact.email,
      href: `mailto:${SITE.email}`,
      value: SITE.email,
      icon: Mail,
    },
    {
      label: t.contact.phone,
      href: `tel:${SITE.phone.replace(/\s/g, "")}`,
      value: SITE.phone,
      icon: Phone,
    },
    {
      label: t.contact.linkedin,
      href: SITE.linkedin,
      value: t.contact.linkedinProfile,
      icon: Linkedin,
    },
  ] as const;

  return (
    <section id="contact" className="section-dark py-24" aria-label="Contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            dark
            eyebrow={t.contact.eyebrow}
            title={t.contact.title}
            subtitle={t.contact.subtitle}
            className="mx-auto text-center"
          />
        </FadeIn>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          <FadeIn delay={0.1}>
            <Globe3D label="Essen" />
          </FadeIn>

          <FadeIn delay={0.2} className="mx-auto w-full max-w-xl">
            <ul className="space-y-4" role="list">
              {CONTACT_LINKS.map((item) => (
                <li key={item.label}>
                  <TiltCard max={6} className="rounded-2xl">
                    <a
                      href={item.href}
                      target={item.href === SITE.linkedin ? "_blank" : undefined}
                      rel={
                        item.href === SITE.linkedin ? "noopener noreferrer" : undefined
                      }
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition-colors [transform-style:preserve-3d] hover:border-accent/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <ContactIcon icon={item.icon} />
                      <div>
                        <p className="font-mono text-xs text-text-muted">
                          {item.label}
                        </p>
                        <p className="text-white">{item.value}</p>
                      </div>
                    </a>
                  </TiltCard>
                </li>
              ))}
              <li className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                <ContactIcon icon={MapPin} />
                <div>
                  <p className="font-mono text-xs text-text-muted">{t.contact.location}</p>
                  <p className="text-white">
                    {pick(locale, SITE.location, "Essen, Rhenanie-du-Nord-Westphalie, Allemagne", "Essen, Nordrhein-Westfalen, Deutschland")}
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg">
                <a href={`mailto:${SITE.email}`}>{t.contact.sendEmail}</a>
              </Button>
              <Button variant="outline" asChild size="lg">
                <a href={locale === "fr" ? SITE.cvUrlFr : SITE.cvUrl} download>
                  <Download className="mr-2 h-4 w-4" aria-hidden />
                  {locale === "fr" ? t.contact.downloadCvFr : t.contact.downloadCvEn}
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/** Icon tile that lifts toward the viewer when its card is hovered. */
function ContactIcon({ icon: Icon }: { icon: typeof Mail }) {
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-[0_8px_24px_rgba(0,201,255,0.25)] transition-transform duration-300 group-hover:[transform:translateZ(36px)_rotateY(-12deg)]">
      <Icon className="h-5 w-5" aria-hidden />
    </span>
  );
}
