const htmlElemt = document.documentElement;

const handleDarkMode = (event) => {
        event.srcElement.classList.toggle('fa-toggle-off');
        event.srcElement.classList.toggle('fa-toggle-on');
        if (htmlElemt.getAttribute("data-theme") == 'dark') {
                htmlElemt.setAttribute("data-theme", "light");
        } else {
                htmlElemt.setAttribute("data-theme", "dark");
        }
}
