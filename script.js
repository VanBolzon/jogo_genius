let order = [];
let clickedOrder = [];
let score = 0;

//0 - verde;
//1 - vermelho;
//2 - amarelo;
//3 - azul;

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//Cria ordem aleatória
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);

    order.push(colorOrder);

    clickedOrder = [];

    for(let i in order ){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//Acende a próxima sequência
let lightColor = (element, number) => {
    number = number * 700;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 500);

    setTimeout(() => {
        element.classList.remove('selected');
    }, number);
}

//Checa se os botões clicados estão na mesma ordem gerada pelo jogo
let checkOrder = () => {
    for (let i in clickedOrder) {
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        nextLevel();
    }
}

//Clique do usuário
let click = (color) => {
    clickedOrder.push(color);
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
}

//Função para retorno da cor
let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if(color == 2) {
        return yellow;
    } else if(color == 3) {
        return blue;
    }
}

//função para próximo nível
let nextLevel = () => {
    score++;

    shuffleOrder();
}

//Função para Game Over
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo.`)
    
    order = [];
    clickedOrder = [];

    playGame();
}

//Função de início de jogo
let playGame = () => {
    alert(`Bem vindo ao Genius! Iniciando um novo jogo!`);
    score = 0;

    nextLevel();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();