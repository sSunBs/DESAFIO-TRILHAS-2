// Função para verificar se uma trilha foi selecionada
function verificarTrilhaSelecionada() {
    var radios = document.getElementsByName('trilha');
    var confirmButton = document.querySelector('a[href="dadosespecificos.html"]'); // A tag <a> com o link "confirmar"

    // Verificar se pelo menos um dos radio buttons foi selecionado
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            confirmButton.style.pointerEvents = 'auto'; // Habilita o botão de confirmação
            confirmButton.style.opacity = 1; // Deixa o botão visível
            salvarTrilhaEscolhida(radios[i].id); // Salva a trilha selecionada
            return;
        }
    }

    confirmButton.style.pointerEvents = 'none'; // Desabilita o botão de confirmação
    confirmButton.style.opacity = 0.5; // Deixa o botão esmaecido
}

// Função para salvar a escolha da trilha no localStorage
function salvarTrilhaEscolhida(trilhaId) {
    localStorage.setItem('trilhaEscolhida', trilhaId);
}

// Função para carregar a escolha salva no localStorage
function carregarTrilhaEscolhida() {
    const trilhaSalva = localStorage.getItem('trilhaEscolhida');

    if (trilhaSalva) {
        const trilha = document.getElementById(trilhaSalva);
        if (trilha) {
            trilha.checked = true;
        }
    }
}

// Adicionar evento para verificar a seleção sempre que o usuário mudar a escolha
document.querySelectorAll('input[name="trilha"]').forEach(function(input) {
    input.addEventListener('change', verificarTrilhaSelecionada);
});

// Inicializar o estado do botão e carregar a escolha salva quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    carregarTrilhaEscolhida(); // Carregar a trilha escolhida do localStorage
    verificarTrilhaSelecionada(); // Verificar se o botão deve estar habilitado
});
