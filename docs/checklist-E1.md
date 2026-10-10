# Checklist E1 — Café Aroma

Marcar `[x]` apenas depois de verificar a evidência. Uma declaração incorreta conta como meta não cumprida.

**Grupo:** Tiago Bilotti Nunes (`nyxhaze999`) e Brian Miguel Guerreiro Almeida | **Tag:** E1

## M1 — Repositório Git, README e pelo menos 3 commits por elemento

- [x] Repositório criado no GitHub, com o docente convidado como colaborador.
- [x] README com grupo, tema e público-alvo.
- [x] Tiago Bilotti Nunes com pelo menos 3 commits próprios.
- [ ] Brian Miguel Guerreiro Almeida com pelo menos 3 commits próprios.

Evidência: `README.md`; `git shortlog -sn` mostra apenas os commits do Tiago (`nyxhaze999` e `Tiago Bilotti Nunes`, mesmo email).

## M2 — Sitemap e wireframes de baixa fidelidade de 3 páginas

- [x] Sitemap guardado em `docs/sitemap.md`.
- [x] Wireframes de 3 páginas guardados em `docs/wireframes.md`.

Evidência: `docs/sitemap.md`, `docs/wireframes.md`

## M3 — Três páginas com estrutura base completa

- [x] As 3 páginas têm `<!doctype html>`, `lang="pt-PT"`, `charset` e `viewport`.
- [x] Cada página tem um `<title>` único.

Evidência: `index.html`, `menu.html`, `historia.html`

## M4 — Conteúdo HTML e ligações

- [x] Cabeçalhos e listas em todas as páginas.
- [x] Tabela com cabeçalhos (`<th scope="col">`) em `menu.html`.
- [x] 6 imagens com `alt` descritivo (3 em `index.html`, 1 em `menu.html`, 2 em `historia.html`).
- [x] Ligações internas testadas no browser, sem ligações quebradas.

Evidência: `menu.html` (tabela); `imagens/` (6 ficheiros SVG).

## M5 — Validador HTML do W3C com 0 erros nas 3 páginas

- [x] As 3 páginas validadas com zero erros.
- [x] Capturas do resultado guardadas em `docs/provas-E1/`.

Evidência: `docs/provas-E1/prova_index.png`, `docs/provas-E1/prova_menu.png`, `docs/provas-E1/prova_historia.png`

## Submissão

- [ ] Tag `E1` criada depois do último commit e enviada com `git push origin E1`.
- [ ] URL do repositório, hash do commit da tag e URL publicado submetidos na plataforma da UC antes das 23h59.
- [x] `docs/contribuicao-E1.md` atualizado com os hashes reais.

## Notas de validação

Validação feita em validator.w3.org (Nu Html Checker), com o parser HTML, sem erros nem avisos nas 3 páginas. Os ficheiros HTML não foram alterados depois das capturas.
