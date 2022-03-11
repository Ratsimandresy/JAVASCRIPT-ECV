const elements = document.body.querySelectorAll("*");

const clickEvent = new MouseEvent("onclick");

const removeElement = (e) => {
  e.preventDefault();
  let parent = e.target.parentNode;
  parent.removeChild(e.target);
};

elements.forEach((el) => {
  el.dispatchEvent(clickEvent);
  el.onclick = removeElement;
});
