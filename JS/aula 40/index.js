const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let numero of numeros){

    if (numero === 5){
        break;
    }
    if  (numero === 2){
        continue;
    }
    console.log(numero);
}

// continue - continua para a próxima iteração
// break - para o laço de repetição