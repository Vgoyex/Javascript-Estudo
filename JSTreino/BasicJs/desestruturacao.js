let a = 'A'; //B
let b = 'B'; //C
let c = 'C'; //A
let letras = [b,c,a];
[a,b,c] = letras;
console.log(a,b,c);

let numeros = [1,2,3,4,5];
let[um,dois, ...resto] = numeros;
console.log(resto, um, dois);

const outrosNumeros = [[1,2,3],[4,5,6],[7,8,9]];
const[,,[uno]] = outrosNumeros;
console.log(uno);

const pessoa = {
 nome:"Fernando",
 sobrenome:"D.",
 endereco:{
    rua:"Rua da Silva",
    numero:15,
    complemento:"Apto 10 A",
 },
 a:1,
 b:2,
};

let{ nome: variavel, sobrenome, endereco:adress, endereco: {rua: ruaVariavel, numero: numeroVariavel}, a: variavelA } = pessoa;
console.log(variavel,sobrenome,ruaVariavel,numeroVariavel);

variavel = ()=>{
    if(variavel){
        return variavel = "auto";
    }
};
variavel();

console.log(variavel,sobrenome,adress,ruaVariavel,numeroVariavel);
