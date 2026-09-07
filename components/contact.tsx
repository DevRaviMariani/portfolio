import { ArrowUpRight, AtSign, BriefcaseBusiness, Code2, Mail } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/lib/constants";

const links = [
  { label: "E-mail", value: "ravibrandao22@gmail.com", href: socialLinks.email, icon: Mail },
  { label: "GitHub", value: "DevRaviMariani", href: socialLinks.github, icon: Code2 },
  { label: "LinkedIn", value: "Ravi Mariani", href: socialLinks.linkedin, icon: BriefcaseBusiness },
  { label: "Instagram", value: "@devravimariani", href: socialLinks.instagram, icon: AtSign },
] as const;

export function Contact() {
  return (
    <section id="contato" className="contact-section scroll-mt-0">
      <div className="container-shell grid gap-16 lg:grid-cols-[1.1fr_.9fr] lg:items-end lg:gap-24">
        <Reveal>
          <p className="eyebrow">TEM UM PROJETO OU DESAFIO?</p>
          <h2 className="mt-7 text-[clamp(3rem,7vw,5.75rem)] font-medium leading-[.92] tracking-[-0.065em]">Vamos transformar sua ideia <span className="text-muted-foreground">em uma solução clara.</span></h2>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">Conte-me o contexto, o problema e o resultado que você procura. A primeira conversa pode começar por e-mail.</p>
          <Button asChild className="mt-9">
            <a href={socialLinks.email}>Iniciar uma conversa <ArrowUpRight className="size-4" aria-hidden="true" /></a>
          </Button>
          <p className="mt-5 font-mono text-xs text-muted-foreground">ravibrandao22@gmail.com</p>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="border-t border-border">
            {links.slice(1).map(({ label, value, href, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="group flex min-h-18 items-center justify-between border-b border-border transition-colors hover:text-accent">
                <span className="flex items-center gap-3"><Icon className="size-4 text-muted-foreground" aria-hidden="true" />{label}</span>
                <span className="flex items-center gap-2 text-sm text-muted-foreground"><span className="hidden sm:inline">{value}</span><ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" /></span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
