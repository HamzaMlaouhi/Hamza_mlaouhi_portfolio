"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { CheckCircle2, Rocket } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/hooks";
import { SITE } from "@/lib/constants";
import { useI18n } from "@/lib/i18n";

const W = 270;
const H = 550;
const DEPTH = 18;
// Stacked rounded slices give the body real thickness with rounded corners.
const SLICES = 9;
const ORBIT_RADIUS = 215;
const ORBIT = ["Flutter", "Swift", "Kotlin", "React Native", "Firebase", "CI/CD"];

const APPS = [
  { name: "Tiraz", tag: "Flutter · NestJS", color: "from-[#7c3aed] to-[#db2777]" },
  { name: "Eduba", tag: "React Native", color: "from-[#059669] to-[#0ea5e9]" },
  { name: "MawadOnline", tag: "Flutter · B2B", color: "from-[#f59e0b] to-[#ef4444]" },
];

const preserve3d = { transformStyle: "preserve-3d" } as const;
const face = { backfaceVisibility: "hidden" } as const;

export function PhoneMockup() {
  const reducedMotion = usePrefersReducedMotion();
  const { t } = useI18n();
  const [spins, setSpins] = useState(0);

  // Pointer anywhere on the page tilts the phone.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const spring = { stiffness: 90, damping: 18, mass: 0.6 };
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-30, 30]), spring);
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [16, -16]), spring);

  useEffect(() => {
    if (reducedMotion) return;
    const onMove = (e: PointerEvent) => {
      px.set(e.clientX / window.innerWidth - 0.5);
      py.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reducedMotion, px, py]);

  return (
    <div
      className="relative flex h-[420px] w-full items-center justify-center sm:h-[600px] lg:justify-end"
      style={{ perspective: 1400 }}
    >
      <div
        className="absolute left-1/2 top-1/2 h-[420px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-[3rem] bg-accent/25 blur-[90px] lg:left-auto lg:right-12 lg:translate-x-0"
        aria-hidden
      />

      <div className="scale-[0.7] sm:scale-90 lg:mr-12 lg:scale-100" style={preserve3d}>
        <motion.div
          className="relative"
          style={reducedMotion ? preserve3d : { ...preserve3d, rotateX, rotateY }}
        >
          {/* Tech stack orbiting the device */}
          <motion.div
            className="absolute left-1/2 top-1/2"
            style={preserve3d}
            animate={reducedMotion ? undefined : { rotateY: 360 }}
            transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
            aria-hidden
          >
            {ORBIT.map((label, i) => (
              <span
                key={label}
                className="absolute whitespace-nowrap rounded-full border border-accent/30 bg-bg-surface px-3 py-1.5 font-mono text-xs font-medium text-accent shadow-[0_0_24px_rgba(0,201,255,0.25)]"
                style={{
                  ...face,
                  transform: `rotateY(${(i * 360) / ORBIT.length}deg) translateZ(${ORBIT_RADIUS}px) translate(-50%, -50%) translateY(${((i % 3) - 1) * 150}px)`,
                }}
              >
                {label}
              </span>
            ))}
          </motion.div>

          {/* Floating CI / release cards sit in front of the phone */}
          <FloatingCard
            className="-left-28 top-24"
            z={110}
            icon={<CheckCircle2 className="h-4 w-4 text-emerald-400" aria-hidden />}
            title="Build #482 passed"
            subtitle="iOS · Android · 4m 12s"
            delay={0}
            animate={!reducedMotion}
          />
          <FloatingCard
            className="-right-24 bottom-28"
            z={80}
            icon={<Rocket className="h-4 w-4 text-accent" aria-hidden />}
            title="v2.4.0 released"
            subtitle="App Store · Google Play"
            delay={1.2}
            animate={!reducedMotion}
          />

          {/* Idle sway */}
          <motion.div
            style={preserve3d}
            animate={reducedMotion ? undefined : { rotateY: [-12, 12, -12], y: [0, -14, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Tap to spin */}
            <motion.div
              onClick={() => setSpins((s) => s + 1)}
              title="Tap to spin"
              className="relative cursor-pointer"
              style={{ ...preserve3d, width: W, height: H }}
              animate={{ rotateY: spins * 360 }}
              transition={{ type: "spring", stiffness: 40, damping: 11 }}
            >
              {Array.from({ length: SLICES }, (_, i) => (
                <div
                  key={i}
                  className="absolute inset-0 rounded-[2.75rem]"
                  style={{
                    background: `hsl(210 28% ${13 + i * 2}%)`,
                    transform: `translateZ(${-DEPTH / 2 + (i * DEPTH) / (SLICES - 1)}px)`,
                  }}
                  aria-hidden
                />
              ))}

              <PhoneBack />
              <PhoneFront role={t.hero.role} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

function PhoneFront({ role }: { role: string }) {
  return (
    <div
      className="absolute inset-0 rounded-[2.75rem] border-[3px] border-[#2a3f55] bg-[#0a1220] p-2 shadow-phone-glow"
      style={{ ...face, transform: `translateZ(${DEPTH / 2 + 0.5}px)` }}
    >
      <div
        className="absolute left-1/2 top-4 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-black"
        aria-hidden
      />

      <div className="relative h-full overflow-hidden rounded-[2.25rem] bg-gradient-to-b from-[#0D1B2B] to-[#004F90]">
        <div className="flex items-center justify-between px-6 pt-3 font-mono text-[10px] text-white/70">
          <span>9:41</span>
          <div className="flex gap-1" aria-hidden>
            <span className="h-2 w-2 rounded-sm bg-white/80" />
            <span className="h-2 w-3 rounded-sm bg-white/80" />
            <span className="h-2 w-4 rounded-sm bg-accent" />
          </div>
        </div>

        <div className="space-y-3 p-4 pt-6">
          <div className="relative h-36 overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/hamza-profile.png"
              alt="Hamza Mlaouhi profile photo"
              fill
              className="object-cover object-[center_18%]"
              sizes="270px"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0D1B2B]/70 via-[#0D1B2B]/10 to-transparent" />
            <div className="absolute inset-x-2 bottom-2 rounded-lg bg-black/35 px-2 py-1 backdrop-blur-[2px]">
              <p className="truncate font-sora text-[10px] font-semibold text-white">
                {SITE.name}
              </p>
              <p className="truncate font-mono text-[8px] text-accent">{role}</p>
            </div>
          </div>

          <p className="px-1 font-mono text-[9px] uppercase tracking-widest text-white/50">
            Shipped
          </p>
          <ul className="space-y-2" aria-hidden>
            {APPS.map((app) => (
              <li
                key={app.name}
                className="flex items-center gap-3 rounded-xl bg-white/10 p-2"
              >
                <span className={`h-8 w-8 shrink-0 rounded-[10px] bg-gradient-to-br ${app.color}`} />
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[11px] font-semibold text-white">
                    {app.name}
                  </span>
                  <span className="block truncate font-mono text-[8px] text-white/60">
                    {app.tag}
                  </span>
                </span>
                <span className="rounded-full bg-emerald-400/20 px-2 py-0.5 font-mono text-[8px] text-emerald-300">
                  LIVE
                </span>
              </li>
            ))}
          </ul>

          <div className="rounded-xl bg-black/25 p-2.5">
            <div className="flex justify-between font-mono text-[8px] text-white/60">
              <span>release build</span>
              <span className="text-accent">fastlane</span>
            </div>
            <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div className="h-full origin-left animate-build rounded-full bg-gradient-to-r from-primary-light to-accent" />
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-2 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-white/30"
          aria-hidden
        />
      </div>
    </div>
  );
}

function PhoneBack() {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center rounded-[2.75rem] border-[3px] border-[#2a3f55] bg-gradient-to-br from-[#1c2a3a] via-[#0d1b2b] to-[#004f90]"
      style={{ ...face, transform: `rotateY(180deg) translateZ(${DEPTH / 2 + 0.5}px)` }}
      aria-hidden
    >
      <div className="absolute left-5 top-5 grid h-24 w-24 grid-cols-2 gap-2 rounded-3xl bg-black/40 p-3">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="rounded-full border-2 border-[#2a3f55] bg-[radial-gradient(circle_at_35%_35%,#3b82f6,#05080f_60%)]"
          />
        ))}
      </div>
      <span className="font-sora text-4xl font-bold text-white/80">
        H<span className="text-accent">.</span>M
      </span>
    </div>
  );
}

function FloatingCard({
  className,
  z,
  icon,
  title,
  subtitle,
  delay,
  animate,
}: {
  className: string;
  z: number;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  delay: number;
  animate: boolean;
}) {
  return (
    <div
      className={`absolute z-10 ${className}`}
      style={{ ...preserve3d, transform: `translateZ(${z}px)` }}
      aria-hidden
    >
      <motion.div
        className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-bg-surface px-3.5 py-2.5 shadow-[0_20px_40px_rgba(0,0,0,0.45)]"
        animate={animate ? { y: [0, -10, 0] } : undefined}
        transition={{ duration: 4, repeat: Infinity, delay, ease: "easeInOut" }}
      >
        {icon}
        <span>
          <span className="block whitespace-nowrap text-xs font-semibold text-white">{title}</span>
          <span className="block whitespace-nowrap font-mono text-[10px] text-text-muted">
            {subtitle}
          </span>
        </span>
      </motion.div>
    </div>
  );
}
