const livro1 = {
    nome:'Livro ',
    autor:'Autor '
}

const livro2 = {
    nome:'Livro ',
    autor:'Autor '
}
console.log(livro1 === livro2)

console.log(JSON.stringify(livro1) === JSON.stringify(livro2))


//Ótimo para comparar objetos e prototipos 