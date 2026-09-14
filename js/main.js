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

/* =========================================================
   Past events: "Read more" description toggle + photo/video
   lightbox. Shared by every page that has a .past-event card —
   nothing here needs to change when a new event is added.
   ========================================================= */

/* Read more / read less for clamped event descriptions */
document.querySelectorAll('.read-more-toggle').forEach(function (btn) {
  var text = btn.previousElementSibling;
  if (!text) return;
  btn.addEventListener('click', function () {
    var isExpanded = text.classList.toggle('expanded');
    btn.textContent = isExpanded
      ? (btn.dataset.lessLabel || 'Read less')
      : (btn.dataset.moreLabel || 'Read more');
  });
});

/* Lightbox for gallery thumbnails (photos + Google Drive videos).
   Instagram-hosted thumbnails are plain links and open in a new
   tab instead, so they're skipped here. */
var lightboxOverlay = document.getElementById('lightbox-overlay');
var lightboxContent = document.getElementById('lightbox-content');
var lightboxClose = document.getElementById('lightbox-close');

if (lightboxOverlay && lightboxContent && lightboxClose) {
  function openLightbox(type, src, alt) {
    lightboxContent.innerHTML = '';
    if (type === 'image') {
      var img = document.createElement('img');
      img.src = src;
      img.alt = alt || '';
      lightboxContent.appendChild(img);
    } else if (type === 'drive') {
      var iframe = document.createElement('iframe');
      iframe.src = src;
      iframe.allow = 'autoplay';
      iframe.setAttribute('allowfullscreen', '');
      lightboxContent.appendChild(iframe);
    }
    lightboxOverlay.classList.add('open');
  }

  function closeLightbox() {
    lightboxOverlay.classList.remove('open');
    lightboxContent.innerHTML = '';
  }

  document.querySelectorAll('.gallery-thumb[data-type]').forEach(function (thumb) {
    thumb.addEventListener('click', function () {
      openLightbox(thumb.dataset.type, thumb.dataset.src, thumb.dataset.alt);
    });
  });

  lightboxClose.addEventListener('click', closeLightbox);
  lightboxOverlay.addEventListener('click', function (e) {
    if (e.target === lightboxOverlay) closeLightbox();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });
}
