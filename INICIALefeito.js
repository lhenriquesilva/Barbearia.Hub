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

const btns = document.querySelectorAll(".btn-agendar");
const modal = document.getElementById("modal-agendamento");
const fechar = document.getElementById("fecharModal");
const form = document.getElementById("formAgendamento");

// Abrir o modal
btns.forEach(btn => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        modal.style.display = "flex";
    });
});

// Fechar no X
fechar.addEventListener("click", function () {
    modal.style.display = "none";
});

// Fechar ao enviar o formulário
form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Agendamento finalizado com sucesso!");
    modal.style.display = "none";
    form.reset();
});

// Fechar clicando fora do modal
window.addEventListener("click", function (e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});