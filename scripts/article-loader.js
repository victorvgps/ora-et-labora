//  --- URL parameter ---

function getArticleIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("article");
}

// --- function to build page content ---

function loadArticle() {
  const id = getArticleIdFromUrl();
  const article = articles[id];

  // --- function to build page content ---

  if (!article) {
    const error = document.createElement("h1");
    error.classList.add("error");
    error.id = "error-message";
    error.textContent = "Artigo não encontrado!";

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

  document.title = `${article.title} | Ora et Labora`;
  document.getElementById("article-title").textContent = article.title;
  document.getElementById("article-image").src = article.image;
  document.getElementById("article-image").alt = `Imagem ilustrativa de ${article.title}`;
  document.getElementById("article-description").textContent = article.description;

  // --- Article content --- 
  
  const contentDiv = document.getElementById("article-content");
  contentDiv.innerHTML = "";

  article.content.forEach((line) => {
    const el = document.createElement("p");
    el.classList.add("texto-colorido", "cardo-regular");
    el.innerHTML = line;
    contentDiv.appendChild(el); 
  });
}

loadArticle(); 