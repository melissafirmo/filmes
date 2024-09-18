let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de animação?");
}

function draw() {
  background("green");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76, 0, 50));
  textAlign(CENTER, CENTER);
  textSize(80);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Shrek 2";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Branca de Neve";          
        } else{
         return "Coraline";
        }
      } else {
        if (gostaDeFantasia) {
          return "Viva a vida é uma festa";
        } else {
          return "A Bela e a Fera";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "O Mágico do Oz";
    } else {
      return "Shrek 2 ";
    }
  }
}
