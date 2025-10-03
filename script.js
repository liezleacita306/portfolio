// Theme toggle with persistence
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;
const storedTheme = localStorage.getItem('site-theme');
if (storedTheme) root.setAttribute('data-theme', storedTheme);

function updateThemeIcon() {
  const t = root.getAttribute('data-theme') === 'dark' ? '🖤' : '☀️';
  themeToggle.textContent = t;
}
updateThemeIcon();

themeToggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('site-theme', next);
  updateThemeIcon();
});

// 📝 Editable About Me section
const editBtn = document.getElementById('edit-toggle');
const aboutContent = document.getElementById('about-content');
let editing = false;

// Load saved content when page loads
const saved = localStorage.getItem('about-html');
if (saved) aboutContent.innerHTML = saved;

// Button click to toggle edit/save
editBtn.addEventListener('click', () => {
  editing = !editing;
  aboutContent.contentEditable = editing;

  if (editing) {
    editBtn.textContent = '💾 Save';
    aboutContent.focus();
  } else {
    editBtn.textContent = '✏️ Edit';
    localStorage.setItem('about-html', aboutContent.innerHTML);
    alert('✅ About Me section saved!');
  }
});
