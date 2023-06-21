// 4 - dentro colocar as condicionais de imc
// 5 - exibir o resultado puxando pelo innerHTML



const altura = document.querySelector('#altura');
const peso = document.querySelector('#peso');
const resposta = document.getElementById('resposta');

function calcularIMC() {

    const imc = (peso / (altura*altura)).toFixed(2);
  
        if (imc < 18.5) {
        resposta.innerHTML = `IMC = ${imc} - Você está abaixo do peso.`
        } else if (imc <= 25) {
            //Normal
        } else if (imc <= 30) {
            //Sobrepeso
        } else if (imc <= 35) {
            //Obesidade grau I
        } else if (imc <= 40) {
            //Obesidade grau II
        } else {
            //Obesidade grau III
        }
    }


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