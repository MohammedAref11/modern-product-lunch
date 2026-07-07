const hamMenuEl = document.getElementById("hamMenu"); 
const navBarEl = document.getElementById("navBar"); 
const navMenu = document.getElementById("navMenu"); 
const navLinks = document.getElementById("navLinks"); 

hamMenuEl.addEventListener("click", (e) => { 
    navBarEl.classList.toggle("clicked"); 

    if (navBarEl.classList.contains("clicked")) { 
        navMenu.style.height = navMenu.scrollHeight + "px";
    } else { 
        navMenu.style.height = "0px"; 
    }
})

window.addEventListener('resize', (e) => { 
    if (window.innerWidth > 765) { 
        navMenu.style.height = 'fit-content'; 
    }
    if (window.innerWidth < 765) { 
        navMenu.style.height = "0px"
    }
})


navLinks.addEventListener("click", (e) => { 
    if (window.innerWidth < 765) { 
        if (e.target.tagName === "A" || e.target.tagName === "LI") { 
            navMenu.style.height = "0px"; 
            navBarEl.classList.remove("clicked")
        }
    }
})




