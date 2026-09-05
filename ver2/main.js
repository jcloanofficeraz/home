document.getElementById('year').textContent = new Date().getFullYear();

/* Mobile menu toggle */
var menuToggle = document.querySelector('.menu-toggle');
var mobileNav = document.getElementById('mobile-nav');

menuToggle.addEventListener('click', function () {
  var isOpen = mobileNav.getAttribute('data-open') === 'true';
  mobileNav.setAttribute('data-open', String(!isOpen));
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
});

/* Mobile "Loans" submenu toggle */
var mobileDropdownToggle = document.querySelector('.mobile-dropdown-toggle');
var mobileSub = document.getElementById('mobile-loans');

if (mobileDropdownToggle) {
  mobileDropdownToggle.addEventListener('click', function () {
    var isOpen = mobileSub.getAttribute('data-open') === 'true';
    mobileSub.setAttribute('data-open', String(!isOpen));
    mobileDropdownToggle.setAttribute('aria-expanded', String(!isOpen));
  });
}

/* Desktop "Loans" dropdown */
var dropdownWrap = document.querySelector('.has-dropdown');
var dropdownToggle = document.querySelector('.dropdown-toggle');

if (dropdownWrap && dropdownToggle) {
  function closeDropdown() {
    dropdownWrap.setAttribute('data-open', 'false');
    dropdownToggle.setAttribute('aria-expanded', 'false');
  }

  dropdownToggle.addEventListener('click', function (e) {
    e.stopPropagation();
    var isOpen = dropdownWrap.getAttribute('data-open') === 'true';
    dropdownWrap.setAttribute('data-open', String(!isOpen));
    dropdownToggle.setAttribute('aria-expanded', String(!isOpen));
  });

  document.addEventListener('click', function (e) {
    if (!dropdownWrap.contains(e.target)) closeDropdown();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeDropdown();
  });
}
