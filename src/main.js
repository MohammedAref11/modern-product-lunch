const hamMenuEl = document.getElementById("hamMenu"); 
const navBarEl = document.getElementById("navBar"); 

hamMenuEl.addEventListener("click", (e) => { 
    navBarEl.classList.toggle("clicked")
})