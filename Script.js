// timeline de GSAP
let tl = gsap.timeline({ repeat: 0, yoyo: false });

// 1. Morph de raqueta (#futbol) a gym (#mancuerna)
tl.to("#futbol", {
  duration: 2,
  morphSVG: "#mancuerna",
  ease: "power2.inOut"
});

// 2. Luego a basket (#basquet)
tl.to("#futbol", {
  duration: 2,
  morphSVG: "#basquet",
  ease: "power2.inOut"
});

// 3. Luego a soccer (#banca)
tl.to("#futbol", {
  duration: 2,
  morphSVG: "#banca",
  ease: "power2.inOut"
});

// 4. Finalmente a gym (#tennis)
tl.to("#futbol", {
  duration: 2,
  morphSVG: "#tennis",
  ease: "power2.inOut",
  onComplete: () => {
    // mostrar el texto BET-SPORTS al terminar
    gsap.to(".titulo", { opacity: 1, duration: 1 });
  }
});

// Ocultamos el texto al inicio
gsap.set(".titulo", { opacity: 0 });
