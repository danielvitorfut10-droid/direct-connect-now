const WHATSAPP_URL = "https://chat.whatsapp.com/Hd2hqpYivNmLAserEQ8bGw?mode=gi_t";

const marqueeItems = [
  "🔥 PROMOÇÕES TODOS OS DIAS",
  "⚡ ACESSO LIMITADO",
  "💸 OFERTAS EXCLUSIVAS",
  "📲 DIRETO NO SEU WHATSAPP",
  "🛒 DESCONTOS REAIS",
  "🎯 SÓ QUEM ESTÁ NO GRUPO RECEBE",
];

const Index = () => {
  // Duplicamos a lista para criar loop infinito perfeito no marquee
  const loop = [...marqueeItems, ...marqueeItems];

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Topbar laranja com marquee */}
      <header className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap py-2.5 text-sm font-semibold uppercase tracking-wider sm:text-base">
          {loop.map((item, i) => (
            <span key={i} className="flex items-center gap-3">
              <span>{item}</span>
              <span aria-hidden className="text-primary-foreground/50">
                ✦
              </span>
            </span>
          ))}
        </div>
        {/* Bordas com leve fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-primary to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-primary to-transparent" />
      </header>

      {/* Hero */}
      <main className="relative flex flex-1 items-center justify-center overflow-hidden px-6 py-16">
        {/* Glow decorativo de fundo */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.6), transparent 70%)" }}
        />

        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center animate-fade-in">
          {/* Foto Circular */}
          <div className="mb-8 flex flex-col items-center">
            <img 
              src="/foto-suh.jpg.jpeg" 
              alt="Suh" 
              className="h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 rounded-full object-cover shadow-lg border-2 border-primary/50"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=200&h=200";
              }}
            />
          </div>

          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            Grupo VIP de Promoções
          </span>

          <h1 className="font-display text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
            Promos <br />
            Da <br />
            <span className="text-gradient-primary">Suh 🧡</span>
          </h1>

          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Receba as melhores ofertas direto no seu WhatsApp. Sem spam, só desconto de verdade.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="orange-border relative mt-10 w-auto min-w-[200px] h-14 inline-flex items-center justify-center gap-2.5 px-8 bg-black rounded-xl border-none text-white cursor-pointer font-black uppercase tracking-wider transition-all duration-200 sm:text-lg"
          >
            Entrar no Grupo
          </a>

        </div>
      </main>

      {/* Seção do Carrossel */}
      <section className="relative w-full overflow-hidden py-20 bg-secondary/10">
        <div className="mx-auto max-w-4xl text-center px-6 mb-12 animate-fade-in">
          <h2 className="text-3xl font-display font-bold leading-tight sm:text-4xl md:text-5xl">
            Quer pegar a próxima dessas? <br />
            <span className="text-gradient-primary mt-2 block">
              Entra no grupo
            </span>
          </h2>
        </div>

        {/* Carrossel Infinito */}
        <div className="relative flex w-full overflow-hidden py-6">
          <div className="flex w-max animate-marquee gap-4 sm:gap-6 whitespace-nowrap px-4 sm:px-6 hover:[animation-play-state:paused]">
            {/* Lista 1 */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div 
                key={item} 
                className="group relative h-[320px] w-[220px] sm:h-[400px] sm:w-[280px] shrink-0 rounded-2xl bg-secondary/40 overflow-hidden border border-border shadow-lg transition-transform duration-300 hover:scale-[1.02]"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground">
                  <svg className="w-12 h-12 mb-3 opacity-40 transition-opacity group-hover:opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm font-semibold tracking-wider uppercase opacity-60">Foto {item}</span>
                  <span className="text-xs mt-1 opacity-40 capitalize">Espaço para Imagem</span>
                </div>
              </div>
            ))}
            {/* Cópia para formar o loop perfeito */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div 
                key={`copy-${item}`} 
                className="group relative h-[320px] w-[220px] sm:h-[400px] sm:w-[280px] shrink-0 rounded-2xl bg-secondary/40 overflow-hidden border border-border shadow-lg transition-transform duration-300 hover:scale-[1.02]"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground">
                  <svg className="w-12 h-12 mb-3 opacity-40 transition-opacity group-hover:opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm font-semibold tracking-wider uppercase opacity-60">Foto {item}</span>
                  <span className="text-xs mt-1 opacity-40 capitalize">Espaço para Imagem</span>
                </div>
              </div>
            ))}
          </div>

          {/* Sombras laterais para dar ideia de continuidade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background via-background/80 to-transparent" />
        </div>

        {/* Botão de reforço embaixo do carrossel */}
        <div className="mt-14 flex justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="orange-border relative w-auto min-w-[200px] h-14 inline-flex items-center justify-center gap-2.5 px-8 bg-black rounded-xl border-none text-white cursor-pointer font-black uppercase tracking-wider transition-all duration-200 sm:text-lg"
          >
            Entrar no Grupo
          </a>
        </div>
      </section>

      {/* Footer minimalista */}
      <footer className="border-t border-border/60 px-6 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Grupo de Promoções · Acesso 100% gratuito
      </footer>
    </div>
  );
};

export default Index;
