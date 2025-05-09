const tamanho = prompt('Digite o tamanho da lista de números'); // <- recebe o valor que a lista irá possuir.
const lista = new Array(tamanho).fill(null); // <- cria uma lista baseada com o tamanho passado, e preenche cada valor dentro da lista com nulo.
lista
 .map(function (item, index) {
   return index + 1;
 }) // <- determina que o map criará uma nova lista com os valores atualizados, assumindo um valor baseado na posição.
 .reduce(function (acumulador, item) {
   return acumulador * item;
 }); // <- determina que o reduce fará um somatorio da multiplicação dos valores dentro da lista, multiplicando o valor acumulado com o proximo valor. 


new Array(tamanho) // <- define o array com os paramentros usados.
 .fill(null)
 .map((item, index) => index + 1)
 .reduce((acumulador, item) => acumulador + item);
