container = document.querySelector(".container");
btn = document.querySelector(".switch")
btn.addEventListener('click',()=>{
    container.classList.toggle("dark-mode");
});