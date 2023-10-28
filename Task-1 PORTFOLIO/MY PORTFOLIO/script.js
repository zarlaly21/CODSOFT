const header= document.querySelector('header');

Window addEventListener("scroll",function() ){
  header.classList.toggle("sticky", window.scrollY>0)
}