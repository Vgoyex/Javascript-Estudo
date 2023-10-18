function showHour() {
  let data = new Date();
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
  });
}

//* setInterval(callback, tempo em ms) setInterval chama a função em loop no intervalo do tempo em ms
//* exemplo: setInterval(callback, 3000) chama a função de 3 em 3 segundos em loop

//* clearInterval(intervalo), serve para parar o intervalo
//* exemplo: const intervalo = setInterval(callback, 2000);
//* clearInterval(intervalo);

//* setTimeout(callback, tempo em ms), setTimeout chama a funcão depois do tempo em ms
//* exemplo: setTimeout(callback, 3000), chama a função após 3 segundos, uma única vez

const timer = setInterval(function () {
  //* Função anônima/callback
  console.log(showHour());
}, 800);

setTimeout(() => {
  clearInterval(timer);
}, 1000);

setTimeout(function () {
  console.log("Oi");
}, 5000);

