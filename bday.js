
let loader = document.getElementById("preloader");
const greetName = document.querySelector(".name");

function timeoutLoader() {
   let result = localStorage.getItem('result')
    setTimeout(()=>{
        loader.style.display = "none"; 
        console.log(result);
    }, 6000);  
    
    displayName(result);
}

function displayName(name) {
    greetName.innerHTML = name
}

if (window.location.href.includes("happybirthday.html")) {
    window.addEventListener('load', timeoutLoader);
}

