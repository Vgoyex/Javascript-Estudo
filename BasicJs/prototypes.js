//Constructor Function  ⤵
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};

//Instanciando
let p1 = new Pessoa("A", "B");

console.log(typeof p1);

function Product(name, preco) {
  this.name = name;
  this.preco = preco;
}

Product.prototype.desconto = function (desconto) {
  this.preco = this.preco - this.preco * (desconto / 100);
};

//Criar métodos através de prototypes é melhor e é uma forma de 'polimorfismo'
Product.prototype.aumento = function (aumento) {
  this.preco = this.preco + this.preco * (aumento / 100);
};

p1 = new Product("Camisa", 50);
p1.desconto(10);

console.log(p1);

//Objeto literal
p2 = {
  name: "X",
  preco: 50,
};

//Object.setPrototypeOf(); é como se eu estivesse fazendo uma herança, tudo que tem no prototype de Product
//agora  também existe em p2
Object.setPrototypeOf(p2, Product.prototype);

//Chamando um método do prototype de Product em p2
p2.desconto(15);


//-------------------------------- + Exemplos -----------------------------
function Camisa(nome, preco, cor) {
  Product.call(this, nome, preco);
  this.cor = cor;
}
Camisa.prototype = Object.create(Product.prototype);
Camisa.prototype.contructor = Camisa;

//Espécie de sobrecarga do método aumento
Camisa.prototype.aumento = function (percent) {
  this.preco = this.preco + this.preco * (percent / 100);
};

function Caneca(nome, preco, material, estoque) {
  Product.call(this, nome, preco);
  this.material = material;
  this.estoque = estoque;
  Object.defineProperty(this, "estoque", {
    enumerable: true,
    configurable: false,
    get: function () {
      return estoque;
    },
    set: function (valor) {
      if (typeof valor != "number") return;
      estoque = valor;
    },
  });
}

Caneca.prototype = Object.create(Product.prototype);
Caneca.prototype.constructor = Caneca;

let caneca = new Caneca("Caneca", 13, "Plastico", 5);
caneca.estoque = 10;
console.log(caneca);
