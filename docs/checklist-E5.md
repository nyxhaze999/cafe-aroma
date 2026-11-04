# Checklist E5 — Café Aroma

Marcar `[x]` apenas depois de verificar a evidência. Uma declaração incorreta conta como meta não cumprida.

**Grupo:** Tiago Bilotti Nunes (`nyxhaze999`) e Brian Miguel Guerreiro Almeida (`TokoyamiShadow`) | **Tag:** E5

## Ponto 1 — Abordagem mobile-first com 3 ou mais pontos de rutura
- [x] Abordagem CSS *mobile-first* implementada globalmente com 3 pontos de rutura em *media queries* (600px, 900px e 1200px) no ficheiro de estilos principal.

Evidência: `css/estilos.css`

## Ponto 2 — Flexbox na navegação e Grid em grelha de conteúdos
- [x] Navegação principal adaptável estruturada com Flexbox e grelha de conteúdos (`.grelha-conteudo`) formatada com CSS Grid.

Evidência: `css/estilos.css`, `index.html`

## Ponto 3 — Sem deslocação horizontal a 360 px e a 1280 px
- [x] Adaptação responsiva sem barras de rolamento horizontal nas resoluções de 360 px (móvel) e 1280 px (desktop), devidamente comprovada por capturas de ecrã.

Evidência: `docs/responsivo/360px.png`, `docs/responsivo/1280px.png`

## Ponto 4 — Imagens responsivas em pelo menos 2 imagens
- [x] Aplicação de imagens responsivas com a etiqueta `<picture>` e atributos `<source>` em pelo menos 2 imagens da página.

Evidência: `index.html`

## Ponto 5 — Alvos de toque com pelo menos 24x24 px CSS
- [x] Garantia de dimensões mínimas globais (`min-width` e `min-height` de 24px) para todos os elementos interativos (ligações, botões, ícones e campos de entrada).

Evidência: `css/estilos.css`

## Submissão
- [x] Capturas de ecrã de teste de responsividade guardadas na pasta dedicada `docs/responsivo/`.
- [ ] Tag `E5` criada depois do último commit e enviada com `git push origin E5`.
- [x] `docs/contribuicao-E5.md` preenchido com as contribuições do trabalho.