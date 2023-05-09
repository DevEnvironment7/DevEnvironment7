const btn = document.querySelector(".Pdf");
const btn2 = document.querySelector(".Next");
const btn3 = document.querySelector(".Pdf2");
const btn4 = document.querySelector(".Back");


btn2.onclick = () => {
  cointainer.classList.add("cointainerActive");
};


btn4.onclick = () => {
  cointainer.classList.remove("cointainerActive");
};

