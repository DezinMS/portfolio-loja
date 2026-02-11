const botoes = document.querySelectorAll('button');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const produto = botao.parentElement.querySelector('h2').innerText;
        alert(`${produto} adicionado ao carrinho!`);
    });
});
