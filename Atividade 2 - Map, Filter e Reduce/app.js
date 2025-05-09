
/*
function sum(x, y, z) {
    return x+ y + z;
}

let a = 1;
let b = 2;
let c = 3;

let numeros = [a, b, c];
let complemento = [4, 5, 6];

let resultado = sum(...numeros);
let numerosjuntos = [];


function resolve(list){
    for (let numero of list){
        numerosjuntos.push(numero)
    }

    return numerosjuntos
}

let numeros1 = resolve(numeros);
console.log(numeros1);

let numeros2 = resolve(complemento);

console.log(numeros2);



let pessoa = {
    nome: 'Maria da Silva',
    nascimento: '2025-04-24'
};

let aluno = {
    matricula: '202504040403020',
    cre: '99'
};

pessoaAluno = {...pessoa, ...aluno, cpf: '84738735'};
pessoaAluno.cre = '100';


console.log(pessoaAluno);

let notasBim1 = [90, 70, 60];
let notasBim2 = [...notasBim1, 100];
//notasBim2.push(100);
console.log(notasBim2)








let lista01 = [1, 2, 3, 4, 5]

function somarLista(list){
    return list[0] +  list[1] + list[2];
};

console.log("Print")
let resposta = somarLista(lista01)
console.log(resposta)


const ca = [1, 2, 3, 4, 5], cb = [6, 7, 8, 9, 10];
var ab = ca.reduce((acumulador, elemento) => acumulador += elemento, cb.reduce((acumulador, elemento) => acumulador += elemento, 0))
console.log(ab);

*/

///////////////////////////////////////////////////////////////////////////////////////////////

/*
// REDUCE

// Somatorio
let listaSomar = [1, 2, 3, 4, 5];

const resposta = listaSomar.reduce((acumulado, valorAtual) => acumulado += valorAtual);

console.log(resposta)


// Criar Objetos

let listaPessoas = [
    {nome : "Pessoa1", idade : "18"},
    {nome : "Pessoa2", idade : "19"},
    {nome : "Pessoa3", idade : "20"},
    {nome : "Pessoa4", idade : "21"},
    {nome : "Pessoa5", idade : "22"}
] 

const obJetosPessoas = listaPessoas.reduce((aculador, pessoa) => {
    aculador[pessoa.nome] = pessoa.idade;
    return aculador;
    }, 
    {}
);

console.log(obJetosPessoas)

// Indexar listas de objetos

const lista = [
    {id: 1, nome : "Nome Da Silva"},
    {id: 2, nome : "Nome De Moura"},
    {id: 3, nome : "Nome Da costa"}
];

const callback = (acumulador, valor) => {
    acumulador[valor.id] = valor.nome;
    return acumulador;
};

const valorInicial = {};

const PessoasIndexadasPorId = lista.reduce(callback, valorInicial);
console.log(PessoasIndexadasPorId[2]);

*/

///////////////////////////////////////////////////////////////////////////////////////////

/*

// MAP

// Modificar Numeros dentro de um array
let array = [1, 2, 3, 4, 5];
let modificarArray = array.map(function(element){
    return element * 3;
});

console.log(modificarArray)

// Usar objetos como chave

const usuario1 = {nome: 'Joao'};
const usuario2 = {nome: 'Maria'};

const idade = new Map();

idade.set(usuario1, 20);
idade.set(usuario2, 22);

console.log(idade.get(usuario1));

console.log(usuario1, usuario2)


// Criar objetos com metodo Map

const nomeMap = new Map([
    ['nome', 'Rafael'],
    ['sobrenome', 'Moura']
]);

console.log(nomeMap.get('sobrenome'),nomeMap.get('nome'));



// Filtrar itens dentro de array com condição

const produto = [
    {nome: 'Arroz', preco: 4.5},
    {nome: 'Frango', preco: 20},
    {nome: 'Chocolate', preco: 12.5},
    {nome: 'Camarão', preco: 32},
    {nome: 'Feijão', preco: 7.8}
];

const filtraValor = produto.filter(prduto => prduto.preco <= 12.5)
for (i = 0; i< filtraValor.length; i++) {
    console.log(filtraValor[i])
}

// Filtar caractes

const nomes = ['Ana', 'Carlos', 'Mel', 'Roberto'];

const nomesCurtos = nomes.filter(nome => nome.length <= 4);

console.log(nomesCurtos);

// Filtrar par

const numeros = [1, 2, 3, 4, 5, 6];

const pares = numeros.filter(n => n % 2 === 0);

console.log(pares);
*/

/*
let alunos = [
    {nome: 'Nome1', idade: 15},
    {nome: 'Nome2', idade: 15},
    {nome: 'Nome3', idade: 16}
]

let novaListaAluno = alunos.map((aluno, i) => {
    return aluno.idade;
}); 
console.log(novaListaAluno);

const items = [
    {name: 'Fruta1', price: 4},
    {name: 'Fruta2', price: 2},
    {name: 'Fruta3', price: 11},
    {name: 'Fruta4', price: 25},
    {name: "Fruta5", price: 20}
];

*/