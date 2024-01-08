//add hovered class to selected list item
let list = document.querySelectorAll('.navigator li');

function activeLink() {
    list.forEach((item) => {
        item.classList.remove('hovered');
    });
    this.classList.add('hovered');
}

list.forEach((item) => item.addEventListener('mouseover',activeLink));

// menu toggle
let toggle=document.querySelector(".toggle");
let navigator = document.querySelector(".navigator");
let main = document.querySelector(".main");

toggle.onclick = function(){
    navigator.classList.toggle("active");
    main.classList.toggle("active");
};
