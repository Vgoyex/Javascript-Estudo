//XMLHttpRequest

//xhr -> method GET
//abc -> method POST

let xhr = new XMLHttpRequest();

xhr.responseType = "json" //responseType -> tipo do dado da resposta(response), xml ou json
xhr.onreadystatechange = ()=>{
    if(xhr.readyState == 4 && xhr.status == 200){ //readyState = 4 significa que a requisição já foi concluída 
        // status significa o status da resposta da requisição
        console.log(`Response`,xhr.response);
    }else{

    }
}
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1") //aqui ele me permite enviar um method/verbo http, uma url e dizer se ele vai ser syncrono ou não

//Tudo acima é só configuração do objeto xhr

xhr.send() //Aqui é de fato onde eu estou enviando essas configs para o servidor 


let abc = new XMLHttpRequest()


let dfg = {
    "userId":12,
    "id": 30,   
    "title": "dfg",
    "body": "xyz", 
}

abc.onreadystatechange = () => {
    if(abc.readyState == 4){
        console.log(abc)
    }
}


abc.open("POST", "https://jsonplaceholder.typicode.com/posts")

abc.send(dfg)

