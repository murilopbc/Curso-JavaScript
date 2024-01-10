const pessoa = {
    nome: 'Murilo',
    sobrenome: 'Poltronieri',
    idade: 18,
    endereco: {
        //rua: 'Dom Pedro',
        numero: 444
    }

};
//const nome = pessoa.nome;
//console.log(nome)

// Atribuição via desestruturação

const {endereco: {rua = 'Av Lopes', numero}, endereco} = pessoa;
console.log(rua, numero, endereco);