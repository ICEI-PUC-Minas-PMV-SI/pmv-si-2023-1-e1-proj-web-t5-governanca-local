let textarea = document.getElementById('sendcoment');
let spn = document.getElementById('spn');
let btnupar = document.getElementById('btnupar');
let popup = document.getElementById('popupcomentarios')

if (localStorage.getItem('token') == null) {
    window.location.href = 'html/aviso.html'
}

if (localStorage.getItem('DadosSet')) {
    let dadosSet = JSON.parse(localStorage.getItem('DadosSet'));
    var bairroSalvo = dadosSet.bairro;
    spn.setAttribute('style', 'font-style: normal')
    spn.innerHTML = bairroSalvo;
    function exibirComentariosArmazenados() {
        let comentariosArmazenados = JSON.parse(localStorage.getItem('comentarios')) || [];
        let sectionComent = document.getElementById('sectioncoment');

        for (let i = 0; i < comentariosArmazenados.length; i++) {
            let comentario = comentariosArmazenados[i];
            let espacoComent = document.createElement('div');
            let nomeComent = document.createElement('span');
            let horaComent = document.createElement('aside');

            espacoComent.innerHTML = comentario.comentario;
            nomeComent.innerHTML = comentario.nome;
            horaComent.innerHTML = comentario.hora;

            sectionComent.appendChild(espacoComent);
            espacoComent.appendChild(nomeComent);
            espacoComent.appendChild(horaComent);
        }
    }

    exibirComentariosArmazenados();

    function enviarComentario() {
        if (textarea.value == "") {
            alert("Digite algo antes de enviar!");
        } else if (textarea.value.length > 10) {
            let userlogado = JSON.parse(localStorage.getItem('userlogado'));

            let comentario = textarea.value;
            let espacoComent = document.createElement('div');
            let nomeComent = document.createElement('span');
            let horaComent = document.createElement('aside');

            popup.style.display = "block";
            espacoComent.innerHTML = comentario;
            nomeComent.innerHTML = userlogado.nome;
            horaComent.innerHTML = obterHoraAtuall();

            espacoComent.appendChild(horaComent);
            espacoComent.appendChild(nomeComent);
            document.getElementById('sectioncoment').appendChild(espacoComent);

            textarea.value = '';

            // Armazena o novo comentário no localStorage
            let comentariosArmazenados = JSON.parse(localStorage.getItem('comentarios')) || [];
            comentariosArmazenados.push({
                comentario: comentario,
                nome: userlogado.nome,
                hora: obterHoraAtuall()
            });
            localStorage.setItem('comentarios', JSON.stringify(comentariosArmazenados));
        } else {
            alert('Número mínimo de caracteres: 10');
        }
    }

    function obterHoraAtuall() {
        var dataAtual = new Date();
        var hora = dataAtual.getHours();
        var minutos = dataAtual.getMinutes();
        var segundos = dataAtual.getSeconds();
        var dia = dataAtual.getDate();
        var mes = dataAtual.getMonth() + 1; 
        var ano = dataAtual.getFullYear();

        // Formatação para adicionar zero à esquerda, se necessário
        if (hora < 10) {
            hora = "0" + hora;
        }
        if (minutos < 10) {
            minutos = "0" + minutos;
        }
        if (segundos < 10) {
            segundos = "0" + segundos;
        }

        var horaAtual = "Publicado às " + hora + " horas e " + minutos + " minutos " + " - " + dia + "/" + mes + "/" + ano + " ------- " + bairroSalvo;

        return horaAtual;
    }
}
 else {


    // Recupera os comentários do localStorage e exibe
    function exibirComentariosArmazenados() {
        let comentariosArmazenados = JSON.parse(localStorage.getItem('comentarios')) || [];
        let sectionComent = document.getElementById('sectioncoment');

        for (let i = 0; i < comentariosArmazenados.length; i++) {
            let comentario = comentariosArmazenados[i];
            let espacoComent = document.createElement('div');
            let nomeComent = document.createElement('span');
            let horaComent = document.createElement('aside');

            espacoComent.innerHTML = comentario.comentario;
            nomeComent.innerHTML = comentario.nome;
            horaComent.innerHTML = comentario.hora;

            sectionComent.appendChild(espacoComent);
            espacoComent.appendChild(nomeComent);
            espacoComent.appendChild(horaComent);
        }
    }

    exibirComentariosArmazenados();

    function enviarComentario() {
        if (textarea.value == "") {
            alert("Digite algo antes de enviar!");
        } else if (textarea.value.length > 10) {
            let userlogado = JSON.parse(localStorage.getItem('userlogado'));

            let comentario = textarea.value;
            let espacoComent = document.createElement('div');
            let nomeComent = document.createElement('span');
            let horaComent = document.createElement('aside');

            popup.style.display = "block";
            espacoComent.innerHTML = comentario;
            nomeComent.innerHTML = userlogado.nome;
            horaComent.innerHTML = obterHoraAtual();

            espacoComent.appendChild(horaComent);
            espacoComent.appendChild(nomeComent);
            document.getElementById('sectioncoment').appendChild(espacoComent);

            textarea.value = '';

            // Armazena o novo comentário no localStorage
            let comentariosArmazenados = JSON.parse(localStorage.getItem('comentarios')) || [];
            comentariosArmazenados.push({
                comentario: comentario,
                nome: userlogado.nome,
                hora: obterHoraAtual()
            });
            localStorage.setItem('comentarios', JSON.stringify(comentariosArmazenados));
        } else {
            alert('Número mínimo de caracteres: 10');
        }
    }

    function obterHoraAtual() {
        var dataAtual = new Date();
        var hora = dataAtual.getHours();
        var minutos = dataAtual.getMinutes();
        var segundos = dataAtual.getSeconds();
        var dia = dataAtual.getDate();
        var mes = dataAtual.getMonth() + 1; 
        var ano = dataAtual.getFullYear();

        // Formatação para adicionar zero à esquerda, se necessário
        if (hora < 10) {
            hora = "0" + hora;
        }
        if (minutos < 10) {
            minutos = "0" + minutos;
        }
        if (segundos < 10) {
            segundos = "0" + segundos;
        }

        var horaAtual = "Publicado às " + hora + " horas e " + minutos + " minutos " + " - " + dia + "/" + mes + "/" + ano;

        return horaAtual;
    }
}