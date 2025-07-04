//La Casa de Papel, 16, Ação
//Stranger Things, 16, Fantasia
//Minecraft O filme, 10, Ficção Científica
//Round 6, 16, Drama
//O Menino do Pijama Listrado, 12, Drama 
//Pokemon, Livre, Ação 
//


let campoIdade, campoFantasia, campoAventura, botao;
let imgFundo, recomendacao = "";

function preload() {
  imgFundo = loadImage("img.png");
}

function setup() {
  createCanvas(900, 600);
  createElement('h2', "🎬 Recomendador de Filmes 🎬");

  createSpan("Sua idade:").style('margin-right', '10px');
  campoIdade = createInput("10");
  campoIdade.size(60);

  createElement('br');
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");

  createElement('br');
  botao = createButton("Ver recomendação");
  botao.mousePressed(atualizarRecomendacao);
  botao.style("margin-top", "10px");
}

function draw() {
  background("#fff");
  image(imgFundo, 150, 20, 620, 300);

  fill("#000");
  textAlign(CENTER, CENTER);
  textSize(30);
  text(recomendacao, width / 2, height - 80);
}

function atualizarRecomendacao() {
  let idade = int(campoIdade.value());
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 16) {
    if (gostaDeFantasia) return "Stranger Things";
    else if (gostaDeAventura) return "La Casa de Papel";
    else return "Round 6";
  } else if (idade >= 12) {
    if (gostaDeFantasia || gostaDeAventura) return "Minecraft O Filme";
    else return "O Menino do Pijama Listrado";
  } else {
    return "Pokémon";
  }
}