window.addEventListener('scroll', function () {
  const header = document.getElementById('main-header');
  if (window.scrollY > 35) {
    header?.classList.add('scrolled');
  } else {
    header?.classList.remove('scrolled');
  }
});
