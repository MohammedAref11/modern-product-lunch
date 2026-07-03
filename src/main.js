const hamMenuEl = document.getElementById("hamMenu"); 
const navBarEl = document.getElementById("navBar"); 
const navMenu = document.getElementById("navMenu"); 


hamMenuEl.addEventListener("click", (e) => { 
    navBarEl.classList.toggle("clicked"); 

    if (navBarEl.classList.contains("clicked")) { 
        navMenu.style.height = navMenu.scrollHeight + "px";
    } else { 
        navMenu.style.height = "0px"; 
    }
})


// Reading more about this depending on use case
// window.addEventListener('resize', (e) => { 
//     if (window.innerWidth > 765) { 
//         navMenu.style.height = 'fit-content'; 
//     }

//     if (window.innerWidth < 765) { 
//         navMenu.style.height = "0px"
//     }
// })