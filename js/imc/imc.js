
// pegando os elementos 

const inpPeso = document.getElementById('weight');
const inpAltura = document.getElementById('height');
const textoResultado = document.getElementById('resultText');
const formulario = document.getElementById('imcForm');

// FUNÇÃO AUXILIAR

function mostrarResultado(mensagem) {
  textoResultado.textContent = mensagem;
}



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
  classificacao = classIMC(imc);

 
  // Template String
  mostrarResultado(`Seu IMC é ${imc.toFixed(2)} (${classificacao}).`);
};

// FUNÇÃO PRINCIPAL
function classIMC(imc){
    // Classificação
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc < 25) return 'Peso normal';
    if (imc < 30)  return 'Sobrepeso';
    return 'Obesidade';

};



// LIMPAR CAMPOS

function limparCampos() {
  formulario.reset();
  inpPeso.focus();
  mostrarResultado('Preencha os campos e clique em "Calcular".');
}