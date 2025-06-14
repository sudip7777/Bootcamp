document.querySelectorAll('.popup-trigger').forEach(img => {
    img.addEventListener('mouseover', function () {
        let popup = document.createElement("div");
        popup.classList.add("popup-image");
        popup.innerHTML = `<img src="${this.src}" alt="Full Image">`;
        document.body.appendChild(popup);

        popup.addEventListener("click", function () {
            document.body.removeChild(popup);
        });
    });
});
