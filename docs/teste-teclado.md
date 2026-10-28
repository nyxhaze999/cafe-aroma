# Relatório de Validação: Navegação por Teclado e Foco Visível (Fase E4)

## 1. Objetivo
Validar se o website estático **Café Aroma** é totalmente navegável através de tecnologias de assistência e teclado (teclas `Tab`, `Shift + Tab`, `Enter` e `Space`), garantindo a ausência de bloqueios (*keyboard traps*) e a clara visibilidade do foco em todos os elementos interativos.

## 2. Metodologia de Teste
O teste foi executado simulando a navegação exclusiva por teclado em todas as páginas do site (`index.html`, `menu.html`, `historia.html`, `contacto.html` e `artigo/artigo.html`), verificando:
- A ordem lógica do fluxo de foco (do cabeçalho até ao rodapé).
- O comportamento do menu de hambúrguer em dispositivos móveis/janelas redimensionadas.
- A aplicação correta da regra `:focus-visible` definida no ficheiro `estilos.css`.

## 3. Resultados Obtidos
- **Ordem de Foco (Tab Index):** O fluxo de navegação segue a ordem natural da árvore de documentos HTML (sem saltos ilógicos).
- **Indicador Visual de Foco:** Todos os elementos interativos (links, botões, campos de formulário e elementos `<summary>`) apresentam um contorno visível distintivo (`outline: 3px solid var(--cor-foco)` com `outline-offset: 2px`), cumprindo as diretrizes de contraste e acessibilidade das WCAG.
- **Menu de Hambúrguer:** O botão de alternância do menu e os itens da lista são totalmente acionáveis por teclado, permitindo abrir, navegar e fechar o menu sem bloqueios.
- **Formulários e Links:** A navegação por tabulação nos campos do formulário e nas referências bibliográficas do artigo funciona sem reter o foco de forma indesejada.

## 4. Conclusão
O projeto cumpre integralmente os requisitos de acessibilidade por teclado e foco visível definidos para a fase E4.