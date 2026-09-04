import { ArrowUpRight, Braces, CodeXml, Sparkles } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { expertise } from "@/lib/constants";
import { cn } from "@/lib/utils";

const icons = [CodeXml, Braces, Sparkles];

export function Expertise() {
  return (
    <section id="atuacao" className="section-space scroll-mt-16 bg-surface">
      <div className="container-shell">
        <Reveal><SectionHeading number="02" label="ATUAÇÃO" title="Tecnologia aplicada a produtos, sistemas e experiências." description="Áreas que orientam minha prática e o próximo ciclo da minha evolução profissional." /></Reveal>
        <div className="grid gap-4 lg:grid-cols-12">
          {expertise.map((item, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={item.number} className={cn("h-full", item.className)} delay={index * 0.05}>
                <article className={cn("expertise-card group", index === 2 && "lg:grid lg:grid-cols-[1fr_.8fr] lg:gap-14")}>
                  <div>
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-xs text-accent">{item.number}</span>
                      <Icon className="size-5 text-muted-foreground transition-colors group-hover:text-accent" aria-hidden="true" />
                    </div>
                    <h3 className="mt-14 text-2xl font-medium tracking-[-0.035em]">{item.title}</h3>
                    <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                  <div className={cn("mt-8 flex flex-wrap content-end gap-x-5 gap-y-3 border-t border-border pt-6", index === 2 && "lg:mt-0 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0")}>
                    {item.technologies.map((technology) => <span key={technology} className="font-mono text-xs text-muted-foreground">{technology}</span>)}
                  </div>
                  {index < 2 ? <ArrowUpRight className="absolute bottom-7 right-7 size-4 text-muted-foreground opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" aria-hidden="true" /> : null}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
