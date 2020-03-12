// caching selectors in a variable
var button = document.getElementById("enter");      // the enter button
var input = document.getElementById("userInput");   // the text input box
var ul = document.querySelector("ul");              // the list of items

/*
// add element to the list by mouse click
button.addEventListener("click",function() {    // listens to a click event on the button 
                                                // and runs a function when button is clicked
    if (input.value.length > 0) {               // the function checks that the input box is not empty
                                                // if empty nothing happens. Else bellow code is executed
        var li = document.createElement("li");  // a li item is created and stored in li variable
        li.appendChild(document.createTextNode(input.value));   // content of the text box is added to the li item
        ul.appendChild(li);                      // li item is added to the end of the list of items
        input.value = "";                       // text box is cleared
    }
})

// add element to the list with ENTER key
input.addEventListener("keypress", function(event) {
    if (input.value.length > 0 && event.keyCode === 13) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value))
        ul.appendChild(li);
        input.value = "";
    }
}) 
*/

////////////////////////////////////////////////////////////////
/* 
The above code refactored
*/
////////////////////////////////////////////////////////////////

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    var trashBtn = document.createElement("button");
    trashBtn.innerHTML = "trash";
    li.appendChild(trashBtn);
    trashBtn.classList.add("trash");
    trashBtn.addEventListener("click", trashIt);
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() >0 && event.keyCode === 13) {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);


////////////////////////////////////////////////////////////////

/*
Using the Shopping List files from the previous videos update the shopping list app to do the following:

1. If you click on the list item, it toggles the .done  class on and off.
*/
    function toggleDone(event) {
        // console.log("clickx");
        event.target.classList.toggle("done");
    }
    ul.addEventListener("click", toggleDone);


/*
2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.
*/
    
// # I. assign the delete buttons to a variable
    var remove = document.querySelectorAll('.trash');
// # II. stick a listener to each delete button
    for (var i = 0 ; i < remove.length; i++) {
        remove[i].addEventListener('click', trashIt) ; 
    };

// # III. run a delete function when trash button is clicked
    /* to be commented */
    function trashIt(e) {
        // console.log(e);
        e.target.parentNode.remove();
    }


/*
3. BONUS: When adding a new list item, it automatically adds the delete button next to it (hint: be sure to check if new items are clickable too!)
*/
    // function addTrashBtn() {
    //     var trashBtn = document.createElement("button");
    //     trashBtn.innerHTML = "trash";
    //     li.appendChild(trashBtn);
    // }

    


/*
Please note that: 

In the browser most code is event driven and writing interactive applications in JavaScript is often about waiting for and reacting to events, to alter the behaviour of the browser in some way. Events occur whenever something happens on a page based on user interaction. These are all defined by w3c.

To react to an event you listen for it and supply a function which will be called by the browser when the event occurs. This function is known as a callback. To read more, check out this link: https://blog.codeanalogies.com/2016/04/11/javascript-callbacks-explained-using-minions/
*/