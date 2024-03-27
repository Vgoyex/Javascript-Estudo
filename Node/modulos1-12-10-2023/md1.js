let sum = function(a=0,b=0){
    return console.log(a + b);
}

let mult = (x,y)=>{
    return console.log(x * y);
}

//maneira de exportar pela propriedade do objeto module
module.exports.sum = sum

//outra maneira de exportar usando somente exports
exports.mult = mult

//*outra maneira de exportar também, usando this
this.lower = (str)=>{
    return console.log(str.toLowerCase());
}
this.name = "Fer"

class P{
    constructor(name){
        this.name = name;
    }
}
exports.People = P

// console.log(module.exports)
