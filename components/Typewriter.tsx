"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/hooks";

interface TypewriterProps {
  words: readonly string[];
  className?: string;
}

export function Typewriter({ words, className }: TypewriterProps) {
  const reducedMotion = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reducedMotion) {
      setDisplay(words.join(" · "));
      return;
    }

    const word = words[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && display.length < word.length) {
      timeout = setTimeout(
        () => setDisplay(word.slice(0, display.length + 1)),
        80
      );
    } else if (!deleting && display.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && display.length > 0) {
      timeout = setTimeout(
        () => setDisplay(word.slice(0, display.length - 1)),
        40
      );
    } else {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [display, deleting, index, reducedMotion, words]);

  return (
    <span className={className} aria-live="polite" aria-label="Technologies">
      <span className="text-gradient font-mono">{display}</span>
      <span
        className="ml-0.5 inline-block h-[1em] w-[2px] animate-pulse bg-accent align-middle"
        aria-hidden
      />
    </span>
  );
}
