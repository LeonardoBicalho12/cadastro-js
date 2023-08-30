function verificar() {

    let email = document.querySelector("#email").value; /* querySelector seleciona não só id como uma classe inteira, ou seja
    aplica propriedades à classe inteira */
    let senha = document.getElementById('senha').value;/* somente ID */  

 if (email == ''|| senha == '') {
    alert('obrigatório o preenchimento do email ou senha');
    document.querySelector('#email').focus();
 } else {
    pesquisa(email, senha);
 }
}
function pesquisa(email, senha) {
    if (email == "Curso.webdesingnersenai@gmail.com" && senha == "12345") {
        window.open("../assets/index.html");
    }
}