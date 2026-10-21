const image = document.getElementById("lagrasoski");
const audio = document.getElementById("Perro");
image.addEventListener("click", () => {
    audio.play();
    image.style.animation = "shake 0.5s";
});
