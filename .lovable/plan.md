## Landing Page – Grupo de WhatsApp (Minimalista)

Página única, focada 100% em conversão para entrada no grupo do WhatsApp.

**Link de destino:** `https://chat.whatsapp.com/Hd2hqpYivNmLAserEQ8bGw?mode=gi_t` (todos os botões)

---

### Estrutura

```text
┌─────────────────────────────────────────────┐
│  🔥 PROMOÇÕES TODOS OS DIAS  ⚡ ACESSO ...  │  ← Faixa laranja + marquee
├─────────────────────────────────────────────┤
│                                             │
│                                             │
│       ENTRE NO GRUPO DE                     │
│       PROMOÇÕES AGORA                       │
│                                             │
│    Receba as melhores ofertas direto        │
│         no seu WhatsApp                     │
│                                             │
│         [  ENTRAR NO GRUPO  ]               │  ← Botão laranja, pulsar suave
│                                             │
│           Não fica de fora                  │
│         [  QUERO ENTRAR  ]                  │  ← Reforço CTA
│                                             │
└─────────────────────────────────────────────┘
```

1. **Topbar laranja** – marquee horizontal infinito com:
   - “🔥 PROMOÇÕES TODOS OS DIAS”
   - “⚡ ACESSO LIMITADO”
   - “💸 OFERTAS EXCLUSIVAS”
   - “📲 DIRETO NO SEU WHATSAPP”
2. **Hero centralizado** (vertical + horizontal): título grande, subtítulo, botão principal.
3. **Reforço CTA** logo abaixo: micro-texto + segundo botão.
4. **Footer minimalista** com © + nota curta (sem links).

---

### Design

- **Fundo:** preto levemente acinzentado (`#0A0A0A` / HSL).
- **Destaque:** laranja vibrante (`#FF6A00`) – usado em barra topo e botões.
- **Texto:** branco / cinza claro para subtítulo.
- **Tipografia:** fonte sans-serif forte e moderna (Inter/Space Grotesk), título com `tracking-tight`, peso 800, tamanho responsivo (`text-5xl md:text-7xl`).
- **Botões:** laranja sólido, texto branco, cantos suaves, animação pulsar contínua sutil + leve scale no hover.
- **Sem imagens, sem cards, sem ícones decorativos extras** – só tipografia e cor.
- **100% responsivo**, mobile-first, layout flex centralizado.

---

### Detalhes técnicos

- Substituir `src/pages/Index.tsx` pela nova landing.
- Atualizar `src/index.css`:
  - Tokens HSL: `--background` (preto acinzentado), `--primary` (laranja), `--foreground` (branco).
  - Keyframes: `marquee` (translateX -100%) e `pulse-soft` (box-shadow + scale).
- Atualizar `tailwind.config.ts` com as animações `marquee` (linear infinite ~25s) e `pulse-soft` (2s infinite).
- Atualizar `<title>` e meta description em `index.html` (“Grupo de Promoções no WhatsApp”).
- Botões = `<a target="_blank" rel="noopener noreferrer">` apontando para o link do grupo.
- Sem rotas novas, sem dependências novas, sem backend.

Tudo segue o design system (tokens HSL no `index.css` + Tailwind), nada de cores hardcoded nos componentes.