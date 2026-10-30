"use client";

import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn, fadeUpVariants, staggerContainer } from "@/components/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EXPERIENCE } from "@/lib/constants";
import { usePrefersReducedMotion } from "@/lib/hooks";
import { pick, useI18n } from "@/lib/i18n";

export function Experience() {
  const reducedMotion = usePrefersReducedMotion();
  const { t, locale } = useI18n();

  const frContent: Record<string, { role: string; highlights: string[] }> = {
    MawadOnline: {
      role: "Ingenieur Mobile Senior",
      highlights: [
        "Developpement d'un chat temps reel avec Firebase, avec une hausse estimee de 25% de l'engagement.",
        "Integration de plusieurs passerelles de paiement securisees pour le e-commerce.",
        "Reduction de la taille du bundle d'environ 20% via deduplication et principes DRY.",
        "Mise en place d'une architecture offline-first avec SQLite et connectivity_plus.",
        "Livraison du support multilingue (i18n) et des notifications push FCM.",
        "Automatisation des releases App Store et Play Store via des pipelines Fastlane.",
      ],
    },
    Sofiatech: {
      role: "Ingenieur Mobile Senior",
      highlights: [
        "Architecture de l'application Surtech avec Clean Architecture et BLoC.",
        "Integration des APIs REST avec gestion d'erreurs robuste et mecanismes de retry.",
        "Utilisation de Microsoft Clarity pour heatmaps et analyse des frictions UX.",
        "Ecriture de tests unitaires et widget tests avec Flutter test et Mockito.",
      ],
    },
    "LRT Automotive GmbH": {
      role: "Developpeur Mobile Mid-Senior",
      highlights: [
        "Integration d'APIs GraphQL pour le controle temps reel des bornes Wallbox EV.",
        "Implementation de la geolocalisation pour la decouverte des stations et un UX contextuel.",
        "Developpement d'une detection dynamique du reseau pour les transitions offline/online.",
      ],
    },
    "Zahou-tech": {
      role: "Ingenieur Mobile",
      highlights: [
        "Maintenance et optimisation de 4+ applications Flutter, avec reduction du crash rate d'environ 30%.",
        "Implementation de la geolocalisation via geolocator et Google Maps API.",
        "Mise en place de pipelines CI/CD avec GitHub Actions pour build et deploiement automatiques.",
      ],
    },
    UTEEK: {
      role: "Developpeur Mobile",
      highlights: [
        "Developpement et publication de 5+ applications sur App Store et Google Play.",
        "Integration de Firebase Authentication, Firestore et FCM.",
        "Profiling des performances avec Flutter DevTools pour corriger les problemes memoire et rendu.",
      ],
    },
    Freelancer: {
      role: "Developpeur Mobile",
      highlights: [
        "Creation de Diyafa, OOUC et Nurtify, toutes publiees sur Google Play.",
        "Migration d'applications de bowling de Java vers Kotlin avec coroutines et Flows.",
        "Developpement de Vivencia, application IA cosmetique avec reconnaissance faciale TensorFlow Lite.",
      ],
    },
  };

  const deContent: Record<string, { role: string; highlights: string[] }> = {
    MawadOnline: {
      role: "Senior Mobile Engineer",
      highlights: [
        "Echtzeit-In-App-Chat mit Firebase entwickelt, mit geschätzt 25% mehr Nutzerengagement.",
        "Mehrere Payment-Gateways für reibungslose E-Commerce-Transaktionen integriert.",
        "App-Bundle-Größe durch Code-Deduplizierung und DRY-Prinzipien um ca. 20% reduziert.",
        "Offline-First-Architektur mit SQLite und connectivity_plus umgesetzt.",
        "Mehrsprachigkeit (i18n) und FCM-Push-Benachrichtigungen ausgeliefert.",
        "App-Store- und Play-Store-Releases mit Fastlane-Pipelines per Einzelbefehl automatisiert.",
      ],
    },
    Sofiatech: {
      role: "Senior Mobile Engineer",
      highlights: [
        "Surtech-App mit Clean Architecture und BLoC-Pattern konzipiert.",
        "REST-APIs mit robustem Error-Handling und Retry-Mechanismen integriert.",
        "Microsoft Clarity für Heatmaps und UX-Reibungsanalysen eingesetzt.",
        "Unit- und Widget-Tests mit Flutter test und Mockito geschrieben.",
      ],
    },
    "LRT Automotive GmbH": {
      role: "Mid-Senior Mobile Application Developer",
      highlights: [
        "GraphQL-APIs zur Echtzeitsteuerung von Wallbox-Ladestationen integriert.",
        "Geolokalisierung für die Suche nach Ladestationen und kontextbezogene UX entwickelt.",
        "Dynamische Netzwerkerkennung für Offline/Online-Übergänge entwickelt.",
      ],
    },
    "Zahou-tech": {
      role: "Mobile Engineer",
      highlights: [
        "4+ Flutter-Apps gewartet und optimiert, Absturzrate um ca. 30% gesenkt.",
        "Geolokalisierung mit geolocator und Google Maps API umgesetzt.",
        "CI/CD-Pipelines mit GitHub Actions für automatisierte Builds und Deployments aufgesetzt.",
      ],
    },
    UTEEK: {
      role: "Mobile-Entwickler",
      highlights: [
        "5+ Apps entwickelt und im App Store und bei Google Play veröffentlicht.",
        "Firebase Authentication, Firestore und FCM integriert.",
        "Performance mit Flutter DevTools analysiert und Speicher- sowie Rendering-Probleme behoben.",
      ],
    },
    Freelancer: {
      role: "Mobile-Entwickler",
      highlights: [
        "Diyafa, OOUC und Nurtify entwickelt, alle bei Google Play veröffentlicht.",
        "Bowling-Apps von Java nach Kotlin mit Coroutines und Flows migriert.",
        "Vivencia entwickelt, eine KI-Kosmetik-App mit Gesichtserkennung via TensorFlow Lite.",
      ],
    },
  };

  const toGermanPeriod = (period: string) =>
    period
      .replace("Present", "Heute")
      .replace("May", "Mai")
      .replace("Dec", "Dez");

  const toFrenchPeriod = (period: string) =>
    period
      .replace("Sep", "Sept")
      .replace("Present", "Aujourd'hui")
      .replace("Feb", "Fev")
      .replace("Aug", "Aout")
      .replace("Nov", "Nov")
      .replace("Dec", "Dec")
      .replace("May", "Mai")
      .replace("Jan", "Jan");

  return (
    <section
      id="experience"
      className="bg-bg-dark py-24"
      aria-label="Experience"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            dark
            eyebrow={t.experience.eyebrow}
            title={t.experience.title}
            subtitle={t.experience.subtitle}
          />
        </FadeIn>

        <motion.div
          className="relative"
          variants={reducedMotion ? undefined : staggerContainer}
          initial={reducedMotion ? undefined : "hidden"}
          whileInView={reducedMotion ? undefined : "visible"}
          viewport={{ once: true, margin: "-60px" }}
        >
          <div
            className="absolute left-[19px] top-2 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-accent/60 via-primary/40 to-transparent md:block"
            aria-hidden
          />

          {EXPERIENCE.map((job) => (
            <motion.article
              key={`${job.company}-${job.period}`}
              variants={reducedMotion ? undefined : fadeUpVariants}
              className="relative grid gap-6 pb-12 md:grid-cols-[auto_1fr] md:gap-8 md:pb-16 last:pb-0"
            >
              <div className="relative z-10 flex md:justify-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/40 bg-bg-surface shadow-[0_0_20px_rgba(0,201,255,0.15)]">
                  <Briefcase className="h-4 w-4 text-accent" aria-hidden />
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-bg-surface/50 p-6 backdrop-blur">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="font-sora text-xl font-semibold text-white">
                      {pick<string>(locale, job.role, frContent[job.company]?.role, deContent[job.company]?.role)}
                    </h3>
                    <p className="mt-1 font-mono text-sm text-accent">
                      {job.company}
                    </p>
                  </div>
                  <p className="font-mono text-xs text-text-muted">
                    {pick(locale, job.period, toFrenchPeriod(job.period), toGermanPeriod(job.period))}
                    <span className="mx-2 text-white/20">·</span>
                    {job.location === "Tunis, Tunisia"
                      ? pick(locale, job.location, "Tunis, Tunisie", "Tunis, Tunesien")
                      : job.location}
                  </p>
                </div>

                <ul className="mt-4 space-y-2" role="list">
                  {pick<readonly string[]>(
                    locale,
                    job.highlights,
                    frContent[job.company]?.highlights,
                    deContent[job.company]?.highlights
                  ).map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm leading-relaxed text-text-on-dark"
                    >
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <ul className="mt-4 flex flex-wrap gap-2" role="list">
                  {job.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-white/10 px-2.5 py-0.5 font-mono text-[10px] text-text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
