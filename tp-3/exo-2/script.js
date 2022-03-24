window.onload = () => {
  let divElements = [];
  const body = document.getElementsByTagName("body")[0];

  const randomNumberInInterval = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const randomNumberBetween5and15 = randomNumberInInterval(5, 10);

  const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);

  let fragment = document.createDocumentFragment();

  for (let i = 0; i < randomNumberBetween5and15; i++) {
    let div = document.createElement("div");
    div.style.height = "50px";
    div.style.width = "100%";
    div.style.backgroundColor = `#${randomColor()}`;
    fragment.appendChild(div);
  }

  body.appendChild(fragment);
};
