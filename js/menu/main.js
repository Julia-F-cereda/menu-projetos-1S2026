const btP1 = document.querySelector('#inputP1');
const btP2 = document.querySelector('#inputP2');
const btP3 = document.querySelector('#inputP3');
const btP4 = document.querySelector('#inputP4');

//chama um afunção usando esse evento
//o arrow esta sendo usado ai ao inves de escrever function é só colocar arrow

//adicionando um evento para o botao um
//usando função arrow
//onde o arquivo esta la no link chamado
btP1.addEventListener('click', () =>{
    window.location.href ='./pages/projeto01.html'
});

btP2.addEventListener('click', function(){
    window.location.href ='./pages/projeto02.html'
});

btP3.addEventListener('click', function(){
    window.location.href ='./pages/projeto03.html'
});

btP4.addEventListener('click', function(){
    window.location.href = './pages/projeto04.html'
});
