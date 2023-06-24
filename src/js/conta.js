// Resgata a lista de usuários cadastrados
let userlogado = JSON.parse(localStorage.getItem('userlogado'));


// Método de autenticação - Caso não tenha o token, vá para aviso.html
if (localStorage.getItem('token') == null) {
    window.location.href = 'html/aviso.html'
}
// Variáveis dos inputs
const cep = document.getElementById('cep');
const rua = document.getElementById('rua');
const bairro = document.getElementById('bairro');
const cidade = document.getElementById('cidade');
const estado = document.getElementById('estado');
const span = document.getElementById('bairroflex');
const pnome = document.getElementById('pnome');
const snome = document.getElementById('snome');
const dtnascimento = document.getElementById('dtnascimento');
const cpf = document.getElementById('cpf');
const complemento = document.getElementById('complemento');
const nrua = document.getElementById('nrua');
const sexo2 = document.getElementById('sexo').value;


// API que absorve os dados
cep.addEventListener('focusout', async () =>{

    const response = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`)

    if(!response.ok){
        throw await response.json();
    }

    const responseCep = await response.json();

    rua.value = responseCep.logradouro;
    bairro.value = responseCep.bairro;
    span.value = responseCep.bairro;
    cidade.value = responseCep.localidade;
    estado.value = responseCep.uf;

    span.innerHTML = responseCep.bairro + ", " + responseCep.localidade;

})

// LocalStorage dos dados
function salvarDados(){
    let dadosUser = JSON.parse(localStorage.getItem('dadosUser') || '[]')


    if (pnome.value == "" || snome.value == "" || dtnascimento.value == "" || cpf.value == "" || cep.value == "" || rua.value == "" || bairro.value == "" || cidade.value == "" || estado.value == ""  ) {
        alert("Por favor, complete todos os campos.")
    } else {
        dadosUser.push({
            firstNome: pnome.value,
            secName: snome.value,
            dtNasc: dtnascimento.value,
            cpf: cpf.value,
            cep: cep.value,
            rua: rua.value,
            bairro: bairro.value,
            cidade: cidade.value,
            estado: estado.value,
            complemento: complemento.value,
            numero: nrua.value,
            sexo: sexo2.value
          });
          
          localStorage.setItem('dadosUser', JSON.stringify(dadosUser));   
          
            let bloco = document.getElementById('bloco')
            bloco.style.display = "block";
}
}

function closePopup(){
    bloco.style.display = "none"
}

// LocalStorage dos dados
var dadosSalvos = JSON.parse(localStorage.getItem('dadosUser'));
var firstNomeSalvo = dadosSalvos[0].firstNome;
var snomeNomeSalvo = dadosSalvos[0].secName;
var dtNascSalvo = dadosSalvos[0].dtNasc;
var CPFSalvo = dadosSalvos[0].cpf;
var cepSalvo = dadosSalvos[0].cep;
var ruaSalvo = dadosSalvos[0].rua;
var bairroSalvo = dadosSalvos[0].bairro;
var cidadeSalvo = dadosSalvos[0].cidade;
var estadoSalvo = dadosSalvos[0].estado;
var complementoSalvo = dadosSalvos[0].complemento;
var numeroSalvo = dadosSalvos[0].numero;
var sexoSalvo = dadosSalvos[0].sexo;



pnome.value = firstNomeSalvo;
snome.value = snomeNomeSalvo
dtnascimento.value = dtNascSalvo;
cpf.value = CPFSalvo;
cep.value = cepSalvo;
rua.value = ruaSalvo;
bairro.value = bairroSalvo;
cidade.value = cidadeSalvo;
estado.value = estadoSalvo;
complemento.value = complementoSalvo;
nrua.value = numeroSalvo;

