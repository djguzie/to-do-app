function onReady() {
  const toDos = [];
  let iD = 0;
  const addToDoForm = document.getElementById('addToDoForm');

function createNewToDo() {
  const newToDoText = document.getElementById('newToDoText');
  if(!newToDoText.value) {
    alert("Input cannot be empty");
    return;}

  toDos.push({
    title: newToDoText.value,
    complete: false,
    id: iD
  });

  iD++;

  newToDoText.value = '';

  renderTheUI();
}

function renderTheUI() {
  const toDoList = document.getElementById('toDoList');

  toDoList.textContent = '';

  toDos.forEach(function(toDo) {
    const newLi = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";

    newLi.textContent = toDo.title;

    function deleteLi(){
      toDos = toDos.filter(function(todo) {
        return toDo.id != todo.id;
      });
      renderTheUI();
    }

    deleteButton.addEventListener ('click', deleteLi);

    toDoList.appendChild(newLi);
    newLi.appendChild(checkbox);
    newLi.appendChild(deleteButton);
  });
}

addToDoForm.addEventListener ('submit', event => {
  event.preventDefault();
  createNewToDo();
});

renderTheUI();
}


window.onload = function() {
  onReady();
};
