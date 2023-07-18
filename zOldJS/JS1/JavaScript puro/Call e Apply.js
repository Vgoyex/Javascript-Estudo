const calculateArea = function(fn) {
        return fn(Math.PI * Math.pow(this.raio, 2))
}

const circle = {
    raio: 10,
    calculateArea
}

console.log(circle.calculateArea.call(circle, Math.round))
console.log('\n')
console.log(circle.calculateArea.apply(circle, [Math.ceil]))

/*Se eu quero dinamicamente passar um conjunto de parametros 
  é muito melhor usar o apply
*/