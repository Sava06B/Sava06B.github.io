let input = document.getElementById("name");
const btn = document.querySelector(".btn");
const warn = document.getElementById("element");
let result = "";

function displayInput() {
    result = input.value;
    console.log(result); 
    localStorage.setItem('result', input.value)
}

function submit(event) {
    if(input.value.length === 0) {
         warn.classList.remove('none');
         warn.classList.add('block');
         return false;
    } else {
    warn.style.display = "none";
    event.preventDefault();
    window.location.href = "/happybirthday.html";
    }
}


input.addEventListener('keyup', displayInput);
btn.addEventListener('click', submit);

if (window.location.href.includes("index.html")) {
    window.addEventListener('load', function() {
        input.value = "";
    });
}

