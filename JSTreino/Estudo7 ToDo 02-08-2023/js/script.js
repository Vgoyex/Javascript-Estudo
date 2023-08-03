const d1 = document.querySelector(".d1");
const btnTarefa = document.querySelector(".add-tarefa");
const inputDaTarefa = document.querySelector(".input-tarefa");
const tarefas = document.querySelector(".tarefas");

//* Eventos onclick
document.addEventListener("click", (event) => {
  const element = event.target;
  if (element.classList.contains("add-tarefa")) {
    addTarefa();
  }
  if (element.classList.contains("apagar-tarefa")) {
    apagaTarefa(element);
  }
  if (element.classList.contains("clear-all")) {
    clearAll();
  }
});

//* Eventos onpress
document.addEventListener("keypress", (event) => {
  const element = event.target;
  if (element.classList.contains("input-tarefa")) {
    if (event.code == "Enter") {
      addTarefa();
    }
  }
});

//* Cria o elemento li
function criaLi() {
  const li = document.createElement("li");
  return li;
}

//* Cria um botão dentro do elemento(li)
//*que está sendo passado como argumento da função
function createEraseButton(li) {
  li.innerText += "  ";
  const eraseButton = document.createElement("button");
  eraseButton.innerText = `Apagar`;
  eraseButton.setAttribute("class", "apagar-tarefa"); //* Setando atributo
  eraseButton.setAttribute("title", "Apaga esta tarefa");
  li.appendChild(eraseButton);
}

//* A cada vez que a função é chamada o input fica limpo e em foco(pronto para digitar novamente)
function clearInput() {
  inputDaTarefa.value = "";
  inputDaTarefa.focus();
}

//* Função para adicionar uma nova tarefa
function addTarefa(textInput) {
  let liContent = document.querySelector(".input-tarefa").value;

  //* Verifica se na chamada tem algum parâmetro e se tiver, o parâmetro é atribuido ao liContent,ou seja,
  //* no valor do input
  if (textInput) {
    liContent = textInput;
  }
  //* Verifica se o input tem valor
  if (!liContent) {
    return;
  }
  ////* Verifica itens duplicados
  // let local = JSON.parse(localStorage.getItem("tarefas-local-storage"))
  // for(let i in local){
  //   if(liContent == local[i]){
  //     return;
  //   }
  // }
  const li = criaLi();
  li.innerText = liContent;
  let add = tarefas.appendChild(li);

  createEraseButton(li);
  salvarTarefas();
  clearInput();
}

//* Função para salvar as tarefas no localStorage
function salvarTarefas() {
  //* Seleciona todas as tarefas, ou seja, todos os li da lista
  const liTarefas = tarefas.querySelectorAll("li");
  const ls = [];

  //* Joga todos os elementos da lista, todos os li, tira o 'Apagar' e joga no array
  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace("Apagar", "").trim();
    ls.push(tarefaTexto);
    console.log(ls);
  }
  //* Seta o nome do local storage, nesse caso como 'tarefas-local-storage', contendo todos os itens do array
  const tarefasJSON = JSON.stringify(ls);
  localStorage.setItem("tarefas-local-storage", tarefasJSON);
}

//* Função que pega o que está em local storage e mostra em tela
function addTarefasSalvas() {
  //* Pega as tarefas, ou itens, já salvos no localStorage
  const tarefas = localStorage.getItem("tarefas-local-storage");
  const listaDeTarefas = JSON.parse(tarefas);
  //* Adiciona um por um
  for (let tarefa of listaDeTarefas) {
    addTarefa(tarefa);
  }
}
//* Chamo a função sempre para que sempre que a página seja carregada,
//para sempre mostrar as tarefas já salvas
addTarefasSalvas();

//* Função que apaga tarefas, tanto em tela quanto no localStorage
function apagaTarefa(element) {
  element.parentElement.remove();
  salvarTarefas();
}

//* Função que limpa todas as tarefas, tanto em tela quanto em localStorage
function clearAll() {
  let elementParaApagar = document.querySelector(".tarefas");
  let parseItensLocalStorage = JSON.parse(
    localStorage.getItem("tarefas-local-storage")
  );
  if (elementParaApagar) {
    for (let tarefas of parseItensLocalStorage) {
      elementParaApagar.firstChild.remove();
      salvarTarefas();
    }
  }
}
