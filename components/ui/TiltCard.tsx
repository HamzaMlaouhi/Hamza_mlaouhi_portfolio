"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/hooks";
import { cn } from "@/lib/utils";

/** Card that tilts in 3D toward the mouse, with a light glare following the pointer. */
export function TiltCard({
  children,
  className,
  max = 7,
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
}) {
  const reducedMotion = usePrefersReducedMotion();
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const spring = { stiffness: 220, damping: 22 };
  const rotateY = useSpring(useTransform(x, [0, 1], [-max, max]), spring);
  const rotateX = useSpring(useTransform(y, [0, 1], [max, -max]), spring);
  const glareX = useTransform(x, (v) => `${v * 100}%`);
  const glareY = useTransform(y, (v) => `${v * 100}%`);
  const glare = useMotionTemplate`radial-gradient(420px circle at ${glareX} ${glareY}, rgba(0, 201, 255, 0.14), transparent 60%)`;

  return (
    <motion.div
      onPointerMove={(e) => {
        // Touch devices keep the card flat so scrolling stays smooth.
        if (reducedMotion || e.pointerType !== "mouse") return;
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width);
        y.set((e.clientY - rect.top) / rect.height);
      }}
      onPointerLeave={() => {
        x.set(0.5);
        y.set(0.5);
      }}
      style={
        reducedMotion
          ? undefined
          : { rotateX, rotateY, transformPerspective: 1100, transformStyle: "preserve-3d" }
      }
      className={cn("group relative transition-colors hover:border-accent/40", className)}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: glare }}
        aria-hidden
      />
      {children}
    </motion.div>
  );
}
