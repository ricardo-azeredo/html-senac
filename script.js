const formulario = document.querySelector('form')

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    let nome = formulario.nome.value;
    let celular = formulario.celular.value;
    let descricao = formulario.descricao.value;
    let fav_lag = formulario.fav_language.value;

    console.log(nome, celular, descricao, fav_lag)
    // alert("O nome é "+nome+" e o contanto é "+celular);
    alert(`O nome é ${nome}, o seu contato é ${celular}, o assunto é ${descricao} e a linguagem favorita é ${fav_lag}`)
})