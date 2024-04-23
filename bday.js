
let loader = document.getElementById("preloader");
const greetName = document.querySelector(".name");
let userName = document.querySelector('userame')

function timeoutLoader() {
   let result = localStorage.getItem('result')
    setTimeout(()=>{
        loader.style.display = "none"; 
        console.log(result);
    }, 6000);  
    
    displayName(result);
    setInterval(createConfetti, 100);
}

function displayName(name) {
    greetName.innerHTML = `${name}`;
}

function createConfetti() {
    const colors = ['#ffcc00', '#ff6699', '#66ccff', '#99ff99', '#ff9999']; // Add more colors as needed
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = `${Math.random() * window.innerWidth}px`;
    confetti.style.top = `${Math.random() * window.innerHeight}px`;
    document.getElementById('confetti-container').appendChild(confetti);
    setTimeout(() => {
      confetti.remove();
    }, 7000); // Remove confetti after 4 seconds
  }


if (window.location.href.includes("happybirthday.html")) {
    window.addEventListener('load', timeoutLoader);
   
}
