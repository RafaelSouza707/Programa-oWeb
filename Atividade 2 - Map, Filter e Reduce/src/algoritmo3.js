const estudantes = [ // <- cria uma array com objetos com os nomes e notas de alunos.
    { nome: 'Alice', notas: [100, 60, 92] },
    { nome: 'João', notas: [75, 30, 85] },
    { nome: 'Charles', notas: [90, 95, 85] },
    { nome: 'Paulo', notas: [100, 100, 100] },
   ];
   
   
const estudantesMedias = estudantes.map((estudante) => {
    const total = estudante.notas.reduce((soma, nota) => soma + nota);
    let {nome} = estudante;
    return { nome, media: total / estudante.notas.length };
}); // <- usa o map para criar um novo array com as medias dos alunos. 
    // faz o calculo das notas dos alunos que estão contidas no array "estudantess", percorrento os valores de notas
    // com o metodo reduce, que faz a soma das notas e retorna o nome do aluno e a media das notas.


const melhoresMedias = estudantesMedias.filter( // filtras os resultados das medias para quais possui valor maior que 90.
    (student) => student.media > 90,
);

console.log(estudantesMedias)
console.log(melhoresMedias)