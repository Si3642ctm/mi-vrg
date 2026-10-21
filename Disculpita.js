const image1 = document.getElementById("paratiski");
const audio1 = document.getElementById("Disculpa");
image1.addEventListener("click", () => {
    audio1.play();
    image1.style.animation = "shake 0.5s";
});
