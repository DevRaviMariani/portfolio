import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { stack } from "@/lib/constants";

export function Stack() {
  return (
    <section id="stack" className="section-space scroll-mt-16 border-y border-border">
      <div className="container-shell">
        <Reveal><SectionHeading number="03" label="STACK" title="Tecnologias & ferramentas" description="Um repertório em expansão, organizado pelo papel que cada tecnologia desempenha na construção de uma solução." /></Reveal>
        <div className="border-t border-border">
          {stack.map((group, index) => (
            <Reveal key={group.category} delay={index * 0.035} className="stack-row">
              <span className="font-mono text-xs uppercase tracking-[.12em] text-muted-foreground">{group.category}</span>
              <div className="flex flex-wrap gap-x-7 gap-y-2">
                {group.technologies.map((technology) => <span key={technology} className="text-lg tracking-[-0.02em] sm:text-xl">{technology}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
