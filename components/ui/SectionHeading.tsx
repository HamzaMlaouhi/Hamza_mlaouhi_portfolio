import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  dark?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
  dark = true,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 max-w-2xl", className)}>
      {eyebrow && (
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          <span className="text-white/30">{"// "}</span>
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-sora text-3xl font-bold tracking-tight sm:text-4xl",
          dark ? "text-white" : "text-[#0D1B2B]"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            dark ? "text-text-on-dark" : "text-[#4A6B8A]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

