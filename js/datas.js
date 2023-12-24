const dataNascimento = new Date('2002-05-06');

function calcularIdade() {
    const hoje = new Date();
    const diferenca = hoje - dataNascimento;

    const idade = Math.floor(diferenca / (365.25 * 24 * 60 * 60 * 1000));

    document.getElementById('idade').innerHTML = `${idade}`;
}

calcularIdade();

// Obtém o ano atual
const anoAtual = new Date().getFullYear();

// Atualiza o conteúdo do elemento com o ID 'anoAtual'
document.getElementById('ano').textContent = anoAtual;