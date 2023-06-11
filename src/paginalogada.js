let userlogado = JSON.parse(localStorage.getItem('userlogado'));


if (localStorage.getItem('token') == null) {
    window.location.href = 'aviso.html'
}

let textologado = document.getElementById('textologado');
textologado.innerHTML = 'Seja bem vindo, ' + userlogado.nome;