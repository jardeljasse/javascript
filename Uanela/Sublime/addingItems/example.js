//adicionado um novo elemento (li)


const list = document.querySelector('ul')


const newLastElement = document.createElement('li')
const newTextLastElement = document.createTextNode("Local Chimbonde");
newLastElement.appendChild(newTextLastElement)

list.insertBefore(newLastElement, list.firstChild);

//Adding anouther element

const newFirstElement = document.createElement("li")
const newTextFirstElement = document.createTextNode("Local de Moatiz")
newFirstElement.appendChild(newTextFirstElement)

list.appendChild(newFirstElement)

//Total de lista
const itemList = document.querySelectorAll('li')
const totalList = itemList.length

const elTotal = document.querySelector('.total')
elTotal.textContent += ' ' + totalList

let i = 0;
do {
	itemList[i].classList = 'red ';
	i++;
} while (i < itemList.length)
