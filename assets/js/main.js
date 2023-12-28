function hoverChangeDescription(description) {
  const descriptionElement = document.getElementById("description");
  descriptionElement.innerText = description;
}

// function resetDescription() {
//     const descriptionElement = document.getElementById("description");
//     descriptionElement.innerText = "*passe o cursor do mouse no card para ler*";
// }
document.addEventListener('DOMContentLoaded', function () {
  // Inicialize o ScrollReveal
  const sr = ScrollReveal();

  // Adicione a configuração para os elementos que você deseja revelar
  sr.reveal('.delaySmallReveal', { delay: 300, origin: 'bottom', distance: '20px' });
  sr.reveal('.delayMediumReveal', { delay: 500, origin: 'bottom', distance: '20px' });
  sr.reveal('.delayLargeReveal', { delay: 700, origin: 'bottom', distance: '20px' });
  sr.reveal('.delayExtraBigReveal', { delay: 900, origin: 'bottom', distance: '20px' });
  sr.reveal('.typewriter', { delay: 300, origin: 'bottom', distance: '20px' });
  sr.reveal('.intervalCardReveal', { interval: 200, origin: 'bottom', distance: '20px' });
});

