function sayMyName(nome){
    console.log("antes de executar a callback")
    nome()
    console.log(nome)
}

sayMyName(
    () => {
        console.log("Estou em uma callback")
    }
)

/*Callback function é uma função que esta passando como parametro para outra função

É como se ela jogasse isso:   
    () => {
    console.log("Estou em uma callback")
}


Dentro da: 
function sayMyName(nome){
    console.log("antes de executar a callback")
    nome()
    console.log(nome)
}
*/