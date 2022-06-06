function activeLinks () {
  const current = window.location.pathname;
  const navLinks = document.querySelectorAll('.menu--items').forEach((link) => {
    if (link.href.includes(`${current}`)) {
      link.classList.add('active');
    }
  });
}

function hamburger () {
  const hamburger = document.getElementById('hamburger');

  hamburger.addEventListener('click', function() {
    this.classList.toggle('isactive');
  });
}

function showMenu () {
    const btn = document.getElementById('hamburger');

    btn.addEventListener('click', () => {
      const menu = document.getElementById('menu');
      menu.classList.toggle('show');
    });
}

window.onload = activeLinks;
hamburger();
showMenu();
