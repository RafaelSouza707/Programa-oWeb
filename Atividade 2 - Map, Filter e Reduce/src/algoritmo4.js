const funcionarios = [ // <- array de objetos com nomes, salario e departamentos de funcionarios.
    { nome: 'João', salario: 30000, departamento: 'TI' },
    { nome: 'Janete', salario: 70000, departamento: 'RH' },
    { nome: 'Sofia', salario: 100000, departamento: 'RH' },
];

const funcionariosPorDepartamento = funcionarios.reduce(  // <- cria uma sub array que recebe o acumulado de funcionarios dentro de um departamento.
    (acumulador, funcionario) => {
      const departamento = funcionario.departamento; // <- recebe o departamento do funcinario.
      if (!acumulador[departamento]) { // <- quando o departamento não existe dentro do novo array criado, então cria um novo espaço para que a inserção
        acumulador[departamento] = []; // do departamento e então acumular a quantidade de funcionarios existentes dentro daquele departamento.
      }
      acumulador[departamento].push(funcionario); // <- insere o funcionario dentro do departamento. 
      return acumulador;
    },
    {},
);


const mediasSalarioPorDepartamento = Object.keys( // <- faz o mapeamento das chaves existentes dentro da de cada objeto existente em "funcionariosPorDepartamento".
    funcionariosPorDepartamento,
    ).map((departamento) => { // <- a partir da existencia do departamento, acumula os salarios do funcionarios dentro daquele departamento.
    const total = funcionariosPorDepartamento[departamento].reduce(
        (acumulador, funcionario) => acumulador + funcionario.salario,
        0,
    );
    return { // <- retorna a media salarial dos funcionarios dentro daquele departamento. 
        departamento: departamento,
        media: total / funcionariosPorDepartamento[departamento].length, 
    };
});
   
   
const maioresPagamentos = mediasSalarioPorDepartamento.filter( // <- função para filtrar salario maiores que 65000.
    (departamento) => departamento.media > 65000,
);
   