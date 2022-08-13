// dum vh stuff
var onResize = () => document.documentElement.style.setProperty('--vh', `${window.innerHeight/100}px`);
addEventListener("load", onResize);
addEventListener("resize", onResize);