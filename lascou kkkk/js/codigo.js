function verificar(){
    let nome = document.getElementById('nome').value; 
    let cep = document.getElementById('cep').value;
    let rua = document.getElementById('rua').value;
    let bairro = document.getElementById ('bairro').value;
    let cidade = document.getElementById ('cidade').value;

    if(nome ==''){
        alert('obrigatório o preenchimento do nome');
        document.getElementById('nome').focus;
    }
    if(cep ==''){
        alert('obrigatório o preenchimento do cep');
        document.getElementById('cep').focus;
    }
    if(rua ==''){
        alert('obrigatório o preenchimento da rua');
        document.getElementById('rua').focus;
    }
    if(bairro ==''){
        alert('obrigatório o preenchimento do barrio');
        document.getElementById('bairro').focus;
    }
    if (cidade == ''){
        alert('obrigatório o preenchimento da cidade');
        document.getElementById('cidade').focus;
    }
}