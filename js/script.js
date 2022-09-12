document.querySelector(".menu-open").addEventListener("click", function(event){
    event.preventDefault();
    document.querySelector("#menu").setAttribute("aria-expanded","true");
});
document.querySelector(".menu-close").addEventListener("click",function(event){
    event.preventDefault();
    document.querySelector("#menu").setAttribute("aria-expanded","false");
});