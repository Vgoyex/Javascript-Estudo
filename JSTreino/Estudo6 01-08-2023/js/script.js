const iniciar = document.querySelector(".iniciar");
const parar = document.querySelector(".parar");
const zerar = document.querySelector(".zerar");
const timer = document.querySelector(".timer");

let intervalo;
let segundos = 0;
let minutos = 0;
let horas = 0;
const relogioZerado = "00:00:00";

timer.classList.add("timer");
timer.innerHTML = relogioZerado;

//* Função para adicionar eventos nos botões
function eventButtons() {
  iniciar.addEventListener("click", start);
  parar.addEventListener("click", stop);
  zerar.addEventListener("click", zerarF);
}

//* Função para startar o timer, chamando a função do timerCount(). A função também faz um clearInterval() para não gerar vários "intervalos"
//* caso não existisse o clearInterval() a cada vez que chamo a função start() iria startar/criar um novo "intervalo", assim o timer nunca iria parar
//* quando chamasse a função stop()
function start() {
  timer.classList.remove("parado");
  timer.classList.add("timer");
  clearInterval(intervalo);
  timerCount();
}

function stop() {
  timer.classList.remove("timer");
  timer.classList.add("parado");
  clearInterval(intervalo);
}

//* Função para zerar o timer, retornando "00:00:00" para o parágrafo(usando a variável timer)
function zerarF() {
  timer.classList.remove("parado");
  timer.classList.add("timer");
  segundos = 0;
  minutos = 0;
  horas = 0;
  return (timer.innerHTML = `${zeroBehind(horas)}:${zeroBehind(minutos)}:${zeroBehind(segundos)}`);
}

//* Função para fazer o timer, essa função será executada a cada vez que o botão "Iniciar" for apertado, ou a cada vez que a função start() for chamada,
//* porém utilizando o setInterval(), é criado um loop infinito que é executado de 1 em 1 segundo e todo o bloco da função, primeiro parâmetro, sendo executado,
//* ou seja fazendo o timer funcionar
function timerCount() {
  intervalo = setInterval(() => {
    segundos++;
    if (segundos > 59) {
      segundos = 0;
      minutos++;
    }
    if (minutos > 59) {
      minutos = 0;
      horas++;
    }
    timer.innerHTML = `${zeroBehind(horas)}:${zeroBehind(minutos)}:${zeroBehind(segundos)}`;
  }, 1000);
}

//* Função para formatar os números do timer
function zeroBehind(num) {
  return num >= 10 ? num : `0${num}`;
}

//* Assim que carregar a página os eventos da função eventButtons estarão prontos para serem usados
window.addEventListener("load", eventButtons);


/*//*================= Outra, e talvez melhor, maneira de fazer ↧ ================= 

const timer = document.querySelector(".timer");

let intervalo;
let segundos = 0;
let minutos = 0;
let horas = 0;
const relogioZerado = "00:00:00";

timer.classList.add("timer");
timer.innerHTML = relogioZerado;

document.addEventListener("click", (eventParam) => {
  const elemento = eventParam.target;
  if (elemento.classList.contains("iniciar")) {
    start;
  }
  if (elemento.classList.contains("parar")) {
    stop;
  }
  if (elemento.classList.contains("zerar")) {
    zerarF;
  }
});

function start() {
  timer.classList.remove("parado");
  timer.classList.add("timer");
  clearInterval(intervalo);
  timerCount();
}

function timerCount() {
  intervalo = setInterval(() => {
    segundos++;
    if (segundos > 59) {
      segundos = 0;
      minutos++;
    }
    if (minutos > 59) {
      minutos = 0;
      horas++;
    }
    timer.innerHTML = `${zeroBehind(horas)}:${zeroBehind(minutos)}:${zeroBehind(segundos)}`;
  }, 1000);
}

function stop() {
  timer.classList.remove("timer");
  timer.classList.add("parado");
  clearInterval(intervalo);
}

function zerarF() {
  timer.classList.remove("parado");
  timer.classList.add("timer");
  segundos = 0;
  minutos = 0;
  horas = 0;
  return (timer.innerHTML = `${zeroBehind(horas)}:${zeroBehind(minutos)}:${zeroBehind(segundos)}`);
}

function zeroBehind(num) {
  return num >= 10 ? num : `0${num}`;
}
*/
