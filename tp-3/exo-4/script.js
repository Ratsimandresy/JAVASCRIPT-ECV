const container = document.querySelector(".container");
const containerChild = container.childNodes;

document.onkeydown = (e) => {
  const el = document.createElement("div");
  el.className = "square";
  el.textContent = `${e.key}`;
  container.appendChild(el);
  if (containerChild.length > 5) {
    container.firstChild.remove();
  }
};
