/* 
const tresHoras = 60 * 60 * 3 * 1000; // 3 horas em milesimos de segundo ms
const umDia = 60 * 60 * 24 * 1000; // 1 dia em milesimos de segundo ms
*/

const dataT = new Date();
const ano = dataT.getFullYear();
const mes = dataT.getMonth() + 1;
const dia = dataT.getDate();
console.log(dataT);
console.log(`Dia ${dia} mês ${mes} ano ${ano}`);

function formatData(data) {
  const ano = zeroBehind(data.getFullYear());
  const mes = zeroBehind(data.getMonth() + 1);
  const dia = zeroBehind(data.getDate());
  const seg = zeroBehind(data.getSeconds());
  const hora = zeroBehind(data.getHours());
  const min = zeroBehind(data.getMinutes());
  return `dia${dia}/mes${mes}/ano${ano} ${hora}:${min}:${seg}`;
}

function zeroBehind(num){
    return num >= 10 ? num : `0${num}`;
}

const exibeData = formatData(dataT);
console.log(exibeData);