document.querySelectorAll("nav a").forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        smoothScroll(target);
    });
});


function smoothScroll(target) {
    window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth"
    });
}
