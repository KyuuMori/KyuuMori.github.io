document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("openBtn");
  const typewriter = document.getElementById("typewriter");

  const message = `Hi Stinky butt, I made a funny website to tell you I love you :3! 
  Will you be my Valentine on this lovely weekend in the big 2026? @w@! 
  I love you so much stinky! 💕`;

  let index = 0;

  button.addEventListener("click", () => {
    typewriter.textContent = ""; // clear in case of repeat
    button.disabled = true; // prevent multiple clicks
    typeNextChar();
  });

  function typeNextChar() {
    if (index < message.length) {
      typewriter.textContent += message.charAt(index);
      index++;
      setTimeout(typeNextChar, 50); // adjust typing speed
    } else {
      button.textContent = "You got mail! 💌";
    }
  }
});
