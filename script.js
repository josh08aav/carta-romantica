const envelope = document.getElementById("envelope");
const title = document.getElementById("title");
const message = document.getElementById("message");
const musica = document.getElementById("musica");

// Parámetros de la URL
const params = new URLSearchParams(window.location.search);
const nombre = params.get("Mi Panqusito");
const mensajePersonalizado = params.get("Mi amor el amor no se demuestra solamente un día y tampoco necesito que el calendario me diga cuando amarte yo te amo hoy mañana y siempre, tal vez no siempre demuestro lo mucho que te amo pero quiero cambiar eso y demostrarte cada día que voy a amarte hasta mi último suspiro porqué sin importar que tan enojados estemos yo te seguiré amando te seguiré eligiendo a tí una y mil veces más así que hoy te elegí a ti para preguntarte... 💖¿Aceptas ser mi san Valentín?💖");

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
