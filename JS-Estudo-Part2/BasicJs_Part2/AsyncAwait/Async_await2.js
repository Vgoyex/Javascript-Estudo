//Async Await
var fetch = require("node-fetch");
// var http = require("http");
// var express = require("express");

const myPromise2 = new Promise((resolve, reject) => {
    const name = "Fer"
    if (name === "Fer") {
        resolve("Usuário encontrado!")
    } else {
        reject("Usuário não encontrado!")
    }
})

async function teste2() {
    const userName = "vgoyex"
    try {
        let a = fetch(`https://api.github.com/users/${userName}`, {
            method: "GET",
            headers: {
                Accept: "application/vnd.github.v3+json"
            },
        }).then((response) => {
            // return console.log(typeof response)
            return response.json();
        }).catch(err => {
            return `Erro no fetch -> ${err}`
        })
        return a
    } catch (err) {
        return `Erro na função {teste()} ${err}`
    }
}

async function teste() {
    const userName = "vgoyex"
    try {
        let a = fetch(`https://api.github.com/users/${userName}`, {
            method: "GET",
            headers: {
                Accept: "application/vnd.github.v3+json"
            },
        }).then((response) => {
            // return console.log(typeof response)
            return response.json();
        }).catch(err => {
            return `Erro no fetch -> ${err}`
        })
        return a
    } catch (err) {
        return `Erro na função {teste()} ${err}`
    }
}

async function a() {
    let a = await teste();
    let b = await teste2();
    // if(a)return console.log(a.repos_url);
    return console.log(a.login, b.login)
}a()


