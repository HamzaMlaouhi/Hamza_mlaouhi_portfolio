"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Locale = "en" | "fr";

type Translation = {
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    experience: string;
    education: string;
    contact: string;
    hireMe: string;
    language: string;
  };
  hero: {
    badge: string;
    role: string;
    greeting: string;
    specializingIn: string;
    tagline: string;
    viewMyWork: string;
    getInTouch: string;
    scroll: string;
  };
  about: {
    eyebrow: string;
    title: string;
    subtitle: string;
    summary: string;
    languages: string;
  };
  skills: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    subtitle: string;
    callout: string;
    letsTalk: string;
    workflow: string;
    enterprise: string;
    privateDeployment: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  education: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    email: string;
    phone: string;
    linkedin: string;
    linkedinProfile: string;
    location: string;
    sendEmail: string;
    downloadCvEn: string;
    downloadCvFr: string;
  };
  footer: {
    builtWith: string;
    portfolio: string;
  };
};

const translations: Record<Locale, Translation> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      contact: "Contact",
      hireMe: "Hire Me",
      language: "Language",
    },
    hero: {
      badge: "5+ years building mobile apps",
      role: "Senior Mobile Engineer",
      greeting: "Hi, I'm",
      specializingIn: "Specializing in",
      tagline:
        "I build scalable, high-performance mobile apps from Flutter and native Android/iOS to production releases on the App Store and Google Play.",
      viewMyWork: "View My Work",
      getInTouch: "Get In Touch",
      scroll: "Scroll",
    },
    about: {
      eyebrow: "About",
      title: "Building mobile products end to end",
      subtitle: "From architecture and APIs to App Store and Play Store releases.",
      summary:
        "Senior Mobile Engineer with 5+ years of experience building scalable, high-performance mobile applications for Android and iOS. Expert in cross-platform development with Flutter and native development using Kotlin, Java, and Swift. Proven ability to design robust mobile architectures, integrate APIs, and deliver production-ready applications from concept to store deployment. Strong experience with CI/CD automation, modern development workflows, and AI-powered engineering tools.",
      languages: "Languages",
    },
    skills: {
      eyebrow: "Skills",
      title: "Technical toolkit",
      subtitle:
        "Mobile-first engineering across platforms, architecture, APIs, and delivery.",
    },
    projects: {
      eyebrow: "Selected Work",
      title: "Production mobile apps with verified live listings",
      subtitle:
        "Featured launches and enterprise deployments across marketplace, cleantech, health, social, and culture.",
      callout:
        "A selection of 9 shipped applications across construction tech, cleantech, enterprise, healthcare, and culture. More available on request.",
      letsTalk: "Let's Talk",
      workflow: "Workflow",
      enterprise: "Enterprise",
      privateDeployment: "Private Deployment",
    },
    experience: {
      eyebrow: "Experience",
      title: "Where I've built",
      subtitle:
        "5+ years across product companies, automotive, and freelance clients.",
    },
    education: {
      eyebrow: "Education",
      title: "Academic background",
      subtitle:
        "Computer science foundations with a specialization in mobile development.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's build something",
      subtitle:
        "Open to senior mobile engineering roles, consulting, and interesting product work.",
      email: "Email",
      phone: "Phone",
      linkedin: "LinkedIn",
      linkedinProfile: "LinkedIn profile",
      location: "Location",
      sendEmail: "Send an email",
      downloadCvEn: "Download CV (EN)",
      downloadCvFr: "Download CV (FR)",
    },
    footer: {
      builtWith: "Built with Next.js.",
      portfolio: "Senior Mobile Engineer Portfolio",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "A propos",
      skills: "Competences",
      projects: "Projets",
      experience: "Experience",
      education: "Formation",
      contact: "Contact",
      hireMe: "Me recruter",
      language: "Langue",
    },
    hero: {
      badge: "5+ ans dans le developpement mobile",
      role: "Ingenieur Mobile Senior",
      greeting: "Bonjour, je suis",
      specializingIn: "Specialise en",
      tagline:
        "Je cree des applications mobiles performantes et evolutives avec Flutter et Android/iOS natif, jusqu'au deploiement en production sur l'App Store et Google Play.",
      viewMyWork: "Voir mes projets",
      getInTouch: "Me contacter",
      scroll: "Defiler",
    },
    about: {
      eyebrow: "A propos",
      title: "De l'idee au produit mobile final",
      subtitle:
        "De l'architecture et des APIs jusqu'aux mises en ligne App Store et Play Store.",
      summary:
        "Ingenieur Mobile Senior avec plus de 5 ans d'experience dans la conception d'applications Android et iOS performantes et evolutives. Expertise en developpement cross-platform avec Flutter et en natif avec Kotlin, Java et Swift. Habitude de concevoir des architectures robustes, d'integrer des APIs et de livrer des applications prêtes pour la production. Solide experience en CI/CD, workflows modernes et outils IA pour accelerer la qualite de livraison.",
      languages: "Langues",
    },
    skills: {
      eyebrow: "Competences",
      title: "Stack technique",
      subtitle:
        "Ingenierie mobile orientee produit: plateformes, architecture, APIs et delivery.",
    },
    projects: {
      eyebrow: "Projets selectionnes",
      title: "Applications mobiles en production",
      subtitle:
        "Lancements publics et deploiements entreprise dans la marketplace, cleantech, sante, social et culture.",
      callout:
        "Une selection de 9 applications livrees en production dans la construction tech, la cleantech, l'entreprise, la sante et la culture. D'autres references sont disponibles sur demande.",
      letsTalk: "Discutons",
      workflow: "Organisation",
      enterprise: "Entreprise",
      privateDeployment: "Deploiement prive",
    },
    experience: {
      eyebrow: "Experience",
      title: "Mes experiences",
      subtitle:
        "5+ ans d'experience entre produits, automobile et missions freelance.",
    },
    education: {
      eyebrow: "Formation",
      title: "Parcours academique",
      subtitle:
        "Fondations en informatique avec une specialisation en developpement mobile.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Construisons quelque chose",
      subtitle:
        "Ouvert aux postes senior mobile, missions de conseil et projets produits ambitieux.",
      email: "Email",
      phone: "Telephone",
      linkedin: "LinkedIn",
      linkedinProfile: "Profil LinkedIn",
      location: "Localisation",
      sendEmail: "Envoyer un email",
      downloadCvEn: "Telecharger CV (EN)",
      downloadCvFr: "Telecharger CV (FR)",
    },
    footer: {
      builtWith: "Cree avec Next.js.",
      portfolio: "Portfolio Ingenieur Mobile Senior",
    },
  },
};

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translation;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("locale");
    if (saved === "en" || saved === "fr") {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    window.localStorage.setItem("locale", nextLocale);
  };

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: translations[locale],
    }),
    [locale]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within LanguageProvider");
  }
  return context;
}
