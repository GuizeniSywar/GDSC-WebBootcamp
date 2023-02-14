var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle('dark');
}


const toggle = document.getElementById('icon');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('uil-sun');
})
