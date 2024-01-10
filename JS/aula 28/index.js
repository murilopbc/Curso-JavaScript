// ano, mês, dia, hora, minuto
// Começa no índice zero
//const data = new Date(2020, 12, 7, 8, 10, 5);
//console.log(data.toString());

//const data = new Date(`2029-04-2020 20:20;59`)

function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
const dia =  zeroAEsquerda(data.getDate());
const mes =  zeroAEsquerda(data.getMonth() + 1);
const ano =  zeroAEsquerda(data.getFullYear());
const hora =  zeroAEsquerda(data.getHours());
const min =  zeroAEsquerda(data.getMinutes());
const seg = zeroAEsquerda(data.getSeconds());

return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;

}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);


