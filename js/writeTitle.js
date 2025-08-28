export default function writeTitle() {
  const textoCompleto = "Desenvolvedor \n JavaScript | Python | SQL";
  const elementoTexto = document.getElementById("titulo");
  let index = 0;
  function escreverTitulo() {
    if (index < textoCompleto.length) {
      elementoTexto.textContent += textoCompleto.charAt(index);
      index++;
      setTimeout(escreverTitulo, 100);
    }
  }
  escreverTitulo();
}
