
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "grid") {
      content.style.display = "none";
    } else {
      content.style.display = "grid";
    }
  });
}


// make pointing finger blink
let message = () => {
    let fingerPointer = document.getElementById("pointingFinger");
    fingerPointer.style.color="var(--yellow)";
    setTimeout(( () => fingerPointer.style.color=""), 1000);
};

window.setInterval( () => {
    message();
  }, 2000);


