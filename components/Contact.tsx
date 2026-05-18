"use client";

import { Download, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";
import { useI18n } from "@/lib/i18n";

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

        <FadeIn delay={0.1} className="mx-auto mt-12 max-w-xl">
          <ul className="space-y-4" role="list">
            {CONTACT_LINKS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={item.href === SITE.linkedin ? "_blank" : undefined}
                  rel={
                    item.href === SITE.linkedin ? "noopener noreferrer" : undefined
                  }
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition-colors hover:border-accent/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <item.icon
                    className="h-5 w-5 text-accent transition-transform group-hover:scale-110"
                    aria-hidden
                  />
                  <div>
                    <p className="font-mono text-xs text-text-muted">
                      {item.label}
                    </p>
                    <p className="text-white">{item.value}</p>
                  </div>
                </a>
              </li>
            ))}
            <li className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
              <MapPin className="h-5 w-5 text-accent" aria-hidden />
              <div>
                <p className="font-mono text-xs text-text-muted">{t.contact.location}</p>
                <p className="text-white">
                  {locale === "fr" ? "Tunis, Tunisie" : SITE.location}
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
    </section>
  );
}
