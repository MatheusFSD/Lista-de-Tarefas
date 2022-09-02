const form = document.getElementById("botaoForm")
const tarefas = JSON.parse(localStorage.getItem("tarefa")) || [];

tarefas.forEach((elemento) => {
    criaTarefa(elemento);
})

form.addEventListener("submit", (evento) => {
    const novaTarefa = evento.target.elements['terefa'];
    evento.preventDefault();

    const tarefaAtual = {
        "tarefa": novaTarefa.value
    }

    tarefaAtual.id = tarefas[tarefas.length - 1] ? (tarefas[tarefas.length - 1]).id + 1 : 0;

    criaTarefa(tarefaAtual);

    tarefas.push(tarefaAtual);


    localStorage.setItem("tarefa", JSON.stringify(tarefas));

    novaTarefa.value = "";
})

function criaTarefa(tarefa) {

    const novaDiv = document.createElement('div');
    const novoLabel = document.createElement('label');
    const novoCheckbox = document.createElement('input');
    const novoSpan = document.createElement('span');
    const novaTarefa = document.createElement('p');
    const novoBotao = document.createElement('button');

    novaDiv.classList.add("lista__item");
    novoLabel.classList.add("lista__item-checkbox");
    novoCheckbox.classList.add("checkbox");
    novoSpan.classList.add("checkmark");
    novoBotao.classList.add("lista__item-botão");
    novoBotao.classList.add("botão");

    novoCheckbox.type = 'checkbox';

    novoBotao.textContent = 'Excluir';

    novoLabel.appendChild(novoCheckbox);
    novoLabel.appendChild(novoSpan);
    novoLabel.appendChild(novaTarefa);

    novaDiv.appendChild(novoLabel);
    novaDiv.appendChild(novoBotao);


    novaTarefa.innerHTML = tarefa.tarefa;

    novaTarefa.dataset.id = tarefa.id;

    // console.log(tarefa.id)

    const lista = document.getElementById("lista");

    lista.appendChild(novaDiv);

    novoBotao.addEventListener("click", function() {
        deletaElemento(this.parentNode, tarefa.id); 
    });

    
}





// const botaoDeleta = document.querySelector(".lista__item-botão");

// botaoDeleta.addEventListener("click", function() {
//     deletaElemento(this.parentNode, id); 
// });

function deletaElemento(tag, id) {
    tag.remove();
    console.log(id)
    tarefas.splice(tarefas.findIndex(elemento => elemento.id === id), 1)
    console.log(tarefas)
    localStorage.setItem("tarefa", JSON.stringify(tarefas));
}