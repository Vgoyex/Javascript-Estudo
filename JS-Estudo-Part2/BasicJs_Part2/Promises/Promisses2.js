//Promises

// function wait(message, time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(message);
//         }, time);
//     })
// }
// wait("Some Text", 1000).then(resp => {
//     console.log(resp);
// });



// const myPromise = new Promise((resolve, reject) => {
//     const name = "Fer"
//     if (name === "Fer") {
//         resolve("Usuário encontrado!")
//     } else {
//         reject("Usuário não encontrado!")
//     }
// })

// //Só executo a Promise quando encadeio um método then nela
// myPromise.then((data) => {
//     console.log(data)
// })

//Encadeamento de then's

const myPromise2 = new Promise((resolve, reject) => {
    const name = "Fer"
    if (name === "Fer") {
        resolve("Usuário encontrado!")
    } else {
        reject("Usuário não encontrado!")
    }
})

//Posso passar qualquer nome como argumento na chamada da Promise
myPromise2.then((data) => {
    return data.toLowerCase()
}).then((stringModificada) => {
    console.log(stringModificada)
    return stringModificada
}).then((data2) => {
    return console.log(data2 + "2")
})

//Retorno do catch

const myPromise3 = new Promise((resolve, reject) => {
    const name = "A"
    if (name === "Fer") {
        resolve("Usuário encontrado!")
    } else {
        reject("Usuário não encontrado!")
    }
})

myPromise3.then((data) => {
    return console.log(data)
}).catch((err) => {
    console.log("Erro -> " + err);
})

//Resolver varias Promises com metodo all(), que finaliza quando todas as promessas estiverem resolvidas
let p1 = new Promise((resolve, reject) => {
    resolve("P1 ok")
})

let p2 = new Promise((resolve, reject) => {
    resolve("P2 ok")
})

let p3 = new Promise((resolve, reject) => {
    resolve("P3 ok")
})

const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
    console.log(data)
})

//Varias Promises com método race(), que finaliza assim que alguma promessa for resolvida, ignorando as outras promessas

let p4 = new Promise((resolve, reject) => {
    resolve("P4 ok")
})

let p5 = new Promise((resolve, reject) => {
    resolve("P5 ok")
})

let p6 = new Promise((resolve, reject) => {
    resolve("P6 ok")
})

const resolveAllRace = Promise.race([p4, p5, p6]).then((data) => {
    console.log(data)
})

//Fetch request na API do GitHub
//Fetch API, API para fazer requisições assincronas, nativo do JS
//Retorna uma promessa, ou seja, resolve a requisição para depois (then) retornar algo
const userName = "vgoyex"

fetch(`https://api.github.com/users/${userName}`, {
    method: "GET",
    headers: {
        Accept: "application/vnd.github.v3+json"
    },
}).then((response)=> {
    console.log(response)
    console.log(typeof response)
    return response.json();
}).then((data)=>{
    console.log(data)
}).catch((err)=> {
    return console.log("Houve algum erro -> " + err)
})
