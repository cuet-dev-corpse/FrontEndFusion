let menu_icon=document.getElementById('menu_icon')
menu_icon.addEventListener('click', ()=>{
    document.getElementById("sidebar").classList.add("active");
    document.getElement('body').classList.add("overlay")
})
let cross_icon=document.getElementById('cross_icon')
cross_icon.addEventListener('click', ()=>{
    document.getElementById("sidebar").classList.remove("active");
    document.getElement('body').classList.remove("overlay")
})