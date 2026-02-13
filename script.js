const envelope = document.getElementById("envelope");
const title = document.getElementById("title");
const message = document.getElementById("message");
const musica = document.getElementById("musica");
const btnAceptar = document.getElementById("btnAceptar");
const respuesta = document.getElementById("respuesta");

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

function crearCorazones(cantidad = 20) {
  for (let i = 0; i < cantidad; i++) {
    const heart = document.createElement("span");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 4) + "s";
    heart.style.opacity = Math.random();
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 8000);
  }
}

// Corazones iniciales
crearCorazones(20);

// Botón aceptar
btnAceptar.addEventListener("click", () => {
  respuesta.textContent = "¡Sabía que dirías que sí! 💍💖";
  respuesta.classList.add("mostrar");
  crearCorazones(40);
});
