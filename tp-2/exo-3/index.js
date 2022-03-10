const images = document.querySelectorAll("img");

const increaseWidth = (e) => {
  let img = e.target;
  let width = img.offsetWidth;

  if (img.nextSibling.nextSibling) {
    let nextSibling = img.nextSibling.nextSibling;
    let nextSiblingWidth = nextSibling.offsetWidth;

    nextSibling.style.width = `${nextSiblingWidth - nextSiblingWidth * 0.2}px`;
  }
  if (img.previousSibling.previousSibling) {
    let previousSibling = img.previousSibling.previousSibling;
    let previousSiblingWidth = previousSibling.offsetWidth;

    previousSibling.style.width = `${
      previousSiblingWidth - previousSiblingWidth * 0.2
    }px`;
  }
  img.style.width = `${width * 1.2}px`;
};

images.forEach((el) => {
  el.onclick = increaseWidth;
});
