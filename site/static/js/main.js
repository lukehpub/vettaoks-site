/* Mobile nav toggle */
(function () {
  var burger = document.getElementById('nav-burger');
  var panel  = document.getElementById('nav-panel');
  if (!burger || !panel) return;

  burger.addEventListener('click', function () {
    var isOpen = panel.classList.toggle('open');
    burger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on nav link click
  panel.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      panel.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
})();
