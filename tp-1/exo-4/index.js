const newDiv = document.createElement("div");

document.getElementsByTagName("body")[0].appendChild(newDiv);

newDiv.style.backgroundColor = "purple";
newDiv.style.width = "100%";
newDiv.style.height = "300px";

const h1 = document.createElement("h1");
newDiv.appendChild(h1);

h1.textContent = "texte en blanc à l'intérieur de la bewDiv";
h1.style.color = "white";
h1.style.textTransform = "uppercase";
