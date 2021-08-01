 //works with account page
 let login = document.getElementById("login")
 let register = document.getElementById("register")
 let loginspan = document.getElementById('loginspan')
 let registerspan = document.getElementById('registerspan')
 let registerDiv = document.querySelector(".register")
 let loginDiv = document.querySelector(".login")
 login.addEventListener("click", remove)
 register.addEventListener("click", add)

 function add(){
     registerspan.classList.add("underline")
     loginspan.classList.remove("underline")
     registerDiv.classList.add("addReg")
     loginDiv.classList.add("addLog")
 }
 function remove(){
     loginspan.classList.add("underline")
     registerspan.classList.remove("underline")
     registerDiv.classList.remove("addReg")
     loginDiv.classList.remove("addLog")
 }
