document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            themeToggle.textContent = 'Modo Claro';
        } else {
            themeToggle.textContent = 'Modo Escuro';
        }
    });
});
// Seleciona o botão
const themeToggle = document.getElementById('theme-toggle');

// Verifica se o usuário já escolheu um tema antes
const savedTheme = localStorage.getItem('theme');

// Aplica o tema salvo (se existir)
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.checked = true;
} else {
    document.body.classList.remove('dark-mode');
    themeToggle.checked = false;
}

// Adiciona um evento para alternar o tema
themeToggle.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark'); // Salva a preferência
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light'); // Salva a preferência
    }
});
function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("active");
}