const envelope = document.getElementById("envelope");
const title = document.getElementById("title");
const message = document.getElementById("message");
const musica = document.getElementById("musica");

// Parámetros de la URL
const params = new URLSearchParams(window.location.search);
const nombre = params.get("nombre");
const mensajePersonalizado = params.get("mensaje");

// Personalización
if (nombre) {
  title.textContent = `Para ${nombre} 💖`;
}

if (mensajePersonalizado) {
  message.textContent = decodeURIComponent(mensajePersonalizado);
}

// Abrir carta + música
envelope.addEventListener("click", () => {
  envelope.classList.toggle("open");
  musica.play().catch(()=>{});
});

// Generar corazones flotantes
const heartsContainer = document.querySelector(".hearts");

for (let i = 0; i < 20; i++) {
  const heart = document.createElement("span");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (5 + Math.random() * 5) + "s";
  heart.style.opacity = Math.random();
  heartsContainer.appendChild(heart);
}
