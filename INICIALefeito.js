document.addEventListener("DOMContentLoaded", () => {
    const secao = document.querySelector(".estatisticas");
    const numeros = document.querySelectorAll(".estatisticas h3");
    let animado = false;

    function animarContagem() {
        if (animado) return;
        const posicao = secao.getBoundingClientRect().top;
        const alturaTela = window.innerHeight;

        if (posicao < alturaTela - 100) {
            secao.classList.add("visivel");
            numeros.forEach(el => {
                const valorFinal = parseInt(el.dataset.numero);
                let valorAtual = 0;
                const duracao = 1500; // tempo total (ms)
                const incremento = valorFinal / (duracao / 20);

                const contador = setInterval(() => {
                    valorAtual += incremento;
                    if (valorAtual >= valorFinal) {
                        valorAtual = valorFinal;
                        clearInterval(contador);
                    }
                    el.textContent = "+" + Math.floor(valorAtual);
                }, 20);
            });
            animado = true;
        }
    }

    window.addEventListener("scroll", animarContagem);
});
