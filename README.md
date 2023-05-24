# Praticando-JS_08
Quantos recordes teve um jogador de basquete, e qual foi o jogo da sua pior pontuação.

Dentro do código está descrito como anotação, o exercicio que foi pedido. Logo em baixo,
os códigos que usei para resolve-lo!
Fique a vontade para entrar em contato comigo para dar sugestões e dicas!
Este e todos os outros exercícios foram tirados do curso
"Web Moderno Completo com JavaScript 2022 + Projetos" na Udemy.

Nesse código, criei uma lista de pontuações de um jogo de basquete representada pelo array lista. O objetivo é determinar o número de vezes que o jogador bateu seu recorde de pontuação e o índice do jogo em que ele teve a pior pontuação.

A lista de pontuações é [10, 15, 24, 9, 34, 30,8].

A variável contador é inicializada com o valor zero e será usada para contar o número de vezes que o jogador bateu seu recorde. A variável indiceMenor é inicializada com zero e será usada para armazenar o índice do jogo em que o jogador teve a pior pontuação.

O primeiro laço for, percorre a lista de pontuações a partir do segundo elemento (índice 1) até o último. Ele compara cada pontuação com a pontuação do jogo anterior (índice i-1). Se a pontuação atual for maior que a pontuação anterior, incrementa o contador. Isso verifica quantas vezes o jogador bateu seu recorde de maior pontuação.

O segundo laço for, percorre a lista de pontuações desde o primeiro elemento (índice 0) até o último. Ele compara cada pontuação com a pontuação do jogo em que o jogador teve a pior pontuação, armazenada na variável lista[indiceMenor]. Se a pontuação atual for menor que a pontuação da pior partida registrada até agora, atualiza o valor de indiceMenor com o novo índice.

Após os laços, criei o vetor vetorResultado, contendo o valor de contador (número de vezes que o recorde foi batido) e o valor de indiceMenor (índice da pior partida). Por fim, o vetorResultado é exibido no console.

A saída do código será [3, 6], indicando que o jogador bateu seu recorde três vezes e teve sua pior pontuação no jogo de índice 6.
