const banner = document.getElementById('banner');
const robotImg = banner.querySelector('.robot-img');
const titles = banner.querySelector('.titles');
const whiteTitle = titles.querySelector('.white-title');
const blackTitle = titles.querySelector('.black-title');

const subtitles = banner.querySelector('.subtitles');
const whiteSub = subtitles.querySelector('.white-sub');
const blackSub = subtitles.querySelector('.black-sub');

banner.addEventListener('mouseenter', () => {
  // Zoom del robot
  robotImg.style.transform = 'scale(1.1)';

  // Mostrar títulos
  titles.style.opacity = '1';
  whiteTitle.style.transform = 'translateX(-50px)';
  blackTitle.style.transform = 'translateX(50px)';
  whiteTitle.style.opacity = '1';
  blackTitle.style.opacity = '1';

  // Mostrar subtítulos
subtitles.style.opacity = '1';
whiteSub.style.transform = 'translateX(-30px)';
blackSub.style.transform = 'translateX(30px)';
whiteSub.style.opacity = '1';
blackSub.style.opacity = '1';
});

banner.addEventListener('mouseleave', () => {
  // Reset zoom
  robotImg.style.transform = 'scale(1)';

  // Ocultar títulos
  titles.style.opacity = '0';
  whiteTitle.style.transform = 'translateX(0)';
  blackTitle.style.transform = 'translateX(0)';
  whiteTitle.style.opacity = '0';
  blackTitle.style.opacity = '0';

  // Ocultar subtítulos
  subtitles.style.opacity = '0';
  whiteSub.style.transform = 'translateX(0)';
  blackSub.style.transform = 'translateX(0)';
  whiteSub.style.opacity = '0';
  blackSub.style.opacity = '0';
});

const productos = [
  {
    titulo: "ESQUELETO COLGANTE",
    precio: "$15.000 COP",
    imagen: "esqueleto.png",
    colorFondo: "#1c1c1c"
  },
  {
    titulo: "COLLAR DE CORAZÓN",
    precio: "$20.000 COP",
    imagen: "corazon collar.png",
    colorFondo: "#311f23"
  },
  {
    titulo: "ARETES ESFERA",
    precio: "$20.000 COP",
    imagen: "Aretes Esfera.png",
    colorFondo: "#222222"
  },
  {
    titulo: "SPIDER ANILLO",
    precio: "$30.000 COP",
    imagen: "spider anillo.png",
    colorFondo: "#000000"
  }
];

let actual = 0;

const imagenCentral = document.getElementById("imagen-central");
const imagenMiniaturaSuperior = document.getElementById("imagen-miniatura-superior");
const imagenMiniaturaInferior = document.getElementById("imagen-miniatura-inferior");
const tituloProducto = document.getElementById("titulo-producto");
const precioProducto = document.getElementById("precio-producto");
const miniaturaSuperior = document.getElementById("miniatura-superior");
const seccion = document.querySelector(".productos-increibles");

miniaturaSuperior.addEventListener("click", () => {
  const siguiente = (actual + 1) % productos.length;
  const despues = (siguiente + 1) % productos.length;

  // Creamos el clon de la miniatura
  const clone = imagenMiniaturaSuperior.cloneNode(true);
  clone.style.position = "absolute";
  clone.style.top = imagenMiniaturaSuperior.getBoundingClientRect().top - seccion.getBoundingClientRect().top + "px";
  clone.style.left = imagenMiniaturaSuperior.getBoundingClientRect().left - seccion.getBoundingClientRect().left + "px";
  clone.style.width = imagenMiniaturaSuperior.offsetWidth + "px";
  clone.style.height = imagenMiniaturaSuperior.offsetHeight + "px";
  clone.style.transition = "all 1s ease";
  clone.style.zIndex = "9999";
  clone.style.pointerEvents = "none";
  seccion.appendChild(clone);

  // Forzar reflow
  void clone.offsetWidth;

  // Animación hacia el centro
  clone.style.top = "50%";
  clone.style.left = "50%";
  clone.style.transform = "translate(-30%, -50%) scale(4)";

  // Animación de la imagen central hacia abajo
  document.querySelector('.producto-central').style.transform = "translate(50%, 150%) scale(0.5)";
  
  // Aparece la miniatura inferior (producto anterior)
  document.querySelector('.producto-miniatura-inferior').style.opacity = "1";

setTimeout(() => {

  const anterior = actual;  // Guardamos el producto que estaba antes

  actual = siguiente;

  tituloProducto.textContent = productos[actual].titulo;
  precioProducto.textContent = productos[actual].precio;
  seccion.style.backgroundColor = productos[actual].colorFondo;
  imagenCentral.src = productos[actual].imagen;
  imagenMiniaturaSuperior.src = productos[despues].imagen;

  // Reiniciamos animación después de actualizar el texto
  tituloProducto.classList.remove("animar-texto");
  precioProducto.classList.remove("animar-texto");

  void tituloProducto.offsetWidth;
  void precioProducto.offsetWidth;

  tituloProducto.classList.add("animar-texto");
  precioProducto.classList.add("animar-texto");

  // Resetear transform sin animación
  const central = document.querySelector('.producto-central');
  central.style.transition = "none";
  central.style.transform = "translate(-50%, -50%) scale(1)";
  void central.offsetWidth;
  central.style.transition = "transform 1s ease";

  // Ahora sí ponemos el producto anterior en la miniatura inferior
  imagenMiniaturaInferior.src = productos[anterior].imagen;
  document.querySelector('.producto-miniatura-inferior').style.opacity = "1";

  seccion.removeChild(clone);
}, 1000);



});
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
  const extra = card.querySelector('.product-extra');

  card.addEventListener('mouseenter', () => {
    extra.style.bottom = '0';
    card.style.backgroundColor = '#444';
  });

  card.addEventListener('mouseleave', () => {
    extra.style.bottom = '-100%';
    card.style.backgroundColor = '#1a1a1a';
  });
});



