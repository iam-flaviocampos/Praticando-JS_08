/*
Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.)
*/

const lista = [10, 15, 24, 9, 34, 30, 8]
let contador = 0
let indiceMenor = 0

//Quantidade de vezes que ele bateu o record = 3 vezes
for (let i = 1; i < lista.length; i++ ){
    if (lista[i] > lista[1]){
        contador++
    }   
}

//Em qual momento ele teve o menor numero de pontos = índice 6
for (let i = 0; i < lista.length; i++){
    if (lista[i] < lista[indiceMenor]){
        indiceMenor = i
    }
}

const vetorResultado = [contador, indiceMenor]
console.log(vetorResultado)