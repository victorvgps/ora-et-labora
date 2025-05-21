
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

  // --- Chant history ---

  const histDiv = document.getElementById("chant-history");
  histDiv.innerHTML = "";

  const hiddenHistDiv = document.createElement("div");
  hiddenHistDiv.classList.add("hidden");
  hiddenHistDiv.id = "chant-hidden-history";

  chant.history.forEach((line, index) => {
    const el = document.createElement("p");
    el.classList.add("texto-colorido", "cardo-regular");
    el.innerHTML = line;

    if (index < 1) {
      histDiv.appendChild(el);
    }
    else {
      hiddenHistDiv.appendChild(el);
    }
  });
  histDiv.appendChild(hiddenHistDiv);

  
  // --- chant video ---

  document.getElementById("chant-video").src = chant.video;

  // --- Chant audio download ---

  document.getElementById("chant-audio-download").href = chant.audio;
  document.getElementById("chant-pdf-download").href = chant.pdf;
};

loadChant();

// --- Expand button function ---

function initializeToggleButton({
  buttonId,
  targetId,
  showText = "Mostrar mais",
  hideText = "Ocultar"
}) {
  const button = document.getElementById(buttonId);
  const target = document.getElementById(targetId);

  if (!button || !target) return;

  button.addEventListener("click", () => {
    target.classList.toggle("open");

    button.textContent = target.classList.contains("open")
      ? hideText
      : showText;
  });
}

initializeToggleButton({
  buttonId: "btn-toggle-history",
  targetId: "chant-hidden-history",
  showText: "Expandir História do Canto",
  hideText: "Ocultar História do Canto"
});


initializeToggleButton({
  buttonId: "btn-toggle-lyrics-translation",
  targetId: "chant-lyrics-translation-hidden",
  showText: "Ver Tradução Completa",
  hideText: "Ocultar Tradução"
});


initializeToggleButton({
  buttonId: "btn-toggle-lyrics",
  targetId: "chant-lyrics-hidden",
  showText: "Ver Letra Completa",
  hideText: "Ocultar Letra"
});