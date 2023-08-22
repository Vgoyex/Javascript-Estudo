const d1 = document.querySelector(".d1");
const display = document.querySelector(".display");

document.addEventListener("click", (event) => {
  const element = event.target;
  if (element.classList.contains("submit-calc")) {
    calc();
  }

  if (element.classList.contains("num")) {
    if (element) {
      showNum(element);
    }
  }
});

document.addEventListener("keypress", (event) => {
  if (event.code == `Enter`) {
    calc();
  }
});

function createCalc() {
  return {
    start() {},
    clear() {
      return (display.value = "");
    },
    del() {
      return (display.value = display.value.slice(0, -1));
    },
    submit() {},
  };
}

function showNum(element) {
  if (element.classList.contains("clear")) {
    return calculadora.clear();
  }
  if (element.classList.contains("submit-calc")) {
    return calculadora.submit();
  }
  if (element.classList.contains("del")) {
    return calculadora.del();
  }
  let text = (display.value += element.textContent);
  return text;
}

function calc() {
  debugger;
  let dv = display.value;
  try {
    ev = eval(dv);
    if (!ev || ev == NaN) {
      alert("Conta Inválida 1");
      return;
    }
  } catch (e) {
    alert("Conta Inválida 2");
    return;
  }
  return (display.value = ev);
}

const calculadora = createCalc();
calculadora.start();


