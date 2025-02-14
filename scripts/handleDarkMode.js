const darkModeHandler = document.getElementById('darkModeHandler');
const htmlElemt = document.documentElement;

const handleDarkMode = (event) => {
        if (htmlElemt.getAttribute("data-theme") == 'dark') {
                htmlElemt.setAttribute("data-theme", "light");
                localStorage.setItem('theme', 'light');
                event.srcElement.classList.add('fa-toggle-off');
                event.srcElement.classList.remove('fa-toggle-on');

        } else {
                htmlElemt.setAttribute("data-theme", "dark");
                localStorage.setItem('theme', 'dark');
                event.srcElement.classList.remove('fa-toggle-off');
                event.srcElement.classList.add('fa-toggle-on');
        }
}
darkModeHandler.addEventListener('click', handleDarkMode);
document.addEventListener('DOMContentLoaded', () => {
        if (localStorage.getItem('theme') == 'dark') {
                htmlElemt.setAttribute("data-theme", "dark");
                darkModeHandler.classList.add('fa-toggle-on');
        } else {
                htmlElemt.setAttribute("data-theme", "light");
                darkModeHandler.classList.add('fa-toggle-off');
        }
});
