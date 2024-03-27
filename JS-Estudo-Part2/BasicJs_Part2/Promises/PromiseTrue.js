let promise = new Promise((resolve,reject) => {
    let nome = "Fernand";
    if(nome == "Fernando"){
        resolve("Fernando encontrado")
    }else{
        reject("Fernando nao encontrado");
    }
});

//argumento do then vai ser a resposta do resolve ou reject
//a promise so vai ser executada quando eu chamar o metodo then para ela

promise.then((data)=>{
    console.log(data)
}).catch(err => {
    console.log(`Erro -> ${err}`)
})


let promiseGitHub = new Promise((resolve,reject)=>{
        // let url = `https://restcountries.com/v3.1/name/Brazil`;
        let userName = "vgoyex"
        let url =  `https://api.github.com/users/${userName}`

        fetch(url,{
            method:"GET",
            header:{
                Accept: "application/vnd.github.v3+json"
            }
        }).then(resp1 => {
            return resp1.json()
        }).then(resp2 => {
            return resp2
        }).then(resp3 => {
            console.log(resp3.name)
        }).catch(err => console.log(err))       
})


let promiseBandeira = new Promise((resolve, reject) => {
    let country = "Brazil"
    let url = `https://restcountries.com/v3.1/name/${country}`;
    fetch(url,{
        method:'GET'
    }).then(primeiraResposta => {
        console.log("Primeira Resposta Bandeira")
        // console.log(primeiraResposta)
        return primeiraResposta.json()
    }).then(segundaResposta => {
        console.log("Segunda Resposta Bandeira")
        // console.log(segundaResposta)
        return segundaResposta[0]
    }).then(terceira => {
        let object = {}
        object.flag = terceira.flag
        console.log(object.flag)
    }).catch(err => console.log(err))
})

//Posso também criar uma função que retorna uma promise
function promiseF(){
    return new Promise((resolve,reject) => {
        let url = ``;
        let get = fetch(url,{
            method: "GET",
            header:{}
        }).then(response => {
            if(response)return response
        }).then(response => {
            if(response)console.log(response)
        }).catch(err => console.log("Catch promiseF Errp -> " + err));
    if(get){resolve()}
    else{reject()}
    })
}
