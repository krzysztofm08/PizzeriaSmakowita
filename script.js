let menuPizzaButton = document.querySelector(".pizzaButton");
let menuDrinksButton = document.querySelector(".drinksButton");
let menuBeersButton = document.querySelector(".beersButton");

let middleMenuPizzaDescription = document.querySelector(".middleMenuPizzaDescription");
let pizzaList = document.querySelector(".pizzaList");
let drinksList = document.querySelector(".drinksList");
let beersList = document.querySelector(".beersList");

menuPizzaButton.addEventListener("click", function() {
    middleMenuPizzaDescription.style.display = "block";
    pizzaList.style.display = "grid";
    drinksList.style.display = "none";
    beersList.style.display= "none";
});

menuDrinksButton.addEventListener("click", function() {
    middleMenuPizzaDescription.style.display = "none";
    pizzaList.style.display = "none";
    drinksList.style.display = "grid";
    beersList.style.display= "none";
});

menuBeersButton.addEventListener("click", function() {
    middleMenuPizzaDescription.style.display = "none";
    pizzaList.style.display = "none";
    drinksList.style.display = "none";
    beersList.style.display= "grid";
});


