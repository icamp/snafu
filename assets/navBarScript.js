
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