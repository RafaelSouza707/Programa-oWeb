const a = [1, 2, 3, 4, 5];
const b = [6, 7, 8, 9, 10];

const somarA = a.reduce((acumulador, valorAtual) => acumulador += valorAtual);
const somarB = b.reduce((acumulador2, valorAtual2) => acumulador2 += valorAtual2);

console.log(somarA + somarB);