let textarea = document.getElementById('sendcoment');
let spn = document.getElementById('spn');
let btnupar = document.getElementById('btnupar');

if (localStorage.getItem('token' == null)) {
    window.location.href = 'html/aviso.html'
}

let dadosSet = JSON.parse(localStorage.getItem('DadosSet'));
var bairroSalvo = dadosSet.bairro;

spn.setAttribute('style', 'font-style: normal')
spn.innerHTML = bairroSalvo;


function enviarComentario(){
if (textarea.value == "") {
    alert("Digite algo antes de enviar!")
} else {
    let comentarioUser = JSON.parse(localStorage.getItem('comentarioUser') || '[]')

    comentarioUser.push ({
        mensagem: textarea.value
    });
    
    btnupar.addEventListener('click', function(){
        
        let userlogado = JSON.parse(localStorage.getItem('userlogado'));
        
        
        
        var comentario = textarea.value; 
        var espacoComent = document.createElement('div');
        var nomeComent = document.createElement('span');
        // var dataComent = 
        // var imgComent = 
        espacoComent.innerHTML= comentario;
        nomeComent.innerHTML = userlogado.nome;
        document.getElementById('sectioncoment').appendChild(espacoComent).appendChild(nomeComent); // Adiciona os comentários dentro da div criada
        
        // textarea.value = ''; // Limpa o campo de entrada de comentários
        
        localStorage.setItem('comentarioUser', JSON.stringify(comentarioUser));   
        // location.reload()

    });


}
}



// Fazer i++ dos comentários




