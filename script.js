const botoes = document.querySelectorAll('button');
const cartCount = document.getElementById('cart-count');

let count = 0;

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const produto = botao.parentElement.querySelector('h2').innerText;

        // Alerta estilizado
        const alerta = document.createElement('div');
        alerta.innerText = `${produto} adicionado ao carrinho!`;
        alerta.classList.add('alerta');
        document.body.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 1500);

        // Atualizar contador
        count++;
        cartCount.innerText = count;
    });
});
