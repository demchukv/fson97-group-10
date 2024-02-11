    const currentPage = location.pathname.split('/').pop();
    const homeButton = document.querySelector('.page-home a');
    const favoritesButton = document.querySelector('.page-favorites a');
    const mobMenuHomeButton = document.querySelector('.home-mob-menu');
    const mobMenuFavoritesButton = document.querySelector('.favorites-mob-menu');
    const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
    }; 

    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);

    function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    }

    function setActiveButton(button, otherButton, mobMenuButton, otherMobMenuButton) {
        button.parentElement.classList.add('active');
        mobMenuButton.classList.add('home-mob-menu');
        otherButton.parentElement.classList.remove('active');
        otherMobMenuButton.classList.remove('home-mob-menu');
    }


    if (currentPage === "index.html" || currentPage === "") {
        setActiveButton(homeButton, favoritesButton, mobMenuHomeButton, mobMenuFavoritesButton);
    } else if (currentPage === "favorites.html") {
        setActiveButton(favoritesButton, homeButton, mobMenuFavoritesButton, mobMenuHomeButton);
    }


    homeButton.addEventListener('click', (event) => {
        setActiveButton(homeButton, favoritesButton, mobMenuHomeButton, mobMenuFavoritesButton);
    });


    favoritesButton.addEventListener('click', (event) => {
        setActiveButton(favoritesButton, homeButton, mobMenuFavoritesButton, mobMenuHomeButton);
    });


    mobMenuHomeButton.addEventListener('click', (event) => {
        setActiveButton(homeButton, favoritesButton, mobMenuHomeButton, mobMenuFavoritesButton);
    });


    mobMenuFavoritesButton.addEventListener('click', (event) => {
        setActiveButton(favoritesButton, homeButton, mobMenuFavoritesButton, mobMenuHomeButton);
    });
