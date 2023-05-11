let alo = document.querySelector("input");
let frm = document.querySelector("form");
let body = document.querySelector("body")
let section = document.querySelector("main")
frm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (alo.value == 28551321) {
    alo.value = "";
    frm.style.display = "none";
    body.style.backgroundColor = "wheat";
    body.style.display = "block";
    section.style.display = "block"
  } else {
    body.style.display = "none";
    localStorage.setItem("body", alo.value)
    let ola = localStorage.getItem("body")
    if (ola == alo.value) {
        body.style.display = "none";
    }
  }
});