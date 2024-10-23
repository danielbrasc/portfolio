(() => {
  const body = document.querySelector('body');
  const btnToggleTheme = document.querySelector(".toggle-theme");
  const btnIcon = document.querySelector(".toggle-theme > i");

  btnToggleTheme.onclick = toggleTheme;

  function toggleTheme() {
    const currentTheme = body.classList.value;
    const savedTheme = getTheme();

    if(currentTheme && currentTheme === savedTheme) {
      applyDarkTheme();
    } else {
      applyLightTheme();
    }
  }

  function saveTheme(theme = 'dark') {
    localStorage.setItem('theme', theme)
  }

  function getTheme() {
    return localStorage.getItem('theme');
  }

  function changeThemeIcon(theme) {
    if(theme === 'light') {
      btnIcon.classList.remove('fa-sun');
      btnIcon.classList.add('fa-moon');
    } else {
      btnIcon.classList.remove('fa-moon');
      btnIcon.classList.add('fa-sun');
    }
  }

  function applyLightTheme() {
    body.classList.add('light');
    changeThemeIcon('light')
    saveTheme('light');
  }

  function applyDarkTheme() {
    body.classList.remove('light');
    changeThemeIcon('dark')
    saveTheme('dark');
  }

  function init() {
    if(!getTheme()) {
      saveTheme();
    }

    if (getTheme() === 'light') {
      applyLightTheme();
    }
  }

  init();
})();

// Slider projects

// Create projects by a JSON file

// Portuguese and English version

