document.addEventListener('DOMContentLoaded', () => {
    const currentPage = location.pathname.split('/').pop();
    const homeButton = document.querySelector('.page-home a');
    const favoritesButton = document.querySelector('.page-favorites a');
    
    function setActiveButton(button, otherButton) {
        button.parentElement.classList.add('active');
        otherButton.parentElement.classList.remove('active');
    }

    if (currentPage === "index.html" || currentPage === "") {
        setActiveButton(homeButton, favoritesButton);
    } else if (currentPage === "favorites.html") {
        setActiveButton(favoritesButton, homeButton);
    }

    homeButton.addEventListener('click', (event) => {
        setActiveButton(homeButton, favoritesButton);
    });

    favoritesButton.addEventListener('click', (event) => {
        setActiveButton(favoritesButton, homeButton);
    });
});
