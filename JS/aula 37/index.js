// For clássico; For in; For of


//const nome = 'Murilo Poltronieri';

//for (let i = 0;  i < nome.length; i++) {
    //console.log(nome[i]);
//}

//const nome = 'Caio Farias';
//for (let i in nome){
    //console.log(nome[i])
//}

//for ( let valor of nome) {
    //console.log(valor);

//}

//const nomes = ['João', 'Murilo', 'Caio'];

//for (let names of nomes){
   // console.log(names);
//}

// Com  objetos utiliza-se o for in

const pessoa = {
    nome: 'Murilo',
    sobrenome: 'Poltronieri',
    idade: 18
};

for (let keys in pessoa){
    console.log(keys, pessoa[keys]);
}

// For clássico geralmente com iteráveis - array e strings
// For in retorna o índice ou chaves - string, arrays, objetos
// For of retorna o valor em si - iteráveis, arrays ou strings



