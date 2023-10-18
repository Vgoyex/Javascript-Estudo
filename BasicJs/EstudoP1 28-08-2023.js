//defineProperty / defineProperties

function Produto(nome, preco, estoque, corProd, tipo) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, "estoque", {
    enumerable: true, //mostra a chave
    value: estoque, //valor da propriedade. value pode ser até mesmo um método
    writable: false, //pode alterar o valor?
    configurable: false, //valor configuravel?
  });

  Object.defineProperties(this, {
    corProd: {
      enumerable: true, //mostra a chave?
      value: corProd, //valor da propriedade. value pode ser até mesmo um método
      writable: false, //pode alterar o valor?
      configurable: false, //valor configuravel?
    },
    tipo: {
      enumerable: true, //mostra a chave
      value: tipo, //valor da propriedade. value pode ser até mesmo um método
      writable: false, //pode alterar o valor?
      configurable: false, //valor configuravel?
    },
  });
}

let p1 = new Produto("Camiseta", 29, 1);
p1.estoque = 14;
delete p1.estoque;
console.log(p1);
