export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-shell grid gap-6 py-9 text-sm text-muted-foreground sm:grid-cols-3 sm:items-center">
        <a href="#inicio" className="text-lg font-semibold tracking-[-0.05em] text-foreground" aria-label="Voltar ao início">RM<span className="text-accent">.</span></a>
        <p className="sm:text-center">Ravi Mariani © 2026</p>
        <p className="sm:text-right">Salvador, Bahia — Brasil</p>
        <p className="font-mono text-[11px] sm:col-span-3 sm:text-center">Construindo, aprendendo e evoluindo — uma versão de cada vez.</p>
      </div>
    </footer>
  );
}
