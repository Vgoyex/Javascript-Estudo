const calculateArea = function(fn) {
    return fn(Math.PI * Math.pow(this.raio, 2))
}

const circle = {
raio: 10,
calculateArea
}
const calculateAreaForCircle = calculateArea.bind(circle)
console.log(calculateAreaForCircle(Math.round))
console.log(calculateAreaForCircle(Math.ceil))
