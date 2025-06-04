// --- Show random chant ---

console.log("randomQuote");
const randomChant = [
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
  const titleEl = document.getElementById("chant-day");
  const sourceEl = document.getElementById("audio-source");
  const descEl = document.getElementById("chant-short-description");
  const audioEl = document.getElementById("chant-audio");

  if (titleEl && sourceEl && descEl && audioEl) {
    const index = Math.floor(Math.random() * randomChant.length);
    const showedChant = randomChant[index];

    titleEl.textContent = showedChant.title;
    sourceEl.src = showedChant.audio;
    descEl.textContent = showedChant.description;

    audioEl.load();
  }
}

showRandomChant();

// --- show random quote ---

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
  if (quote) {
    const index = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[index];
  }
}

showRandomQuote();

if (quoteButton) {
  quoteButton.addEventListener("click", showRandomQuote);
}

// --- button to goes back to the top of the page ---

const botaoTopo = document.getElementById("btn-topo");

if (botaoTopo) {
  window.addEventListener("scroll", () => {
    botaoTopo.style.display = window.scrollY > 400 ? "block" : "none";
  });

  botaoTopo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// --- button to go page back ---

const backButton = document.getElementById("btn-back");

if (backButton) {
  backButton.addEventListener("click", () => {
    window.location.href = "./index.html";
  });
}

// --- button to go article back ---

const backArticleButton = document.getElementById("btn-articles");

if (backArticleButton) {
  backArticleButton.addEventListener("click", () => {
    window.location.href = "./articles.html";
  });
}

// --- Dark theme button --- 

const ToggleInput = document.getElementById("toggle-theme");
const darkThemeButtonText = document.getElementById("text");

ToggleInput.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  const theme = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", theme);
  updateToggleThemeButtonText();
});

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
  ToggleInput.checked = true;
}

// --- function to change button text --- 

function updateToggleThemeButtonText() {
  const theme = document.body.classList.contains("dark") ? "dark" : "light";
  darkThemeButtonText.innerHTML = theme === "dark" ? "Ativar Modo Claro" : "Ativar Modo Escuro";
}

updateToggleThemeButtonText();

// --- Comment section script ---

const form = document.getElementById("form-comments");
const commentsList = document.getElementById("comments-list");

let commentsJson = localStorage.getItem("comments");
console.log(commentsJson);

let comments = commentsJson !== 'undefined' ? JSON.parse(localStorage.getItem("comments")) : [];

const MAX_COMMENTS_DISPLAY = 10;

// --- Timestamp function ---

function formatTimestamp(dateObject) {
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    return dateObject.toLocaleString('pt-BR', options);
}

// --- render comments function ---

function renderComments() {
    commentsList.innerHTML = ""; 

    const commentsToDisplay = [...comments].reverse(); 

    const limitedComments = commentsToDisplay.slice(0, MAX_COMMENTS_DISPLAY); 
    

    limitedComments.forEach((commentData, index) => {
        const commentary = document.createElement("p");
        commentary.innerHTML = `<strong>${commentData.name}</strong>: ${commentData.message} <br><small>${commentData.timestamp}</small>`;
        commentary.classList.add("cardo-regular");
        commentsList.appendChild(commentary);

        const deleteCommentsBtn = document.createElement("button");
        deleteCommentsBtn.innerHTML = "Deletar Comentário";
        deleteCommentsBtn.classList.add("btn-comment-del")

        commentsList.appendChild(deleteCommentsBtn);
        
        deleteCommentsBtn.addEventListener("click", () => deleteComment(commentData.id));
        
        function deleteComment() {
         comments = comments.filter(comment => comment.id !== commentData.id);
         localStorage.setItem("comments", JSON.stringify(comments));
         renderComments();
        };
    });
}

// --- Event Listener to form submit ---
if (form) {
  
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nameInput = document.getElementById("name");
  const messageInput = document.getElementById("message");

  const name = nameInput.value.trim();
  const message = messageInput.value.trim();

  if (name && message) {
      const now = new Date();
      const timestamp = formatTimestamp(now);

      const newComment = {
          id: Date.now(),
          name: name,
          message: message,
          timestamp: timestamp
      };
      console.log(newComment);

      comments.push(newComment); 

      localStorage.setItem("comments", JSON.stringify(comments));

      renderComments(); 

      form.reset(); 
  }
});

}


document.addEventListener("DOMContentLoaded", renderComments);

