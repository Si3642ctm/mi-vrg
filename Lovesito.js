const image4 = document.getElementById("mortadela");
const audio4 = document.getElementById("Love");
image4.addEventListener("click", () => {
    audio4.play();
    image4.style.animation = "shake 0.5s";
});
