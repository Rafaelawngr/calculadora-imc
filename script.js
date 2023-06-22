let altura = document.querySelector("input#altura");
let peso = document.querySelector("input#peso");
let resposta = document.querySelector("#valor");

function calcularIMC () {
  let peson = Number(peso.value);
  let alturan = Number(altura.value);
  let imc = ( peson / alturan**2).toFixed(2)
  let valorImc = "";

  if (imc < 18.5) {
    valorImc = `Seu IMC é ${imc} - Você está abaixo do peso.`;
  } else if (imc <= 25) {
    valorImc = `Seu IMC é ${imc} - Você está com o peso normal.`;
  } else if (imc <= 30) {
    valorImc = `Seu IMC é ${imc} - Você está com sobrepeso.`;
  } else if (imc <= 35) {
    valorImc = `Seu IMC é ${imc} - Você está com obesidade grau I.`;
  } else if (imc <= 40) {
    valorImc = `Seu IMC é ${imc} - Você está com obesidade grau III.`;
  } else {
    valorImc = `Seu IMC é ${imc} - Você está com obesidade grau III.`;
  }

  resposta.textContent = valorImc;
};


// teste botão range para o input de peso:

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
