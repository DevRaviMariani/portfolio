import { ArrowUpRight, Code2, Layers3 } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { socialLinks } from "@/lib/constants";

const technologies = ["Next.js", "React", "TypeScript", "Tailwind CSS"] as const;

export function Projects() {
  return (
    <section id="projetos" className="section-space scroll-mt-16">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            number="03"
            label="PROJETOS"
            title="Construções que documentam minha evolução."
            description="Cada projeto publicado aqui terá contexto, decisões técnicas e o que aprendi durante o processo. Este portfólio inaugura essa nova etapa."
          />
        </Reveal>

        <Reveal>
          <article className="project-feature">
            <div className="project-feature-visual" aria-hidden="true">
              <span className="project-feature-index">001</span>
              <div className="project-feature-mark">RM<span>.</span></div>
              <div className="project-feature-lines"><i /><i /><i /></div>
              <span className="project-feature-version">PORTFÓLIO / V2</span>
            </div>

            <div className="project-feature-content">
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-xs uppercase tracking-[.12em] text-accent">Projeto atual</span>
                <Layers3 className="size-5 text-muted-foreground" aria-hidden="true" />
              </div>
              <h3 className="mt-10 text-3xl font-medium tracking-[-0.045em] md:text-4xl">Portfólio profissional</h3>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">Reconstrução da minha presença profissional como um produto digital: uma experiência responsiva, acessível e preparada para receber projetos e aprendizados reais.</p>
              <ul className="mt-7 flex flex-wrap gap-2" aria-label="Tecnologias utilizadas">
                {technologies.map((technology) => <li key={technology} className="rounded-md border border-border bg-surface px-3 py-2 font-mono text-xs text-muted-foreground">{technology}</li>)}
              </ul>
              <div className="mt-9 flex flex-wrap gap-5">
                <a href={`${socialLinks.github}/portfolio`} target="_blank" rel="noreferrer" className="text-link inline-flex items-center gap-2 text-sm font-medium"><Code2 className="size-4" aria-hidden="true" /> Ver projeto</a>
                <a href={socialLinks.portfolio} target="_blank" rel="noreferrer" className="text-link inline-flex items-center gap-2 text-sm font-medium">Acessar site <ArrowUpRight className="size-4" aria-hidden="true" /></a>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
