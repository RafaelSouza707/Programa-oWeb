const letras = [
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g'],
   ]; // <- cria uma matriz de letras.
   
   
let resultado = letras.flat().reduce((objeto, numero) => { // <- faz com que a matriz "letras" receba uma lisa de valores concatenados com um valor
    if (objeto[numero]) { // <- valores que já foram atribuidos um valor, recebe novamente mais 1.
        objeto[numero] += 1;
    } else {// <- valores que não possuem valores recebe o valor 1.
        objeto[numero] = 1;
    }
    return objeto; // <- retorna a sub lista criada.
    }, {});
   
//console.log(resultado)