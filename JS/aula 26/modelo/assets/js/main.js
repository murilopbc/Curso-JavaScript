// Capturar evento de submit do formulário

const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e){
    e.preventDefault();
    const inputPeso = e.target.querySelector();
    console.log(inputPeso);
    const inputAltura = e.target.querySelector();
    console.log(inputAltura);
});

function criaP(){
    const p = document.createElement('p');
    return p;

}

function setResultado (msg){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();
}