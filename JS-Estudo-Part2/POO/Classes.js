class Teste {
  //Criando o construtor da classe
  constructor(n1, n2) {
    this.n11 = n1;
    this.n22 = n2;
  }

  metodo1() {
    console.log(this.n11);
  }

  metodo2() {
    console.log(this.n22);
  }
}

let teste = new Teste("Guz", "Fol");
// teste.metodo1();
// teste.metodo2();

//----------------------------------------------------------

//Aqui Symbol é uma espécie de private
const _velocidade = Symbol("velocidade");

class Carro {
  constructor(nome) {
    this.nome = nome;
    this[_velocidade] = 0;
  }

  get velocidade() {
    console.log(`GETTER - velocidade = ${this[_velocidade]}`);
    return this[_velocidade];
  }
  set velocidade(valor) {
    console.log("SETTER");
    if (typeof valor != "number") return false;
    if (valor >= 100 || valor <= 0) return false;
    else this[_velocidade] = valor;
  }

  acelerar() {
    if (this[_velocidade] >= 100) {
      console.log("===");
      return "--";
    }
    this[_velocidade]++;
  }

  frear() {
    if (this[_velocidade] <= 0) return "--";
    this[_velocidade]--;
  }
}

let carro = new Carro("Fusca");
//Chamando setter
carro.velocidade = 1;
//Chamando getter
carro.velocidade;
