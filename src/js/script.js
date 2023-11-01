const valor = document.getElementById("valor");
const maisButton = document.getElementById("mais");
const menosButton = document.getElementById("menos");
const resetarButton = document.getElementById("resetar");

let contador = 0;
let intervalId = 0;

const atualizarValor = () => {
  valor.innerHTML = contador;
};
maisButton.addEventListener("mousedown", () => {
  intervalId = setInterval(() => {
    contador++;
    atualizarValor();
  }, 100);
});

menosButton.addEventListener("mousedown", () => {
  intervalId = setInterval(() => {
    contador--;
    atualizarValor();
  }, 100);
});

resetarButton.addEventListener("click", () => {
  contador = 0;
  atualizarValor();
});

document.addEventListener("mouseup", () => clearInterval(intervalId));
