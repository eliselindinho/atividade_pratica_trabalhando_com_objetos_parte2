let btnCalcular = document.getElementById("calcular");
let btnLimpar = document.getElementById("limpar");
let numero = document.getElementById("numero");
let arrValores = [];
let resultadoDiv = document.getElementById("resultado");

let valorDigitado = () => {
  let valorInput = numero.value;
  arrValores.push(valorInput);
  let triplica = arrValores.map(function (item) {
    return item * 3;
  });
  console.log(triplica);
  resultadoDiv.innerText = triplica.join(",");
  resultadoDiv.removeAttribute("hidden");
  limpaInput();
};

let limpaInput = () => {
  numero.value = "";
};
let limparFormulario = () => {
  arrValores = [];
  resultadoDiv.setAttribute("hidden", "false");
};

btnCalcular.addEventListener("click", valorDigitado);
btnLimpar.addEventListener("click", limparFormulario);
