const htmlElement = document.documentElement;
const arabic = document.getElementById('ar');
const english = document.getElementById('en');

const handleTranslate = () => {
        if (detectLanguage() === 'en') {
                english.classList.add('font-bold');
                arabic.classList.remove('font-bold');
                htmlElement.removeAttribute("dir")
        } else {
                arabic.classList.add('font-bold');
                english.classList.remove('font-bold');
                htmlElement.setAttribute("dir","rtl")
        }
}

window.addEventListener('DOMContentLoaded', () => {
handleTranslate();
});
