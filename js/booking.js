var search=document.querySelector(".search-btn");
var formbody=document.querySelector(".form-intro");
search.addEventListener("click",function(a){a.preventDefault(),formbody.classList.toggle("form-show")});