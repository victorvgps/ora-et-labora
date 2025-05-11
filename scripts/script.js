const botaoTopo = document.getElementById("btn-topo");

window.addEventListener("scroll", () => {
  botaoTopo.style.display = window.scrollY > 400 ? "block" : "none";
});

botaoTopo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});