function calcMeta() {
    const processosFeitos = parseInt(document.getElementById("processosFeitos").value);
    const meta = parseInt(document.getElementById("meta").value);
    const diasTrabalhados = parseInt(document.getElementById("diasTrabalhados").value);
    const diasUteis = parseInt(document.getElementById("diasUteis").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(processosFeitos) || isNaN(meta) || isNaN(diasTrabalhados) || isNaN(diasUteis)) {
        resultado.textContent = "Erro: Por favor, insira apenas números válidos.";
        resultado.style.color = "red";
        return;
    }
    if (diasUteis <= 0 || diasUteis > 31) {
        resultado.textContent = "Erro: O número de dias úteis deve ser entre 1 e 31.";
        resultado.style.color = "red";
        return;
    }

    const totalNecessario = meta * diasUteis;
    const processosRestantes = totalNecessario - processosFeitos;
    const diasRestantes = diasUteis - diasTrabalhados;
    const mediaAtual = (processosFeitos / diasTrabalhados).toFixed(2);

    let mensagem;

    if (processosRestantes <= 0) {
        mensagem =
            `- Parabéns! Você atingiu a meta do mês.<br>` +
            `- Sua média atual é de ${mediaAtual} processos por dia.<br>`;
    } else if (diasRestantes <= 0) {
        mensagem =
            `- O mês acabou e faltaram ${processosRestantes} processos pra bater a meta.<br>` +
            `- Média atual: ${mediaAtual} processos por dia.<br>`;
    } else {
        const mediaNecessaria = (processosRestantes / diasRestantes).toFixed(2);
        mensagem =
            `- Sua média atual é de ${mediaAtual} processos por dia.<br>` +
            `- Para atingir a meta de ${meta}, você precisará fazer uma média de ${mediaNecessaria} processos por dia nos ${diasRestantes} dias restantes.<br>`;
    }

    resultado.innerHTML = mensagem;
    resultado.style.color = "black";
}

// Garante que o botão funcione depois do carregamento da página
document.addEventListener('DOMContentLoaded', function () {
    const calcularBtn = document.getElementById('calcularBtn');
    if (calcularBtn) {
        calcularBtn.addEventListener('click', calcMeta);
    }
});