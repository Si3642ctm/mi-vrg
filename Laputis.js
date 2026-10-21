const image3 = document.getElementById("laputiski");
const audio3 = document.getElementById("Laputa");
image3.addEventListener("click", () => {
    audio3.play();
    image3.style.animation = "shake 0.5s";
});
