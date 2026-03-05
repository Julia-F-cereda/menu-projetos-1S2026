function criarBt(){
    //criando elemento botao
    const btVoltar = document.createElement('button');
    //styles
    btVoltar.innerText = 'Voltar';
    btVoltar.style.marginTop = '20px';
    //criando o click 

    function navegar(){
        window.location.href = "../index.html"
    };

    btVoltar.addEventListener('click', navegar);


    //colocando o botao no body pra aparecer na pg
    document.body.appendChild(btVoltar);
};

window.onload = criarBt();