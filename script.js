const formulario = document.querySelector('form')

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    let nome = formulario.nome.value;
    let celular = formulario.celular.value;

    console.log(nome, celular)
    alert("O nome é "+nome+" e o contanto é "+celular);
})