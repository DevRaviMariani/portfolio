import { cn } from "@/lib/utils";

export function SectionHeading({ number, label, title, description, className }: { number: string; label: string; title: string; description?: string; className?: string }) {
  return (
    <header className={cn("mb-12 max-w-3xl md:mb-16", className)}>
      <p className="section-label"><span>{number}</span> / {label}</p>
      <h2 className="mt-5 text-4xl font-medium tracking-[-0.045em] text-balance md:text-5xl lg:text-[3.25rem]">{title}</h2>
      {description ? <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{description}</p> : null}
    </header>
  );
}
