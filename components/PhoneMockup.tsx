"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { usePrefersReducedMotion } from "@/lib/hooks";
import { SITE } from "@/lib/constants";
import { useI18n } from "@/lib/i18n";

export function PhoneMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const { t } = useI18n();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rawRotateY = useTransform(scrollYProgress, [0, 1], [-8, 12]);
  const rawRotateX = useTransform(scrollYProgress, [0, 1], [4, -6]);
  const rawY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  const rotateY = useSpring(rawRotateY, { stiffness: 110, damping: 24, mass: 0.4 });
  const rotateX = useSpring(rawRotateX, { stiffness: 110, damping: 24, mass: 0.4 });
  const y = useSpring(rawY, { stiffness: 110, damping: 24, mass: 0.4 });

  return (
    <div ref={ref} className="relative flex justify-center lg:justify-end">
      {/* Glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[420px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-[3rem] bg-accent/20 blur-[80px]"
        animate={reducedMotion ? undefined : { opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />

      <motion.div
        style={
          reducedMotion
            ? undefined
            : { rotateY, rotateX, y, perspective: 1200 }
        }
        className="relative z-10"
      >
        <motion.div
          animate={
            reducedMotion
              ? undefined
              : {
                  y: [0, -14, 0],
                  rotateZ: [-1.5, 1.5, -1.5],
                }
          }
          transition={
            reducedMotion
              ? undefined
              : {
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  rotateZ: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                }
          }
        >
          {/* Device frame */}
          <motion.div
            className="relative w-[260px] rounded-[2.75rem] border-[3px] border-[#2a3f55] bg-[#0a1220] p-2 shadow-phone-glow sm:w-[280px]"
            style={{ transformStyle: "preserve-3d" }}
          >
          {/* Side buttons */}
          <motion.div
            className="absolute -left-[2px] top-24 h-10 w-[3px] rounded-l bg-[#3d5268]"
            aria-hidden
          />
          <motion.div
            className="absolute -left-[2px] top-36 h-14 w-[3px] rounded-l bg-[#3d5268]"
            aria-hidden
          />

          {/* Notch / Dynamic Island */}
          <motion.div
            className="absolute left-1/2 top-4 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-black"
            aria-hidden
          />

          {/* Screen */}
          <motion.div className="relative overflow-hidden rounded-[2.25rem] bg-gradient-to-b from-[#0D1B2B] to-[#004F90]">
            {/* Status bar */}
            <motion.div className="flex items-center justify-between px-6 pt-3 text-[10px] font-mono text-white/70">
              <span>9:41</span>
              <div className="flex gap-1" aria-hidden>
                <span className="h-2 w-2 rounded-sm bg-white/80" />
                <span className="h-2 w-3 rounded-sm bg-white/80" />
                <span className="h-2 w-4 rounded-sm bg-accent" />
              </div>
            </motion.div>

            {/* App UI mock */}
            <motion.div className="space-y-3 p-4 pb-8">
              <motion.div className="relative h-36 overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/hamza-profile.png"
                  alt="Hamza Mlaouhi profile photo"
                  fill
                  className="object-cover object-[center_18%]"
                  sizes="280px"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0D1B2B]/70 via-[#0D1B2B]/10 to-transparent" />
                <div className="absolute inset-x-2 bottom-2 rounded-lg bg-black/35 px-2 py-1 backdrop-blur-[2px]">
                  <p className="truncate font-sora text-[10px] font-semibold text-white">
                    {SITE.name}
                  </p>
                  <p className="truncate font-mono text-[8px] text-accent">
                    {t.hero.role}
                  </p>
                </div>
              </motion.div>
              <motion.div className="grid grid-cols-2 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="h-16 rounded-xl bg-white/10 backdrop-blur"
                  />
                ))}
              </motion.div>
              <motion.div className="space-y-2">
                <motion.div className="h-3 w-3/4 rounded bg-white/20" />
                <motion.div className="h-3 w-1/2 rounded bg-white/15" />
              </motion.div>

              <p className="pt-2 text-center font-mono text-[9px] text-white/40">
                Flutter · Android · iOS
              </p>
            </motion.div>

            {/* Home indicator */}
            <motion.div
              className="absolute bottom-2 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-white/30"
              aria-hidden
            />
          </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating app icons */}
        {!reducedMotion && (
          <>
            <FloatingBadge
              className="absolute -left-8 top-16"
              label="Fl"
              delay={0}
            />
            <FloatingBadge
              className="absolute -right-6 top-32"
              label="iOS"
              delay={0.5}
            />
            <FloatingBadge
              className="absolute -left-4 bottom-20"
              label="Kt"
              delay={1}
            />
          </>
        )}
      </motion.div>
    </div>
  );
}

function FloatingBadge({
  className,
  label,
  delay,
}: {
  className: string;
  label: string;
  delay: number;
}) {
  return (
    <motion.div
      className={`${className} flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-bg-surface/90 font-mono text-xs font-bold text-accent shadow-lg backdrop-blur`}
      animate={{ y: [0, -8, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
      aria-hidden
    >
      {label}
    </motion.div>
  );
}
