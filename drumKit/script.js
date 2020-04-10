
function playSound(e) {
    /*
    check if there is an 'audio' element on the page 
    that has a data-key of --number--
    [data-key="${e.keyCode}"] is an attribute selector
    */
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); 
    const key = document.querySelector(`.key[data-key="${e.keyCode}"`);

    if(!audio) return; /*stops the function if there's no audio*/

    audio.currentTime = 0; /*rewind to start so successive taps play*/
    audio.play();
    key.classList.add('playing');
}

// remove play effects when transition ends
function removeTransition(e){
    // console.log(e);
    if(e.propertyName !== 'transform') return; /*skip what is not a transform*/
    // console.log(e.propertyName);
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

/* 
listening for a key up event in the 'window' element
when that happens, the function 'playSound' is executed
*/
window.addEventListener('keydown', playSound);