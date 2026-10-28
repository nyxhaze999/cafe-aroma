# Checklist E4 — Café Aroma

Marcar `[x]` apenas depois de verificar a evidência. Uma declaração incorreta conta como meta não cumprida.

**Grupo:** Tiago Bilotti Nunes (`nyxhaze999`) e Brian Miguel Guerreiro Almeida (`TokoyamiShadow`) | **Tag:** E4

## Ponto 1 — Modelo de caixa e espaçamentos consistentes
- [x] Utilização global de `box-sizing: border-box` e espaçamentos coerentes baseados na unidade base do guia de estilo.

Evidência: `css/estilos.css`

## Ponto 2 — Tabelas e formulários formatados segundo o guia de estilo
- [x] Tabelas estilizadas com cabeçalhos, alternância de linhas e margens consistentes.
- [x] Formulários em `contacto.html` com campos estruturados, legendas, `fieldset` e campos devidamente associados a etiquetas (`label`).

Evidência: `contacto.html`, `css/estilos.css`

## Ponto 3 — Elementos HTML5 semânticos modernos com propósito
- [x] Uso correto de `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<figure>` e `<figcaption>`.

Evidência: Ficheiros HTML do projeto (`index.html`, `menu.html`, `historia.html`, `contacto.html`, `artigo/artigo.html`).

## Ponto 4 — Artigo completo com tema, questão orientadora, índice e 6 referências
- [x] Artigo localizado em `artigo/artigo.html` com atributo `lang="pt-PT"`.
- [x] Tema definido, questão orientadora explícita, índice com links de âncora e 6 referências bibliográficas com URL e datas de acesso variadas (incluindo diretrizes W3C e legislação nacional).

Evidência: `artigo/artigo.html`

## Ponto 5 — Foco visível e navegação por teclado sem bloqueios
- [x] Foco visível aplicado em todos os elementos interativos através de `:focus-visible` e `outline` customizado no `css/estilos.css`.
- [x] Navegação por teclado testada e sem barreiras (*keyboard traps*).

Evidência: `css/estilos.css`, testes de navegação.

## Submissão
- [x] Artigo organizado dentro da pasta dedicada `artigo/` com caminhos atualizados.
- [ ] Tag `E4` criada depois do último commit e enviada com `git push origin E4` (ou `--tags`).
- [x] `docs/contribuicao-E4.md` preenchido com as contribuições da equipa.