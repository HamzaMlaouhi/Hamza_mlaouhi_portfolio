"use client";

import { SITE } from "@/lib/constants";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-white/10 bg-[#0A0F1E] py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="font-mono text-xs text-text-muted">
          © {new Date().getFullYear()} {SITE.name}. {t.footer.builtWith}
        </p>
        <p className="font-mono text-xs text-text-muted/60">
          {t.footer.portfolio}
        </p>
      </div>
    </footer>
  );
}
