document.querySelector(".menu-open").addEventListener("click", function(event){
    event.preventDefault();
    document.querySelector("#menu").setAttribute("aria-expanded","true");
    document.querySelector(".menu-open").classList.add("active");
    document.querySelector(".menu-close").classList.remove("active");
});
document.querySelector(".menu-close").addEventListener("click",function(event){
    event.preventDefault();
    document.querySelector("#menu").setAttribute("aria-expanded","false");
    document.querySelector(".menu-close").classList.add("active");
    document.querySelector(".menu-open").classList.remove("active");
});