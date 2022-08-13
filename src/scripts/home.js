function reveal() {
  document.querySelectorAll(".reveal").forEach(element => {
    var elementTop = element.getBoundingClientRect().top;
    if(elementTop - 85 <= window.scrollY) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", reveal);