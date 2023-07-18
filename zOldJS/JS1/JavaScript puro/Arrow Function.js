const sum = (a,b) => a + b
const sub = (a,b) => a- b
const calculator = fn => (a,b) => fn(a,b)
console.log(calculator(sum)(2,2))

/*
SEMPRE QUE EU TIRO A CHAVE '{}' EU TENHO UM RETURN AUTOMATICO
E SE TIVER APENAS UM PARAMETRO POSSO TIRAR O '()' TAMBEM
*/

/*
Arrow function => eu vou substituir na variavel da função a palavra função 

EXEMPLO: 

Vou substituir: const sum = function(a,b){
    return a + b
}

Por: 

const sum = () =>{
    return a +b
}
*/