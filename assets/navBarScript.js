
let burgerMenu = document.getElementById('burgerMenu')
const menu = document.getElementById('menu');


const showMenu = () => {
      if (menu.className === "navLinks") {
            menu.className = " navLinksShow";
      } else {
            menu.className = "navLinks";      }
}

    
burgerMenu.addEventListener('click', showMenu);

addEventListener("resize", () => {
      if (window.innerWidth > 666) {
            menu.className = "navLinks";
      }
});

// Menu button animation script
/*
            to be moved from HTML file to here
*/
function burgerX(x) {
      x.classList.toggle("change");
}