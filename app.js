'use strict';

// Seleciona o botão de alternância de tema
const switcher = document.querySelector('.btn');

// Evento de clique do botão
switcher.addEventListener("click", function() {

    // Alterna a classe "dark-theme" no body
    document.body.classList.toggle("dark-theme");

    // Salva o nome da classe atual do body
    var className = document.body.className;

    // Troca o texto do botão conforme o tema ativo
    if (className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }

    // Mostra no console o tema atual
    console.log('current class name: ' + className);
});
