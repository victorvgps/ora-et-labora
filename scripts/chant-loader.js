//  URL parameter

function getChantIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("canto");
}

// function to build page content

function loadChant() {
  const id = getChantIdFromUrl();
  const chant = chants[id]; 

  if (!chant) {
    document.body.innerHTML = "<p style='text-align:center;'>Canto não encontrado.</p>";
    return;
  }

  // Fill HTML data

  document.title = `${chant.title} | Ora et Labora`;
  document.getElementById("page-title").textContent = `${chant.title} | Ora et Labora`;
  document.getElementById("chant-title").textContent = chant.title;
  document.getElementById("chant-image").src = chant.image;
  document.getElementById("chant-image").alt = `Imagem ilustrativa de ${chant.title}`;
  document.getElementById("audio-source").src = chant.audio;
  document.getElementById("chant-audio").load();
  document.getElementById("chant-description").textContent = chant.description;

  // Chant lyrics

  const lyricsDiv = document.getElementById("chant-lyrics");
  lyricsDiv.innerHTML = "";
  chant.lyrics.forEach(p => {
    const el = document.createElement("p");
    el.classList.add("texto-colorido");
    el.innerHTML = p;
    lyricsDiv.appendChild(el);
  });

  // Chant translation

  const translDiv = document.getElementById("chant-translation");
  translDiv.innerHTML = "";
  chant.translation.forEach(p => {
    const el = document.createElement("p");
    el.classList.add("texto-colorido");
    el.innerHTML = p;
    translDiv.appendChild(el);
  });

  // Chant history 

  const histDiv = document.getElementById("chant-history");
  histDiv.innerHTML = "";
  chant.history.forEach(p => {
    const el = document.createElement("p");
    el.classList.add("texto-colorido");
    el.innerHTML = p;
    el.classList.add("cardo-regular");
    histDiv.appendChild(el);
  });

  // chant video

  document.getElementById("chant-video").src = chant.video;

  // Chant audio download

  document.getElementById("chant-audio-download").href = chant.audio;
  document.getElementById("chant-pdf-download").href = chant.pdf;
};

loadChant();



