let menu_icon=document.getElementById('menu_icon')
let body=document.body
menu_icon.addEventListener('click', ()=>{
    document.getElementById("sidebar").classList.add("active");
    body.classList.add('menu-active')
})
let cross_icon=document.getElementById('cross_icon')
cross_icon.addEventListener('click', ()=>{
    document.getElementById("sidebar").classList.remove("active");
    body.classList.remove('menu-active')
})