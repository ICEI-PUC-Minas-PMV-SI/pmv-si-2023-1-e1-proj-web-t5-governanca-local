// Resgata a lista de usuários cadastrados
let userlogado = JSON.parse(localStorage.getItem('userlogado'));


// Método de autenticação - Caso não tenha o token, vá para aviso.html
if (localStorage.getItem('token') == null) {
    window.location.href = 'html/aviso.html'
}


// Resgate  e aparição do nome do usuário
let textologado = document.getElementById('textologado');
textologado.innerHTML = 'Seja bem-vindo(a), ' + userlogado.nome;