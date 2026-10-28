# Relatório de validação — E4

**Projeto:** Café Aroma | **Data da validação:** Outubro de 2026

## Ferramentas usadas

| Linguagem | Ferramenta | Endereço | Modo |
|---|---|---|---|
| HTML | Nu Html Checker (validador do W3C) | https://validator.w3.org/ | Upload de ficheiro |
| CSS | Validador de CSS do W3C | https://jigsaw.w3.org/css-validator/ | Upload de ficheiro, CSS nível 3 + SVG |
| JavaScript | JSHint | https://jshint.com/ | Colagem de código (com `esversion: 6`) |

## Resultados

| Ficheiro | Erros | Avisos | Captura |
|---|---|---|---|
| `index.html` | 0 | 0 | `docs/provas-E4/prova_index.png` |
| `menu.html` | 0 | 0 | `docs/provas-E4/prova_menu.png` |
| `historia.html` | 0 | 0 | `docs/provas-E4/prova_historia.png` |
| `contacto.html` | 0 | 0 | `docs/provas-E4/prova_contacto.png` |
| `artigo.html` | 0 | 0 | `docs/provas-E4/prova_artigo.png` |
| `css/estilos.css` | 0 | 0 | `docs/provas-E4/prova_css.png` |
| `js/script.js` | 0 | 0 | `docs/provas-E4/prova_js.png` |

## Notas

- Correção da hierarquia de cabeçalhos no `artigo.html` (substituição de `<h3>` por `<h2>` para evitar saltos de nível no validador do W3C).
- Integração do ficheiro `js/script.js` em todas as páginas para gerir a interatividade do menu de navegação (botão hambúrguer, estados `aria-expanded` e classes dinâmicas).
- Inclusão da diretiva `/* jshint esversion: 6 */` no topo do ficheiro JavaScript para garantir a validação correta de sintaxe moderna (`const`, arrow functions).
- Todas as páginas continuam a partilhar a mesma folha de estilos `css/estilos.css`, sem estilos em linha.