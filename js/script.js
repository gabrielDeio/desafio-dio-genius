//constantes
const AZUL = 0;
const VERMELHO = 1;
const VERDE = 2;
const AMARELO = 3;

//variáveis
let sequencia = [];
let sequenciaClicada = [];
let azul = document.querySelector('.azul');
let vermelho = document.querySelector('.vermelho');
let verde = document.querySelector('.verde');
let amarelo = document.querySelector('.amarelo');
let pontuacao;
let som = [];
azul.style.opacity = '0.6';
vermelho.style.opacity = '0.6';
amarelo.style.opacity = '0.6';
verde.style.opacity = '0.6';


//funções
const gerarNumero = (limite) => Math.floor(Math.random() * limite);

const acrescentarSequencia = (valor) => sequencia.push(valor);

const retornaCor = (cor) =>{
    if(cor === AZUL) return azul;
    else if(cor === VERMELHO) return vermelho;
    else if(cor === VERDE) return verde;
    else if(cor === AMARELO) return amarelo;
} 


const acender = cor => {
    cor.style.opacity = 1.0;
}    

const apagar = cor => {
    cor.style.opacity = 0.6;
    
}

const piscar = (cor, number) => {
    cor = retornaCor(cor);
    setTimeout(() => {
        acender(cor);

        setTimeout(()=> {
            apagar(cor)
        }, 500);
    }, number*1000);
}

const acenderSequencia = (sequencia) => {
    for(let i = 0; i < sequencia.length; i++){
        piscar(sequencia[i], i);
    }
}

const checarSequencia = () =>{
    for(let i in sequenciaClicada){
        if(sequenciaClicada[i] != sequencia[i]){
            gameOver();
            break;
        }
    }
    if(sequenciaClicada.length === sequencia.length){
        alert('Pontuação: '+ pontuacao +' \nVocê acertou! Iniciando próximo nível');
        sequenciaClicada = [];
        proximoNivel();
    }
}
const clique = (cor) =>{
    piscar(cor);

    setTimeout(()=> {
        sequenciaClicada.push(cor);
        checarSequencia();
    }, 200);
}

const gameOver = () =>{
    alert('Pontuação: '+ pontuacao + '\nVocê perdeu!\nClique em ok para iniciar um novo jogo!');
    sequencia = [];
    sequenciaClicada = [];
    playGame();
}

const proximoNivel = () =>{
    pontuacao++;
    acrescentarSequencia(gerarNumero(4));
    acenderSequencia(sequencia);
}

const playGame = () =>{
    alert('Bem vindo ao Genius! Inciando novo jogo!');
    pontuacao = 0;
    proximoNivel();
}

azul.onclick = () => clique(AZUL);
vermelho.onclick = () => clique(VERMELHO);
verde.onclick = () => clique(VERDE);
amarelo.onclick = () => clique(AMARELO);

playGame();