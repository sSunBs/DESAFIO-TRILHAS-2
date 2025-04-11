// Função para verificar se todos os campos estão preenchidos
function verificarCampos() {
    var nome = document.getElementById('nomecompleto').value;
    var email = document.getElementById('email').value;
    var documento = document.getElementById('documentodeidentificacao').value;
    var telefone = document.getElementById('telefone').value;
    var cep = document.getElementById('cep').value;
    var endereco = document.getElementById('endereco').value;
    var senha = document.getElementById('senha').value;
    var confirmarSenha = document.getElementById('confirmar-senha').value;

    var confirmarButton = document.getElementById('confirmButton');
    var formError = document.getElementById('formError'); // Referência para a div de erro

    // Verificando se todos os campos estão preenchidos
    if (nome && email && documento && telefone && cep && endereco && senha && confirmarSenha && validarNome(nome) && validarEmail(email)) {
        confirmarButton.disabled = false; // Habilita o botão
        formError.style.display = 'none'; // Esconde a mensagem de erro
    } else {
        confirmarButton.disabled = true; // Desabilita o botão
        formError.style.display = 'inline'; // Exibe a mensagem de erro
    }
}

// Função para validar o nome (só permite letras e espaços)
function validarNome(nome) {
    var regex = /^[a-zA-Z\s]+$/;
    if (!regex.test(nome)) {
        document.getElementById('nomeError').style.display = 'inline'; // Exibe a mensagem de erro
        return false;
    } else {
        document.getElementById('nomeError').style.display = 'none'; // Esconde a mensagem de erro
        return true;
    }
}

// Função para validar o email (verifica se é um email válido)
function validarEmail(email) {
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!regex.test(email)) {
        document.getElementById('emailError').style.display = 'inline'; // Exibe a mensagem de erro
        return false;
    } else {
        document.getElementById('emailError').style.display = 'none'; // Esconde a mensagem de erro
        return true;
    }
}

// Função de validação de senhas
function validarFormulario(event) {
    var senha = document.getElementById('senha').value;
    var confirmarSenha = document.getElementById('confirmar-senha').value;

    // Verifica se as senhas coincidem
    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem. Tente novamente.");
        event.preventDefault(); // Impede o envio ou redirecionamento
        return false;
    }

    return true; // Permite o envio se as senhas coincidirem
}

// Função para salvar os dados no localStorage
function salvarDados() {
    var formData = {
        nomecompleto: document.getElementById('nomecompleto').value,
        email: document.getElementById('email').value,
        documento: document.getElementById('documentodeidentificacao').value,
        telefone: document.getElementById('telefone').value,
        cep: document.getElementById('cep').value,
        endereco: document.getElementById('endereco').value,
        senha: document.getElementById('senha').value,
        confirmarSenha: document.getElementById('confirmar-senha').value
    };
    // Salva os dados no localStorage
    localStorage.setItem('formData', JSON.stringify(formData));
}

// Função para preencher os campos com os dados salvos
function preencherCampos() {
    var savedData = localStorage.getItem('formData');
    if (savedData) {
        var formData = JSON.parse(savedData);
        document.getElementById('nomecompleto').value = formData.nomecompleto;
        document.getElementById('email').value = formData.email;
        document.getElementById('documentodeidentificacao').value = formData.documento;
        document.getElementById('telefone').value = formData.telefone;
        document.getElementById('cep').value = formData.cep;
        document.getElementById('endereco').value = formData.endereco;
        document.getElementById('senha').value = formData.senha;
        document.getElementById('confirmar-senha').value = formData.confirmarSenha;
    }
}

// Função para habilitar/desabilitar o botão de confirmação
document.getElementById('registroForm').addEventListener('input', function() {
    let allFilled = true;
    // Verifica se todos os campos obrigatórios estão preenchidos
    document.querySelectorAll('input[required]').forEach(function(input) {
        if (!input.value) {
            allFilled = false;
        }
    });

    // Verifica se o nome e o email são válidos, e se as senhas coincidem
    var nome = document.getElementById('nomecompleto').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var confirmarSenha = document.getElementById('confirmar-senha').value;

    if (allFilled && validarNome(nome) && validarEmail(email) && senha === confirmarSenha) {
        document.getElementById('confirmButton').disabled = false; // Habilita o botão
        document.getElementById('formError').style.display = 'none'; // Esconde a mensagem de erro
    } else {
        document.getElementById('confirmButton').disabled = true; // Desabilita o botão
        document.getElementById('formError').style.display = 'inline'; // Exibe a mensagem de erro
    }
});

// Adicionando a validação no botão de confirmação
document.getElementById('confirmButton').addEventListener('click', function(event) {
    if (!validarFormulario(event)) {
        event.preventDefault(); // Impede a navegação se as senhas não coincidirem
    } else {
        redirecionarPagina(); // Redireciona se as senhas forem válidas
    }
});

// Função para redirecionar para outra página
function redirecionarPagina() {
    window.location.href = "registrodetrilha.html";  // Substitua com o link da página que deseja redirecionar
}

// Inicializa o estado do botão ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    // Verificar se o botão de confirmação deve estar habilitado
    verificarCampos();
    // Preencher os campos com os dados salvos no localStorage
    preencherCampos();
});

// Salvando dados sempre que o usuário modificar o formulário
document.getElementById('registroForm').addEventListener('input', salvarDados);
