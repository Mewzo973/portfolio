
    // Récupère le bouton et l'état initial
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';

    // Applique le thème initial
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.textContent = '☀️'; // Icône pour revenir au mode clair
    }

    // Écoute le clic pour basculer le thème
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const isDarkTheme = document.body.classList.contains('dark-theme');
        
        // Change l'icône en fonction du thème
        themeToggle.textContent = isDarkTheme ? '☀️' : '🌙';
        
        // Sauvegarde le choix de l'utilisateur
        localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    });


