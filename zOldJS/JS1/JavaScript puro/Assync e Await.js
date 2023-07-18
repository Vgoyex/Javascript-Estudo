function soma(a,b,){
    return new Promise (function(resolve){
            setTimeout(function(){
            resolve (a+b)
            }, 1000)
    })
}

(async function(){
    try{
        
        const functions = [
            soma(2,2),
            soma(4,4)
        ]
        const results = []
        for await(let fn of functions){
            results.push(result)
        }
        const [a,b] = results
        const result = await soma(a,b)
        console.log(result)
    }catch (e){
        console.log(e)
    }
})()