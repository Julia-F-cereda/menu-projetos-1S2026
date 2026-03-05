const inp01 = document.getElementById('valor01');
const inp02 = document.getElementById('valor02');
const resultado = document.getElementById('resultado');

function calcularTotal(){
    const v01 = parseFloat(inp01.value);
    const v02 = parseFloat(inp02.value);


    //vou ver se os valores estao inseridos
    if (isNaN (v01) || isNaN (v02)) {
        resultado.style.display = 'flex';
        resultado.innerHTML = `<p>Um dos valores não foram inseridos, Tente novamente!</p>`;
    }else{
    
    

    resultado.innerHTML = ` 
        <h1>Total a pagar</h1><br>
        <p>Foram comprados ${v01} produtos, Cada produto teve um valor de: R$${v02.toFixed(2)}.</p><br>
        <p>O valor total a pagar será de: R$${(v01 * v02).toFixed(2)}.</p>
      `
}
};
function desconto(){
    const v01 = parseFloat(inp01.value);
    const v02 = parseFloat(inp02.value);

    //vou ver se os valores estao inseridos
    if (isNaN (v01) || isNaN (v02)) {
        resultado.style.display = 'flex';
       resultado.innerHTML = `<p>Um dos valores não foram inseridos, Tente novamente!</p>`;
    }else{
    
    
    resultado.style.display = 'flex';
    resultado.innerHTML = `
        <h1>Total a pagar com desconto</h1><br>
        <p>Preço total: R$ ${v01.toFixed(2)}. Quantidade de desconto: ${v02}%</p><br>  
        <p>O total a pagar será: R$ ${(v01-(v01 * v02) / 100).toFixed(2)}.</p>
            `
    }
};

function juros(){
    const v01 = parseFloat(inp01.value);
    const v02 = parseFloat(inp02.value);

    //vou ver se os valores estao inseridos
    if (isNaN (v01) || isNaN (v02)) {
        resultado.style.display = 'flex';
        resultado.innerHTML = `<p>Um dos valores não foram inseridos, Tente novamente!</p>`;
    }else{
    
    
    resultado.style.display = 'flex';
    resultado.innerHTML = `
        <h1>Total a pagar com juros</h1><br>
        <p>Preço total sem juros: R$ ${v01.toFixed(2)}.Porcentagem de juros: ${v02}%</p><br>
        <p>Preço a pagar: R$ ${(v01+(v01 * v02) / 100).toFixed(2)}.</p>
             
               `
    }
};
function comissao(){
    const v01 = parseFloat(inp01.value);
    const v02 = parseFloat(inp02.value);

    //vou ver se os valores estao inseridos
    if (isNaN (v01) || isNaN (v02)) {
        resultado.style.display = 'flex';
        resultado.innerHTML = `<p>Um dos valores não foram inseridos, Tente novamente!</p>`;
    }else{
    
    
    resultado.style.display = 'flex';
    resultado.innerHTML = `
        <h1>Comissão </h1><br>
        <p>Preço das vendas: R$ ${v01.toFixed(2)}.Porcentagem da comissão: ${v02}%</p><br>      
        <p>Quantidade de comissão: R$ ${((v01 * v02) / 100).toFixed(2)}.</p>
             
               `
    }

};
function lucro(){
    const v01 = parseFloat(inp01.value);
    const v02 = parseFloat(inp02.value);

    //vou ver se os valores estao inseridos
    if (isNaN (v01) || isNaN (v02)) {
        resultado.style.display = 'flex';
        resultado.innerHTML = `<p>Um dos valores não foram inseridos, Tente novamente!</p>`;
    }else{
    
   
    resultado.style.display = 'flex';
    resultado.innerHTML = `     
        <h1>Lucro</h1> <br>
        <p>Preço vendido ao cliente: R$ ${v01.toFixed(2)}.Preço comprado pelo vendedor: R$ ${v02.toFixed(2)}</p><br>     
        <p>Lucro recebido: R$ ${(v01-v02).toFixed(2)}.</p>
               `
    }

};

function limpar(){
    resultado.style.display = 'none';

   inp01.value = '';
   inp02.value = '';

   inp01.focus();
};