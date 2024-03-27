class Eletronic {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      return console.log(`${this.nome} já está ligado`);
    } else {
      this.ligado = true;
      return console.log(`Ligou o ${this.nome}`);
    }
  }

  desliagr() {
    if (!this.ligado) {
      return console.log(`${this.nome} já está desligado`);
    } else {
      this.ligado = false;
      return console.log(`Desligou o ${this.nome}`);
    }
  }
}

class Cell extends Eletronic {
  constructor(nome, cor) {
    // super é basicamente chamar o constructor da classe "pai"
    //Toda vez que fazer uma herança, preciso chamar o super
    super(nome);
    this.cor = cor;
  }
}

class Notebook extends Eletronic {
  constructor(nome, cor) {
    super(nome);
    this.cor = cor;
  }

  ligar(){
    console.log(`Método ligar da class Notebook`);
  }
}

let a = new Cell(`Iphone 13`, `Preto`);
let b = new Notebook(`Macbook`, `Branco`);
a.ligar();
b.ligar();
