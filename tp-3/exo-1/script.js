const squares = document.querySelectorAll(".square");

const turnRed = (e) => {
  console.log(e.target.classList.toggle("red"));
};

for (const el of squares) {
  el.onClick = turnRed;
}
