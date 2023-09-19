const hamburger = document.getElementById("hamburger");
const navUL = document.getElementById("nav-ul");

hamburger.addEventListener("click", () => {
  console.log("clicked");
  navUL.classList.toggle("show");
});
