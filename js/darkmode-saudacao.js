document.addEventListener('DOMContentLoaded', function () {
    var carregamentoElement = document.getElementById('carregamento');
    var saudacaoElement = document.getElementById('saudacao');
    var data = new Date();
    var hora = data.getHours();
    var isDarkMode = localStorage.getItem('darkMode') === 'true';

    // Detecção do modo escuro baseada na hora
    if ((hora >= 18 || hora < 6) || isDarkMode) {
        document.body.classList.add('dark-mode');
        carregamentoElement.classList.add('dark-mode');
        document.getElementById('darkModeSwitch').checked = true;
        invertColors();
    }

    // Verifica o horário para determinar a saudação e o modo de cor
    if (hora >= 0 && hora < 5) {
        // De 00:00 até 05:00
        document.body.classList.add('dark-mode');
        saudacaoElement.textContent = 'Boa Madrugada';
    } else if (hora >= 5 && hora < 12) {
        // De 05:00 até 12:00
        document.body.classList.remove('dark-mode');
        saudacaoElement.textContent = 'Bom Dia';
    } else if (hora >= 12 && hora < 18) {
        // De 12:00 até 18:00
        document.body.classList.remove('dark-mode');
        saudacaoElement.textContent = 'Boa Tarde';
    } else {
        // A partir das 18:00
        document.body.classList.add('dark-mode');
        saudacaoElement.textContent = 'Boa Noite';
    }

    // Adiciona a classe para esconder a tela de carregamento
    setTimeout(function () {
        carregamentoElement.classList.add('carregamento-escondido');
    }, 2500);

    // Event listener para alterar o modo com os ícones
    document.getElementById('darkModeSwitch').addEventListener('change', function () {
        var isDarkMode = this.checked;
        localStorage.setItem('darkMode', isDarkMode);
        document.body.classList.toggle('dark-mode', isDarkMode);
        carregamentoElement.classList.toggle('dark-mode', isDarkMode);
        invertColors();
        updateModeText(isDarkMode);
    });

    function invertColors() {
        var primaryColor = getComputedStyle(document.body).getPropertyValue('--primary-color');
        var secondaryColor = getComputedStyle(document.body).getPropertyValue('--secondary-color');

        document.body.style.setProperty('--primary-color', secondaryColor);
        document.body.style.setProperty('--secondary-color', primaryColor);




        var primaryColoropac = getComputedStyle(document.body).getPropertyValue('--primary-color-opac');
        var secondaryColoropac = getComputedStyle(document.body).getPropertyValue('--secondary-color-opac');


        document.body.style.setProperty('--primary-color-opac', secondaryColoropac);
        document.body.style.setProperty('--secondary-color-opac', primaryColoropac);

    }

    function updateModeText(isDarkMode) {
        var modeText = document.querySelector('.mode-text');
        modeText.textContent = isDarkMode ? 'Modo Claro' : 'Modo Escuro';
    }
});