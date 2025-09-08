// Ocultamos el texto de inicio
gsap.set(".titulo", { display: "inline", opacity: 0 });

// Timeline principal
let tl = gsap.timeline({ repeat: 0, yoyo: false, paused: true });

// Reproducir sonido
let audio_swoosh = document.getElementById("titulo-sonido");
let audio_comenzar = document.getElementById("comenzar-sonido");
let audio_coin = document.getElementById("moneda-sonido");
  
// 1. Efecto de entrada para la pelota de fútbol
tl.from("#futbol", {
  duration: 1,
  scale: 0,         // empieza pequeño
  opacity: 0,       // invisible
  transformOrigin: "50% 50%", // centro del svg
  ease: "back.out(1.5)",
  onStart: () => {
    audio_swoosh.currentTime = 0;
    audio_swoosh.play();
  }
});

// 2. Morph a tennis
tl.to("#futbol", {
  duration: 1,
  morphSVG: "#tennis",
  ease: "power2.inOut",
  onStart: () => {
    audio_swoosh.currentTime = 0;
    audio_swoosh.play();
  }
});

// 3. Morph a banca
tl.to("#futbol", {
  duration: 1,
  morphSVG: "#banca",
  ease: "power2.inOut",
  onStart: () => {
    audio_swoosh.currentTime = 0;
    audio_swoosh.play();
  }
});

// 4. Morph a basquet
tl.to("#futbol", {
  duration: 1,
  morphSVG: "#basquet",
  ease: "power2.inOut",
  onStart: () => {
    audio_swoosh.currentTime = 0;
    audio_swoosh.play();
  }
});

// 5. Morph a mancuerna
tl.to("#futbol", {
  duration: 1,
  morphSVG: "#mancuerna",
  ease: "power2.inOut",
  onStart: () => {
    audio_swoosh.currentTime = 0;
    audio_swoosh.play();
  },
  onComplete: () => {   
    audio_comenzar.pause(); 
    audio_coin.currentTime = 0;
    audio_coin.play();
    // mostrar el texto BET-SPORTS al terminar
    gsap.to(".titulo", { opacity: 1, duration: 1.5 });

  }
});

document.getElementById("boton").addEventListener("click", () => {
  // Ocultar el botón con animación
  gsap.to("#boton", {
    opacity: 0,
    scale: 1,
    duration: 0.2,
    transformOrigin: "50% 50%",
    ease: "power2.inOut",
    onStart: () => {
      audio_comenzar.currentTime = 0;
      audio_comenzar.play();
    },
    onComplete: () => {
      // Quitarlo del flujo para que no bloquee clics
      gsap.set("#boton", { display: "none" });
      gsap.set("#futbol", { display: "inline" });

      // Reproducir timeline
      tl.play();
    }
  });
});

