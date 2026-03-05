// 1. lÓGICA AUTOMATICA PARA O MENU( INDEX)
//BUSCAMOS TODOS OS INPUTS DO TIPO BOTÃO DENTRO DA CLASSE .project__button-group
//isso faz ele pegar apenas os inputs do tipo button dentro dessa classe
const botoesProjeto = document.querySelectorAll('.project__button-group input[type="button"]');
console.log(botoesProjeto);

if(botoesProjeto.length > 0) {
    botoesProjeto.forEach((botao, index) => {
        botao.addEventListener('click', () => {
            //O index começa em 0, então somamos 1 para bater com projeto 01, 02
            //toString converte numero pra texto
            //padStart vai adicionar um zero na frente do numero do projeto, tipo = projeto1 vira projeto 01
            const numeroProjeto = (index + 1).toString().padStart(2, '0');
            alert(numeroProjeto);
            window.location.href = `./pages/projeto${numeroProjeto}.html`;
        });
    });
};

// 2.LOGICA NAS PAGINA DE PROJETO
const btVoltar = () => {
    const btVoltar = document.createElement('button');
    btVoltar.innerText = 'Voltar';

    //herda o estilo de botão do CSS
    btVoltar.className = 'btn-navegacao';
    btVoltar.style.backgroundColor = 'pink'

    btVoltar.addEventListener('click', () =>{
        window.location.href = '../index.html';
    });

    document.body.appendChild(btVoltar);
}

//se não tiver botões de projeto na pagina, vai assumir que  a pagina é interna
if (botoesProjeto.length === 0) {
    // evento de escuta no navegador, e depois de carregar a pagina sera invocada
    window.addEventListener('load', () => {
        btVoltar();
    })
}