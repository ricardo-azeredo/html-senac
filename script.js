const formulario = document.querySelector('form')

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    let nome = formulario.nome.value;
    let celular = formulario.celular.value;
    let descricao = formulario.descricao.value;
    let fav_lag = formulario.fav_language.value;
    
    const checkboxes = document.querySelectorAll('input[name="ling_dominada"]:checked');
    const valoresSelecionados = Array.from(checkboxes).map(cb => cb.value);
    
    // for(let i = 0; i < checkboxes.length; i++){
        
    //     checkboxes[i].addEventListener("click", function() {
    //         if(checkboxes[i].checked){
    //             console.log(checkboxes[i].value)
    //         }
    //     })
    // }

    console.log(nome, celular, descricao, fav_lag)
    // alert("O nome é "+nome+" e o contanto é "+celular);
    alert(`O nome é ${nome}, o seu contato é ${celular}, o assunto é ${descricao}, a linguagem favorita é ${fav_lag} e as dominantes são: ${valoresSelecionados.join(", ")}`)
    
})

