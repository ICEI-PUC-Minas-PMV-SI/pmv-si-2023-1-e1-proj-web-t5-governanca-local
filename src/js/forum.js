let textarea = document.getElementById('sendcoment');
let spn = document.getElementById('spn');
let btnupar = document.getElementById('btnupar');

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
    
    localStorage.setItem('comentarioUser', JSON.stringify(comentarioUser));   
    btnupar.addEventListener('click', function(){

        let userlogado = JSON.parse(localStorage.getItem('userlogado'));



        var comentario = textarea.value; 
        var espacoComent = document.createElement('div');
        var nomeComent = document.createElement('span');
            espacoComent.innerText = comentario;
            nomeComent.innerText = userlogado.nome;
            document.getElementById('sectioncoment').appendChild(nomeComent).appendChild(espacoComent); // Adiciona os comentários dentro do 'comments-container'
           
            textarea.value = ''; // Limpa o campo de entrada de comentários


            location.reload()

    });

    
}
}



// Fazer i++ dos comentários




