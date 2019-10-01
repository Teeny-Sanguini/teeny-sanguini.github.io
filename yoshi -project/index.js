window.onload = init;

function init() {
    var yoshi = document.getElementById('yoshi');
    yoshi.onclick = yoshio;
}

function yoshio() {
    alert('Yoshi!');
}