
const pressed = [];        // an empty array to which all the pressed keys will be pushed
const secretCode = 'yes'   // the word that triggers events

window.addEventListener('keyup', (e) => {
  // console.log(e);   // shows which key was pressed
  pressed.push(e.key);  // pushes the pressed key to the array

  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length); 
  if(pressed.join('').includes(secretCode)) { //  pressed.join('') turns the array into a string
      /*
        the array is trimmed with 'pressed.splice'
        in '-secretCode.length -1', '-' (negative) will count from the back (from right to left) the length of secretCode +1 (which is where trimming will start),
        then 'pressed.length - secretCode.length' will give the exact number that is needed
      */ 
  // console.log("DING! DING!")
    cornify_add();
  }
  // console.log(pressed);
})