const toggle = document.getElementById('themeToggle');


if (localStorage.getItem('theme') === 'night') {   // check value correctly
  document.body.classList.add('nightmode');
  toggle.textContent = '☀️';
} else {
  toggle.textContent = '🌑';
}

toggle.addEventListener('click', () => {
  document.body.classList.toggle('nightmode');

  const isNightmode = document.body.classList.contains('nightmode');
  localStorage.setItem('theme', isNightmode ? 'night' : 'light');

  toggle.textContent = isNightmode ? '☀️' : '🌑';
});
