// -------------------- Variable -------------------------
let divList = document.querySelector(".display-todo");
let listTodo = [];

const addButton = document.getElementById("add-button");

// -------------------- Functions -------------------------
createButton = (element) => {
  let button = document.createElement("button");
  button.setAttribute("type", "button");
  button.setAttribute("class", `btn btn-primary btn-sm ${element}`);
  button.setAttribute("id", `${element}`);
  let buttonText = document.createTextNode(`${element}`);
  button.appendChild(buttonText);
  // console.log(button);
  return button;
};

createDiv = (attName, valueAtt) => {
  let div = document.createElement("div");
  div.setAttribute(attName, valueAtt);
  return div;
};

// --------------------EVEN LISTENER -------------------------
// add button clicked
addButton.addEventListener("click", function () {
  divList.innerHTML = null;
  const inputTodo = document.getElementById("inputTodo").value;
  listTodo.push(inputTodo);

  listTodo.forEach((item) => {
    // item list
    let itemTodo = document.createTextNode(item);
    let textTodo = document.createElement("p");
    textTodo.appendChild(itemTodo);

    // div todo
    let divTodo = createDiv("class", "todo").appendChild(textTodo);

    // div button
    let divButton = createDiv("class", "button");
    divButton.appendChild(createButton("edit"));
    divButton.appendChild(createButton("delete"));

    // list
    let list = createDiv("class", "list");
    list.appendChild(divTodo);
    list.appendChild(divButton);

    // masukin ke divList
    divList.appendChild(list);
  });
});
