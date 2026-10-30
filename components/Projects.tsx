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
import { useState } from "react";
import type { IconType } from "react-icons";
import { SiApple, SiGoogleplay } from "react-icons/si";
import { TiLockClosed } from "react-icons/ti";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/lib/hooks";
import { pick, useI18n, type Locale } from "@/lib/i18n";

type StoreButtonProps = {
  label: string;
  url: string;
  platform: "ios" | "android";
};

type StoreLink = StoreButtonProps & {
  labelFr?: string;
  labelDe?: string;
};

type Project = {
  name: string;
  tagline: string;
  taglineFr?: string;
  taglineDe?: string;
  category: string;
  categoryFr?: string;
  categoryDe?: string;
  platforms: Array<"iOS" | "Android" | "Web">;
  storeLinks: StoreLink[];
  description: string;
  descriptionFr?: string;
  descriptionDe?: string;
  stack: string[];
  org?: string[];
  enterpriseLabel?: string;
  enterpriseLabelFr?: string;
  enterpriseLabelDe?: string;
  migration?: { from: string; to: string };
  dualAppsBadge?: string;
  dualAppsBadgeFr?: string;
  dualAppsBadgeDe?: string;
  metrics?: Array<{
    icon: "latency" | "codebase" | "architecture" | "checkin" | "requests" | "payments";
    label: string;
    value: string;
    labelFr?: string;
    valueFr?: string;
    labelDe?: string;
    valueDe?: string;
  }>;
};

const FEATURED_PROJECTS: Project[] = [
  {
    name: "Tiraz",
    tagline:
      "Full-stack multi-brand jalabiya marketplace — mobile app, admin dashboard & backend",
    taglineFr:
      "Marketplace multi-marques de jalabiyas full-stack — app mobile, dashboard admin et backend",
    taglineDe:
      "Full-Stack-Marketplace für Jalabiyas mehrerer Marken — Mobile-App, Admin-Dashboard und Backend",
    category: "E-commerce · Full-Stack",
    categoryFr: "E-commerce · Full-Stack",
    categoryDe: "E-Commerce · Full-Stack",
    platforms: ["iOS", "Android", "Web"],
    storeLinks: [],
    enterpriseLabel: "Client Platform",
    enterpriseLabelFr: "Plateforme client",
    enterpriseLabelDe: "Kundenplattform",
    description:
      "Built the whole Tiraz platform end to end for a UAE multi-brand jalabiya marketplace: an Arabic-first Flutter app for buyers and sellers, a React admin dashboard, and the NestJS backend behind both. The mobile app covers catalog, cart, checkout, wallet, order tracking, buyer–seller chat, saved measurements for made-to-fit orders, and family profiles, built with Clean Architecture, BLoC, and go_router. The backend (NestJS, Prisma, PostgreSQL) handles JWT auth, orders, payouts, uploads, and runtime settings such as commission and shipping fees. The dashboard (React, Vite, Ant Design, TanStack Query) gives staff role-based tools to moderate sellers, products, and buyers, manage orders and payouts, and trace every change in an audit log.",
    descriptionFr:
      "Conception et developpement de bout en bout de la plateforme Tiraz pour une marketplace multi-marques de jalabiyas aux Emirats: une application Flutter en arabe d'abord pour acheteurs et vendeurs, un dashboard d'administration React et le backend NestJS qui les alimente. L'application mobile couvre catalogue, panier, paiement, wallet, suivi des commandes, chat acheteur–vendeur, mensurations enregistrees pour les commandes sur mesure et profils famille, avec Clean Architecture, BLoC et go_router. Le backend (NestJS, Prisma, PostgreSQL) gere l'authentification JWT, les commandes, les reversements vendeurs, les uploads et les parametres modifiables a chaud comme la commission et les frais de livraison. Le dashboard (React, Vite, Ant Design, TanStack Query) donne a l'equipe des outils par role pour moderer vendeurs, produits et acheteurs, gerer commandes et reversements, et tracer chaque action dans un journal d'audit.",
    descriptionDe:
      "Die gesamte Tiraz-Plattform end-to-end für einen Marketplace für Jalabiyas mehrerer Marken in den VAE entwickelt: eine arabischsprachige Flutter-App für Käufer und Verkäufer, ein React-Admin-Dashboard und das NestJS-Backend dahinter. Die Mobile-App umfasst Katalog, Warenkorb, Checkout, Wallet, Bestellverfolgung, Käufer-Verkäufer-Chat, gespeicherte Maße für Maßanfertigungen und Familienprofile, umgesetzt mit Clean Architecture, BLoC und go_router. Das Backend (NestJS, Prisma, PostgreSQL) übernimmt JWT-Authentifizierung, Bestellungen, Auszahlungen, Uploads und zur Laufzeit änderbare Einstellungen wie Provision und Versandkosten. Das Dashboard (React, Vite, Ant Design, TanStack Query) bietet dem Team rollenbasierte Werkzeuge zur Moderation von Verkäufern, Produkten und Käufern, zur Verwaltung von Bestellungen und Auszahlungen sowie ein Audit-Log für jede Änderung.",
    stack: [
      "Flutter",
      "BLoC",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "React",
      "Ant Design",
      "TypeScript",
    ],
    metrics: [
      {
        icon: "architecture",
        label: "Scope",
        labelFr: "Perimetre",
        labelDe: "Umfang",
        value: "App + Web + API",
      },
      {
        icon: "requests",
        label: "Chat",
        labelFr: "Chat",
        labelDe: "Chat",
        value: "Buyer ↔ Seller",
        valueFr: "Acheteur ↔ Vendeur",
        valueDe: "Käufer ↔ Verkäufer",
      },
      {
        icon: "payments",
        label: "Payments",
        labelFr: "Paiements",
        labelDe: "Zahlungen",
        value: "Wallet + Payouts",
        valueFr: "Wallet + Reversements",
        valueDe: "Wallet + Auszahlungen",
      },
    ],
  },
  {
    name: "Eduba",
    tagline: "AI-powered learning app for students, with a parent companion area",
    taglineFr:
      "Application d'apprentissage avec IA pour les eleves, avec un espace parents",
    taglineDe:
      "KI-gestützte Lern-App für Schüler, mit eigenem Bereich für Eltern",
    category: "EdTech · React Native",
    categoryFr: "EdTech · React Native",
    categoryDe: "EdTech · React Native",
    platforms: ["iOS", "Android"],
    storeLinks: [],
    enterpriseLabel: "Client App",
    enterpriseLabelFr: "Application client",
    enterpriseLabelDe: "Kunden-App",
    description:
      "Built the Eduba student app in React Native with Expo Router: lessons by subject, interactive quizzes, progress tracking, a leaderboard, and Ask Edu, an AI tutor chat with streamed answers. A personality and learning-style onboarding tailors the experience to each student, and a separate parent area lets parents follow each child's activity and reports. Arabic-first with RTL layouts, Clerk authentication, and a Supabase backend, running on the React Native New Architecture.",
    descriptionFr:
      "Developpement de l'application eleve Eduba en React Native avec Expo Router: lecons par matiere, quiz interactifs, suivi de progression, classement et Ask Edu, un tuteur IA en chat avec reponses en streaming. Un onboarding sur la personnalite et le style d'apprentissage adapte l'experience a chaque eleve, et un espace parents permet de suivre l'activite et les rapports de chaque enfant. Arabe en priorite avec mise en page RTL, authentification Clerk et backend Supabase, sur la New Architecture de React Native.",
    descriptionDe:
      "Die Eduba-Schüler-App in React Native mit Expo Router entwickelt: Lektionen nach Fach, interaktive Quizze, Lernfortschritt, Bestenliste und Ask Edu, ein KI-Tutor-Chat mit gestreamten Antworten. Ein Onboarding zu Persönlichkeit und Lernstil passt die App an jeden Schüler an, und ein eigener Elternbereich zeigt Aktivität und Berichte jedes Kindes. Arabisch als Hauptsprache mit RTL-Layouts, Clerk-Authentifizierung und Supabase-Backend, auf der New Architecture von React Native.",
    stack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Expo Router",
      "Supabase",
      "Clerk",
      "Reanimated",
    ],
    metrics: [
      {
        icon: "requests",
        label: "AI tutor",
        labelFr: "Tuteur IA",
        labelDe: "KI-Tutor",
        value: "Streamed chat",
        valueFr: "Chat en streaming",
        valueDe: "Gestreamter Chat",
      },
      {
        icon: "architecture",
        label: "Users",
        labelFr: "Utilisateurs",
        labelDe: "Nutzer",
        value: "Students + Parents",
        valueFr: "Eleves + Parents",
        valueDe: "Schüler + Eltern",
      },
      {
        icon: "codebase",
        label: "Layout",
        labelFr: "Interface",
        labelDe: "Layout",
        value: "Arabic RTL",
        valueFr: "Arabe RTL",
        valueDe: "Arabisch RTL",
      },
    ],
  },
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
        labelDe: "Käufer-App",
        platform: "ios",
        url: "https://apps.apple.com/tn/app/mawadonline/id6744918489",
      },
      {
        label: "Vendor App",
        labelFr: "App Vendeur",
        labelDe: "Verkäufer-App",
        platform: "ios",
        url: "https://apps.apple.com/tn/app/mawadonline-vendor/id6496850521",
      },
    ],
    description:
      "Architected and shipped two production Flutter applications a Buyer App and a Vendor App forming a complete B2B marketplace for construction materials, equipment, and services. Built a real-time bidirectional chat system, integrated multiple secure payment gateways, and resolved cross-device camera compatibility issues at scale. Enforced DRY principles to minimize bundle size, implemented offline-first data persistence with SQLite, and delivered full multilingual support. Hardened stability through structured API error handling, network state management, and Firebase Cloud Messaging. Owned end-to-end deployment on iOS and Android including ASO strategy to maximize organic visibility and installs.",
    descriptionFr:
      "Conception et livraison de deux applications Flutter en production App Acheteur et App Vendeur formant une marketplace B2B complete pour materiaux, equipements et services. Mise en place d'un chat bidirectionnel temps reel, integration de plusieurs passerelles de paiement securisees et resolution de problemes de compatibilite camera sur de nombreux appareils. Application des principes DRY pour reduire la taille du bundle, implementation d'un stockage offline-first avec SQLite et support multilingue complet. Renforcement de la stabilite via gestion structuree des erreurs API, gestion de l'etat reseau et notifications Firebase Cloud Messaging. Pilotage du deploiement de bout en bout sur iOS/Android avec strategie ASO pour maximiser la visibilite organique.",
    taglineDe: "Duale B2B-Marketplace-App für Baumaterialien und Industriebedarf",
    categoryDe: "Marketplace · B2B",
    descriptionDe:
      "Zwei Flutter-Apps für den Produktivbetrieb konzipiert und ausgeliefert, eine Käufer-App und eine Verkäufer-App, die zusammen einen vollständigen B2B-Marketplace für Baumaterialien, Geräte und Dienstleistungen bilden. Bidirektionalen Echtzeit-Chat entwickelt, mehrere sichere Payment-Gateways integriert und Kamera-Kompatibilitätsprobleme über viele Geräte hinweg gelöst. DRY-Prinzipien zur Reduzierung der Bundle-Größe durchgesetzt, Offline-First-Datenhaltung mit SQLite umgesetzt und vollständige Mehrsprachigkeit geliefert. Stabilität durch strukturiertes API-Error-Handling, Netzwerkstatus-Management und Firebase Cloud Messaging gestärkt. End-to-End-Deployment auf iOS und Android verantwortet, inklusive ASO-Strategie für mehr organische Sichtbarkeit und Installationen.",
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
];

const COMPACT_PROJECTS: Project[] = [
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
    taglineDe: "Cross-Platform-App für intelligentes E-Auto-Laden mit Wallbox-Hardware",
    categoryDe: "CleanTech · Embedded",
    descriptionDe:
      "Als zentraler Flutter-Entwickler an einer Cross-Platform-App für intelligentes Laden von Elektroautos mitgewirkt, die über GraphQL-APIs direkt mit Wallbox-Hardware kommuniziert. GPS-basierte Standorterkennung für die Suche nach nahegelegenen Ladestationen entwickelt und einen robusten Netzwerkstatus-Handler für nahtlose Verbindungswechsel gebaut. Latenz deutlich reduziert und rechenintensive Hintergrundprozesse optimiert, um die wahrgenommene Performance zu verbessern. Echtzeit-Chat, Mehrsprachigkeit, sichere Zahlungen und Firebase-Push-Benachrichtigungen in einem 7-köpfigen, cross-funktionalen Scrum-Team ausgeliefert.",
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
    taglineDe: "Mobile Verwaltung der Krankenversicherung — von Bridges S.A",
    categoryDe: "HealthTech · Versicherung",
    descriptionDe:
      "Flutter-Begleit-App für Krankenversicherungen entwickelt, mit der Nutzer ihren Versicherungsschutz verwalten, Erstattungen verfolgen und Vertragsdetails unterwegs abrufen können. Fokus auf sicheren Umgang mit Daten, barrierearmes UI-Design und ein reibungsloses Onboarding, das eine traditionell komplexe Domäne für den Alltag vereinfacht.",
    stack: ["Flutter", "Clean Architecture", "REST APIs", "iOS"],
  },
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
    taglineDe: "Community- und Empowerment-Plattform für berufstätige Frauen",
    categoryDe: "Social · Community",
    descriptionDe:
      "An einer Flutter-Community-App mitgewirkt, die Frauen im beruflichen Umfeld vernetzt und stärkt. Zentrale Social-Features entwickelt und verfeinert, mit Fokus auf Performance, Clean Architecture und eine inklusive, barrierearme Nutzererfahrung auf iOS-Geräten.",
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
    taglineDe: "Erlebnisorientierte Lifestyle-App — im App Store veröffentlicht",
    categoryDe: "Lifestyle",
    descriptionDe:
      "Flutter-Lifestyle-App entwickelt und im App Store veröffentlicht, mit Verantwortung für den gesamten Entwicklungszyklus vom Architekturentwurf bis zum Produktiv-Release. Eine ausgereifte, responsive und für iOS optimierte Oberfläche mit Fokus auf Nutzerbindung geliefert.",
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
    taglineDe: "Digitaler Begleiter für eine internationale Ausstellung zeitgenössischer Kunst",
    categoryDe: "Kunst & Kultur",
    descriptionDe:
      "Eine immersive Begleit-App für eine Kunstausstellung mit Flutter und Drupal konzipiert und entwickelt, mit der Besucher Galerien, Installationen und kuratierte Sammlungen über eine intuitive Cross-Platform-Oberfläche entdecken. Visuelle Qualität und flüssige Navigation priorisiert, passend zum Anspruch der Ausstellung vor Ort.",
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
    taglineDe: "Stolpersteine in ganz Deutschland scannen — Geschichte des Holocaust entdecken",
    categoryDe: "Kulturelles Erbe",
    descriptionDe:
      "An einer kulturell bedeutsamen Flutter-App mitgewirkt, mit der Nutzer Stolpersteine in ganz Deutschland scannen und die Geschichten der Opfer des Holocaust entdecken. Eine immersive, historisch respektvolle Erfahrung auf Basis von Laravel, Firebase und MySQL geliefert, mit Fokus auf plattformübergreifende Zuverlässigkeit und Barrierefreiheit.",
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
    enterpriseLabelDe: "Kunden-App",
    migration: { from: "Java", to: "Kotlin" },
    description:
      "Developed and maintained native Android applications for two bowling venue clients — Limoges Bowling and Planet Bowling — managing live session tracking, lane assignments, and venue operations. Diagnosed and resolved critical production issues including slow API response times causing UI freezes and jank under high load, significantly improving perceived performance and reliability. Successfully led a full codebase migration from Java to Kotlin, modernizing the architecture with coroutines for clean, non-blocking async operations and refactoring data pipelines using Kotlin Flows for reactive, lifecycle-aware state management. The migration reduced boilerplate by over 40%, improved crash stability, and set a maintainable foundation for future feature development.",
    descriptionFr:
      "Developpement et maintenance d'applications Android natives pour deux clients de bowling — Limoges Bowling et Planet Bowling — avec suivi des sessions en direct, affectation des pistes et operations du site. Diagnostic et resolution d'incidents critiques en production, notamment des temps de reponse API eleves provoquant gels d'interface et saccades sous forte charge, avec amelioration significative de la performance percue et de la fiabilite. Pilotage d'une migration complete du codebase de Java vers Kotlin, modernisation de l'architecture avec coroutines non bloquantes et refonte des flux de donnees avec Kotlin Flows pour une gestion reactive et lifecycle-aware. Cette migration a reduit le boilerplate de plus de 40%, ameliore la stabilite et pose une base maintenable pour les evolutions futures.",
    taglineDe: "Native Android-Apps für das Management von Bowlingcentern — Migration von Java nach Kotlin",
    categoryDe: "Android Nativ · Sport & Freizeit",
    descriptionDe:
      "Native Android-Apps für zwei Bowling-Kunden, Limoges Bowling und Planet Bowling, entwickelt und gewartet, inklusive Live-Session-Tracking, Bahnzuweisung und Betriebsabläufen. Kritische Produktionsprobleme diagnostiziert und behoben, darunter langsame API-Antwortzeiten, die unter hoher Last UI-Freezes und Ruckler verursachten, was Performance und Zuverlässigkeit deutlich verbesserte. Eine vollständige Migration der Codebasis von Java nach Kotlin geleitet, die Architektur mit Coroutines für sauberes, nicht-blockierendes asynchrones Arbeiten modernisiert und Datenpipelines mit Kotlin Flows für reaktives, lifecycle-bewusstes State-Management umgebaut. Die Migration reduzierte Boilerplate um über 40%, verbesserte die Stabilität und schuf eine wartbare Basis für künftige Features.",
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
        labelDe: "API-Latenz",
        valueDe: "Behoben",
      },
      {
        icon: "codebase",
        label: "Codebase",
        labelFr: "Codebase",
        value: "Fully migrated",
        valueFr: "Migré completement",
        labelDe: "Codebasis",
        valueDe: "Vollständig migriert",
      },
      {
        icon: "architecture",
        label: "Architecture",
        labelFr: "Architecture",
        value: "MVVM + Flows",
        valueFr: "MVVM + Flows",
        labelDe: "Architektur",
        valueDe: "MVVM + Flows",
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
        labelDe: "Gast-App (Android)",
        platform: "android",
        url: "https://play.google.com/store/apps/details?id=com.diyafa.customer&hl=fr",
      },
      {
        label: "Staff App (Android)",
        labelFr: "App Staff (Android)",
        labelDe: "Personal-App (Android)",
        platform: "android",
        url: "https://play.google.com",
      },
    ],
    dualAppsBadge: "2 Apps · Guest + Staff",
    dualAppsBadgeFr: "2 Apps · Client + Staff",
    dualAppsBadgeDe: "2 Apps · Gast + Personal",
    description:
      "Designed and built two production Flutter applications from the ground up — a guest-facing app and a dedicated staff operations app — forming a connected hospitality management platform. The guest app enables seamless room booking, QR code-based check-in and check-out, real-time service requests, and secure in-app payments, delivering a frictionless hotel experience from arrival to departure. The staff app provides hotel teams with real-time task management, assignment tracking, and instant notifications to coordinate operations efficiently across departments. Shipped full multilingual support to serve an international guest base, and integrated Firebase Cloud Messaging for timely, reliable push notifications on both sides of the platform.",
    descriptionFr:
      "Conception et developpement de deux applications Flutter en production depuis zero une application client et une application operations staff pour former une plateforme hospitality connectee. L'application client permet reservation de chambre fluide, check-in/check-out via QR code, demandes de service en temps reel et paiements in-app securises, pour une experience hoteliere sans friction. L'application staff apporte gestion des taches en temps reel, suivi des affectations et notifications instantanees pour coordonner les operations entre departements. Livraison du support multilingue complet et integration de Firebase Cloud Messaging pour des notifications fiables des deux cotes de la plateforme.",
    taglineDe: "Duale Smart-Hospitality-Plattform — Gästeerlebnis und Personalabläufe",
    categoryDe: "Hospitality · HotelTech",
    descriptionDe:
      "Zwei Flutter-Apps für den Produktivbetrieb von Grund auf konzipiert und entwickelt, eine App für Gäste und eine eigene App für den Personalbetrieb, die zusammen eine vernetzte Hospitality-Plattform bilden. Die Gäste-App ermöglicht unkomplizierte Zimmerbuchung, Check-in und Check-out per QR-Code, Serviceanfragen in Echtzeit und sichere In-App-Zahlungen für ein reibungsloses Hotelerlebnis von der Ankunft bis zur Abreise. Die Personal-App bietet Hotelteams Aufgabenverwaltung in Echtzeit, Zuweisungs-Tracking und sofortige Benachrichtigungen, um Abläufe abteilungsübergreifend zu koordinieren. Vollständige Mehrsprachigkeit für internationale Gäste geliefert und Firebase Cloud Messaging für zuverlässige Push-Benachrichtigungen auf beiden Seiten der Plattform integriert.",
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
        labelDe: "Check-in",
        valueDe: "Per QR-Code",
      },
      {
        icon: "requests",
        label: "Requests",
        labelFr: "Demandes",
        value: "Real-time",
        valueFr: "Temps reel",
        labelDe: "Anfragen",
        valueDe: "Echtzeit",
      },
      {
        icon: "payments",
        label: "Payments",
        labelFr: "Paiements",
        value: "Integrated",
        valueFr: "Integres",
        labelDe: "Zahlungen",
        valueDe: "Integriert",
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
    taglineDe: "Sicheres internes soziales Netzwerk für eine führende deutsche Entwicklungsorganisation",
    categoryDe: "Social · Enterprise",
    descriptionDe:
      "Die mobile Entwicklung einer sicheren, funktionsreichen Social-Plattform für die GIZ geleitet, Deutschlands führende Organisation für internationale Zusammenarbeit. Mit strikter Plattformparität konzipiert, verbindet die App internationale Stakeholder über eine datenschutzorientierte Flutter-Architektur. Auf iOS und Android ausgeliefert, mit Fokus auf Sicherheit, Zuverlässigkeit und Enterprise-Performance.",
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
    taglineDe: "Intelligente Steuerung von Überwachungskameras — alleiniger Entwickler, von null bis zur Produktion",
    categoryDe: "IoT · Sicherheit",
    descriptionDe:
      "Alleiniger Mobile-Entwickler einer produktiven Flutter-App für die Echtzeitverwaltung von Überwachungskameras, ausgelegt auf Skalierung und langfristige Wartbarkeit. Clean Architecture mit BLoC-Pattern für eine strikte Trennung der Verantwortlichkeiten eingesetzt. Mehrere Geräte über REST-APIs mit robuster Retry-Logik verbunden und synchronisiert sowie Codequalität durch umfassende Unit-Tests mit Mockito sichergestellt.",
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
  hidden: { opacity: 0, y: 40, rotateX: 20, transformPerspective: 1000 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.6 } },
};

const compactContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const compactItem = {
  hidden: { opacity: 0, scale: 0.94, rotateY: -14, transformPerspective: 1000 },
  visible: { opacity: 1, scale: 1, rotateY: 0, transition: { duration: 0.45 } },
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
    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
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
  locale: Locale;
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
    <div className="mt-4 grid grid-cols-3 gap-3 border-t border-white/10 pt-4">
      {metrics.map((metric) => {
        const Icon = icons[metric.icon];
        return (
          <div key={`${metric.label}-${metric.value}`} className="flex items-start gap-2">
            <Icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
            <div>
              <p className="text-[11px] text-text-on-dark">
                {pick(locale, metric.label, metric.labelFr, metric.labelDe)}
              </p>
              <p className="text-xs font-semibold text-accent">
                {pick(locale, metric.value, metric.valueFr, metric.valueDe)}
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
  locale: Locale
): NonNullable<Project["metrics"]> {
  const publicStatus =
    project.storeLinks.length > 0
      ? pick(locale, "Public", "Public", "Öffentlich")
      : pick(
          locale,
          project.enterpriseLabel ?? "Enterprise",
          project.enterpriseLabelFr ?? "Entreprise",
          project.enterpriseLabelDe ?? "Enterprise"
        );

  return [
    {
      icon: "architecture",
      label: pick(locale, "Platforms", "Plateformes", "Plattformen"),
      value: project.platforms.join(" + "),
    },
    {
      icon: "codebase",
      label: pick(locale, "Release", "Diffusion", "Veröffentlichung"),
      value: publicStatus,
    },
    {
      icon: "latency",
      label: "Stack",
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
  locale: Locale;
}) {
  if (storeLinks.length === 0) {
    return <EnterpriseBadge label={enterpriseLabel ?? fallbackEnterpriseLabel} />;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {storeLinks.map((link) => (
        <StoreButton
          key={`${link.label}-${link.url}`}
          label={pick(locale, link.label, link.labelFr, link.labelDe)}
          url={link.url}
          platform={link.platform}
        />
      ))}
    </div>
  );
}

// shortcut: "long" is a character count, not a measured line count; measure overflow if clamping looks off.
const LONG_DESCRIPTION = 240;

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const reducedMotion = usePrefersReducedMotion();
  const { t, locale } = useI18n();
  const [expanded, setExpanded] = useState(false);
  const description = pick(locale, project.description, project.descriptionFr, project.descriptionDe);
  const isLong = description.length > LONG_DESCRIPTION;

  return (
    <TiltCard
      className={cn(
        "flex h-full flex-col rounded-2xl border bg-white/[0.04] backdrop-blur",
        featured ? "border-accent/25 p-6" : "border-white/10 p-5"
      )}
    >
      <div className="flex items-start gap-3">
        <div
          className={cn(
            "flex shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white",
            featured ? "h-12 w-12" : "h-10 w-10"
          )}
        >
          <Smartphone className={featured ? "h-6 w-6" : "h-5 w-5"} aria-hidden />
        </div>
        <div className="min-w-0">
          <h3 className={cn("font-sora font-semibold text-white", featured ? "text-lg" : "text-base")}>
            {project.name}
          </h3>
          <p className="mt-0.5 font-mono text-[11px] text-text-muted">
            {project.platforms.join(" · ")}
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2 font-mono text-[11px]">
        <span className="rounded-full bg-white/5 px-2.5 py-1 text-accent">
          {pick(locale, project.category, project.categoryFr, project.categoryDe)}
        </span>
        {project.dualAppsBadge && (
          <span className="inline-flex h-[22px] items-center rounded-full bg-[linear-gradient(90deg,#1C2A3A,#004F90)] px-[10px] py-[4px] text-[11px] font-semibold text-white">
            {pick(locale, project.dualAppsBadge, project.dualAppsBadgeFr, project.dualAppsBadgeDe)}
          </span>
        )}
        {project.migration && (
          <MigrationBadge from={project.migration.from} to={project.migration.to} />
        )}
      </div>

      <p className="mt-3 text-sm font-medium text-white/90">
        {pick(locale, project.tagline, project.taglineFr, project.taglineDe)}
      </p>

      <p
        className={cn(
          "mt-3 text-sm leading-relaxed text-text-on-dark",
          isLong && !expanded && "line-clamp-4"
        )}
      >
        {description}
      </p>
      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          aria-expanded={expanded}
          className="mt-2 self-start font-mono text-xs text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {expanded ? t.projects.showLess : t.projects.readMore}
        </button>
      )}

      <ul className="mt-4 flex flex-wrap gap-1.5" role="list">
        {project.stack.map((tech, index) => (
          <motion.li
            key={tech}
            custom={index}
            variants={reducedMotion ? undefined : stackPill}
            className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[10px] text-text-on-dark"
          >
            {tech}
          </motion.li>
        ))}
      </ul>

      {project.org && (
        <p className="mt-3 text-xs text-text-muted">
          <span className="font-medium text-white">{t.projects.workflow}:</span>{" "}
          {project.org.join(" · ")}
        </p>
      )}

      {/* Pinned to the bottom so metrics and actions line up across a row */}
      <div className="mt-auto pt-2">
        <MetricRow metrics={project.metrics ?? getDefaultMetrics(project, locale)} locale={locale} />
        <div className="mt-4">
          <ProjectActions
            storeLinks={project.storeLinks}
            enterpriseLabel={
              project.enterpriseLabel === "Private Deployment"
                ? t.projects.privateDeployment
                : project.enterpriseLabel === "Enterprise"
                  ? t.projects.enterprise
                  : pick(locale, project.enterpriseLabel, project.enterpriseLabelFr, project.enterpriseLabelDe)
            }
            fallbackEnterpriseLabel={t.projects.enterprise}
            locale={locale}
          />
        </div>
      </div>
    </TiltCard>
  );
}

export function Projects() {
  const reducedMotion = usePrefersReducedMotion();
  const { t, locale } = useI18n();

  return (
    <section id="projects" className="bg-[#0a0f1e] py-24" aria-label="Projects">
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
              className="h-full"
            >
              <ProjectCard project={project} featured />
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:[&>*:last-child:nth-child(3n+1)]:col-start-2"
          variants={reducedMotion ? undefined : compactContainer}
          initial={reducedMotion ? false : "hidden"}
          whileInView={reducedMotion ? undefined : "visible"}
          viewport={{ once: true, margin: "-60px" }}
        >
          {COMPACT_PROJECTS.map((project) => (
            <motion.article
              key={project.name}
              variants={reducedMotion ? undefined : compactItem}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <p className="text-sm text-text-on-dark">
            {t.projects.callout}
          </p>
          <a
            href="#contact"
            className="mt-4 inline-flex items-center gap-1 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent/20"
          >
            {t.projects.letsTalk}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
