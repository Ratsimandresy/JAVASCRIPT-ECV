const elements = document.body.querySelectorAll("*");

const mouseOverEvent = new MouseEvent("onmouseover");
const mouseLeaveEvent = new MouseEvent("onmouseleave");

const colorToRed = (e) => {
  e.target.style.color = "red";
};

const removeColor = (e) => {
  e.target.style.color = "";
};

elements.forEach((el) => {
  el.dispatchEvent(mouseOverEvent);
  el.dispatchEvent(mouseLeaveEvent);
  el.onmouseover = colorToRed;
  el.onmouseleave = removeColor;
});
