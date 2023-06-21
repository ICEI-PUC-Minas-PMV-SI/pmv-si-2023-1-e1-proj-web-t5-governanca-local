// DEFINIÇÃO DAS VARIÁVEIS DO CADASTRO

let nome = document.getElementById('txt_nome');
let email = document.getElementById('txt_email');
let senha = document.getElementById('txt_senha');
let senha2 = document.getElementById('txt_senha2');
let btnSalvar = document.getElementById('btnSalvar');

// CADASTRO DO USUÁRIO

function cadastrar(){

    if  (nome.value == "" || email.value == "" || senha.value == "" || senha2.value == "") {
        alert("Certifique-se que todos os campos foram devidamente preenchidos.");
    } else if (senha.value == senha2.value) {
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')    
    listaUser.push (
        {
            nomeCad: nome.value,
            userCad: email.value,
            senhaCad: senha.value
        }
    )

        localStorage.setItem('listaUser', JSON.stringify(listaUser))
        location.reload();
    }
     else {
        alert("As senhas não se conferem");
    }

}


senha2.addEventListener('keyup', () => {

    if (senha2.value != senha.value) {
        senha2.setAttribute('style', 'outline-color: red');
    } else {
        senha2.setAttribute('style', 'outline-color: green');
    }

})

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

    if (loginn.value == "" || senhaLogin == "") {
        alert("Você precisa preencher os campos!");
    } else {
        listaUser.forEach((item) => {
            if(loginn.value == item.userCad && senhaLogin.value == item.senhaCad){
                userValid = {
                    nome: item.nomeCad,
                    user: item.userCad,
                    senha: item.senhaCad
                }
            }
    
        })
    
        if(loginn.value == userValid.user && senhaLogin.value == userValid.senha) {
            window.location.href = './paginalogada.html'
    
            // Criação de Token
            let token = Math.random().toString(32).substring(2);
            localStorage.setItem('token', token);
    
            localStorage.setItem('userlogado', JSON.stringify(userValid));
            console.log(token);
    
        } else {
            alert("Usuário ou senha incorretos.");
        }
    }
}



    




function logout(){
    localStorage.removeItem('token');
    window.location.href = 'index.html'
}