# Desafios de Programação com IA
  Este repositório contém a resolução de 12 desafios de programação focados em estruturas de dados fundamentais, desenvolvidos como parte da disciplina de Algoritmos/Estruturas de Dados.

# Contexto do Projeto
  O objetivo desta atividade é realizar o primeiro contato estruturado com a Inteligência Artificial como ferramenta de desenvolvimento. Utilizamos a IA para auxiliar no planejamento, lógica, revisão de código e análise de complexidade, revisando conceitos práticos de entrevistas técnicas.

# Acadêmicos 

Ana Luisa Milchert 

Andrey Garcia dos Santos 

Graziela Torres

Sophia Eggert Freire da Rocha

# Ferramenta de IA Utilizada

- Nome da ferramenta:
  
Gemini (Google)

- Como foi acessada:
  
A ferramenta foi acessada via interface web (navegador), permitindo interação direta e rápida com o modelo.

- Por que foi escolhida para esta atividade:
  
O Gemini foi escolhido por sua alta capacidade de processamento de contexto e habilidade em lidar com diferentes linguagens de programação (como Java). Sua interface web facilita o compartilhamento de trechos de código e a visualização imediata de correções, além de oferecer explicações didáticas sobre erros de sintaxe e lógica.

- Aprendizado e Integração:

O uso foi baseado na exploração direta da ferramenta e em conhecimentos prévios sobre prompts de comando. Embora não tenha sido utilizada via plugin de IDE (como VS Code) nesta etapa, a escolha pela versão web permitiu uma depuração assistida e mais explicativa, funcionando como um "parceiro de programação" (pair programming).

Como a equipe pretende usá-la:

A equipe utilizará a ferramenta para:

Identificar e corrigir erros: Resolver falhas de compilação.

Adaptar códigos: Transformar algoritmos estáticos em programas interativos.

Explicar complexidade: Compreender a lógica por trás de algoritmos complexos.

Revisar e Refatorar: Melhorar a legibilidade do código e garantir que ele siga as convenções da linguagem Java.

Nome do problema:

316. Remove Duplicate Letters: https://leetcode.com/problems/remove-duplicate-letters/description/?envType=problem-list-v2&envId=stack

147. Insertion Sort List: https://leetcode.com/problems/insertion-sort-list/description/?envType=problem-list-v2&envId=linked-list

260. Single Number III: https://leetcode.com/problems/single-number-iii/description/?envType=problem-list-v2&envId=array

Plataforma utilizada: 

A plataforma utilizada foi o Leetcode.

Estrutura de dados principal usada:

Para cada exercício foi utilizada uma estrutura diferente.

Justificativa: por que essa estrutura é adequada para resolver o problema:

1. Remoção de Letras Duplicadas (Remove Duplicate Letters)Estrutura de dados principal: Pilha (Stack) e Arrays de Apoio (Frequência e Visitados).

Justificativa: A Pilha é ideal porque o problema exige que tomemos decisões baseadas no último caractere inserido. Quando encontramos uma letra "menor" (ex: 'a') e a letra que está no topo da pilha (ex: 'b') ainda vai aparecer mais tarde no texto, a estrutura de pilha nos permite "desempilhar" o 'b' facilmente para colocar o 'a' na frente, garantindo a menor ordem alfabética (lexicográfica).

2. Ordenação de Lista (Insertion Sort List)Estrutura de dados principal: Lista Encadeada (Linked List).

Justificativa: Diferente de um Array, a Lista Encadeada permite que você insira um elemento em qualquer posição apenas alterando os ponteiros (next), sem precisar "empurrar" todos os outros elementos para o lado. Para o algoritmo de Insertion Sort, isso é perfeito: você desconecta um nó de onde ele está e o "espeta" no lugar correto da lista ordenada de forma muito eficiente em termos de movimentação de memória.

3. Encontrar Números Únicos (Single Number III)Estrutura de dados principal: Bitset / Manipulação de Bits (Bitwise).

Justificativa: Embora o código use um Array para o resultado, a "estrutura" lógica aqui são os Bits do número. Essa abordagem é adequada porque operações de bit (como XOR) permitem identificar diferenças entre números sem usar memória extra (como um Hashmap). É a forma mais performática possível (espaço constante $O(1)$) para isolar elementos que não possuem pares em uma coleção.
