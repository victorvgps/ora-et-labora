// Pega o parâmetro da URL
function getCantoIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("canto");
}

// Monta o conteúdo da página
function carregarCanto() {
  const id = getCantoIdFromUrl();
  const canto = cantos[id]; // ← AQUI está o ajuste principal

  if (!canto) {
    document.body.innerHTML = "<p style='text-align:center;'>Canto não encontrado.</p>";
    return;
  }

  // Preenche os dados no HTML
  document.title = `${canto.titulo} | Ora et Labora`;
  document.getElementById("page-title").textContent = `${canto.titulo} | Ora et Labora`;
  document.getElementById("chant-title").textContent = canto.titulo;
  document.getElementById("chant-image").src = canto.imagem;
  document.getElementById("chant-image").alt = `Imagem ilustrativa de ${canto.titulo}`;
  document.getElementById("audio-source").src = canto.audio;
  document.getElementById("chant-audio").load();
  document.getElementById("chant-description").textContent = canto.descricao;

  // Letras
  const letraDiv = document.getElementById("chant-lyrics");
  letraDiv.innerHTML = "";
  canto.letra.forEach(p => {
    const el = document.createElement("p");
    el.textContent = p;
    letraDiv.appendChild(el);
  });

  // Tradução
  const tradDiv = document.getElementById("chant-translation");
  tradDiv.innerHTML = "";
  canto.traducao.forEach(p => {
    const el = document.createElement("p");
    el.textContent = p;
    tradDiv.appendChild(el);
  });

  // História
  const histDiv = document.getElementById("chant-history");
  histDiv.innerHTML = "";
  canto.historia.forEach(p => {
    const el = document.createElement("p");
    el.textContent = p;
     el.classList.add("cardo-regular");
    histDiv.appendChild(el);
  });

  // Vídeo
  document.getElementById("chant-video").src = canto.video;
}

carregarCanto();

canto.historia.forEach(p => {
  const el = document.createElement("p");
  el.innerHTML = p; // Permite HTML, como <strong>
  el.classList.add("cardo-regular");
  histDiv.appendChild(el);
});