const sizeForm = document.querySelector("#size-form");
const shirtStyle = document.querySelector("#style");
const colorSelected = document.querySelector("#color");
const shirtImage = document.querySelector("#shirt-image");

sizeForm.addEventListener("change", () => {
    if (sizeForm.size.value == "small") {
        shirtImage.setAttribute("class", "small-image")
    } else if (sizeForm.size.value == "medium") {
        shirtImage.setAttribute("class", "medium-image")
    } else if (sizeForm.size.value == "large") {
        shirtImage.setAttribute("class", "large-image")
    } else {
        shirtImage.setAttribute("class", "extra-image")
    }
});

shirtStyle.addEventListener("change", () => {
    if (shirtStyle.value == "short") {
        shirtImage.setAttribute("src", "images/shirt_icon.png" )
    } else if (shirtStyle.value == "crew") {
        shirtImage.setAttribute("src", "images/crew_icon.png")
    } else if (shirtStyle.value == "polo") {
        shirtImage.setAttribute("src", "images/polo_icon.png")
    } else if (shirtStyle.value == "dress") {
        shirtImage.setAttribute("src", "images/dress_icon.png")
    } else {
        shirtImage.setAttribute("src", "images/jersey_icon.png")
    }
});

colorSelected.addEventListener("change", () => {
    shirtImage.style.background = colorSelected.value;
});