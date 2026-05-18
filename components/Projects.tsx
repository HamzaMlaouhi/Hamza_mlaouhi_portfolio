"use client";

import {
  ArrowRight,
  Bell,
  CreditCard,
  QrCode,
  RefreshCw,
  Smartphone,
  TrendingUp,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import { SiApple, SiGoogleplay } from "react-icons/si";
import { TiLockClosed } from "react-icons/ti";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { usePrefersReducedMotion } from "@/lib/hooks";
import { useI18n } from "@/lib/i18n";

type StoreButtonProps = {
  label: string;
  url: string;
  platform: "ios" | "android";
};

type StoreLink = StoreButtonProps & {
  labelFr?: string;
};

type Project = {
  name: string;
  tagline: string;
  taglineFr?: string;
  category: string;
  categoryFr?: string;
  platforms: Array<"iOS" | "Android">;
  storeLinks: StoreLink[];
  description: string;
  descriptionFr?: string;
  stack: string[];
  org?: string[];
  enterpriseLabel?: string;
  enterpriseLabelFr?: string;
  migration?: { from: string; to: string };
  dualAppsBadge?: string;
  dualAppsBadgeFr?: string;
  metrics?: Array<{
    icon: "latency" | "codebase" | "architecture" | "checkin" | "requests" | "payments";
    label: string;
    value: string;
    labelFr?: string;
    valueFr?: string;
  }>;
};

const FEATURED_PROJECTS: Project[] = [
  {
    name: "MawadOnline",
    tagline:
      "Dual-app B2B marketplace for construction materials & industrial supply",
    taglineFr:
      "Marketplace B2B double application pour materiaux de construction et fournitures industrielles",
    category: "Marketplace · B2B",
    categoryFr: "Marketplace · B2B",
    platforms: ["iOS", "Android"],
    storeLinks: [
      {
        label: "Buyer App",
        labelFr: "App Acheteur",
        platform: "ios",
        url: "https://apps.apple.com/tn/app/mawadonline/id6744918489",
      },
      {
        label: "Vendor App",
        labelFr: "App Vendeur",
        platform: "ios",
        url: "https://apps.apple.com/tn/app/mawadonline-vendor/id6496850521",
      },
    ],
    description:
      "Architected and shipped two production Flutter applications a Buyer App and a Vendor App forming a complete B2B marketplace for construction materials, equipment, and services. Built a real-time bidirectional chat system, integrated multiple secure payment gateways, and resolved cross-device camera compatibility issues at scale. Enforced DRY principles to minimize bundle size, implemented offline-first data persistence with SQLite, and delivered full multilingual support. Hardened stability through structured API error handling, network state management, and Firebase Cloud Messaging. Owned end-to-end deployment on iOS and Android including ASO strategy to maximize organic visibility and installs.",
    descriptionFr:
      "Conception et livraison de deux applications Flutter en production App Acheteur et App Vendeur formant une marketplace B2B complete pour materiaux, equipements et services. Mise en place d'un chat bidirectionnel temps reel, integration de plusieurs passerelles de paiement securisees et resolution de problemes de compatibilite camera sur de nombreux appareils. Application des principes DRY pour reduire la taille du bundle, implementation d'un stockage offline-first avec SQLite et support multilingue complet. Renforcement de la stabilite via gestion structuree des erreurs API, gestion de l'etat reseau et notifications Firebase Cloud Messaging. Pilotage du deploiement de bout en bout sur iOS/Android avec strategie ASO pour maximiser la visibilite organique.",
    stack: [
      "Flutter 3.32",
      "SQLite",
      "Firebase FCM",
      "REST APIs",
      "CI/CD",
      "iOS",
      "Android",
    ],
    org: ["Scrum", "GitHub", "Cliq", "Zoho Sprint"],
  },
  {
    name: "LRT PowerUP",
    tagline:
      "Cross-platform EV smart charging app integrated with Wallbox hardware",
    taglineFr:
      "Application de recharge intelligente EV cross-platform integree au materiel Wallbox",
    category: "CleanTech · Embedded",
    categoryFr: "CleanTech · Embarque",
    platforms: ["Android"],
    storeLinks: [
      {
        label: "Play Store",
        platform: "android",
        url: "https://play.google.com/store/apps/details?id=com.lrt.powerup&hl=fr",
      },
    ],
    description:
      "Contributed as a core Flutter developer on a cross-platform smart EV charging application that communicates directly with Wallbox hardware via GraphQL APIs. Engineered a GPS-based location detection system for proximity-aware station discovery and built a robust network-state handler for seamless connectivity transitions. Significantly reduced latency and optimized heavy background processes to improve perceived performance. Shipped real-time chat, multi-language support, secure payments, and Firebase push notifications as part of a 7-person cross-functional Scrum team.",
    descriptionFr:
      "Contribution en tant que developpeur Flutter principal sur une application de recharge EV cross-platform communicant directement avec le materiel Wallbox via GraphQL. Implementation d'un systeme de geolocalisation GPS pour la decouverte de stations proches et d'un gestionnaire d'etat reseau robuste pour des transitions de connectivite fluides. Reduction notable de la latence et optimisation des processus lourds en arriere-plan pour ameliorer la performance percue. Livraison du chat temps reel, support multilingue, paiements securises et notifications push Firebase au sein d'une equipe Scrum de 7 personnes.",
    stack: [
      "Flutter 3.2",
      "GraphQL",
      "Clean Architecture",
      "MySQL",
      "Firebase",
      "Unit Tests",
      "CI/CD",
      "iOS",
      "Android",
    ],
    org: ["Scrum", "Jira", "GitLab", "Teams"],
  },
  {
    name: "My Cover Health",
    tagline: "Personal health insurance management — by Bridges S.A",
    taglineFr:
      "Gestion mobile de l'assurance sante — par Bridges S.A",
    category: "HealthTech · Insurance",
    categoryFr: "HealthTech · Assurance",
    platforms: ["iOS", "Android"],
    storeLinks: [
      {
        label: "App Store",
        platform: "ios",
        url: "https://apps.apple.com/tn/app/my-cover-health/id6474302550",
      },
      {
        label: "Play Store",
        platform: "android",
        url: "https://play.google.com/store/apps/details?id=com.flutterflow.healthinsuranceapp&hl=fr",
      },
    ],
    description:
      "Developed a Flutter health insurance companion app enabling users to manage their coverage, track claims, and access policy details on the go. Focused on secure data handling, accessible UI design, and a smooth onboarding flow that simplifies a traditionally complex domain for everyday users.",
    descriptionFr:
      "Developpement d'une application Flutter d'assurance sante permettant aux utilisateurs de gerer leur couverture, suivre leurs remboursements et consulter les details de leur contrat en mobilite. Focus sur la securite des donnees, l'accessibilite de l'interface et un onboarding fluide pour simplifier un domaine traditionnellement complexe.",
    stack: ["Flutter", "Clean Architecture", "REST APIs", "iOS"],
  },
];

const COMPACT_PROJECTS: Project[] = [
  {
    name: "Womentum",
    tagline: "Community & empowerment platform for women professionals",
    taglineFr:
      "Plateforme communautaire et d'empowerment pour les femmes professionnelles",
    category: "Social · Community",
    categoryFr: "Social · Communaute",
    platforms: ["iOS"],
    storeLinks: [
      {
        label: "App Store",
        platform: "ios",
        url: "https://apps.apple.com/us/app/womentum-mobile/id1660582620",
      },
    ],
    description:
      "Contributed to a Flutter-based community app designed to connect and empower women in professional environments. Built and refined key social features, focusing on performance, clean architecture, and an inclusive, accessible user experience across iOS devices.",
    descriptionFr:
      "Contribution a une application communautaire Flutter concue pour connecter et valoriser les femmes dans les environnements professionnels. Developpement et amelioration de fonctionnalites sociales cles avec un focus sur la performance, la clean architecture et une experience inclusive et accessible sur iOS.",
    stack: ["Flutter", "iOS", "Clean Architecture"],
  },
  {
    name: "Vivencia",
    tagline: "Experience-driven mobile app — published on App Store",
    taglineFr:
      "Application lifestyle orientee experience — publiee sur App Store",
    category: "Lifestyle",
    categoryFr: "Lifestyle",
    platforms: ["iOS", "Android"],
    storeLinks: [
      {
        label: "App Store",
        platform: "ios",
        url: "https://apps.apple.com/tn/app/vivencia/id6759990752",
      },
      {
        label: "Play Store",
        platform: "android",
        url: "https://play.google.com/store/apps/details?id=com.cosmetic.vivencia&hl=en",
      },
    ],
    description:
      "Developed and deployed a Flutter lifestyle application to the App Store, managing the full development lifecycle from architecture design through production release. Delivered a polished, responsive interface optimized for iOS with a focus on user engagement and retention.",
    descriptionFr:
      "Developpement et deploiement d'une application Flutter lifestyle sur l'App Store en gerant tout le cycle de vie produit, de l'architecture a la mise en production. Livraison d'une interface soignee et responsive optimisee iOS avec un focus sur l'engagement et la retention.",
    stack: ["Flutter", "iOS", "REST APIs"],
  },
  {
    name: "Jaou Photo",
    tagline: "Digital companion for an international contemporary art exhibit",
    taglineFr:
      "Compagnon digital pour une exposition internationale d'art contemporain",
    category: "Art & Culture",
    categoryFr: "Art et Culture",
    platforms: ["iOS"],
    storeLinks: [
      {
        label: "App Store",
        platform: "ios",
        url: "https://apps.apple.com/us/app/jaou-photo/id6443647182",
      },
    ],
    description:
      "Designed and developed an immersive art exhibit companion application using Flutter and Drupal, enabling visitors to discover galleries, installations, and curated collections through an intuitive cross-platform interface. Prioritized visual fidelity and smooth navigation to match the prestige of the live exhibit experience.",
    descriptionFr:
      "Conception et developpement d'une application immersive compagnon d'exposition avec Flutter et Drupal, permettant aux visiteurs de decouvrir galeries, installations et collections via une interface cross-platform intuitive. Priorite donnee a la fidelite visuelle et a une navigation fluide, au niveau de prestige de l'experience d'exposition.",
    stack: ["Flutter", "Drupal", "MySQL", "iOS", "Android"],
  },
  {
    name: "Stolpersteine",
    tagline:
      "Scan memorial plates across Germany — explore Holocaust history",
    taglineFr:
      "Scanner les plaques commemoratives en Allemagne — explorer l'histoire de la Shoah",
    category: "Cultural Heritage",
    categoryFr: "Patrimoine culturel",
    platforms: ["iOS"],
    storeLinks: [
      {
        label: "App Store",
        platform: "ios",
        url: "https://apps.apple.com/tn/app/stolpersteine-die-schicksale/id1632437819",
      },
    ],
    description:
      "Contributed to a culturally significant Flutter application that lets users scan Stolpersteine memorial cobblestones across Germany to uncover the stories of Holocaust victims. Delivered an immersive, historically respectful experience backed by Laravel, Firebase, and MySQL, with a focus on cross-platform reliability and accessibility.",
    descriptionFr:
      "Contribution a une application Flutter a fort impact culturel permettant de scanner les Stolpersteine en Allemagne pour decouvrir les histoires des victimes de la Shoah. Livraison d'une experience immersive et historiquement respectueuse, appuyee par Laravel, Firebase et MySQL, avec un focus sur la fiabilite cross-platform et l'accessibilite.",
    stack: [
      "Flutter 2.8",
      "Laravel",
      "Firebase",
      "MySQL",
      "GitLab",
      "Clean Architecture",
    ],
    org: ["Scrum (1-week sprints)", "Asana"],
  },
  {
    name: "Limoges Bowling & Planet Bowling",
    tagline:
      "Native Android apps for bowling venue management — Java → Kotlin migration",
    taglineFr:
      "Applications Android natives pour la gestion de bowling — migration Java vers Kotlin",
    category: "Android Native · Sports & Leisure",
    categoryFr: "Android Natif · Sport et Loisir",
    platforms: ["Android"],
    storeLinks: [],
    enterpriseLabel: "Client App",
    enterpriseLabelFr: "Application client",
    migration: { from: "Java", to: "Kotlin" },
    description:
      "Developed and maintained native Android applications for two bowling venue clients — Limoges Bowling and Planet Bowling — managing live session tracking, lane assignments, and venue operations. Diagnosed and resolved critical production issues including slow API response times causing UI freezes and jank under high load, significantly improving perceived performance and reliability. Successfully led a full codebase migration from Java to Kotlin, modernizing the architecture with coroutines for clean, non-blocking async operations and refactoring data pipelines using Kotlin Flows for reactive, lifecycle-aware state management. The migration reduced boilerplate by over 40%, improved crash stability, and set a maintainable foundation for future feature development.",
    descriptionFr:
      "Developpement et maintenance d'applications Android natives pour deux clients de bowling — Limoges Bowling et Planet Bowling — avec suivi des sessions en direct, affectation des pistes et operations du site. Diagnostic et resolution d'incidents critiques en production, notamment des temps de reponse API eleves provoquant gels d'interface et saccades sous forte charge, avec amelioration significative de la performance percue et de la fiabilite. Pilotage d'une migration complete du codebase de Java vers Kotlin, modernisation de l'architecture avec coroutines non bloquantes et refonte des flux de donnees avec Kotlin Flows pour une gestion reactive et lifecycle-aware. Cette migration a reduit le boilerplate de plus de 40%, ameliore la stabilite et pose une base maintenable pour les evolutions futures.",
    stack: [
      "Kotlin",
      "Java",
      "Coroutines",
      "Kotlin Flows",
      "Android SDK",
      "REST APIs",
      "MVVM",
    ],
    metrics: [
      {
        icon: "latency",
        label: "API latency",
        labelFr: "Latence API",
        value: "Resolved",
        valueFr: "Resolu",
      },
      {
        icon: "codebase",
        label: "Codebase",
        labelFr: "Codebase",
        value: "Fully migrated",
        valueFr: "Migré completement",
      },
      {
        icon: "architecture",
        label: "Architecture",
        labelFr: "Architecture",
        value: "MVVM + Flows",
        valueFr: "MVVM + Flows",
      },
    ],
  },
  {
    name: "Diyafa",
    tagline:
      "Dual-app smart hospitality platform — guest experience & staff operations",
    taglineFr:
      "Plateforme hospitality double application — experience client et operations staff",
    category: "Hospitality · HotelTech",
    categoryFr: "Hospitality · HotelTech",
    platforms: ["iOS", "Android"],
    storeLinks: [
      {
        label: "Guest App (Android)",
        labelFr: "App Client (Android)",
        platform: "android",
        url: "https://play.google.com/store/apps/details?id=com.diyafa.customer&hl=fr",
      },
      {
        label: "Staff App (Android)",
        labelFr: "App Staff (Android)",
        platform: "android",
        url: "https://play.google.com",
      },
    ],
    dualAppsBadge: "2 Apps · Guest + Staff",
    dualAppsBadgeFr: "2 Apps · Client + Staff",
    description:
      "Designed and built two production Flutter applications from the ground up — a guest-facing app and a dedicated staff operations app — forming a connected hospitality management platform. The guest app enables seamless room booking, QR code-based check-in and check-out, real-time service requests, and secure in-app payments, delivering a frictionless hotel experience from arrival to departure. The staff app provides hotel teams with real-time task management, assignment tracking, and instant notifications to coordinate operations efficiently across departments. Shipped full multilingual support to serve an international guest base, and integrated Firebase Cloud Messaging for timely, reliable push notifications on both sides of the platform.",
    descriptionFr:
      "Conception et developpement de deux applications Flutter en production depuis zero une application client et une application operations staff pour former une plateforme hospitality connectee. L'application client permet reservation de chambre fluide, check-in/check-out via QR code, demandes de service en temps reel et paiements in-app securises, pour une experience hoteliere sans friction. L'application staff apporte gestion des taches en temps reel, suivi des affectations et notifications instantanees pour coordonner les operations entre departements. Livraison du support multilingue complet et integration de Firebase Cloud Messaging pour des notifications fiables des deux cotes de la plateforme.",
    stack: [
      "Flutter",
      "Dart",
      "Firebase FCM",
      "QR Code",
      "Payment Gateway",
      "REST APIs",
      "Clean Architecture",
      "CI/CD",
      "iOS",
      "Android",
    ],
    metrics: [
      {
        icon: "checkin",
        label: "Check-in",
        labelFr: "Check-in",
        value: "QR-based",
        valueFr: "QR code",
      },
      {
        icon: "requests",
        label: "Requests",
        labelFr: "Demandes",
        value: "Real-time",
        valueFr: "Temps reel",
      },
      {
        icon: "payments",
        label: "Payments",
        labelFr: "Paiements",
        value: "Integrated",
        valueFr: "Integres",
      },
    ],
  },
  {
    name: "GIZ Social Platform",
    tagline:
      "Secure internal social network for a leading German development org",
    taglineFr:
      "Reseau social interne securise pour une grande organisation allemande de developpement",
    category: "Social · Enterprise",
    categoryFr: "Social · Entreprise",
    platforms: ["iOS", "Android"],
    storeLinks: [],
    enterpriseLabel: "Private Deployment",
    description:
      "Led the mobile development of a secure, feature-rich social platform for GIZ — Germany's leading international development organization. Designed for strict cross-platform parity, the app connected diverse global stakeholders with a privacy-first Flutter architecture. Delivered on iOS and Android with a focus on security, reliability, and enterprise-grade performance.",
    descriptionFr:
      "Pilotage du developpement mobile d'une plateforme sociale securisee et riche en fonctionnalites pour GIZ. Concue pour une parite stricte entre plateformes, l'application connecte des parties prenantes internationales avec une architecture Flutter orientee confidentialite. Livree sur iOS et Android avec un haut niveau de securite, fiabilite et performance entreprise.",
    stack: ["Flutter", "Clean Architecture", "iOS", "Android"],
  },
  {
    name: "Surtech",
    tagline:
      "Smart surveillance camera control — sole developer, zero to production",
    taglineFr:
      "Controle intelligent de cameras de surveillance — seul developpeur de zero a la production",
    category: "IoT · Security",
    categoryFr: "IoT · Securite",
    platforms: ["iOS", "Android"],
    storeLinks: [],
    enterpriseLabel: "Enterprise",
    description:
      "Sole mobile developer on a production Flutter application for real-time surveillance camera management, built for scale and long-term maintainability. Adopted Clean Architecture with BLoC pattern for strict separation of concerns. Connected and synchronized multiple devices via REST APIs with resilient retry logic, and maintained code quality through comprehensive unit testing with Mockito.",
    descriptionFr:
      "Seul developpeur mobile sur une application Flutter de gestion de cameras en temps reel, concue pour monter en charge et rester maintenable dans la duree. Adoption de Clean Architecture avec BLoC pour une separation stricte des responsabilites. Connexion et synchronisation multi-appareils via APIs REST avec logique de retry resiliente et qualite de code assuree par des tests unitaires complets avec Mockito.",
    stack: [
      "Flutter 3.22",
      "BLoC",
      "Clean Architecture",
      "REST APIs",
      "Mockito",
      "CI/CD",
      "iOS",
      "Android",
    ],
    org: ["Scrum", "Jira", "GitLab"],
  },
];

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const featuredContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const featuredItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const compactContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const compactItem = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.35 } },
};

const stackPill = {
  hidden: { opacity: 0, y: 4 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.04, duration: 0.25 },
  }),
};

function StoreButton({ label, url, platform }: StoreButtonProps) {
  const Icon: IconType = platform === "ios" ? SiApple : SiGoogleplay;
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ boxShadow: "0 0 12px rgba(0,79,144,0.4)" }}
      className="inline-flex items-center gap-2 rounded-[8px] border border-[rgba(0,79,144,0.3)] bg-[#1C2A3A] px-[14px] py-[8px] text-[13px] font-medium text-white transition-colors hover:border-[#004F90] hover:bg-[#27394D]"
    >
      <Icon className="h-4 w-4" aria-hidden />
      {label}
    </motion.a>
  );
}

function EnterpriseBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E8F4FD] px-3 py-1 text-xs font-medium text-[#003D70]">
      <TiLockClosed className="h-4 w-4" aria-hidden />
      {label}
    </span>
  );
}

function MigrationBadge({ from, to }: { from: string; to: string }) {
  return (
    <span className="inline-flex h-[22px] items-center rounded-full bg-[linear-gradient(90deg,#1C2A3A,#004F90)] px-[10px] py-[4px] text-[11px] font-semibold">
      <span className="text-[#B3D0EC]">{from}</span>
      <span className="mx-1 text-accent">→</span>
      <span className="text-white">{to}</span>
    </span>
  );
}

function MetricRow({
  metrics,
  locale,
}: {
  metrics: NonNullable<Project["metrics"]>;
  locale: "en" | "fr";
}) {
  const icons = {
    latency: Zap,
    codebase: RefreshCw,
    architecture: TrendingUp,
    checkin: QrCode,
    requests: Bell,
    payments: CreditCard,
  } as const;

  return (
    <div className="mt-3 grid grid-cols-3 gap-4 border-t border-[rgba(0,79,144,0.15)] pt-3">
      {metrics.map((metric) => {
        const Icon = icons[metric.icon];
        return (
          <div key={`${metric.label}-${metric.value}`} className="flex items-start gap-2">
            <Icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
            <div>
              <p className="text-[11px] text-[#4A6B8A]">
                {locale === "fr" ? metric.labelFr ?? metric.label : metric.label}
              </p>
              <p className="text-xs font-semibold text-primary">
                {locale === "fr" ? metric.valueFr ?? metric.value : metric.value}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function getDefaultMetrics(
  project: Project,
  locale: "en" | "fr"
): NonNullable<Project["metrics"]> {
  const publicStatus =
    project.storeLinks.length > 0
      ? locale === "fr"
        ? "Public"
        : "Public"
      : locale === "fr"
        ? project.enterpriseLabelFr ?? "Entreprise"
        : project.enterpriseLabel ?? "Enterprise";

  return [
    {
      icon: "architecture",
      label: locale === "fr" ? "Plateformes" : "Platforms",
      value: project.platforms.join(" + "),
    },
    {
      icon: "codebase",
      label: locale === "fr" ? "Diffusion" : "Release",
      value: publicStatus,
    },
    {
      icon: "latency",
      label: locale === "fr" ? "Stack" : "Stack",
      value: project.stack.slice(0, 2).join(" + "),
    },
  ];
}

function ProjectActions({
  storeLinks,
  enterpriseLabel,
  fallbackEnterpriseLabel,
  locale,
}: {
  storeLinks: StoreLink[];
  enterpriseLabel?: string;
  fallbackEnterpriseLabel: string;
  locale: "en" | "fr";
}) {
  if (storeLinks.length === 0) {
    return <EnterpriseBadge label={enterpriseLabel ?? fallbackEnterpriseLabel} />;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {storeLinks.map((link) => (
        <StoreButton
          key={`${link.label}-${link.url}`}
          label={locale === "fr" ? link.labelFr ?? link.label : link.label}
          url={link.url}
          platform={link.platform}
        />
      ))}
    </div>
  );
}

export function Projects() {
  const reducedMotion = usePrefersReducedMotion();
  const { t, locale } = useI18n();

  return (
    <section id="projects" className="bg-bg-light py-24" aria-label="Projects">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reducedMotion ? false : "hidden"}
          whileInView={reducedMotion ? undefined : "visible"}
          viewport={{ once: true, margin: "-60px" }}
          variants={reducedMotion ? undefined : titleVariants}
        >
          <SectionHeading
            eyebrow={t.projects.eyebrow}
            title={t.projects.title}
            subtitle={t.projects.subtitle}
          />
        </motion.div>

        <motion.div
          className="grid gap-6 lg:grid-cols-3"
          variants={reducedMotion ? undefined : featuredContainer}
          initial={reducedMotion ? false : "hidden"}
          whileInView={reducedMotion ? undefined : "visible"}
          viewport={{ once: true, margin: "-60px" }}
        >
          {FEATURED_PROJECTS.map((project) => (
            <motion.article
              key={project.name}
              variants={reducedMotion ? undefined : featuredItem}
              className="flex h-full flex-col rounded-2xl border border-primary/20 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white">
                <Smartphone className="h-6 w-6" aria-hidden />
              </div>

              <div className="mb-3 flex flex-wrap items-center gap-2 text-[11px] font-mono">
                <span className="rounded-full bg-bg-light-card px-2.5 py-1 text-primary">
                  {locale === "fr" ? project.categoryFr ?? project.category : project.category}
                </span>
                {project.dualAppsBadge && (
                  <span className="inline-flex h-[22px] items-center rounded-full bg-[linear-gradient(90deg,#1C2A3A,#004F90)] px-[10px] py-[4px] text-[11px] font-semibold text-white">
                    {locale === "fr" ? project.dualAppsBadgeFr ?? project.dualAppsBadge : project.dualAppsBadge}
                  </span>
                )}
                <span className="text-[#4A6B8A]">
                  {project.platforms.join(" · ")}
                </span>
              </div>
              {project.migration && (
                <div className="mb-3">
                  <MigrationBadge from={project.migration.from} to={project.migration.to} />
                </div>
              )}

              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-sora text-lg font-semibold text-[#0D1B2B]">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm text-[#4A6B8A]">
                    {locale === "fr" ? project.taglineFr ?? project.tagline : project.tagline}
                  </p>
                </div>
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-[#4A6B8A]">
                {locale === "fr"
                  ? project.descriptionFr ?? project.description
                  : project.description}
              </p>
              <MetricRow
                metrics={project.metrics ?? getDefaultMetrics(project, locale)}
                locale={locale}
              />

              <div className="mt-5">
                <ProjectActions
                  storeLinks={project.storeLinks}
                  enterpriseLabel={
                    project.enterpriseLabel === "Private Deployment"
                      ? t.projects.privateDeployment
                      : project.enterpriseLabel === "Enterprise"
                        ? t.projects.enterprise
                        : locale === "fr"
                          ? project.enterpriseLabelFr ?? project.enterpriseLabel
                          : project.enterpriseLabel
                  }
                  fallbackEnterpriseLabel={t.projects.enterprise}
                  locale={locale}
                />
              </div>

              <ul className="mt-5 flex flex-wrap gap-2" role="list">
                {project.stack.map((tech, index) => (
                  <motion.li
                    key={tech}
                    custom={index}
                    variants={reducedMotion ? undefined : stackPill}
                    className="rounded-full bg-bg-light-card px-2.5 py-0.5 font-mono text-[10px] text-primary"
                  >
                    {tech}
                  </motion.li>
                ))}
              </ul>

              {project.org && (
                <p className="mt-4 text-xs text-[#4A6B8A]">
                  <span className="font-medium text-[#0D1B2B]">
                    {t.projects.workflow}:
                  </span>{" "}
                  {project.org.join(" · ")}
                </p>
              )}
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          variants={reducedMotion ? undefined : compactContainer}
          initial={reducedMotion ? false : "hidden"}
          whileInView={reducedMotion ? undefined : "visible"}
          viewport={{ once: true, margin: "-60px" }}
        >
          {COMPACT_PROJECTS.map((project) => (
            <motion.article
              key={project.name}
              variants={reducedMotion ? undefined : compactItem}
              className="rounded-2xl border border-primary/10 bg-white p-5 shadow-sm"
            >
              <div className="mb-3 flex flex-wrap items-center gap-2 text-[11px] font-mono">
                <span className="rounded-full bg-bg-light-card px-2.5 py-1 text-primary">
                  {locale === "fr" ? project.categoryFr ?? project.category : project.category}
                </span>
                {project.dualAppsBadge && (
                  <span className="inline-flex h-[22px] items-center rounded-full bg-[linear-gradient(90deg,#1C2A3A,#004F90)] px-[10px] py-[4px] text-[11px] font-semibold text-white">
                    {locale === "fr" ? project.dualAppsBadgeFr ?? project.dualAppsBadge : project.dualAppsBadge}
                  </span>
                )}
                <span className="text-[#4A6B8A]">
                  {project.platforms.join(" · ")}
                </span>
              </div>
              {project.migration && (
                <div className="mb-3">
                  <MigrationBadge from={project.migration.from} to={project.migration.to} />
                </div>
              )}

              <h3 className="font-sora text-base font-semibold text-[#0D1B2B]">
                {project.name}
              </h3>
              <p className="mt-1 text-sm text-[#4A6B8A]">
                {locale === "fr" ? project.taglineFr ?? project.tagline : project.tagline}
              </p>

              <p className="mt-3 text-sm leading-relaxed text-[#4A6B8A]">
                {locale === "fr"
                  ? project.descriptionFr ?? project.description
                  : project.description}
              </p>
              <MetricRow
                metrics={project.metrics ?? getDefaultMetrics(project, locale)}
                locale={locale}
              />

              <div className="mt-4">
                <ProjectActions
                  storeLinks={project.storeLinks}
                  enterpriseLabel={
                    project.enterpriseLabel === "Private Deployment"
                      ? t.projects.privateDeployment
                      : project.enterpriseLabel === "Enterprise"
                        ? t.projects.enterprise
                        : locale === "fr"
                          ? project.enterpriseLabelFr ?? project.enterpriseLabel
                          : project.enterpriseLabel
                  }
                  fallbackEnterpriseLabel={t.projects.enterprise}
                  locale={locale}
                />
              </div>

              <ul className="mt-4 flex flex-wrap gap-2" role="list">
                {project.stack.map((tech, index) => (
                  <motion.li
                    key={tech}
                    custom={index}
                    variants={reducedMotion ? undefined : stackPill}
                    className="rounded-full bg-bg-light-card px-2.5 py-0.5 font-mono text-[10px] text-primary"
                  >
                    {tech}
                  </motion.li>
                ))}
              </ul>

              {project.org && (
                <p className="mt-3 text-xs text-[#4A6B8A]">
                  <span className="font-medium text-[#0D1B2B]">
                    {t.projects.workflow}:
                  </span>{" "}
                  {project.org.join(" · ")}
                </p>
              )}
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <p className="text-sm text-[#4A6B8A]">
            {t.projects.callout}
          </p>
          <a
            href="#contact"
            className="mt-4 inline-flex items-center gap-1 rounded-full bg-[#E8F4FD] px-4 py-2 text-sm font-medium text-[#003D70] transition-colors hover:bg-[#d8ecfb]"
          >
            {t.projects.letsTalk}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
