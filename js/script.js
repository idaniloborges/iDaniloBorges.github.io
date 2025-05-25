const textoCompleto = "Desenvolvedor \n Front End & UX/UI Designer";
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

 // Scroll suave links internos
function scrollLink(){
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

  function scrollToSection(event){
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
    console.log(section.offsetTop)
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
    }
    linksInternos.forEach((link) => {
      link.addEventListener('click', scrollToSection)
  })
}
scrollLink()

// Animação do scroll
function initAnimacaoScroll(){
  const sections = document.querySelectorAll('.js-scroll')
  if(sections.length){
    const windowHalf = window.innerHeight * 0.6;
    function animaScroll(){
    sections.forEach((section) =>{
      const sectionTop = section.getBoundingClientRect().top
      if (sectionTop < windowHalf)
        section.classList.add('ativo')
      // else
      //   section.classList.remove('ativo')
    })
  }
  window.addEventListener('scroll', animaScroll)
  animaScroll()
  }
}
initAnimacaoScroll()