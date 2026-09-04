import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { socialLinks } from "@/lib/constants";

export function Experience() {
  return (
    <section id="experiencia" className="section-space scroll-mt-16">
      <div className="container-shell">
        <Reveal><SectionHeading number="04" label="EXPERIÊNCIA" title="Experiência profissional" /></Reveal>
        <Reveal>
          <article className="grid gap-7 border-y border-border py-9 md:grid-cols-[170px_1fr] md:gap-12 md:py-12">
            <p className="font-mono text-xs text-accent">2025 — ATUAL</p>
            <div className="max-w-3xl">
              <h3 className="text-2xl font-medium leading-tight tracking-[-0.035em] md:text-[1.7rem]">Estagiário em Análise e Desenvolvimento de Sistemas e Sites <span className="text-muted-foreground">(Ambientes Web)</span></h3>
              <p className="mt-3 font-medium">Secretaria Municipal de Inovação e Tecnologia — SEMIT</p>
              <p className="mt-6 leading-relaxed text-muted-foreground">Atuação no desenvolvimento, manutenção e suporte de sites e sistemas web, principalmente com WordPress, PHP, HTML, CSS, JavaScript e bancos de dados, além de integrações, documentação técnica, suporte a usuários e apoio na implementação de soluções digitais.</p>
              <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="text-link mt-8 inline-flex items-center gap-2 text-sm font-medium">Ver trajetória completa no LinkedIn <ArrowUpRight className="size-4" aria-hidden="true" /></a>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
