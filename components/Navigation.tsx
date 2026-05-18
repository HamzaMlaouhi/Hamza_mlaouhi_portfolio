"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/constants";
import { useActiveSection, useScrolled } from "@/lib/hooks";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const NAV_LINK_HREFS = [
  "#hero",
  "#about",
  "#skills",
  "#projects",
  "#experience",
  "#education",
  "#contact",
] as const;

const SECTION_IDS = NAV_LINK_HREFS.map((href) => href.replace("#", ""));

export function Navigation() {
  const scrolled = useScrolled();
  const active = useActiveSection(SECTION_IDS);
  const [open, setOpen] = useState(false);
  const { locale, setLocale, t } = useI18n();

  const navLinks = [
    { href: "#hero", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#projects", label: t.nav.projects },
    { href: "#experience", label: t.nav.experience },
    { href: "#education", label: t.nav.education },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass-nav shadow-lg shadow-black/10" : "bg-transparent"
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="#hero"
          className="font-sora text-lg font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
        >
          <span className="text-gradient">{SITE.name.split(" ")[0]}</span>
          <span className="text-white/80">.</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex" role="list">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-3 py-2 font-mono text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                    isActive
                      ? "text-white"
                      : "text-text-muted hover:text-white"
                  )}
                  aria-current={isActive ? "true" : undefined}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <div className="rounded-full border border-white/15 bg-white/5 p-1">
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={cn(
                "rounded-full px-2 py-1 font-mono text-[10px] transition-colors",
                locale === "en"
                  ? "bg-white/20 text-white"
                  : "text-text-muted hover:text-white"
              )}
              aria-label={`${t.nav.language}: English`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLocale("fr")}
              className={cn(
                "rounded-full px-2 py-1 font-mono text-[10px] transition-colors",
                locale === "fr"
                  ? "bg-white/20 text-white"
                  : "text-text-muted hover:text-white"
              )}
              aria-label={`${t.nav.language}: Francais`}
            >
              FR
            </button>
          </div>
          <motion.div>
            <Button asChild size="sm">
              <a href="#contact">{t.nav.hireMe}</a>
            </Button>
          </motion.div>
        </div>

        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              className="rounded-lg p-2 text-white md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Open navigation menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent aria-describedby={undefined}>
            <div className="mt-8 flex flex-col gap-6">
              <p className="font-sora text-xl font-bold text-white">
                {SITE.name}
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setLocale("en")}
                  className={cn(
                    "rounded-full border border-white/20 px-3 py-1.5 font-mono text-xs transition-colors",
                    locale === "en"
                      ? "bg-white/20 text-white"
                      : "text-text-muted hover:text-white"
                  )}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLocale("fr")}
                  className={cn(
                    "rounded-full border border-white/20 px-3 py-1.5 font-mono text-xs transition-colors",
                    locale === "fr"
                      ? "bg-white/20 text-white"
                      : "text-text-muted hover:text-white"
                  )}
                >
                  FR
                </button>
              </div>
              <ul className="flex flex-col gap-2" role="list">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <SheetClose asChild>
                      <a
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-lg px-3 py-3 font-mono text-sm text-text-on-dark transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      >
                        {link.label}
                      </a>
                    </SheetClose>
                  </motion.li>
                ))}
              </ul>
              <SheetClose asChild>
                <Button asChild className="w-full">
                  <a href="#contact">{t.nav.hireMe}</a>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
