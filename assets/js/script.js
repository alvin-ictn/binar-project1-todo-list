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

const editElement = () => {
  
  if(event.target.getAttribute("status") == "active"){
    event.target.setAttribute("status","inactive");
    console.log(event.target.parentElement.children[1].setAttribute('contenteditable',"true"))
  }else{
    event.target.setAttribute("status","active");
    console.log(event.target.parentElement.children[1].setAttribute('contenteditable',"false"))
  }
  
}
const inputNodeElement = () => {
  let inputNode = document.createElement('input');
  inputNode.className ='checkboxClass';
  inputNode.type = "checkbox";
  inputNode.addEventListener('click',editElement)
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
  listNode.setAttribute('contenteditable',"true")
  toDoList.append(listNode);
})

