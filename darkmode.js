 const t = document.getElementById('theme-toggle');
if (t) {
  const saved = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  t.checked = (saved === 'dark');

  t.addEventListener('change', e => {
    const mode = e.target.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('theme', mode);
  });

  
}
