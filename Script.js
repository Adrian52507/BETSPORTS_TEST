// Ocultamos el texto de inicio
gsap.set(".titulo", { opacity: 0 });

// Timeline principal
let tl = gsap.timeline({ repeat: 0, yoyo: false });

// 1. Efecto de entrada para la pelota de fútbol
tl.from("#futbol", {
  duration: 1,
  scale: 0,         // empieza pequeño
  opacity: 0,       // invisible
  transformOrigin: "50% 50%", // centro del svg
  ease: "back.out(1.7)"
});

// 2. Morph a tennis
tl.to("#futbol", {
  duration: 1,
  morphSVG: "#tennis",
  ease: "power2.inOut"
});

// 3. Morph a banca
tl.to("#futbol", {
  duration: 1,
  morphSVG: "#banca",
  ease: "power2.inOut"
});

// 4. Morph a basquet
tl.to("#futbol", {
  duration: 1,
  morphSVG: "#basquet",
  ease: "power2.inOut"
});

// 5. Morph a mancuerna
tl.to("#futbol", {
  duration: 1,
  morphSVG: "#mancuerna",
  ease: "power2.inOut",
  onComplete: () => {
    // mostrar el texto BET-SPORTS al terminar
    gsap.to(".titulo", { opacity: 1, duration: 1, delay: 0.5 });
  
    // Reproducir sonido
    let audio = document.getElementById("titulo-sound");
    audio.muted = false;
    audio.play();
  }
});
