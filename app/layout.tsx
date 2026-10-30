import type { Metadata } from "next";
import { Sora, DM_Mono } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hamza Mlaouhi | Senior Mobile Engineer",
  description:
    "Senior Mobile Engineer with 5+ years building Flutter, Kotlin, Swift, iOS, and Android apps. Portfolio showcasing mobile projects and experience.",
  keywords: [
    "Hamza Mlaouhi",
    "mobile engineer",
    "Flutter",
    "Kotlin",
    "iOS",
    "Android",
    "Germany",
    "Essen",
  ],
  authors: [{ name: "Hamza Mlaouhi" }],
  openGraph: {
    title: "Hamza Mlaouhi | Senior Mobile Engineer",
    description:
      "Senior Mobile Engineer portfolio — Flutter, native Android/iOS, and store deployments.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamza Mlaouhi | Senior Mobile Engineer",
    description:
      "Senior Mobile Engineer portfolio — Flutter, native Android/iOS, and store deployments.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${dmMono.variable} scroll-smooth`}
    >
      <body className="font-sora">
        <TooltipProvider delayDuration={200}>
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
