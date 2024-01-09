// Argumento é o valor passado para um parâmetro

//function criaPessoa(nome, sobrenome, idade){
    //return {nome, sobrenome, idade};
//}
//const pessoa1 = criaPessoa("Murilo", "Poltronieri", 18);
//console.log(pessoa1.nome)

const pessoa1 = {
    nome: 'Murilo',
    sobrenome: 'Poltronieri',
    idade: 18,

    fala() {
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaIdade(){
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();

