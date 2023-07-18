function * forever(){
    let value = 1
    while(true){ 
        try{
        let reset = yield value++
        if (reset) value =1
        } catch(e){
            console.log(e)
        }
    }
}

function today(){
    const date = new Date()
    console.log(date)
}

const foreverGenerator = forever ()
console.log(foreverGenerator.next())
console.log(foreverGenerator.next())
console.log(foreverGenerator.next())
today()
console.log(foreverGenerator.throw('error'))
console.log(foreverGenerator.next(true))
console.log(foreverGenerator.next())

/*
Por meio do yield é possível retornar
valores de forma similar ao return
*/
/*
O retorno do método next é um objeto
contendo o value e done, seguindo o
protocolo de iteração
*/
/*
Ao usar um yield, a execução da função é pausada 
até o método next ser invocado novamente
*/
/* 
Os generators utilizam o método next para iterar sobre
os valores disponíveis durante a execução da função
*/ 
/*
Defino um generator colocando um * do lado da função
*/ 
/*
Generators tornam possível pausar a execução 
de uma determinada função, permitindo a utilização 
do event loop de forma cooperativa
*/