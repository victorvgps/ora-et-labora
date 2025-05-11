const botaoTopo = document.getElementById("btn-topo");

window.addEventListener("scroll", () => {
  botaoTopo.style.display = window.scrollY > 400 ? "block" : "none";
});

botaoTopo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const oracoes = [
  "Quem canta reza duas vezes. — Santo Agostinho",
  "Senhor, tu nos criaste para Ti, e o nosso coração anda inquieto enquanto não repousa em Ti. — Santo Agostinho",
  "Nada te perturbe, nada te espante. Tudo passa. Deus não muda. — Santa Teresa de Ávila",
  "A oração é a respiração da alma. — São João Crisóstomo",
  "Compreender tudo é perdoar tudo. — São Francisco de Sales",
  "O silêncio é a linguagem de Deus; todo o resto é má tradução. — Rumi (em espírito contemplativo)",
  "A alma que caminha no amor não se cansa, nem se detém. — São João da Cruz",
  "Canta e caminha. — Santo Agostinho",
  "A cruz é o livro mais profundo que um cristão pode ler. — São Luís Maria Grignion de Montfort",
  "Senhor, ensina-me a cantar com o coração o que os lábios proclamam. — Anônimo Monástico",
  "A fé vê o invisível, crê no inacreditável e recebe o impossível. — Anônimo",
  "Cristo não nos prometeu uma vida sem cruz, mas a força para carregá-la. — Santo Inácio de Loyola"
];

const index = Math.floor(Math.random() * oracoes.length);
document.getElementById("citacao-dia").textContent = oracoes[index];

const quoteButton = document.getElementById("btn-new-quote");

quoteButton.addEventListener("click", () => {
const index = Math.floor(Math.random() * oracoes.length);
document.getElementById("citacao-dia").textContent = oracoes[index];
});