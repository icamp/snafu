
    // grab all the panels
    const panels = document.querySelectorAll('.panel');
    
    // a function to toggle the class of 'open'
    function toggleOpen() {
      // console.log('test'); 
      this.classList.toggle('open');
    }

    //a function to toggle the class of open-active for
    function toggleActive(e) {
      // console.log(e.propertyName);  // will show us what transitioned
      if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
      }
    }

    // listen for a click on each of the panels
    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
                  /*
                  'toggleOpen()' would run on page load
                  'toggleOpen' gives a refference to the function and only runs on user click
                  */
    // listen for the transition end event then call the toggleActive function
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));