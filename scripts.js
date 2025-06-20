// Partículas
particlesJS.load("particles-js", "particles-config.json", () => {});

// Animação da caixa de logs baseada na posição do mouse
const logsBox = document.getElementById("logsBox");

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 30;
  const y = (e.clientY / window.innerHeight - 0.5) * -30;

  logsBox.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

const ownersBox = document.getElementById("ownersBox");

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 30;
  const y = (e.clientY / window.innerHeight - 0.5) * -30;

  logsBox.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  ownersBox.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});
