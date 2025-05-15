let menu = document.querySelector('#menu-icon');
let navar = document.querySelector('.items');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navar.classList.toggle('open');
}