
// CAPTURA GLOBAL DOS ELEMENTOS

const inpPeso = document.getElementById('weight');
const inpAltura = document.getElementById('height');
const textoResultado = document.getElementById('resultText');
const formulario = document.getElementById('imcForm');

// FUNÇÃO AUXILIAR

function mostrarResultado(mensagem) {
  textoResultado.textContent = mensagem;
}



// FUNÇÃO PRINCIPAL

function calcularIMC() {

  const peso = parseFloat(inpPeso.value);
  const altura = parseFloat(inpAltura.value);

  // Validação
  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    mostrarResultado('Por favor, insira valores válidos.');
    return;
  }

  // Cálculo
  const imc = peso / (altura * altura);
  let classificacao = '';

  // Classificação
  if (imc < 18.5) {
    classificacao = 'Abaixo do peso';
  } else if (imc < 25) {
    classificacao = 'Peso normal';
  } else if (imc < 30) {
    classificacao = 'Sobrepeso';
  } else {
    classificacao = 'Obesidade';
  }

  // Template String
  mostrarResultado(`Seu IMC é ${imc.toFixed(2)} (${classificacao}).`);
};



// LIMPAR CAMPOS

function limparCampos() {
  formulario.reset();
  inpPeso.focus();
  mostrarResultado('Preencha os campos e clique em "Calcular".');
}