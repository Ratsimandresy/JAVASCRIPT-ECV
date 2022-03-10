const img = document.querySelector(".img");

const toggleRotate = (e) => {
  e.target.classList.toggle("isRotated");
};

img.onclick = toggleRotate;
