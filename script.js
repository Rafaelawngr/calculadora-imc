function calcularIMC() {
  let altura = Number(document.querySelector("input#altura").value);
  let peso = Number(document.querySelector("input#peso").value);
  let resposta = document.querySelector("#valor");

  let imc = (peso / altura ** 2).toFixed(2);
  let valorImc = "";

  if (altura === 0 || isNaN(altura)) {
    alert("Você digitou um valor inválido, tente novamente");
  }

  if (imc < 18.5) {
    valorImc = `Você está abaixo do peso.`;
  } else if (imc <= 25) {
    valorImc = `Você está com o peso normal.`;
  } else if (imc <= 30) {
    valorImc = `Você está com sobrepeso.`;
  } else if (imc <= 35) {
    valorImc = `Você está com obesidade grau I.`;
  } else if (imc <= 40) {
    valorImc = `Você está com obesidade grau III.`;
  } else {
    valorImc = `Você está com obesidade grau III.`;
  }

  resposta.textContent = `Seu IMC é ${imc} - ${valorImc}`;
}

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
