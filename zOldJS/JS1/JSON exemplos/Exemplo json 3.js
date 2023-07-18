const book1 = {
    name:'Homem-Aranha',
    author:'Stan Lee'
}
const book2 = {
    name:'Homem-Aranha',
    author:'Stan Lee'
}
//const book3 = book2

const book3 = JSON.parse(JSON.stringify(book2))

console.log(book2 === book3)