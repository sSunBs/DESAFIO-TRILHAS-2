// Função para salvar os dados no localStorage
function salvarDados() {
    const formacaoAcademica = document.getElementById('formacaoacademica').value;
    const experienciaProfissional = document.getElementById('experienciaprofissional').value;
    const disponibilidadeManha = document.getElementById('manha').checked;
    const disponibilidadeTarde = document.getElementById('tarde').checked;
    const disponibilidadeNoite = document.getElementById('noite').checked;
    const cartaMotivacao = document.getElementById('cartamotivacao').value;

    // Armazenar dados dos campos de texto
    localStorage.setItem('formacaoAcademica', formacaoAcademica);
    localStorage.setItem('experienciaProfissional', experienciaProfissional);
    localStorage.setItem('disponibilidadeManha', disponibilidadeManha);
    localStorage.setItem('disponibilidadeTarde', disponibilidadeTarde);
    localStorage.setItem('disponibilidadeNoite', disponibilidadeNoite);
    localStorage.setItem('cartaMotivacao', cartaMotivacao);

    // Salvar os arquivos como base64
    salvarArquivo('comprovantedeescolaridade', 'comprovanteEscolaridade');
    salvarArquivo('carteiradetrabalho', 'carteiraTrabalho');
}

// Função para salvar arquivos como base64 no localStorage
function salvarArquivo(inputId, localStorageKey) {
    const fileInput = document.getElementById(inputId);
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onloadend = function () {
            localStorage.setItem(localStorageKey, reader.result);
        }

        reader.readAsDataURL(file); // Converte o arquivo para base64
    }
}

// Função para carregar os dados do localStorage
function carregarDados() {
    // Carregar dados dos campos de texto
    document.getElementById('formacaoacademica').value = localStorage.getItem('formacaoAcademica') || '';
    document.getElementById('experienciaprofissional').value = localStorage.getItem('experienciaProfissional') || '';
    document.getElementById('cartamotivacao').value = localStorage.getItem('cartaMotivacao') || '';

    // Carregar checkboxes de disponibilidade
    document.getElementById('manha').checked = localStorage.getItem('disponibilidadeManha') === 'true';
    document.getElementById('tarde').checked = localStorage.getItem('disponibilidadeTarde') === 'true';
    document.getElementById('noite').checked = localStorage.getItem('disponibilidadeNoite') === 'true';

    // Carregar arquivos (em base64)
    carregarArquivo('comprovanteEscolaridade', 'comprovantedeescolaridade');
    carregarArquivo('carteiraTrabalho', 'carteiradetrabalho');
}

// Função para carregar os arquivos do localStorage e atualizar os botões de upload
function carregarArquivo(localStorageKey, inputId) {
    const fileData = localStorage.getItem(localStorageKey);
    const spanElement = document.getElementById(inputId);

    if (fileData) {
        spanElement.textContent = "Arquivo carregado"; // Atualiza o texto do botão
    }
}

// Função para verificar se todos os campos estão preenchidos
function verificarCampos() {
    const formacaoAcademica = document.getElementById('formacaoacademica').value;
    const experienciaProfissional = document.getElementById('experienciaprofissional').value;
    const disponibilidadeManha = document.getElementById('manha').checked;
    const disponibilidadeTarde = document.getElementById('tarde').checked;
    const disponibilidadeNoite = document.getElementById('noite').checked;
    const cartaMotivacao = document.getElementById('cartamotivacao').value;

    const comprovanteEscolaridade = document.getElementById('comprovantedeescolaridade').files.length > 0;
    const comprovanteExperiencia = document.getElementById('carteiradetrabalho').files.length > 0;

    const todosPreenchidos = formacaoAcademica && experienciaProfissional && (disponibilidadeManha || disponibilidadeTarde || disponibilidadeNoite) && cartaMotivacao && comprovanteEscolaridade && comprovanteExperiencia;

    const confirmButton = document.getElementById('confirmButton');
    if (todosPreenchidos) {
        confirmButton.disabled = false;
    } else {
        confirmButton.disabled = true;
    }

    salvarDados(); // Salva os dados no localStorage toda vez que um campo é alterado
}

// Função para atualizar o nome do arquivo ao selecionar
function atualizarNomeArquivo(inputElement, spanElement) {
    const nomeArquivo = inputElement.files.length > 0 ? inputElement.files[0].name : "Escolher arquivo";
    spanElement.textContent = nomeArquivo;  // Atualiza o texto do botão
}

// Adiciona eventos para monitorar as alterações nos campos
document.getElementById('formacaoacademica').addEventListener('input', verificarCampos);
document.getElementById('experienciaprofissional').addEventListener('input', verificarCampos);
document.getElementById('manha').addEventListener('change', verificarCampos);
document.getElementById('tarde').addEventListener('change', verificarCampos);
document.getElementById('noite').addEventListener('change', verificarCampos);
document.getElementById('cartamotivacao').addEventListener('input', verificarCampos);

// Campos de upload de arquivo
document.getElementById('comprovantedeescolaridade').addEventListener('change', function () {
    atualizarNomeArquivo(this, document.getElementById('comprovanteEscolaridade'));
    verificarCampos();
});
document.getElementById('carteiradetrabalho').addEventListener('change', function () {
    atualizarNomeArquivo(this, document.getElementById('carteiraTrabalho'));
    verificarCampos();
});

// Função de redirecionamento após confirmação
function redirecionarPagina() {
    window.location.href = "confirmacao.html";  // Substitua com a URL de destino
}

// Carregar os dados do localStorage assim que a página for carregada
document.addEventListener('DOMContentLoaded', carregarDados);
