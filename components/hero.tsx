import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroVisual } from "@/components/hero-visual";
import { Reveal } from "@/components/reveal";
import { socialLinks } from "@/lib/constants";

export function Hero() {
  return (
    <section id="inicio" className="container-shell grid min-h-svh scroll-mt-20 items-center gap-14 pb-16 pt-28 lg:grid-cols-[1.08fr_.92fr] lg:gap-20 lg:py-28">
      <Reveal className="max-w-3xl">
        <p className="eyebrow">DESENVOLVEDOR DE SOFTWARE</p>
        <h1 className="mt-7 text-[clamp(2.75rem,7vw,4.75rem)] font-medium leading-[.98] tracking-[-0.06em] text-balance">
          Ravi Mariani<span className="text-accent">.</span>
        </h1>
        <p className="mt-7 max-w-2xl text-[clamp(1.5rem,3vw,2.1rem)] font-medium leading-tight tracking-[-0.035em]">
          Desenvolvimento web e sistemas <span className="text-muted-foreground">com visão de produto.</span>
        </p>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Construo e evoluo soluções digitais enquanto aprofundo minha prática em engenharia de software e sistemas de Inteligência Artificial aplicados à educação e ao ambiente web.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <a href="#sobre">Conheça minha trajetória <ArrowDown className="size-4" aria-hidden="true" /></a>
          </Button>
          <Button asChild variant="outline">
            <a href={socialLinks.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight className="size-4" aria-hidden="true" /></a>
          </Button>
        </div>
        <dl className="mt-10 grid max-w-2xl gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
          <div className="bg-background p-4 sm:p-5">
            <dt className="font-mono text-xs uppercase tracking-[.12em] text-accent">Para oportunidades</dt>
            <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">Experiência, formação e repertório técnico em uma leitura direta.</dd>
          </div>
          <div className="bg-background p-4 sm:p-5">
            <dt className="font-mono text-xs uppercase tracking-[.12em] text-accent">Para projetos</dt>
            <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">Capacidade de entender problemas e construir soluções para a web.</dd>
          </div>
        </dl>
      </Reveal>
      <Reveal delay={0.08} className="mx-auto w-full max-w-xl lg:max-w-none">
        <HeroVisual />
      </Reveal>
    </section>
  );
}
