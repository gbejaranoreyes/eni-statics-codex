/* Mejora progresiva: sin JavaScript, los enlaces del menú permanecen visibles. */
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');
const mobile = window.matchMedia('(max-width: 767px)');
function setMenu(open) {
  toggle.setAttribute('aria-expanded', String(open));
  menu.classList.toggle('is-collapsed', mobile.matches && !open);
}
function syncLayout() { toggle.hidden = !mobile.matches; setMenu(false); }
toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
menu.addEventListener('click', event => { if (event.target.closest('a') && mobile.matches) setMenu(false); });
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && mobile.matches && toggle.getAttribute('aria-expanded') === 'true') {
    setMenu(false); toggle.focus();
  }
});
mobile.addEventListener('change', syncLayout);
syncLayout();
