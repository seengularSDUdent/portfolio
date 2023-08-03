const themeSwithcher = () => {
    const themeToggleButtons = document.querySelectorAll('#theme-toggle');
    const theme = localStorage.getItem('theme');

    document.body.classList.add(theme);
    
    themeToggleButtons.forEach(element => {
        element.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            if(document.body.classList.contains('light-mode')) {
                localStorage.setItem('theme', 'light-mode');
            }
            else {
                localStorage.removeItem('theme');
                document.body.removeAttribute('class');
            }
        })
    });
}

export default themeSwithcher;