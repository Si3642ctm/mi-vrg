const image2 = document.getElementById("toxiski");
const audio2 = document.getElementById("Deer");
image2.addEventListener("click", () => {
    audio2.play();
    image2.style.animation = "shake 0.5s";
});
