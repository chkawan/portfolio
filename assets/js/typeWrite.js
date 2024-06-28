// export function typeWrite(elemento) {
//   const textoArray = elemento.innerHTML.split("");
//   elemento.innerHTML = " ";
//   textoArray.forEach(function (letra, i) {
//     setTimeout(function () {
//       elemento.innerHTML += letra;
//     }, 75 * i);
//   });
// }
// Define a função de efeito de digitação
function typeWrite(elemento) {
  // Divide o texto do elemento em um array de caracteres
  const textoArray = elemento.innerHTML.split("");
  // Limpa o conteúdo do elemento
  elemento.innerHTML = " ";
  // Para cada caractere, define um timeout para adicioná-lo de volta ao elemento
  textoArray.forEach(function (letra, i) {
    setTimeout(function () {
      elemento.innerHTML += letra;
    }, 80 * i);
  });
}

// Espera até que o DOM esteja completamente carregado
document.addEventListener('DOMContentLoaded', () => {
  // Seleciona o elemento com a classe 'typewriter'
  const elemento = document.querySelector('.typewriter');
  // Aplica o efeito de digitação ao elemento
  typeWrite(elemento);
});
