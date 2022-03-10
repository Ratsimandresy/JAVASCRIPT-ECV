const liElements = document.querySelectorAll("li");
const ul = document.querySelector("ul");
const newLi = document.createElement("li");

newLi.textContent = "Tété";

ul.replaceChild(newLi, liElements[1]);
