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
cep.addEventListener('focusout', async () => {

    const response = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`)

    if (!response.ok) {
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

// LocalStorage dos dados dos inputs
function salvarDados() {
    // Criação do localStorage 'dadosUser'
    let dadosUser = JSON.parse(localStorage.getItem('dadosUser') || '[]');
  
    if (pnome.value == "" || snome.value == "" || dtnascimento.value == "" || cpf.value == "" || cep.value == "" || rua.value == "" || bairro.value == "" || cidade.value == "" || estado.value == "") {
      alert("Por favor, complete todos os campos.");
    } else {
      // Criando um novo "array"/objeto para a última edição dos campos
      let dadosSet = {
        pnome: pnome.value,
        snome: snome.value,
        dtnascimento: dtnascimento.value,
        cpf: cpf.value,
        cep: cep.value,
        rua: rua.value,
        bairro: bairro.value,
        cidade: cidade.value,
        estado: estado.value,
        complemento: complemento.value,
        nrua: nrua.value
      };
  
      // Atualizando o localStorage 'DadosSet' com a última edição dos campos
      localStorage.setItem('DadosSet', JSON.stringify(dadosSet));
  
      // Adicionando os dados do usuário ao localStorage 'dadosUser'
      dadosUser.push(dadosSet);
      localStorage.setItem('dadosUser', JSON.stringify(dadosUser));
  
      let bloco = document.getElementById('bloco');
      bloco.style.display = "block";
    }
  }
  
  // Setando a última alteração e conservação dos dados atualizados
  function carregarUltimaEdicao() {
    let dadosSet = JSON.parse(localStorage.getItem('DadosSet'));
  
    if (dadosSet) {
      pnome.value = dadosSet.pnome;
      snome.value = dadosSet.snome;
      dtnascimento.value = dadosSet.dtnascimento;
      cpf.value = dadosSet.cpf;
      cep.value = dadosSet.cep;
      rua.value = dadosSet.rua;
      bairro.value = dadosSet.bairro;
      cidade.value = dadosSet.cidade;
      estado.value = dadosSet.estado;
      complemento.value = dadosSet.complemento;
      nrua.value = dadosSet.nrua;
    }
  }
  
  // Carregando a última alteração do usuário ao dar f5 na página
  carregarUltimaEdicao();

function closePopup() {
    bloco.style.display = "none"
}




