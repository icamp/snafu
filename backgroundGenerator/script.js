var css = document.querySelector('h3');
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

color1.value = "#ff0000";
color2.value = "#ffff00";
css.textContent = 
    body.style.background 
    + "linear-gradient(to right, rgb(255, 0, 0) , rgb(255, 255, 0);";

/*
sets background and text on screen
*/
function setColor() {
    body.style.background = 
        "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";

    css.textContent = body.style.background + ";";
}

/*
sets background to random values
*/
function randomiseColors() {

    var leftColor = getRandomColorCode();
    var rightColor = getRandomColorCode();

    body.style.background = 
        "linear-gradient(to right, "
        + leftColor
        + ", "
        + rightColor
        + ")";

    color1.value = leftColor;
    color2.value = rightColor;
    css.textContent = body.style.background + ";";
}


/*
generates random color code
*/
function getRandomColorCode() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
//   document.querySelector(".color1").value = getRandomColorCode();


color1.addEventListener("input", setColor);
color2.addEventListener("input", setColor);
random.addEventListener("click", randomiseColors);
