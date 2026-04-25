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
              src="/foto-suh.jpg" 
              alt="Suh" 
              className="h-28 w-28 rounded-full object-cover shadow-lg border-2 border-primary/50"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=200&h=200";
              }}
            />
            <span className="mt-3 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
              Promos da Suh
            </span>
          </div>

          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            Grupo VIP de Promoções
          </span>

          <h1 className="font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
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
            className="orange-border group mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-black px-10 py-5 text-base font-bold uppercase tracking-wider text-white transition-transform duration-300 hover:scale-[1.04] sm:text-lg"
          >
            Entrar no Grupo
            <svg
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M5 12h14" />
              <path d="m13 5 7 7-7 7" />
            </svg>
          </a>

          {/* Reforço CTA */}
          <div className="mt-16 flex flex-col items-center">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground">
              Não fica de fora
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center rounded-full border border-primary/40 bg-transparent px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              Quero Entrar
            </a>
          </div>
        </div>
      </main>

      {/* Footer minimalista */}
      <footer className="border-t border-border/60 px-6 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Grupo de Promoções · Acesso 100% gratuito
      </footer>
    </div>
  );
};

export default Index;
