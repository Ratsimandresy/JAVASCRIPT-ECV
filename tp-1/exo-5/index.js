const pElements = document.querySelectorAll("p");

pElements.forEach((p) => {
  let parent = p.parentNode;
  parent.removeChild(p);
});
