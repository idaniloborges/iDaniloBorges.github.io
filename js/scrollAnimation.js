export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  if (sections.length) {
    const windowHalf = window.innerHeight * 0.6;
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHalf) section.classList.add("ativo");
        // else
        //   section.classList.remove('ativo')
      });
    }
    window.addEventListener("scroll", animaScroll);
    animaScroll();
  }
}
