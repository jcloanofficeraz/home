(function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const dropdownButton = document.querySelector('.nav-link-dropdown');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      const isOpen = navMenu.style.display === 'block';
      navMenu.style.display = isOpen ? 'none' : 'block';
      navToggle.setAttribute('aria-expanded', String(!isOpen));
    });
  }

  if (dropdownButton) {
    dropdownButton.addEventListener('click', function () {
      const submenu = dropdownButton.parentElement.querySelector('.nav-submenu');
      if (!submenu) return;
      const isOpen = submenu.style.display === 'block';
      submenu.style.display = isOpen ? 'none' : 'block';
      dropdownButton.setAttribute('aria-expanded', String(!isOpen));
    });
  }
})();
