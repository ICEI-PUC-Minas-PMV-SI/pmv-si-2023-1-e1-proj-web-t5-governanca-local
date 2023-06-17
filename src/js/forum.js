let textarea = document.getElementById('sendcoment');


function enviarComentario(){
if (textarea.value == "") {
    alert("Digite algo antes de enviar!")
} else {
    let comentarioUser = JSON.parse(localStorage.getItem('comentarioUser') || '[]')

    comentarioUser.push ({
        mensagem: textarea.value
    });
    
    localStorage.setItem('comentarioUser', JSON.stringify(comentarioUser));   
    location.reload()
    
}
}

var mensagemSalva = JSON.parse(localStorage.getItem('comentarioUser'));
let userlogado = JSON.parse(localStorage.getItem('userlogado'));
var mensagem = mensagemSalva[0].mensagem;
var mensagem2 = mensagemSalva[1].mensagem;

let campo = document.getElementById('coment');
let pessoa = document.getElementById('pessoa');
pessoa.innerHTML = userlogado.nome;
campo.innerHTML = mensagem;

// Fazer i++ dos comentários

let campo2 = document.getElementById('comentario2');
campo2.innerHTML = mensagem2;


