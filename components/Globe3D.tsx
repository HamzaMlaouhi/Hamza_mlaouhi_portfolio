"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/hooks";

const SIZE = 300;
const R = SIZE / 2;
const MERIDIANS = 8;
const PARALLELS = [-60, -30, 0, 30, 60];
// Essen, North Rhine-Westphalia
const PIN = { lat: 51.45, lon: 7.01 };

const preserve3d = { transformStyle: "preserve-3d" } as const;

/** Wireframe globe that spins in 3D, with a pin on Essen and an orbiting satellite. */
export function Globe3D({ label }: { label: string }) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className="relative mx-auto flex h-[250px] w-full items-center justify-center sm:h-[340px]" aria-hidden>
      <div className="absolute h-64 w-64 rounded-full bg-accent/20 blur-[80px]" />

      <div className="scale-[0.75] sm:scale-100" style={{ perspective: 1000 }}>
        <div className="relative" style={{ ...preserve3d, width: SIZE, height: SIZE, transform: "rotateX(-16deg) rotateZ(-8deg)" }}>
          {/* Satellite orbit */}
          <div className="absolute inset-[-40px]" style={{ ...preserve3d, transform: "rotateX(72deg)" }}>
            <motion.div
              className="absolute inset-0 rounded-full border border-dashed border-accent/30"
              animate={reducedMotion ? undefined : { rotateZ: 360 }}
              transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
            >
              <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_14px_#00c9ff]" />
            </motion.div>
          </div>

          <motion.div
            className="absolute inset-0"
            style={preserve3d}
            initial={{ rotateY: -PIN.lon }}
            animate={reducedMotion ? undefined : { rotateY: [-PIN.lon, 360 - PIN.lon] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          >
            {Array.from({ length: MERIDIANS }, (_, i) => (
              <div
                key={`m${i}`}
                className="absolute inset-0 rounded-full border border-accent/25"
                style={{ transform: `rotateY(${(i * 180) / MERIDIANS}deg)` }}
              />
            ))}
            {PARALLELS.map((lat) => {
              const r = R * Math.cos((lat * Math.PI) / 180);
              const y = -R * Math.sin((lat * Math.PI) / 180);
              return (
                <div
                  key={`p${lat}`}
                  className="absolute left-1/2 top-1/2 rounded-full border border-accent/20"
                  style={{
                    width: r * 2,
                    height: r * 2,
                    transform: `translate(-50%, -50%) translateY(${y}px) rotateX(90deg)`,
                  }}
                />
              );
            })}

            {/* Pin: rotate to longitude, tilt up to latitude, push to the surface */}
            <div
              className="absolute left-1/2 top-1/2"
              style={{
                ...preserve3d,
                transform: `rotateY(${PIN.lon}deg) rotateX(${PIN.lat}deg) translateZ(${R}px)`,
              }}
            >
              <div className="-translate-x-1/2 -translate-y-1/2" style={{ backfaceVisibility: "hidden" }}>
                <span className="absolute -inset-2 animate-ping rounded-full bg-accent/50" />
                <span className="relative block h-3 w-3 rounded-full bg-accent shadow-[0_0_16px_#00c9ff]" />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-accent/40 bg-bg-surface px-2 py-0.5 font-mono text-[11px] text-white">
                  {label}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
