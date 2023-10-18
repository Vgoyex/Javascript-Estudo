const pessoa = {
    nome: `Fernando`,
    sobrenome: `Goya`,
    idade: 19,
    //* Método dentro do objeto
    ola(){
        console.log(`Olá meu nome é ${this.nome} e minha idade é ${this.idade}`);
    },

    incremento(){
        this.idade++;
    }

};


let obj = {
    "a":"",
}
pessoa.ola();
pessoa.incremento();
pessoa.ola();