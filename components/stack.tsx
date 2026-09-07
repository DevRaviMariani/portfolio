import { Braces, BrainCircuit, GraduationCap, MessageSquareText, Sparkles } from "lucide-react";
import {
  SiBootstrap,
  SiCss,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiOpenjdk,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiWordpress,
} from "react-icons/si";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { stack } from "@/lib/constants";

const technologyIcons = {
  HTML: SiHtml5,
  CSS: SiCss,
  JavaScript: SiJavascript,
  Bootstrap: SiBootstrap,
  PHP: SiPhp,
  Laravel: SiLaravel,
  Java: SiOpenjdk,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  WordPress: SiWordpress,
  APIs: Braces,
  Python: SiPython,
  LLMs: Sparkles,
  "Engenharia de prompts": MessageSquareText,
  AIED: GraduationCap,
  "Sistemas de IA": BrainCircuit,
  "Ambiente web": Braces,
  Git: SiGit,
  GitHub: SiGithub,
  Figma: SiFigma,
} as const;

export function Stack() {
  return (
    <section id="stack" className="section-space scroll-mt-16 border-y border-border">
      <div className="container-shell">
        <Reveal><SectionHeading number="04" label="STACK" title="Tecnologias & ferramentas" description="Um repertório em expansão, organizado pelo papel que cada tecnologia desempenha na construção de uma solução." /></Reveal>
        <div className="border-t border-border">
          {stack.map((group, index) => (
            <Reveal key={group.category} delay={index * 0.035} className="stack-row">
              <span className="font-mono text-xs uppercase tracking-[.12em] text-muted-foreground">{group.category}</span>
              <div className="flex flex-wrap gap-3">
                {group.technologies.map((technology) => {
                  const Icon = technologyIcons[technology as keyof typeof technologyIcons];
                  return (
                    <span key={technology} className="technology-item">
                      <Icon className="size-5" aria-hidden="true" />
                      <span>{technology}</span>
                    </span>
                  );
                })}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
