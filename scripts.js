particlesJS.load("particles-js","particles-config.json",()=>{});

const openModal = document.getElementById("openModal"),
      modal = document.getElementById("modal"),
      closeModal = document.getElementById("closeModal"),
      form = document.getElementById("teamForm");

openModal.addEventListener("click", e => {
  e.preventDefault();
  modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});

form.addEventListener("submit", e => {
  e.preventDefault();
  const t = form.teamName.value,
        c = form.captain.value,
        m = form.members.value.trim().replace(/\r?\n/g, ', ');
  const subject = encodeURIComponent(`Inscrição: ${t}`),
        body = encodeURIComponent(`Nome do Time: ${t}\nCapitão: ${c}\nMembros: ${m}`);
  window.location.href = `mailto:opeka.o.un1c0@gmail.com?subject=${subject}&body=${body}`;
  modal.style.display = "none";
});
