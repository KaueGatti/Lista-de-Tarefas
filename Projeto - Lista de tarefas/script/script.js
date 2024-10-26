let inputTexto = document.getElementById("inputTexto");
let areaTarefas = document.getElementById("areaTarefas");
let x = 0;

function addbtt(event) {
  event.preventDefault();
  areaTarefas.innerHTML += `
        <div id="tarefa${x}" class="tarefa">
            <input id="checkbox${x}" class="checkbox" type="checkbox" onclick="mudarSituacao(${x})" />
            <p id="textoTarefa${x}" class="textoTarefa">${inputTexto.value}</p>
            <button id="${x}" class="bttDelete" onclick="deletar(${x})">Deletar</button>
        </div>`;
  inputTexto.value = "";
  x += 1;
}

function deletar(id) {
  let tarefa = document.getElementById(`tarefa${id}`);
  if (tarefa) {
    tarefa.remove();
  }
}

function mudarSituacao(id) {
  let checkbox = document.getElementById(`checkbox${id}`);
  let textoTarefa = document.getElementById(`textoTarefa${id}`);
  let tarefa = document.getElementById(`tarefa${id}`);
  let bttDelete = document.getElementById(id);
  if (checkbox.checked) {
    textoTarefa.style.textDecoration = "line-through";
    tarefa.style.backgroundColor = "rgb(115, 240, 163)";
    tarefa.style.opacity = "0.5";
    areaTarefas.appendChild(tarefa);
  } else {
    textoTarefa.style.textDecoration = "none";
    tarefa.style.backgroundColor = "white";
    tarefa.style.opacity = "1";
  }
}
