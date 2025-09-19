const inFeet = document.querySelector("#feet");
const inInches = document.querySelector("#inches");
const inPounds = document.querySelector("#pounds");
const getTotal = document.querySelector("#calculate");
const toolHeading = document.querySelectorAll("#tool-values h3");

getTotal.addEventListener("click", () => {
    let size;

    if (inFeet.value < 5) {
        size = "Small";
    } else if (inFeet.value < 6) {
        if (inPounds.value < 100) {
            size = "Small";
        } else if (inPounds.value < 150) {
            size = "Medium";
        } else if (inPounds.value < 200) {
            size = "Large";
        } else {
            size = "Extra Large"
        }
    } else {
        if (inPounds.value < 150) {
            size = "Large";
        } else {
            size = "Extra Large";
        }
    }

    toolHeading[0].innerText = `You are ${inFeet.value} feet ${inInches.value} inches tall and ${inPounds.value} pounds`;
    toolHeading[1].innerText = `We Recommend A ${size}.`
});
