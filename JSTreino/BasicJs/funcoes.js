function cria(name, idade){
    return{
        name,
        idade
    }
}

let funcaoUmaLinha = (a) => 5+5;

let funcaoCallBack = function () {
    return `oi`;
};

let funcao2 = () =>{
    return `oi2`;
};

function createMultiply(multiplier){
    return function(n){
        return n * multiplier;
    }
}

const duplica = createMultiply(2);
const triplica = createMultiply(3);
const quadriplica = createMultiply(4);

console.log(duplica(2));
console.log(triplica(3));
console.log(quadriplica(4));

// console.log(funcao2());
// console.log(funcaoCallBack());