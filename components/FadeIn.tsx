"use client";

import { motion, type Variants } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/hooks";
import { cn } from "@/lib/utils";

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 40, rotateX: 18, transformPerspective: 1000 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article";
}

export function FadeIn({
  children,
  className,
  delay = 0,
  as = "div",
}: FadeInProps) {
  const reducedMotion = usePrefersReducedMotion();
  const Component = motion[as];

  if (reducedMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0, y: 40, rotateX: 18, transformPerspective: 1000 },
        visible: {
          opacity: 1,
          y: 0,
          rotateX: 0,
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={cn(className)}
    >
      {children}
    </Component>
  );
}
