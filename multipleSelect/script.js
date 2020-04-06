  // #1 cache all checkboxes in a variable
  const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
  console.log(checkboxes);
  let lastChecked; // will keep track of what checkbox was selected

  // #3 a function that should check if the checkbox is checked. Check!
  function handleCheck(e) {
    // console.log(e);
    // check that Shift key if pressed AND that checkboxes are ticked
    let inBetween = false;
    if(e.shiftKey && this.checked ) {
      // loop over every single checkbox 
      checkboxes.forEach(checkbox => {
        console.log(checkbox);
        if(checkbox === this || checkbox === lastChecked) {
          inBetween = !inBetween;
          console.log('Starting to check them in between');
        }

        if(inBetween) {
          checkbox.checked = true;
        }
      });
    }
    
    lastChecked = this;
  }

  // #2 stick a listener to all checkboxes
  checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

