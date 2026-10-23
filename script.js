/**
 * PORTFÓLIO PESSOAL - MATHEUS NUNES M.A SANTOS
 * Arquivo: script.js
 * Descrição: Funcionalidades interativas em JavaScript Puro (Vanilla JS)
 */

document.addEventListener("DOMContentLoaded", () => {
    
    /* ----------------------------------------------------------------------
       1. ANO DINÂMICO NO RODAPÉ
       ---------------------------------------------------------------------- */
    const elementoAno = document.getElementById("anoAtual");
    if (elementoAno) {
        elementoAno.textContent = new Date().getFullYear();
    }

    /* ----------------------------------------------------------------------
       2. EFEITO MÁQUINA DE ESCREVER (TYPING EFFECT)
       ---------------------------------------------------------------------- */
    const elementoTextoDigitacao = document.getElementById("textoEfeitoDigitacao");
    const frasesParaDigitar = [
        "Estudante de Dev Full Stack",
        "Especializando em Front-end",
        "Entusiasta de UI/UX e Design",
        "Aluno SESC Escola & SENAC"
    ];
    
    let indiceFraseAtual = 0;
    let indiceCaractere = 0;
    let estaDeletando = false;
    let velocidadeDigitacao = 100;

    function executarEfeitoDigitacao() {
        const fraseAtual = frasesParaDigitar[indiceFraseAtual];

        if (estaDeletando) {
            elementoTextoDigitacao.textContent = fraseAtual.substring(0, indiceCaractere - 1);
            indiceCaractere--;
            velocidadeDigitacao = 50; // Mais rápido ao apagar
        } else {
            elementoTextoDigitacao.textContent = fraseAtual.substring(0, indiceCaractere + 1);
            indiceCaractere++;
            velocidadeDigitacao = 100; // Velocidade normal ao digitar
        }

        // Se terminou de digitar a frase
        if (!estaDeletando && indiceCaractere === fraseAtual.length) {
            velocidadeDigitacao = 2000; // Pausa no final da frase
            estaDeletando = true;
        } 
        // Se terminou de apagar a frase
        else if (estaDeletando && indiceCaractere === 0) {
            estaDeletando = false;
            indiceFraseAtual = (indiceFraseAtual + 1) % frasesParaDigitar.length;
            velocidadeDigitacao = 500;
        }

        setTimeout(executarEfeitoDigitacao, velocidadeDigitacao);
    }

    executarEfeitoDigitacao();

    /* ----------------------------------------------------------------------
       3. ALTERNADOR DE TEMA (DARK / LIGHT MODE)
       ---------------------------------------------------------------------- */
    const botaoAlternarTema = document.getElementById("botaoAlternarTema");
    const iconeTema = document.getElementById("iconeTema");
    const elementoHtml = document.documentElement;

    botaoAlternarTema.addEventListener("click", () => {
        const temaAtual = elementoHtml.getAttribute("data-tema");
        
        if (temaAtual === "escuro") {
            elementoHtml.setAttribute("data-tema", "claro");
            iconeTema.className = "bi bi-sun-fill"; // Ícone de Sol no Light Mode
        } else {
            elementoHtml.setAttribute("data-tema", "escuro");
            iconeTema.className = "bi bi-moon-stars-fill"; // Ícone de Lua no Dark Mode
        }
    });

    /* ----------------------------------------------------------------------
       4. MENU HAMBÚRGUER MOBILE
       ---------------------------------------------------------------------- */
    const botaoMenuMobile = document.getElementById("botaoMenuMobile");
    const menuNavegacao = document.getElementById("menuNavegacao");
    const linksMenu = document.querySelectorAll(".link-menu");

    // Alternar visibilidade do menu
    botaoMenuMobile.addEventListener("click", () => {
        menuNavegacao.classList.toggle("ativo");
        
        // Alternar ícone entre Lista (Hambúrguer) e Fechar (X)
        const iconeMenu = botaoMenuMobile.querySelector("i");
        if (menuNavegacao.classList.contains("ativo")) {
            iconeMenu.className = "bi bi-x-lg";
        } else {
            iconeMenu.className = "bi bi-list";
        }
    });

    // Fechar o menu ao clicar em qualquer link de navegação
    linksMenu.forEach(link => {
        link.addEventListener("click", () => {
            menuNavegacao.classList.remove("ativo");
            const iconeMenu = botaoMenuMobile.querySelector("i");
            if (iconeMenu) iconeMenu.className = "bi bi-list";
        });
    });

    /* ----------------------------------------------------------------------
       5. BOTÃO VOLTAR AO TOPO
       ---------------------------------------------------------------------- */
    const botaoVoltarTopo = document.getElementById("botaoVoltarTopo");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            botaoVoltarTopo.classList.add("visivel");
        } else {
            botaoVoltarTopo.classList.remove("visivel");
        }
    });

    botaoVoltarTopo.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    /* ----------------------------------------------------------------------
       6. ANIMAÇÃO DE REVELAÇÃO AO ROLAR A TELA (SCROLL REVEAL)
       ---------------------------------------------------------------------- */
    const elementosParaRevelar = document.querySelectorAll(".elemento-revelar");

    function verificarScrollRevelar() {
        const alturaGatilho = window.innerHeight * 0.85;

        elementosParaRevelar.forEach(elemento => {
            const topoElemento = elemento.getBoundingClientRect().top;

            if (topoElemento < alturaGatilho) {
                elemento.classList.add("ativo");
            }
        });
    }

    // Executa ao rolar a página e também no carregamento inicial
    window.addEventListener("scroll", verificarScrollRevelar);
    verificarScrollRevelar();
});