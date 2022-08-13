function reveal() {
  document.querySelectorAll(".reveal").forEach(element => {
    var elementTop = element.getBoundingClientRect().top;
    if(elementTop <= window.scrollY) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
  var downThing = document.querySelector(".down");
  if(window.scrollY > 0) downThing.classList.add("nope");
  else downThing.classList.remove("nope");
}

window.addEventListener("scroll", reveal);