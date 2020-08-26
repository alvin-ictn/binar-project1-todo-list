let listNode;
let toDoList;
let getNumber;
let inputTaskElement = document.getElementById('inputTask');

let button = document.querySelector('button[type="submit"]');
const textNodeElement = text => {
  let textNode = document.createElement('a');
  textNode.className="item";
  textNode.appendChild(document.createTextNode(text));
  return textNode
}

const inputNodeElement = () => {
  let inputNode = document.createElement('input');
  inputNode.className ='checkboxClass';
  inputNode.type = "checkbox";
  return inputNode
}

const removeElement = () => {
  toDoList = document.getElementById('toDo');
  toDoList.removeChild(event.target.parentElement)
}

const deleteNodeElement = () => {
  let deleteNode = document.createElement('a');
  deleteNode.className = "action";
  deleteNode.appendChild(document.createTextNode("❌"))
  deleteNode.addEventListener('click',removeElement)
  return deleteNode
}

button.addEventListener('click',()=> {
  listNode = document.createElement('li');
  toDoList = document.getElementById('toDo');
  getNumber = toDoList.lastElementChild ? toDoList.lastElementChild.id : 0 
  listNode.id = parseInt(getNumber) + 1;
  listNode.appendChild(inputNodeElement());
  listNode.appendChild(textNodeElement(inputTaskElement.value));
  listNode.appendChild(deleteNodeElement());
  toDoList.append(listNode);
})

