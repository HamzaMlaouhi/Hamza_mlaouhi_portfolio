export const SITE = {
  name: "Hamza Mlaouhi",
  title: "Senior Mobile Engineer",
  location: "Essen, North Rhine-Westphalia, Germany",
  email: "hamza0mlaouhi@gmail.com",
  phone: "+216 24 878 978",
  linkedin: "https://www.linkedin.com/in/hamza-mlaouhi-37b2a01b5/",
  github: "https://github.com/hamza0mlaouhi",
  cvUrl: "/cv.pdf",
  cvUrlFr: "/cv-fr.pdf",
} as const;

export const NAV_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;

export const TYPEWRITER_TECH = [
  "Flutter",
  "Android",
  "iOS",
  "Kotlin",
] as const;

export const HERO_TAGLINE =
  "I build scalable, high-performance mobile apps from Flutter and native Android/iOS to production releases on the App Store and Google Play.";

export const ABOUT_SUMMARY =
  "Senior Mobile Engineer with 5+ years of experience building scalable, high-performance mobile applications for Android and iOS. Expert in cross-platform development with Flutter and native development using Kotlin, Java, and Swift. Proven ability to design robust mobile architectures, integrate APIs, and deliver production-ready applications from concept to store deployment. Strong experience with CI/CD automation, modern development workflows, and AI-powered engineering tools.";

export const SKILL_CATEGORIES = [
  {
    title: "Mobile",
    skills: ["Flutter (Dart)", "Android (Kotlin, Java)", "iOS (Swift)", "React Native", "MAUI"],
  },
  {
    title: "Architecture",
    skills: ["Clean Architecture", "BLoC", "Provider", "MVVM", "Repository Pattern"],
  },
  {
    title: "Backend & APIs",
    skills: ["REST API", "GraphQL", "Firebase", "Laravel", "Spring Boot"],
  },
  {
    title: "DevOps & Tools",
    skills: ["CI/CD", "GitHub Actions", "GitLab CI", "Fastlane", "Docker"],
  },
  {
    title: "Testing",
    skills: ["Flutter Test", "Mockito", "Widget Testing", "Unit Testing"],
  },
  {
    title: "Collaboration",
    skills: ["Git", "Jira", "Figma", "Postman", "Swagger", "Slack"],
  },
] as const;

export const PROJECTS = [
  {
    name: "MawadOnline",
    tagline: "E-commerce & real-time engagement",
    description:
      "In-app chat, payment gateways, offline-first SQLite architecture, multilingual i18n, FCM push notifications, and Fastlane automated store releases.",
    stack: ["Flutter", "Firebase", "REST API", "CI/CD"],
    period: "2024 – Present",
  },
  {
    name: "Surtech",
    tagline: "Industrial monitoring platform",
    description:
      "Clean Architecture with BLoC, REST API sync, Microsoft Clarity analytics, real-time device sync, and comprehensive Flutter test coverage.",
    stack: ["Flutter", "BLoC", "REST API", "GitLab CI"],
    period: "2024",
  },
  {
    name: "EV Charging (LRT Automotive)",
    tagline: "Wallbox integration",
    description:
      "GraphQL APIs for real-time EV charger control, geolocation for station discovery, and resilient offline/online connectivity handling.",
    stack: ["Flutter", "GraphQL", "Geolocation", "CI/CD"],
    period: "2023 – 2024",
  },
  {
    name: "Vivencia",
    tagline: "AI-powered cosmetics",
    description:
      "TensorFlow Lite face recognition for skin analysis, personalized product recommendations, and a full cosmetics marketplace with Firebase.",
    stack: ["Flutter", "TensorFlow Lite", "Firebase", "Clean Architecture"],
    period: "Freelance",
  },
  {
    name: "Womentum & Jaou Photo",
    tagline: "Published consumer apps",
    description:
      "5+ apps shipped to App Store and Google Play with Firebase Auth, Firestore, FCM notifications, and Provider-based state management.",
    stack: ["Flutter", "Firebase", "Provider", "Laravel"],
    period: "2022",
  },
  {
    name: "Diyafa & Nurtify",
    tagline: "Multi-app product suite",
    description:
      "Customer and staff apps published on Google Play with feature-based Clean Architecture modules and real-time Firebase cart sync.",
    stack: ["Flutter", "Firebase", "Android", "iOS"],
    period: "Freelance",
  },
] as const;

export const EXPERIENCE = [
  {
    company: "MawadOnline",
    role: "Senior Mobile Engineer",
    period: "Sep 2024 – Present",
    location: "Tunis, Tunisia",
    highlights: [
      "Built a real-time in-app chat system using Firebase, improving user engagement by an estimated 25%.",
      "Integrated multiple payment gateways for seamless e-commerce transactions.",
      "Reduced app bundle size by ~20% through code deduplication and DRY principles.",
      "Implemented offline-first architecture with SQLite and connectivity_plus.",
      "Delivered multilingual support (i18n) and FCM push notifications.",
      "Automated App Store and Play Store releases with Fastlane one-command pipelines.",
    ],
    stack: ["Flutter", "Firebase", "REST API", "CI/CD", "Fastlane"],
  },
  {
    company: "Sofiatech",
    role: "Senior Mobile Engineer",
    period: "Feb 2024 – Aug 2024",
    location: "Tunis, Tunisia",
    highlights: [
      "Architected the Surtech app with Clean Architecture and BLoC pattern.",
      "Integrated REST APIs with robust error-handling and retry mechanisms.",
      "Leveraged Microsoft Clarity for heatmaps and UX friction analysis.",
      "Wrote unit and widget tests with Flutter test and Mockito.",
    ],
    stack: ["Flutter", "BLoC", "REST API", "GitLab CI"],
  },
  {
    company: "LRT Automotive GmbH",
    role: "Mid-Senior Mobile Application Developer",
    period: "Nov 2023 – Feb 2024",
    location: "Tunis, Tunisia",
    highlights: [
      "Integrated GraphQL APIs for real-time Wallbox EV charging machine control.",
      "Built geolocation for charging station discovery and contextual UX.",
      "Developed dynamic network connectivity detection for offline/online transitions.",
    ],
    stack: ["Flutter", "GraphQL", "iOS", "Android", "GitLab CI"],
  },
  {
    company: "Zahou-tech",
    role: "Mobile Engineer",
    period: "Dec 2022 – Nov 2023",
    location: "Tunis, Tunisia",
    highlights: [
      "Maintained and optimized 4+ Flutter applications, reducing crash rates by ~30%.",
      "Implemented geolocation with geolocator and Google Maps API.",
      "Set up CI/CD pipelines via GitHub Actions for automated build and deploy.",
    ],
    stack: ["Flutter", "GitHub Actions", "WordPress API", "Figma"],
  },
  {
    company: "UTEEK",
    role: "Mobile Developer",
    period: "Jan 2022 – Nov 2022",
    location: "Tunis, Tunisia",
    highlights: [
      "Developed and published 5+ apps on App Store and Google Play.",
      "Integrated Firebase Authentication, Firestore, and FCM.",
      "Profiled performance with Flutter DevTools to resolve memory and rendering issues.",
    ],
    stack: ["Flutter", "Firebase", "Provider", "Laravel", "Xamarin"],
  },
  {
    company: "Freelancer",
    role: "Mobile Developer",
    period: "May 2021 – Aug 2022",
    location: "Tunis, Tunisia",
    highlights: [
      "Built Diyafa, OOUC, and Nurtify all published on Google Play.",
      "Migrated bowling venue apps from Java to Kotlin with coroutines and Flows.",
      "Built Vivencia, an AI cosmetics app with TensorFlow Lite face recognition.",
    ],
    stack: ["Flutter", "Kotlin", "Firebase", "TensorFlow Lite"],
  },
] as const;

export const EDUCATION = [
  {
    school: "ESPRIT",
    degree: "Computer Engineering — Mobile Development",
    period: "2019 – 2022",
  },
  {
    school: "ISSAT Kasserine",
    degree: "National Degree in Computer Science & Multimedia",
    period: "2016 – 2019",
  },
] as const;

export const LANGUAGES = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Advanced (B2)" },
  { name: "French", level: "Intermediate (B1)" },
  { name: "German", level: "Elementary (A2)" },
] as const;
