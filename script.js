/*-----------nav bar---------*/
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuIcon = document.getElementById("mobile-menu-icon");
  const mobileNav = document.getElementById("mobile-nav");
  const closeMobileNav = document.getElementById("close-mobile");

  mobileMenuIcon.addEventListener("click", function () {
      mobileNav.style.display = "block";
  });

  closeMobileNav.addEventListener("click", function () {
      mobileNav.style.display = "none";
  });
}); 



/*-----------search bar-----------*/

const buttons=document.querySelectorAll('.btn');
const boxes=document.querySelectorAll('.pro');
const searchBox=document.querySelector("#search-container");

/* Search Product by Textbox */
searchBox.addEventListener('keyup',(e)=>{
  searchText=e.target.value.toLowerCase().trim();

  boxes.forEach((box)=>{
    const data=box.dataset.item;
    if(data.includes(searchText)){
      box.style.display='block';
    }else{
      box.style.display='none';
    }
  });

  buttons.forEach((button)=>{
    button.classList.remove('btn-clicked');
  });
  buttons[0].classList.add('btn-clicked');
});

buttons.forEach((button)=>{
  button.addEventListener('click',(e)=>{

    e.preventDefault();
    setActiveBtn(e);
    const btnfilter=e.target.dataset.filter;
    
    boxes.forEach((box=>{
      if(btnfilter=='all'){
        box.style.display="block";
      }else{

        const boxfilter=box.dataset.item;
        if(btnfilter==boxfilter){
          box.style.display="block";
        }else{
          box.style.display="none";
        }
        
      }
    }));


  });
});


function  setActiveBtn(e){
  buttons.forEach((button)=>{
    button.classList.remove('btn-clicked');
  });
  e.target.classList.add('btn-clicked');
} 
