const images = document.querySelectorAll("img");

const thirdImgAttribute = images[2].getAttribute("src");
images[0].setAttribute("src", thirdImgAttribute);
images[1].setAttribute("src", thirdImgAttribute);
