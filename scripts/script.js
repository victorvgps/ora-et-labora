//go back to top button

const botaoTopo = document.getElementById("btn-topo");

window.addEventListener("scroll", () => {
  botaoTopo.style.display = window.scrollY > 400 ? "block" : "none";
});

botaoTopo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// show random quote everytime that the page is loaded

const quotes = [
  "Quem canta reza duas vezes. — Santo Agostinho",
  "Senhor, tu nos criaste para Ti, e o nosso coração anda inquieto enquanto não repousa em Ti. — Santo Agostinho",
  "Nada te perturbe, nada te espante. Tudo passa. Deus não muda. — Santa Teresa de Ávila",
  "A alma que caminha no amor não se cansa, nem se detém. — São João da Cruz",
  "A oração é a respiração da alma. — São João Crisóstomo",
  "A cruz é o livro mais profundo que um cristão pode ler. — São Luís Maria Grignion de Montfort",
  "A fé vê o invisível, crê no inacreditável e recebe o impossível. — Santa Edith Stein",
  "Cristo não nos prometeu uma vida sem cruz, mas a força para carregá-la. — Santo Inácio de Loyola",
  "Permanece em silêncio, e Deus falará contigo. — São Padre Pio",
  "O silêncio é a linguagem de Deus. — São João da Cruz",
  "Confia no Senhor e faze o bem. — Salmo 37",
  "A alegria é sinal de um coração que possui Deus. — Santa Teresa de Calcutá",
  "Não tenha medo de ser santo. — São João Paulo II",
  "Reza, espera e não te preocupes. A oração é a melhor arma. — São Padre Pio",
  "Jesus Cristo é o mesmo ontem, hoje e sempre. — Hebreus 13,8"
];

const quote = document.getElementById("citacao-dia");
const quoteButton = document.getElementById("btn-new-quote");

function showRandomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  quote.textContent = quotes[index];
}

showRandomQuote();

// Button to see another random quote
quoteButton.addEventListener("click", showRandomQuote);

// shows random chant everytime that page is loaded
const chants = [
  {
    title: "Miserere Mei Deus",
    audio: "audios/miserere.mp3",
    description: "Um dos salmos penitenciais mais profundos, tradicionalmente entoado nas noites da Quaresma."
  },
  {
    title: "Credo III",
    audio: "audios/credo-iii.mp3",
    description: "Uma das formulações do Credo em canto gregoriano, expressando a fé cristã com solenidade e beleza."
  },
  {
    title: "Te Deum",
    audio: "audios/te-deum.mp3",
    description: "Hino solene de louvor usado em grandes ocasiões litúrgicas, como ações de graças e solenidades."
  },
  {
    title: "Anima Christi",
    audio: "audios/anima-christi.mp3",
    description: "Antiga oração devocional pedindo união com Cristo, entoada com profunda reverência e piedade."
  },
  {
    title: "De Pacem Domine",
    audio: "audios/de-pacem-domine.mp3",
    description: "Canto gregoriano que implora a paz divina, geralmente usado em tempos de necessidade ou guerra."
  },
  {
    title: "Litaniae Sanctorum",
    audio: "audios/litaniae-sanctorum.mp3",
    description: "Sequência de invocações aos santos, pedindo sua intercessão, frequentemente utilizada em liturgias penitenciais."
  }
];

function showRandomChant() {
  const index = Math.floor(Math.random() * chants.length);
  const chant = chants[index];

  document.getElementById("chant-title").textContent = chant.title;
  document.getElementById("audio-source").src = chant.audio;
  document.getElementById("chant-description").textContent = chant.description;

  document.getElementById("chant-audio").load();
}

showRandomChant();