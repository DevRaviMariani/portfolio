"use client";

import { Code2, ExternalLink, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation, socialLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled && "border-b border-border/80 bg-background/82 backdrop-blur-xl")}>
      <nav className="container-shell flex h-18 items-center justify-between" aria-label="Navegação principal">
        <a href="#inicio" className="relative z-50 text-xl font-semibold tracking-[-0.05em]" aria-label="Ravi Mariani — início">
          RM<span className="text-accent">.</span><span className="ml-3 hidden border-l border-border pl-3 text-xs font-medium tracking-normal text-muted-foreground sm:inline">Ravi Mariani</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">{item.label}</a>
          ))}
        </div>

        <div className="relative z-50 flex items-center gap-1">
          <Button asChild variant="ghost" size="icon" className="hidden sm:inline-flex">
            <a href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub de Ravi Mariani">
              <Code2 aria-hidden="true" />
            </a>
          </Button>
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>

        <div id="mobile-menu" className={cn("fixed inset-0 z-40 flex translate-x-full flex-col bg-background px-5 pb-8 pt-28 transition-transform duration-300 lg:hidden", open && "translate-x-0")} aria-hidden={!open}>
          <div className="flex flex-col border-t border-border">
            {navigation.map((item, index) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1} className="group flex min-h-16 items-center justify-between border-b border-border text-xl font-medium">
                <span><span className="mr-4 font-mono text-xs text-accent">0{index + 1}</span>{item.label}</span>
                <span aria-hidden="true" className="text-muted-foreground transition-transform group-hover:translate-x-1">→</span>
              </a>
            ))}
          </div>
          <a href={socialLinks.github} target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1} className="mt-auto flex min-h-12 items-center gap-2 text-sm text-muted-foreground">
            <Code2 className="size-4" aria-hidden="true" /> GitHub <ExternalLink className="size-3.5" aria-hidden="true" />
          </a>
        </div>
      </nav>
    </header>
  );
}
