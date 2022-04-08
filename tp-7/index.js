const root = document.getElementsByTagName("body")[0];

const fetchData = async (urlEnd) => {
  try {
    let data;
    const response = await fetch(`https://swapi.dev/api/${urlEnd}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      data = await response.json();
      return data.results;
    }
  } catch (error) {
    console.log(`${error.message}: ${response.status}`);
  }
};

const addStyle = (element, ...config) => {
  const { style } = element;
  style.width = "100%";
  style.height = "50px";
  style.backgroundColor = "green";
};

const createElements = (element, parent) => {
  const el = document.createElement(element);
  parent.appendChild(el);
  return el;
};

const displayData = async (val) => {
  let data = await fetchData(val);
  const h1 = createElements("h1", root);
  const ul = createElements("ul", root);

  h1.textContent = `${val}`;
  ul.before(h1);
  ul.setAttribute("id", val);
  ul.style.listStyle = "none";

  data.map((p, i) => {
    const { name } = p;
    const li = createElements("li", ul);
    li.setAttribute("id", `${i}`);
    li.textContent = `${i}: ${name}`;
  });
};

displayData("people");
displayData("starships");
displayData("planets");
