//Factory/Constructor function bobão :v
function create(name, surname, w, h) {
  return {
    name,
    surname,
    weight: w,
    height: h,

    //Uso do this. para acessar os "atributos" do objeto
    speak: function (subject) {
      return `${name} || ${subject} || ${this.weight}`;
    },

    //Para gerar um Getter basta colocar get antes do método

    //Getter
    get imc() {
      const indice = this.weight / this.height ** 2;
      return indice.toFixed(2);
    },

    //Getter
    get fullName() {
      return `${this.name} ${this.surname}`;
    },

    //Setter
    set sName(name) {
      return `Novo nome: ${name}`;
    },
  };
}

let p1 = create("F", "V", 70, 1.7);
let p2 = create(`A`, `B`, 50, 1.7);
p1.speak(`Matemática`);
p2.speak(`Port`);
p1.name = `FDS`;
console.log(p1.fullName);
