document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('theme-switch');
    const html = document.documentElement;
    const nav = document.getElementById('main-nav');

    themeSwitch.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        html.setAttribute('data-theme', newTheme);
        themeSwitch.textContent = newTheme === 'light' ? 'Modo Oscuro' : 'Modo Claro';
    });

    window.addEventListener('scroll', () => {
        const trigger = 180; 
        
        if (window.scrollY >= trigger) {
            if (!nav.classList.contains('scrolled')) {
                nav.classList.add('fade-out');
                setTimeout(() => {
                    nav.classList.add('scrolled');
                    nav.classList.remove('fade-out');
                }, 300);
            }
        } else {
            if (nav.classList.contains('scrolled')) {
                nav.classList.add('fade-out');
                setTimeout(() => {
                    nav.classList.remove('scrolled');
                    nav.classList.remove('fade-out');
                }, 300);
            }
        }
    });

    const container = document.getElementById('physics-canvas');
    if (container) {
        for (let i = 0; i < 25; i++) {
            const dot = document.createElement('div');
            dot.style.cssText = `
                position: absolute;
                width: 4px; height: 4px;
                background: var(--doodle-color);
                border-radius: 50%;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                opacity: 0.15;
            `;
            container.appendChild(dot);
        }
    }
});