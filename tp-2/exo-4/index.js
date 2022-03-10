const square = document.querySelector(".square");
const body = document.getElementsByTagName("body")[0];

let X = square.getBoundingClientRect().left;
let Y = square.getBoundingClientRect().top;

body.style.position = "relative";
square.style.position = "absolute";
square.style.width = "50px";
square.style.height = "50px";
square.style.backgroundColor = "pink";

document.onkeydown = (e) => {
  let key = e.key;

  switch (key) {
    case "ArrowUp":
      console.log("up");
      square.style.top = `${(Y -= 20)}px`;
      break;
    case "ArrowDown":
      console.log("down");
      square.style.top = `${(Y += 20)}px`;
      break;
    case "ArrowRight":
      console.log("right");
      square.style.left = `${(X += 20)}px`;
      break;
    case "ArrowLeft":
      console.log("left");
      square.style.left = `${(X -= 20)}px`;
      break;

    default:
      break;
  }
};
