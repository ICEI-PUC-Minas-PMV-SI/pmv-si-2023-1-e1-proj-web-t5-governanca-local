let userlogado = JSON.parse(localStorage.getItem('userlogado'));


if (localStorage.getItem('token') == null) {
    alert("Vamos fazer login antes, amigão!");
    window.location.href = '../index.html'
}

let textologado = document.getElementById('textologado');
textologado.innerHTML = 'Seja bem vindo, ' + userlogado.nome;