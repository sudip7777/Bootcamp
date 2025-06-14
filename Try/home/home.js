document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("mouseover", function () {
            this.style.animation = "blink 0.5s infinite alternate";
        });

        link.addEventListener("mouseleave", function () {
            this.style.animation = "";
        });
    });
});
