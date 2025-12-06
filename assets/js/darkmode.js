// Restore theme on load
if (localStorage.theme === 'dark') {
  document.documentElement.classList.add('theme-dark');
}

document.getElementById('theme-toggle').addEventListener('click', function () {
  const root = document.documentElement;

  if (root.classList.contains('theme-dark')) {
    root.classList.remove('theme-dark');
    localStorage.theme = 'light';
  } else {
    root.classList.add('theme-dark');
    localStorage.theme = 'dark';
  }
});
