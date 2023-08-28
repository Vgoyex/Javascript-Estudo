//Factory / Constructor / Class

//Factory  ⤵
function createPeople(name, surname){
    return{
        name,
        surname,
        // Método com a palavra get, "finge" ser uma proprieadade do objeto
        /* Sem a palavra get, se eu quisesse acessar fullName teria que 
           chamar a função: 
           fullName();
        */
        get fullName(){
            return `${this.name} ${this.surname}`;
        }
    }
}
const p1 = createPeople(`Fer`, `Goya`);
console.log(p1.fullName);
// -------------------------------------------------------------------------------

//Constructor  ⤵
function Pessoa(name, surname){
    this.name = name;
    this.surname = surname;
    //Caso queira travar/congelar o objeto -> Object.freeze(this);
}

//palavra new, cria um objeto vazio {}
const p2 = new Pessoa(`Fer`,`Goya`);
console.log(p2);
// -------------------------------------------------------------------------------

//Class  ⤵
class Pessoa{
    name;
    surname;
}