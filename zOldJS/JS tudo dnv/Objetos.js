class Calico{
    constructor(v1, v2, v3){
        this.marca = v1
        this.modelo = v2
        this.ano = v3
    }
}

const jhonsons = new Calico("Gap", "Moletom", "2003")

const person = {
    name:'Fernando',
    age: 19,
    weight: 91, 
    isAdimn: true
}

console.log(`${person.name} tem ${person.age} anos`)
console.log(jhonsons.marca)
console.log(Calico)


