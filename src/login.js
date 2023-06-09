// DEFINIÇÃO DAS VARIÁVEIS DO CADASTRO


let nome = document.getElementById('txt_nome');
let email = document.getElementById('txt_email');
let senha = document.getElementById('txt_senha');
let senha2 = document.getElementById('txt_senha2');

// CADASTRO DO USUÁRIO

function cadastrar (){

    if (senha.value == senha2.value) {
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
        
    listaUser.push (
        {
            nomeCad: nome.value,
            userCad: email.value,
            senhaCad: senha.value
        }
    )

        localStorage.setItem('listaUser', JSON.stringify(listaUser))

    } else {
        alert("As senhas não se conferem");
    }

}


// LOGIN DO USUÁRIO


function login(){
    let loginn = document.getElementById('loginn');
    let senhaLogin = document.getElementById('senhaLogin');
    let listaUser = []

    let userValid = {
        nome: '',
        email: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser.forEach((item) => {
        if(loginn.value == item.userCad && senhaLogin.value == item.senhaCad){
            userValid = {
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad
            }
        }

    })

    if (loginn.value == userValid.user && senhaLogin.value == userValid.senha) {
        window.location.href = 'paginalogada.html'

        let token = Math.random().toString(32).substring(2);
        localStorage.setItem('token', token);

        localStorage.setItem('userlogado', JSON.stringify(userValid));

    } else {
        alert("Usuário ou senha incorretos.")
    }

}

if (localStorage.getItem('token') == null) {
    window.location.href = 'login.html'
}


function logout(){
    localStorage.removeItem('token');
    window.location.href = 'index.html'
}