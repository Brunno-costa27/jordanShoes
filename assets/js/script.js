const texto = "O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.|";
const spanTexto = document.getElementById("texto");

let index = 0;

function escreverTexto() {
    if (index < texto.length) {
        spanTexto.textContent += texto.charAt(index);
        index++;
        setTimeout(escreverTexto, 50); // Velocidade da escrita em milissegundos
    }
}

// Iniciar a função de escrita quando a página for carregada
window.addEventListener("load", escreverTexto);

/*
const texto = "O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.|";

Esta linha cria uma constante chamada texto que armazena uma string. Esta string contém o texto que você deseja que seja escrito na página.
const spanTexto = document.getElementById("texto");

Aqui, uma constante chamada spanTexto é criada, que é uma referência a um elemento HTML com um id de "texto". Presume-se que haja um elemento no HTML com esse id.
let index = 0;

Uma variável index é criada e inicializada com o valor 0. Ela será usada para rastrear a posição atual no texto que está sendo escrito.
function escreverTexto() { ... }

Aqui, uma função chamada escreverTexto é definida. Esta função é responsável por escrever o texto na página.
if (index < texto.length) { ... }

Esta linha verifica se o index é menor que o comprimento total da string texto. Se for verdadeiro, significa que ainda há caracteres a serem escritos.
spanTexto.textContent += texto.charAt(index);

Adiciona um caractere do texto atual ao conteúdo do elemento HTML referenciado por spanTexto. Isso faz com que o texto seja exibido na página, adicionando um caractere de cada vez.
index++;

Incrementa o valor de index para apontar para o próximo caractere no texto.
setTimeout(escreverTexto, 50);

Esta linha configura um temporizador para chamar a função escreverTexto novamente após 50 milissegundos. Isso cria o efeito de escrita gradual, adicionando um caractere a cada 50 milissegundos.
window.addEventListener("load", escreverTexto);

Finalmente, esta linha adiciona um ouvinte de evento que chama a função escreverTexto quando a página é carregada (evento "load"). Isso inicia o processo de escrita quando a página é carregada.
 */


document.addEventListener("DOMContentLoaded", function () {
    const gridItems = document.querySelectorAll(".card");
    const windowHeight = window.innerHeight;
    
    
    function fadeInElements() {
        gridItems.forEach((item) => {
        const itemTop = item.getBoundingClientRect().top;
            
        if (itemTop > windowHeight) {
            item.style.transition = ".2s"
            item.classList.add("card");
        }
      });
    }
  
    window.addEventListener("scroll", fadeInElements);
  });
  

  /*
    document.addEventListener("DOMContentLoaded", function () { - Isso espera até que o DOM (Document Object Model) da página seja completamente carregado antes de executar o código. Isso é importante para garantir que os elementos HTML estejam prontos para serem manipulados.

const gridItems = document.querySelectorAll(".card"); - Ele seleciona todos os elementos HTML com a classe CSS "card" e os armazena em uma variável chamada gridItems. Esses são os elementos aos quais o efeito "fadeIn" será aplicado.

const windowHeight = window.innerHeight; - Isso obtém a altura atual da janela do navegador e a armazena em uma variável chamada windowHeight. Isso será usado para determinar se os elementos .card estão visíveis na janela.

function fadeInElements() { - Isso define uma função chamada fadeInElements, que será chamada sempre que a página for rolada.

gridItems.forEach((item) => { - Ele itera sobre todos os elementos .card usando um loop forEach.

const itemTop = item.getBoundingClientRect().top; - Ele calcula a posição superior (distância em pixels a partir do topo da janela) do elemento .card atual em relação à janela do navegador usando o método getBoundingClientRect().

if (itemTop < windowHeight) { - Ele verifica se a posição superior do elemento .card é menor que a altura atual da janela do navegador. Isso significa que o elemento está visível na janela.

item.classList.add("card"); - Se o elemento estiver visível, ele adiciona a classe CSS "card" de volta ao elemento. Isso faz com que o elemento reapareça gradualmente com um efeito "fadeIn".

window.addEventListener("scroll", fadeInElements); - Ele adiciona um ouvinte de evento de rolagem à janela do navegador. Quando a página é rolada, a função fadeInElements será chamada, verificando se os elementos .card estão visíveis e aplicando o efeito "fadeIn" conforme necessário.


  */