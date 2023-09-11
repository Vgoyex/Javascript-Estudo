//defineProperty / defineProperties

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  let estoquePrivado = estoque;
  Object.defineProperty(this, "estoque", {
    enumerable: true, //mostra a chave
    configurable: false, //valor configuravel?
    get: function () {
      return estoque;
    },
    set: function (valor) {
      if (typeof valor != "number") {
        throw new TypeError("Bad Value");
      }
      estoquePrivado = valor;
    },
  });
}

function criaProd(){
    return{
        get nome(){
            return nome;
        },
        set nome(valor){
            nome = valor;
        }
    }
}

let p1 = new Produto("Camiseta", 29, 1);
p1.estoque = 14;
console.log(p1.estoque);

const produto = {nome: "Fe", preco:10.99, material:"madeira"};

for(let entry of Object.entries(produto)){
    console.log(entry);
}
