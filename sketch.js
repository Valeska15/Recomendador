// fantasia, aventura, drama

// a viagem de chihiro, LIVRE, fantasia, aventura
// paddington, LIVRE, fantasia, aventura

// as aventuras de pi, 10, drama, fantasia, aventura
// guardiões da galáxia, 12, fantasia, aventura
// ladrões de bicicleta, 12, drama
// o menino que descobriu o vento, 14, drama

 let campoIdade;

function setup() {
  createCanvas(400, 400);
  campoIdade = createInput("5");
}

function draw() {
  background(220);
  let idade = campoIdade.value();
  let recomendaçao = geraRecomendaçao(idade);
  text(recomendaçao, width / 2, height / 2);
}

function geraRecomendaçao(idade) {
  if(idade >= 10) {
    if(idade >= 14) {
    return "O menino que descobriu o vento"
   } else {
     return "A viagem de chihiro";
   }
  }else





