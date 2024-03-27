//Implementação árvore binaria

class NoArvore{
    constructor(chave = null, esquerda = null, direita = null){
        this.chave = chave
        this.esquerda = esquerda
        this.direita = direita
    }

    repr(){
        return (`${this.esquerda && this.esquerda.chave} <- ${this.chave} -> ${this.direita && this.direita.chave}`)
    }
}
let raiz = new NoArvore(3)
raiz.esquerda = new NoArvore(1)
raiz.direita = new NoArvore(5)
raiz.direita.direita = new NoArvore(21)
raiz.direita.esquerda = new NoArvore(20)
console.log("Árvore: ", raiz.repr())
console.log("No direita: ", raiz.direita.repr())