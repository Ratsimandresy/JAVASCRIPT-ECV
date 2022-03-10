const images = document.querySelectorAll("img");

const increaseWidth = (e) => {
  let width = e.target.offsetWidth;
  let height = e.target.offsetHeight;

  let nextSibling = e.target.nextSibling.nextSibling;
  let previousSibling = e.target.previousSibling.previousSibling;

  console.log(nextSibling);
  //   let nextSiblingWidth = nextSibling.offsetWidth;
  //   let previousSiblingWidth = previousSibling.offsetWidth;

  if (nextSibling) {
    e.target.style.width = `${width * 1.2}px`;
    // nextSibling.style.width = `${nextSiblingWidth - nextSiblingWidth * 0.2}px`;
  }

  //   e.target.style.width = `${width * 1.2}px`;
  //   e.target.style.height = `${height * 1.2}px`;
};

images.forEach((el) => {
  el.onclick = increaseWidth;
});
