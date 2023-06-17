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
            estado: estado.value
          });
          
          localStorage.setItem('dadosUser', JSON.stringify(dadosUser));
}

if (localStorage.getItem('dadosUser')) {
    var dadosSalvos = JSON.parse(localStorage.getItem('dadosUser'));
    
    var nomeSalvo = dadosSalvos[0].firstNome;
    var sobrenomeSalvo = dadosSalvos[0].secName;
    var ruaSalva = dadosSalvos[0].rua;
    
    document.getElementById('pnome').value = nomeSalvo;
    document.getElementById('snome').value = sobrenomeSalvo;
    document.getElementById('rua').value = ruaSalva;
  }


}