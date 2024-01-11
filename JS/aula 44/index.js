// try , catch, throw

function soma(x, y){
    if(isNaN(x) || isNaN(y)) {
        throw new error ('Valor Inválido');
    }
    return x + y;

}
try{
    console.log(soma(23, 3));
    console.log(soma('1', 3));
} catch(error){
    console.log(error);
    console.log('Alguma coisa amigável para o usuário')
}