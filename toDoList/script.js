// caching selectors in a variable
var button = document.getElementById("enter");      // the enter button
var input = document.getElementById("userInput");   // the text input box
var ul = document.querySelector(".memento");              // the list of items
var remove = document.querySelectorAll('.trash');   // the item delete button


// this function should validate if the user has typed anything in the input box
function inputLength() {
    return input.value.length;
}


// when called, this function should create a list element 
// containing the text from input box and the delete button
function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    var trashBtn = document.createElement("p");
    trashBtn.innerHTML = "X";
    li.appendChild(trashBtn);
    trashBtn.classList.add("trash");
    trashBtn.addEventListener("click", trashIt);
}


// when clicking "add" this checks that the input box is not empty and adds the content to the list
function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}


// when pressing "enter" key, this checks that the input box is not empty and adds content to the list
function addListAfterKeypress(event) {
    if (inputLength() >0 && event.keyCode === 13) {
        createListElement();
    }
}


// if a list item is clicked, this toggles the .done  class on and off.
function toggleDone(event) {
    event.target.classList.toggle("done");
}


// item delete function that gets called when trash button is clicked
function trashIt(e) {
    // console.log(e);
    e.target.parentNode.remove();
}


// event listeners
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", toggleDone);
// listener for each delete button:
for (var i = 0 ; i < remove.length; i++) {
    remove[i].addEventListener('click', trashIt) ; 
    };



/*
Note: 

In the browser most code is event driven and writing interactive applications in JavaScript is often about waiting for and reacting to events, to alter the behaviour of the browser in some way. Events occur whenever something happens on a page based on user interaction. These are all defined by w3c.

To react to an event you listen for it and supply a function which will be called by the browser when the event occurs. This function is known as a callback. To read more, check out this link: https://blog.codeanalogies.com/2016/04/11/javascript-callbacks-explained-using-minions/
*/