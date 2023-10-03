// Pegando ano atual
    const anoAtual = new Date().getFullYear();

// Atualiza o elemento HTML com o ano atual
document.getElementById('anoAtual').innerText = anoAtual;

/*Dark Mode */

function toggleDarkMode() {
    const root = document.documentElement;
    const lightIcon = document.getElementById('lightIcon');
    const darkIcon = document.getElementById('darkIcon');
  
    if (root.classList.contains('dark')) {
      root.classList.remove('dark');
      lightIcon.classList.add('visible-icon');
      darkIcon.classList.remove('visible-icon');
    } else {
      root.classList.add('dark');
      lightIcon.classList.remove('visible-icon');
      darkIcon.classList.add('visible-icon');
    }
  }