const btP1 = document.querySelector('#inputP1');
const btP2 = document.querySelector('#inputP2');
const btP3 = document.querySelector('#inputP3');
const btP4 = document.querySelector('#inputP4');

//adicionado evento para as funções(click)
//href pegou a pagina que tem os botoes
//if vai verirficar se o botao um esta na pagina 
const verificar = () => {
    if (btP1){
        btP1.addEventListener('click', () =>{ window.location.href ='./pages/projeto01.html'});
        btP2.addEventListener('click', () =>{ window.location.href ='./pages/projeto02.html'});
        btP3.addEventListener('click', () =>{ window.location.href ='./pages/projeto03.html'});
        btP4.addEventListener('click', () =>{ window.location.href ='./pages/projeto04.html'});
}
};



//criar o botão voltar
const criarBt = () =>{
    //criando elemento botao
    const btVoltar = document.createElement('button');
    //styles
    btVoltar.innerText = 'Voltar';
    btVoltar.style.marginTop = '20px';
    //criando o click 

//adicionamos um evento(click)
    btVoltar.addEventListener('click', () => {
          window.location.href = "../index.html";
    });


//colocando o botao no body pra aparecer na pg
    document.body.appendChild(btVoltar);
};

//se esse botao existir, significa que vamos estar no index
if(btP1){
    verificar();
} else{
    window.addEventListener('load', () =>{
        console.log('Pagina carregou usando metodo');
        criarBt();
    });
};

//tem que transformar em constantes
//tem que usar if
//eventos, funções, propriedades, objetos, metodos