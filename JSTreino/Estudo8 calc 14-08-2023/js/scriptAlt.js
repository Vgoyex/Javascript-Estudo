//* Outra maneira de realizar o estudo 8, utilizando factory function
function Calculadora() {
  this.display = document.querySelector(".display");

  this.inicia = () => {
    this.getClicks();
    this.getEnter();
  };

  this.getEnter = () => {
    document.addEventListener("keypress", (event) => {
      if (event.code == "Enter") {
        this.realizaConta();
      }
    });
  };

  this.getClicks = () => {
    document.addEventListener("click", (event) => {
      const element = event.target;
      if (element.classList.contains("num")) {
        this.addNumDisplay(element);
      }
      if (element.classList.contains("del")) {
        this.del(element);
      }
      if (element.classList.contains("clear")) {
        this.clear(element);
      }
      if (element.classList.contains("eq")) {
        this.eq();
      }
      if (element.classList.contains("submit-calc")) {
        this.eq();
      }
    });
  };

  this.addNumDisplay = (element) => {
    this.display.value += element.innerText;
    this.display.focus();
  };

  this.clear = () => {
    this.display.value = "";
  };

  this.del = () => {
    this.display.value = this.display.value.slice(0, -1);
  };

  this.realizaConta = () => {
    try {
      const conta = eval(this.display.value);
      if (!conta) {
        alert("Err");
      }
    } catch (e) {
      alert("Conta Inválida");
    }
  };
}
const calculadora = new Calculadora();
calculadora.inicia();
