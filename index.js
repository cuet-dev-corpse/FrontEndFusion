fetch('nav.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('nav-component').innerHTML = data;
        window.addEventListener('load', function () {
            let menu_icon = document.getElementById('menu_icon')
            let cross_icon = document.getElementById('cross_icon')
            let nav = document.getElementById('sidebar')
            menu_icon.addEventListener('click', () => {
                nav.classList.add("active");
                document.body.classList.add("menu-active")
            })
            function close_menu() {
                nav.classList.remove("active");
                document.body.classList.remove("menu-active")
            }
            document.body.addEventListener('click', (e) => {
                if (nav.classList.contains('active') && e.target != menu_icon && (e.target != nav || e.target == cross_icon)) {
                    console.log(true)
                    close_menu()
                }
            })

        })
    });

fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-component').innerHTML = data;
    });

