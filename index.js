let listTodo = [];
console.log(inputTodo);

const addButton = document.getElementById("add-button");

addButton.addEventListener("click", function () {
  const inputTodo = document.getElementById("inputTodo").value;
  listTodo.push(inputTodo);
  console.log(listTodo);
  let itemTodo = document.createTextNode(inputTodo);
  let textTodo = document.createElement("p");
  textTodo.appendChild(itemTodo);

  let divTodo = document.createElement("div");
  divTodo.setAttribute("class", "todo");
  divTodo.appendChild(textTodo);

  let divButton = document.createElement("div");
  divTodo.setAttribute("class", "button");
  //   bikin button edit
  let editButton = document.createElement("button");
  editButton.setAttribute("type", "button");
  editButton.setAttribute("class", "btn btn-primary btn-sm");
  let editText = document.createTextNode("Edit");
  editButton.appendChild(editText);
  // biki button delete
  let delButton = document.createElement("button");
  delButton.setAttribute("type", "button");
  delButton.setAttribute("class", "btn btn-primary btn-sm");
  let delText = document.createTextNode("Delete");
  delButton.appendChild(delText);

  divButton.appendChild(editButton);
  divButton.appendChild(delButton);

  // bikin div tiap list
  let divList = document.createElement("div");
  divList.appendChild(divTodo);
  divList.appendChild(divButton);

  // gabungin ke div display
  document.querySelector(".display-todo").appendChild(divList);

  //   listTodo.forEach((item) => {
  //     let itemTodo = document.createTextNode(item);
  //     let textTodo = document.createElement("p");
  //     textTodo.appendChild(itemTodo);

  //     document.querySelector(".todo").appendChild(textTodo);
  //     document.querySelector(
  //       ".button"
  //     ).innerHTML = `<button type="button" class="btn btn-primary btn-sm">Edit</button>
  //     <button type="button" class="btn btn-primary btn-sm">Delete</button>`;
  //   });
});
