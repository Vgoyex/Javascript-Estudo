function showDate() {
  const date = document.querySelector(".date");
  const p = document.createElement("p");

  const dataObject = new Date();
  let setDate = constructDate(dataObject);

  if (setDate) {
    date.classList.add("fundo-success");
    p.classList.add("letra");
    p.innerHTML = setDate;
    date.appendChild(p);
  } else {
    date.innerHTML = `Erro`;
  }
}

function constructDate(data) {
  const ano = zeroBehind(data.getFullYear());
  const mes = (() => {
    let getMonth = data.getMonth() + 1;
    switch (getMonth) {
      case 1:
        return `janeiro`;
      case 2:
        return `fevereiro`;
      case 3:
        return `março`;
      case 4:
        return `abril`;
      case 5:
        return `maio`;
      case 6:
        return `junho`;
      case 7:
        return `julho`;
      case 8:
        return `agosto`;
      case 9:
        return `setembro`;
      case 10:
        return `outubro`;
      case 11:
        return `novembro`;
      case 12:
        return `dezembro`;
    }
  })();
  const dia = zeroBehind(data.getDate());
  const hora = zeroBehind(data.getHours());
  const min = zeroBehind(data.getMinutes());
  const weekDay = (() => {
    let getDay = data.getDay();
    switch (getDay) {
      case 0:
        return `domingo`;
      case 1:
        return `segunda-feira`;
      case 2:
        return `terça-feira`;
      case 3:
        return `quarta-feira`;
      case 4:
        return `quinta-feira`;
      case 5:
        return `sexta-feira`;
      case 6:
        return `sábado`;
    }
  })();
  return `${weekDay}, ${dia} de ${mes} de ${ano} ${hora}:${min}`;
}

function zeroBehind(num) {
  return num >= 10 ? num : `0${num}`;
}

showDate();
