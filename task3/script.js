const elements = document.querySelectorAll(".animate");

function scrollReveal() {
  const triggerBottom = window.innerHeight * 0.9;

  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerBottom) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);
