const pessoa1 = new Object();
const p2 = {};
pessoa1.nome= `Fer`;
p2.nome = `Ff`;
pessoa1.idade = 20;
p2.idade = 19;


pessoa1.speak = function(){
    return(`${this.nome} speaking`);
}

pessoa1.getName = function(){
    return this.name;
}

pessoa1.getDtNasc = function(){
    const dtAtual = new Date();
    return this.nasc = dtAtual.getFullYear() - this.idade;
}
pessoa1.getDtNasc();
pessoa1.speak();

console.log(pessoa1.getDtNasc());