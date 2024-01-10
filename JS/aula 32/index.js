//const numeros = [100, 200, 300, 400, 500, 600];
//const [um, ,tres, , cinco] = numeros;
//console.log(um, tres, cinco)


// Atribuição via desestruturação de arrays

const numeros = [[1,2,3], [4,5,6], [7,8,9]];
const [lista1, ...resto ] = numeros;
console.log(lista1, resto);


