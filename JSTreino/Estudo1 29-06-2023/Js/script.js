function init(){
    const formulario = document.querySelector('.formulario');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];

    function recebeEventoFormulario(evento){
        evento.preventDefault();
        const nome = formulario.querySelector('.nome');
        const sobrenome = formulario.querySelector('.sobrenome');
        const peso = formulario.querySelector('.peso');
        const altura = formulario.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
        });

        console.log(pessoas);
        let cont = pessoas.length;
        resultado.innerHTML  += `<p><b>Pessoa ${cont}</b>: Nome: ${nome.value} | Sobrenome: ${sobrenome.value} | Peso: ${peso.value} | Altura: ${altura.value} </p>`;
    }

    const submitFormulario = formulario.addEventListener("submit", recebeEventoFormulario);
}
init();