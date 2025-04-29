const logo = document.querySelector(".logo");

logo.addEventListener("mouseenter", () => {
  logo.play();
});

logo.addEventListener("mouseleave", () => {
  logo.pause();
  logo.currentTime = 0;
});
