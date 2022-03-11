const images = document.querySelectorAll("img");
const divElements = document.querySelectorAll(".container");

divElements.forEach((div) => {
  div.style.overflow = "hidden";
});

const zoomOut = (e) => {
  e.target.style.width = `300px`;
  e.target.style.height = `200px`;
};

const zoomImage = (e) => {
  let width = e.target.offsetWidth;
  let height = e.target.offsetHeight;

  e.target.style.width = `${width * 3}px`;
  e.target.style.height = `${height * 3}px`;
};

images.forEach((img) => {
  img.onmouseover = zoomImage;
  images.onmouseleave = zoomOut;
});
