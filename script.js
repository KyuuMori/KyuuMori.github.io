const button = document.getElementById("openBtn");
const message = document.getElementById("secretMessage");

button.addEventListener("click", () => {
  message.classList.toggle("show");
  button.textContent = "You got mail! 💖";
});
