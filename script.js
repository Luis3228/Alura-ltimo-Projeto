// Seleciona os elementos
const passos = document.querySelectorAll('.passo');
const botoes = document.querySelectorAll('.btn-proximo');

// Função para alternar entre os passos
function mudarPasso(proximoId) {
    passos.forEach(passo => passo.classList.remove('ativo')); // Remove a classe 'ativo' de todos os passos
    const proximoPasso = document.getElementById(`passo-${proximoId}`);
    if (proximoPasso) proximoPasso.classList.add('ativo'); // Adiciona 'ativo' ao passo correspondente
}

// Adiciona evento de clique aos botões
botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const proximoId = botao.dataset.proximo; // Obtém o ID do próximo passo
        mudarPasso(proximoId); // Alterna para o próximo passo
    });
});
