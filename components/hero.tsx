import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
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
          Transformo ideias e problemas <span className="text-muted-foreground">em soluções digitais.</span>
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          Desenvolvimento web, sistemas e exploração de soluções com Inteligência Artificial.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <a href="#sobre">Conheça minha trajetória <ArrowDown className="size-4" aria-hidden="true" /></a>
          </Button>
          <Button asChild variant="outline">
            <a href={socialLinks.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight className="size-4" aria-hidden="true" /></a>
          </Button>
        </div>
        <p className="mt-10 flex items-center gap-2 font-mono text-xs uppercase tracking-[.12em] text-muted-foreground">
          <MapPin className="size-4 text-accent" aria-hidden="true" /> Salvador, Bahia — Brasil
        </p>
      </Reveal>
      <Reveal delay={0.08} className="mx-auto w-full max-w-xl lg:max-w-none">
        <HeroVisual />
      </Reveal>
    </section>
  );
}
