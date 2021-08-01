
//works with responsive navbar
const navIcon = document.getElementById("nav-icon")
let navlinks = document.querySelector(".nav-links")
navIcon.addEventListener("click", () =>{
    navlinks.classList.toggle("btn")
})

let scrollBtn = document.getElementById("scroll")
scrollBtn.addEventListener("click", () =>{
    window.scroll(0, 0)
})
window.onload = function (){
    if(scrollY <=500){
        scrollBtn.style.display = "none"
    }else{
        scrollBtn.style.display = "block"
    }
}
window.addEventListener("scroll", () =>{
    if(scrollY >= 500){
        scrollBtn.style.display = "block"
    }else{
        scrollBtn.style.display = "none"
    }
})