// A função calcMeta permanece a mesma, apenas certifique-se de que ela está neste arquivo.
function calcMeta() {
    const processosFeitos = document.getElementById("processosFeitos").value;
    const meta = document.getElementById("meta").value;
    const diasTrabalhados = document.getElementById("diasTrabalhados").value;
    const diasUteis = document.getElementById("diasUteis").value;

    const numProcessosFeitos = parseInt(processosFeitos);
    const numMeta = parseInt(meta);
    const numDiasTrabalhados = parseInt(diasTrabalhados);
    const numDiasUteis = parseInt(diasUteis);

    const resultado = document.getElementById("resultado");

    if (isNaN(numProcessosFeitos) || isNaN(numMeta) || isNaN(numDiasUteis)) {
        resultado.textContent = "Erro: Por favor, insira apenas números válidos.";
        resultado.style.color = "red";
        return;
    }
    if (numDiasUteis <= 0 || numDiasUteis > 31) {
        resultado.textContent = "Erro: O número de dias úteis deve ser entre 1 e 31.";
        resultado.style.color = "red";
        return;
    }

    let mediaAtual = (numProcessosFeitos / numDiasTrabalhados).toFixed(2)
    let atingirMeta = (numMeta * numDiasUteis) - numProcessosFeitos;

    const resultMessage = `A sua média atual é de ${mediaAtual} processos por dia. Para atingir a meta de ${meta} processos por dia você precisará fazer mais ${atingirMeta} processos.`;
    resultado.textContent = resultMessage;
}

// NOVO: Adiciona um event listener ao botão
// document.addEventListener('DOMContentLoaded', ...) garante que o script só tentará acessar os elementos HTML
// depois que toda a página HTML for carregada.
document.addEventListener('DOMContentLoaded', function() {
    const calcularBtn = document.getElementById('calcularBtn');
    if (calcularBtn) { // Verifica se o botão realmente existe
        calcularBtn.addEventListener('click', calcMeta);
    }
});