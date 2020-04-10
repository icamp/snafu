// selecting all inputs on the page
const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  // console.log(this.value);
  
  /*
  grabbing the 'px' suffix from dataset, which is an object that will contain 
  all of the 'data' atributes from a specific element (in this case, from 'sizing')
  or nothing ( ||'' ) for those that don't have one, otherwise it will append undefined on the end
  */
  const suffix = this.dataset.sizing || '';
  // console.log(this.dataset);
  // console.log(suffix);
  // console.log(this.name);

  /*
  to select a CSS value we select the entire document ( at :root )
  then set a property of base, spacing or blur (matching names for the existing vars)
  here 'this.name' is selected and set to 'this.value' then concatenated with the suffix variable
  */
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// listen for a change event on each of the inputs
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));