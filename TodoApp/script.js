const textArea = document.querySelector(".textarea");
console.log(textArea);

const button = document.querySelector(".buttoninput");

const todoList = document.querySelector(".todolist");


button.addEventListener("click", addToDoListItem);

function addToDoListItem(){
    console.log("button clicked");
    console.log(textArea.value);

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todolists");
    const item = document.createElement("p");
    item.innerHTML = textArea.value;
    todoDiv.appendChild(item);

    if(textArea.value == '') return;

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can-arrow-up"></i>';
    todoDiv.appendChild(deleteButton);
    deleteButton.classList.add("trash-button")
    todoList.appendChild(todoDiv); 
    textArea.value = '';
}  


todoList.addEventListener("click", deleteItem);

function deleteItem(e){
    const item = e.target;
    console.log(item);

    if(item.classList[0] === "trash-button"){
        const parent = item.parentNode;
        parent.remove();
    }
    
}