const cep = document.getElementById('cep');
const rua = document.getElementById('rua');
const bairro = document.getElementById('bairro');
const cidade = document.getElementById('cidade');
const estado = document.getElementById('estado');
const span = document.getElementById('bairroflex');

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