const img = document.querySelector(".img");

const toggleRotate = (event) => {
  event.target.classList.add("isRotated");
};

img.addEventListener("click", toggleRotate);
