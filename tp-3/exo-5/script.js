const height = document.querySelector("#height span");
const width = document.querySelector("#width span");

//show current width before resizing
let currentWidth = window.innerWidth;
let currentHeight = window.innerHeight;

width.textContent = `${currentWidth}px`;
height.textContent = `${currentHeight}px`;

const displaySize = () => {
  width.textContent = `${window.innerWidth}px`;
  height.textContent = `${window.innerHeight}px`;
};

window.onresize = displaySize;
