import { GraduationCap } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const education = [
  { institution: "SENAI", course: "Técnico em Desenvolvimento de Sistemas", status: "Concluído" },
  { institution: "UCSAL", course: "Análise e Desenvolvimento de Sistemas", status: "Em andamento" },
] as const;

export function About() {
  return (
    <section id="sobre" className="section-space scroll-mt-16 border-t border-border">
      <div className="container-shell">
        <Reveal><SectionHeading number="01" label="SOBRE" title="Aprendizado técnico com aplicação no mundo real." /></Reveal>
        <div className="grid gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-24">
          <Reveal className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>Sou Técnico em Desenvolvimento de Sistemas pelo SENAI e atualmente curso Análise e Desenvolvimento de Sistemas na Universidade Católica do Salvador (UCSAL).</p>
            <p>Atuo com desenvolvimento de software na Secretaria Municipal de Inovação e Tecnologia (SEMIT), onde tenho contato prático com desenvolvimento e manutenção de aplicações web, WordPress, PHP, JavaScript, bancos de dados e diferentes ferramentas do ecossistema web.</p>
            <p>Tenho especial interesse em Inteligência Artificial, automação e desenvolvimento de produtos digitais, buscando transformar aprendizado técnico e problemas reais em soluções que possam ser construídas, testadas e evoluídas.</p>
          </Reveal>
          <div className="border-t border-border">
            {education.map((item, index) => (
              <Reveal key={item.institution} delay={index * 0.06} className="grid gap-4 border-b border-border py-7 sm:grid-cols-[120px_1fr_auto] sm:items-center">
                <div className="flex items-center gap-3"><GraduationCap className="size-4 text-accent" aria-hidden="true" /><strong className="font-mono text-sm">{item.institution}</strong></div>
                <p className="text-sm leading-relaxed">{item.course}</p>
                <span className="font-mono text-xs text-muted-foreground">{item.status}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
