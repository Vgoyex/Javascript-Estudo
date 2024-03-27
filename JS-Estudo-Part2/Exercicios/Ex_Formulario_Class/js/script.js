class ValidaForm {
  constructor() {
    this.formulario = document.querySelector(".formulario");
    this.events();
  }
  events() {
    this.formulario.addEventListener("submit", (event) => {
      this.handleSubmit(event);
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.checkFields();
    console.log("Formulario não enviado");
  }
  checkFields() {
    let valid = true;
    
    for(let errorText of this.formulario.querySelectorAll(".error-text")){
      errorText.remove()
    }

    for (let field of this.formulario.querySelectorAll(".valid")) {
      let fieldName = field.previousElementSibling.innerText;
      
      if (!field.value) {
        this.createErr(field, `${fieldName} -> Campo vazio!`);
        valid = false;
      }

      if(field.classList.contains("usuario")){
        if(this.validUser() == false){
          this.createErr(field, `${fieldName} -> Inválido!`);
          valid = false
        }
      }
      if(field.classList.contains("senha")){
        if(this.validPassword() == false){
          this.createErr(field, `${fieldName} -> Inválido!`);
          valid = false
        }
      }
      if(field.classList.contains("rpt_senha")){
        if(this.validRpt() == false){
          this.createErr(field, `${fieldName} -> Inválido!`);
          valid = false
        }
      }

    }
  }

  validRpt(){
    let rpt_senha = document.querySelector("#rpt_senha")
    if(rpt_senha.value != senha.value){
      return false
    }
  }
  validPassword(){
    let senha = document.querySelector("#senha")
    if(senha.value.length > 12 || senha.value.length < 6){
      return false
    }
  }

  validUser(){
    let usuario = document.querySelector("#usuario")
    if(usuario.value.length > 12 || usuario.value.length < 3){
      return false
    }
  }
  createErr(field, msg) {
    let div = document.createElement("div");
    div.innerHTML = `${msg}`;
    div.classList.add("error-text");
    field.insertAdjacentElement("afterend", div);
  }
}



function init() {
  const validaForm = new ValidaForm();
}

init();
