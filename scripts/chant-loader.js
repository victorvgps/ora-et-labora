//  --- URL parameter ---

function getChantIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("canto");
}

// --- function to build page content ---

function loadChant() {
  const id = getChantIdFromUrl();
  const chant = chants[id];

  // --- Error message if url is wrong --- 

  if (!chant) {
  const error = document.createElement("h1");
  error.classList.add("error");
  error.id = "error-message";
  error.textContent = "Canto não encontrado!";

  const errorGoBackButton = document.createElement("button");
  errorGoBackButton.classList.add("btn-error-go-back");
  errorGoBackButton.id = "btn-error-back";
  errorGoBackButton.textContent = "← Voltar para a Página Inicial";

  errorGoBackButton.addEventListener("click", () => {
    window.location.href = "index.html"; 
  });

  document.body.innerHTML = ""; 
  document.body.appendChild(error);         
  document.body.appendChild(errorGoBackButton);  
  return;
}

  // --- Fill HTML data ---

  document.title = `${chant.title} | Ora et Labora`;
  document.getElementById("page-title").textContent = `${chant.title} | Ora et Labora`;
  document.getElementById("chant-title").textContent = chant.title;
  document.getElementById("chant-image").src = chant.image;
  document.getElementById("chant-image").alt = `Imagem ilustrativa de ${chant.title}`;
  document.getElementById("audio-source").src = chant.audio;
  document.getElementById("chant-audio").load();
  document.getElementById("chant-description").textContent = chant.description;

  // --- Chant lyrics ---

  const lyricsDiv = document.getElementById("chant-lyrics");
  lyricsDiv.innerHTML = "";

  // --- To show only first four verses of the chant ---

  const hiddenDiv = document.createElement("div");
  hiddenDiv.classList.add("hidden");
  hiddenDiv.id = "chant-lyrics-hidden";

  chant.lyrics.forEach((line, index) => {
    const el = document.createElement("p");
    el.classList.add("texto-colorido");
    el.innerHTML = line;

    if (index < 4) {
      lyricsDiv.appendChild(el);
    } else {
      hiddenDiv.appendChild(el);
    }
  });

  lyricsDiv.appendChild(hiddenDiv);

  // --- Expand lyrics button ---

  function initializeExpandLyricsButton() {
    const btnToggleLyrics = document.getElementById("btn-toggle-lyrics");
    const hiddenLyrics = document.getElementById("chant-lyrics-hidden");

    if (!btnToggleLyrics || !hiddenLyrics) return;

    btnToggleLyrics.addEventListener("click", () => {
      hiddenLyrics.classList.toggle("open");

      btnToggleLyrics.textContent = hiddenLyrics.classList.contains("open")
        ? "Ver Letra Completa"
        : "Ocultar Letra";
    });
  }

  initializeExpandLyricsButton();

  // --- Chant translation ---

  const translDiv = document.getElementById("chant-lyrics-translated");
  translDiv.innerHTML = "";


  // --- To show only first four verses of the chant ---

  const hiddenTranslDiv = document.createElement("div");
  hiddenTranslDiv.classList.add("hidden");
  hiddenTranslDiv.id = "chant-lyrics-translation-hidden";

  chant.translation.forEach((line, index) => {
    const el = document.createElement("p");
    el.classList.add("texto-colorido");
    el.innerHTML = line;

    if (index < 4) {
      translDiv.appendChild(el);
    } else {
      hiddenTranslDiv.appendChild(el);
    }
  });
  translDiv.appendChild(hiddenTranslDiv);

  // --- Expand translation button ---

  function initializeExpandTranslationButton() {
    const btnToggleTranslation = document.getElementById("btn-toggle-lyrics-translation");
    const lyricsBlockTranslation = document.getElementById("chant-lyrics-translation-hidden");

    if (!btnToggleTranslation || !lyricsBlockTranslation) return;

    btnToggleTranslation.addEventListener("click", () => {
      lyricsBlockTranslation.classList.toggle("open");

      btnToggleTranslation.textContent = lyricsBlockTranslation.classList.contains("open")
        ? "Ver Tradução Completa"
        : "Ocultar Tradução";
    });
  }

  initializeExpandTranslationButton();

  // --- Chant history ---

  const histDiv = document.getElementById("chant-history");
  histDiv.innerHTML = "";
  chant.history.forEach(p => {
    const el = document.createElement("p");
    el.classList.add("texto-colorido");
    el.innerHTML = p;
    el.classList.add("cardo-regular");
    histDiv.appendChild(el);
  });

  // --- chant video ---

  document.getElementById("chant-video").src = chant.video;

  // --- Chant audio download ---

  document.getElementById("chant-audio-download").href = chant.audio;
  document.getElementById("chant-pdf-download").href = chant.pdf;
};

loadChant();



