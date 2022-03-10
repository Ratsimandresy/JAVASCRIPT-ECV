const liElements = document.querySelectorAll("li");

const moveToTop = (e) => {
  const li = e.target;
  let parent = li.parentNode;
  let clickedLi = parent.removeChild(li);
  parent.prepend(clickedLi);
};

liElements.forEach((li) => {
  li.onclick = moveToTop;
});
