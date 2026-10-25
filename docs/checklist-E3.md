# Checklist E3 — Café Aroma

Marcar `[x]` apenas depois de verificar a evidência. Uma declaração incorreta conta como meta não cumprida.

**Grupo:** Tiago Bilotti Nunes (`nyxhaze999`) e Brian Miguel Guerreiro Almeida (`TokoyamiShadow`) | **Tag:** E3

## M1 — Folha de estilos externa ligada a todas as páginas

- [x] `css/estilos.css` ligado às 5 páginas (`index`, `menu`, `historia`, `contacto`, `artigo`).
- [x] Sem CSS em linha: pesquisa por `style=` e `<style` nos ficheiros HTML sem resultados.

Evidência: `css/estilos.css`; `<link rel="stylesheet" href="css/estilos.css">` no `<head>` de cada página.

## M2 — Guia de estilo com pelo menos 5 cores e tipografia

- [x] 7 cores definidas, com variável CSS e utilização.
- [x] Tipografia definida (títulos, texto corrente, texto pequeno) e espaçamentos.

Evidência: `docs/guia-estilo.md`

## M3 — 15 ou mais regras CSS, organizadas e comentadas por secção

- [x] Mais de 30 regras CSS.
- [x] 9 secções comentadas: variáveis, base, tipografia, ligações e foco, cabeçalho e navegação, conteúdo principal, tabelas, formulários e rodapé.

Evidência: `css/estilos.css`

## M4 — Rácio de contraste calculado para os pares de cores do guia

- [x] Tabela com 9 pares de cores e respetivo rácio, na secção 4 do guia de estilo.
- [x] Mínimos usados: 4,5:1 para texto normal e 3:1 para texto grande e componentes de interface.
- [x] Rácios conferidos por segundo elemento do grupo com uma ferramenta de contraste.

Evidência: `docs/guia-estilo.md` (secção 4).

Nota: o par do contorno de foco azul sobre o cabeçalho castanho tem 2,02:1 e não cumpre o mínimo de 3:1. Por isso, dentro do cabeçalho usa-se um contorno creme (9,84:1), como está definido no guia e em `css/estilos.css`.

## M5 — Validadores HTML e CSS com 0 erros, com relatório no repositório

- [x] As 5 páginas HTML validadas com 0 erros no validador do W3C.
- [x] `css/estilos.css` validado com 0 erros no validador de CSS do W3C.
- [x] Relatório e capturas guardados no repositório.

Evidência: `docs/provas-E3/relatorio-validacao.md`; capturas `prova_index.png`, `prova_menu.png`, `prova_historia.png`, `prova_contacto.png`, `prova_artigo.png` e `prova_css.png` em `docs/provas-E3/`.

## Submissão

- [ ] Tag `E3` criada depois do último commit e enviada com `git push origin E3`.
- [ ] URL do repositório, hash do commit da tag e URL publicado submetidos na plataforma da UC antes das 23h59.
- [x] `docs/contribuicao-E3.md` preenchido com os commits reais de cada elemento.
