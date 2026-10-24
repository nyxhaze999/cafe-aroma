# Relatório de validação — E3

**Projeto:** Café Aroma | **Data da validação:** 24/10/2026

## Ferramentas usadas

| Linguagem | Ferramenta | Endereço | Modo |
|---|---|---|---|
| HTML | Nu Html Checker (validador do W3C) | https://validator.w3.org/ | Upload de ficheiro |
| CSS | Validador de CSS do W3C | https://jigsaw.w3.org/css-validator/ | Upload de ficheiro, CSS nível 3 + SVG |

## Resultados

| Ficheiro | Erros | Avisos | Captura |
|---|---|---|---|
| `index.html` | 0 | 0 | `docs/provas-E3/prova_index.png` |
| `menu.html` | 0 | 0 | `docs/provas-E3/prova_menu.png` |
| `historia.html` | 0 | 0 | `docs/provas-E3/prova_historia.png` |
| `contacto.html` | 0 | 0 | `docs/provas-E3/prova_contacto.png` |
| `artigo.html` | 0 | 0 | `docs/provas-E3/prova_artigo.png` |
| `css/estilos.css` | 0 | 6 | `docs/provas-E3/prova_css.png` |

## Notas

- As 5 páginas HTML foram validadas depois de ligar a folha de estilos externa e de acrescentar `aria-current="page"` à navegação.
- Todas as páginas ligam o mesmo ficheiro `css/estilos.css`.
- Não há CSS em linha nas páginas (verificado com pesquisa por `style=` e `<style` nos ficheiros HTML, sem resultados).
- Avisos do validador do CSS:
- 43	Due to their dynamic nature, CSS variables are currently not statically checked
- 64	Due to their dynamic nature, CSS variables are currently not statically checked
- 123	Due to their dynamic nature, CSS variables are currently not statically checked
- 274	button:hover	Same color for background-color and border-color
- 274	input[type="reset"]:hover	Same color for background-color and border-color
- 274	input[type="submit"]:hover	Same color for background-color and border-color
