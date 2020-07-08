//Get elements
var btnElement = document.querySelector('input#btn');
var textElement = document.querySelector('input#txtField');
var listElement = document.querySelector('ul#list');

//Catch my list in LS, so convert his to JSON OR get an empty array.
var todos = JSON.parse(localStorage.getItem('todos_list')) || [];

//Create a li and his text, after put them in listElement.  
function renderTodo() {

    //Before add, delete all elements in list.
    listElement.innerHTML = '';

    for (todo of todos) {

        //Create tags li(list), a(anchor) and href(link).
        var todoElement = document.createElement('li');
        var aElement = document.createElement('a');
        aElement.setAttribute('href', '#');
        //Create text
        var todoText = document.createTextNode(todo);
        var aTxtElement = document.createTextNode('delete');
        //Append the text to my created tags.
        listElement.appendChild(todoElement);
        listElement.appendChild(aElement);
        todoElement.appendChild(todoText);
        aElement.appendChild(aTxtElement);

        //indexOf = catch the value of array's index, so create onclick method in my anchor. After this put my "removeTodo" in his action.
        var pos = todos.indexOf(todo);
        aElement.setAttribute('onclick', 'removeTodo(' + pos + ')');

    }

}

btnElement.addEventListener('click', addTodo);

function addTodo() {

    var text = textElement.value;

    //Save in my array the input, after clear the input.
    todos.push(text);
    textElement.value = '';

    //Save in LS and refresh my todo's list.
    saveStorage();
    renderTodo();
}

function removeTodo(index) {

    //Remove an element at index passed as a parameter.
    todos.splice(index, 1);

    //Save in LS and refresh my todo's list.
    saveStorage();
    renderTodo();
}

//Save the datas in my localStorage.
function saveStorage() {
    
    //Key and value structure, convert the array in JSON and save his at LS.
    localStorage.setItem('todos_list', JSON.stringify(todos));
}

