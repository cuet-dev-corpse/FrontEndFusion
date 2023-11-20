fetch('nav.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('nav-component').innerHTML = data;
    });
    
fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-component').innerHTML = data;
    });


let menu_icon = document.getElementById('menu_icon')
menu_icon.addEventListener('click', () => {
    document.getElementById("sidebar").classList.add("active");
    document.body.classList.add("menu-active")
})
let cross_icon = document.getElementById('cross_icon')
cross_icon.addEventListener('click', () => {
    document.getElementById("sidebar").classList.remove("active");
    document.body.classList.remove("menu-active")
})