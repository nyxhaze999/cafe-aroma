# Guia de estilo — Café Aroma

Este guia define as cores, a tipografia e os espaçamentos do sítio. O CSS (`css/estilos.css`) deve usar estes valores através de variáveis.

## 1. Cores

| Função | Variável CSS | Valor | Utilização |
|---|---|---|---|
| Fundo | `--cor-fundo` | `#FFF8F0` | Fundo das páginas |
| Texto | `--cor-texto` | `#2B1B12` | Texto principal |
| Principal | `--cor-principal` | `#5A3825` | Cabeçalho, botões, cabeçalhos de tabela |
| Destaque | `--cor-destaque` | `#8A3B12` | Ligações e realces |
| Fundo secundário | `--cor-fundo-sec` | `#EFE0D0` | Rodapé, caixas, linhas alternadas de tabelas |
| Foco | `--cor-foco` | `#0B5FFF` | Contorno de foco sobre fundos claros |
| Texto sobre principal | `--cor-sobre-principal` | `#FFFFFF` | Texto em botões e cabeçalho |

## 2. Tipografia

| Elemento | Família | Tamanho | Notas |
|---|---|---|---|
| Títulos (h1, h2, h3) | `Georgia, "Times New Roman", serif` | h1 1,75rem; h2 1,25rem; h3 1,125rem | Peso normal, altura de linha 1,2 |
| Texto corrente | `system-ui, "Segoe UI", Arial, sans-serif` | 1rem (16 px) | Altura de linha 1,6 |
| Texto pequeno (rodapé) | Igual ao texto corrente | 0,875rem | Altura de linha 1,5 |

Não são usadas fontes externas, o que evita pedidos de rede adicionais.

## 3. Espaçamentos

Unidade base de 0,5rem (8 px). Valores usados: 0,5rem, 1rem, 1,5rem e 2rem, aplicados de forma consistente em margens e preenchimentos.

## 4. Rácios de contraste

Mínimos exigidos (WCAG 2.2, nível AA): 4,5:1 para texto normal, 3:1 para texto grande e para componentes de interface. Todo o texto do sítio é tratado como texto normal.

| Texto / elemento | Fundo | Rácio | Utilização | Cumpre |
|---|---|---|---|---|
| `#2B1B12` | `#FFF8F0` | 15,72:1 | Texto principal | Sim |
| `#2B1B12` | `#EFE0D0` | 12,81:1 | Texto no rodapé e em linhas de tabela | Sim |
| `#FFFFFF` | `#5A3825` | 10,36:1 | Texto em botões e cabeçalhos de tabela | Sim |
| `#FFF8F0` | `#5A3825` | 9,84:1 | Navegação no cabeçalho | Sim |
| `#8A3B12` | `#FFF8F0` | 7,34:1 | Ligações no fundo das páginas | Sim |
| `#8A3B12` | `#EFE0D0` | 5,98:1 | Ligações no rodapé e em caixas | Sim |
| `#0B5FFF` | `#FFF8F0` | 4,87:1 | Contorno de foco (mínimo 3:1) | Sim |
| `#0B5FFF` | `#EFE0D0` | 3,97:1 | Contorno de foco no rodapé (mínimo 3:1) | Sim |
| `#0B5FFF` | `#5A3825` | 2,02:1 | Contorno de foco sobre o cabeçalho | **Não** |
 
Rácios calculados com a fórmula de luminância relativa do WCAG 2.2 e conferidos com um verificador de contraste.

## 5. Estado de foco

- Todos os elementos interativos (ligações, botões, campos de formulário) têm um contorno visível com `:focus-visible`.
- Fundos claros: contorno de 3 px em `--cor-foco` (`#0B5FFF`), com afastamento de 2 px.
- Dentro do cabeçalho (fundo `#5A3825`): como o azul não cumpre o mínimo de 3:1, o contorno usa o creme `#FFF8F0` (9,84:1).
- O contorno nunca é removido (`outline: none`) sem um substituto visível.
