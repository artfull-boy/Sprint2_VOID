const scrollButton = document.getElementById("scrollButton")

const scrollToTop = () => {
        window.scrollTo({
                top: 0,
                behavior: "smooth"
        })
}

scrollButton.addEventListener("click", scrollToTop);
