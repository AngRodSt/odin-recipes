const OpenMenu = document.getElementById("menu-title");

function Open(){
const DropMenu = document.querySelector(".dropdown-menu");
DropMenu.classList.toggle("show");

}
OpenMenu.addEventListener('click',Open);