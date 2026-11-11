# Relatório de Auditoria Inicial - Fase E6
**Projeto:** Café Aroma  
**Autores:** Tiago Bilotti Nunes e Brian Miguel Guerreiro Almeida  

---

## 1. Metodologia de Auditoria
A auditoria foi realizada utilizando duas ferramentas principais para avaliar a qualidade, desempenho e acessibilidade do portal web:
1. **Google Lighthouse (Chrome DevTools):** Avaliação de Desempenho, Acessibilidade, Boas Práticas e SEO.
2. **WAVE:** Verificação detalhada de conformidade com as diretrizes WCAG 2.2.

---

## 2. Resultados por Página

### 2.1. Página Inicial (`index.html`)
* **Google Lighthouse Scores:**
  * Desempenho (Performance): 1 / 1
  * Acessibilidade: 18 / 18
  * Boas Práticas: 4 / 4
  * SEO: 5 / 6
* **Validação WAVE:** 0 erros detectados.

### 2.2. Página de Menu (`menu.html`)
* **Google Lighthouse Scores:**
  * Desempenho (Performance): 1 / 1
  * Acessibilidade: 20 / 20
  * Boas Práticas: 4 / 4
  * SEO: 5 / 6
* **Validação WAVE:** 0 erros detectados.

### 2.3. Página de Artigo (`artigo/artigo.html`)
* **Google Lighthouse Scores:**
  * Desempenho (Performance): 1 / 1
  * Acessibilidade: 18 / 18
  * Boas Práticas: 4 / 4
  * SEO: 4 / 5
* **Validação WAVE:** 0 erros detectados. 

---

## 3. Lista de Problemas Identificados e Plano de Correção

Embora as pontuações nas ferramentas automatizadas tenham sido excelentes (graças à base sólida construída nas fases anteriores), identificaram-se pequenos pontos de melhoria contínua:

1. **Problema Menor (Contraste de Cores em Links secundários):** Em alguns estados de foco muito específicos, o contraste de certos tons castanhos exigia reforço para cumprir integralmente o rácio AAA.
   * **Plano de Correção:** Ajustado o parâmetro da variável `--cor-destaque` e reforçado o contorno visível através de `outline-offset` e `outline: 3px solid var(--cor-foco)` no CSS.
2. **Problema Menor (Otimização de SVGs/Imagens):** Tamanho de ficheiro de alguns assets gráficos vetoriais por otimizar.
   * **Plano de Correção:** Limpeza de metadados desnecessários nos ficheiros SVG localizados na pasta `imagens/`.