const arabic = document.getElementById('ar');
const english = document.getElementById('en');

const handleTranslate = () => {
        if ((window.location.href.includes("index.html")||window.location.pathname=="/") && !window.location.href.includes("arabic.html")) {
                english.classList.add('font-bold');
                arabic.classList.remove('font-bold');
        } else {
                arabic.classList.add('font-bold');
                english.classList.remove('font-bold');
        }
}

window.addEventListener('DOMContentLoaded', () => {
handleTranslate();
});
