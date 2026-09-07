export function HeroVisual() {
  return (
    <aside className="hero-visual" aria-label="Resumo profissional atual">
      <div className="hero-grid" />
      <div className="hero-panel">
        <div className="hero-panel-head">
          <span>PERFIL / 2026</span>
          <span className="hero-status"><i /> EM EVOLUÇÃO</span>
        </div>

        <div className="hero-panel-mark" aria-hidden="true">RM<span>.</span></div>
        <p className="hero-panel-statement">Software construído com clareza, contexto e evolução contínua.</p>

        <dl className="hero-panel-list">
          <div>
            <dt>ATUAÇÃO ATUAL</dt>
            <dd>Sites e sistemas na SEMIT</dd>
          </div>
          <div>
            <dt>FORMAÇÃO</dt>
            <dd>ADS — UCSAL · 3/5</dd>
          </div>
          <div>
            <dt>INTERESSES</dt>
            <dd>AIED · Sistemas de IA · Ambiente web</dd>
          </div>
        </dl>

        <div className="hero-panel-foot" aria-hidden="true">
          <span>APRENDER</span><i /><span>CONSTRUIR</span><i /><span>EVOLUIR</span>
        </div>
      </div>
    </aside>
  );
}
