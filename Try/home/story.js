document.addEventListener("DOMContentLoaded", function () {
    const timelineElements = document.querySelectorAll(".timeline-content");

    function revealOnScroll() {
        let windowHeight = window.innerHeight;
        timelineElements.forEach((el) => {
            let position = el.getBoundingClientRect().top;
            if (position < windowHeight - 50) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});
