let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de Musicas")
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de Musicas K-POP?")
  campoAventura = createCheckbox("Gosta de Musicas Eletronicas?")
}

function draw() {
  background("rgb(255,255,255)");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(75, 0, 15));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Kill This Love'-BlackPink"
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Alive (It feels like) – Alok.";          
        } else{
         return "Whistle-BlackPink"
        }
      } else {
        if (GostadeMusicasEletronicas) {
          return "The Business – Tiesto.";
        } else {
          return "Depois da chuva";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "Whistle-BlackPink"
    } else {
      return "Alive (It feels like) – Alok.";
    }
  }
}
