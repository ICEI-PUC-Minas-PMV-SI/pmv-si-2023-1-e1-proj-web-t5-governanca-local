let userlogado = JSON.parse(localStorage.getItem('userlogado'));

let textologado = document.getElementById('textologado');
textologado.innerHTML = 'Seja bem vindo, ' + userlogado.nome