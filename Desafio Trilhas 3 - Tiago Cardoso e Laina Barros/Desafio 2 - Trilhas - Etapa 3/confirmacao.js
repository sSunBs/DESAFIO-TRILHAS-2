document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.getElementById("termosCheckbox");
    const botaoSim = document.getElementById("botaoSim");
    const botaoNao = document.getElementById("botaoNao");

    // Habilita ou desabilita o botão "Sim"
    checkbox.addEventListener("change", function () {
        botaoSim.disabled = !this.checked;
    });

    // Redireciona ao clicar no botão "Sim"
    botaoSim.addEventListener("click", function () {
        if (!botaoSim.disabled) {
            window.location.href = "Final.html";
        }
    });

    // Redireciona ao clicar no botão "Não"
    botaoNao.addEventListener("click", function () {
        window.location.href = "dadosespecificos.html";
    });
});
