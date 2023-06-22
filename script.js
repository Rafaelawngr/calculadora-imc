const altura = document.querySelector("#altura");
const peso = document.querySelector("#peso");
const resposta = document.querySelector("#calcularBtn");

const calcularIMC = () => {
  const imc = (peso.value / (altura.value * altura.value)).toFixed();
  let valorImc = "";
  console.log(imc);

  if (imc < 18.5) {
    valorImc = `IMC = ${imc} - Você está abaixo do peso.`;
  } else if (imc <= 25) {
    valorImc = `IMC = ${imc} - Você está com o peso normal.`;
  } else if (imc <= 30) {
    valorImc = `IMC = ${imc} - Você está com sobrepeso.`;
  } else if (imc <= 35) {
    valorImc = `IMC = ${imc} - Você está com obesidade grau I.`;
  } else if (imc <= 40) {
    valorImc = `IMC = ${imc} - Você está com obesidade grau III.`;
  } else {
    valorImc = `IMC = ${imc} - Você está com obesidade grau III.`;
  }

  resposta.textContent = valorImc;
};

// function calcularIMC() {
//   const imc = (peso / (altura * altura)).toFixed(2);

// function rangeButton() {
//     let resultado = document.getElementById("resultado");
//     let valor = document.getElementById("peso").value;
//     resultado.innerHTML = valor
//    }

//    rangeButton()

//    document.addEventListener("change", range);

// if (isNaN(altura) || isNaN(peso)) {
//     alert('Por favor, insira valores numéricos válidos para altura e peso.');
//     return;
//   }
