// Criar as variáveis para selecionar as classes contidas no html

const inputNewTask = document.querySelector('.input-new-task');
const btnTarefa = document.querySelector('.btn-add-task');
const tarefas  = document.querySelector('.task');


// Função que cria um elemento chamado 'li' 

function criaLi(){
    const li = document.createElement('li');
    return li;
}

// Adicionar um escutador ao pressionar  tecla 'ENTER' assim que for criado uma tarefa

inputNewTask.addEventListener('keypress', function(e) {
    if(e.keyCode === 13){
        if(!inputNewTask.value) return;
        criaTarefa(inputNewTask.value);
    }
});

// Função para limpar o input - chamo ela após criar uma tarefa

function limpaInput() {
    inputNewTask.value = '';
    inputNewTask.focus();
}

// função para criar um elemento 'botão' que serve para apagar uma taefa criada

function criaBotaoApagar(li){
    li.innerText += '';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    li.appendChild(botaoApagar);
}

// função para criar uma tarefa

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefa();
}

// Adicionar um escutador 'click' para que crie uma tarefa. Obrigatoriamente deve conter algo no input para salvar

btnTarefa.addEventListener('click', function() {
    if (!inputNewTask.value) return;
    criaTarefa(inputNewTask.value);
});

// Adicionar um escutador 'click' que ao clicar em 'apagar', ele irá remover o item da lista de tarefas

document.addEventListener('click', function(e){
    const el = e.target;
    if(el.classList.contains('apagar')){
        el.parentElement.remove();

    }
});

// função para salvar uma tarefa em um array

function salvarTarefa(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of listaDeTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJson = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJson);

}

// função para adicionar as tarefas criadas no localStorage

function addTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}

addTarefasSalvas();
