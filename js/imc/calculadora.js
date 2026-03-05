
let peso = 70;
let altura = 1.10;
const imc = peso / (altura*altura);


function calcularIMC(){

    console.log(`esse é o imc: ${imc.toFixed(2)}.`);
    classificarIMC();
};
    

function classificarIMC(){
    if (imc < 18.5) {console.log('abaixo do peso');} 
    else if( imc >= 18.5 && imc <25){console.log('peso normal');} 
    else if( imc >= 25 && imc < 30){console.log('sobrepeso');} 
    else{console.log('obesidade');}
};


calcularIMC();
