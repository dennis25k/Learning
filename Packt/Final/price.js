const quantityOne = document.querySelector("#quantity1");
const quantityTwo = document.querySelector("#quantity2");
const getTotal = document.querySelector("#calculate");
const toolHeadings = document.querySelectorAll("#tool-values h3");

const taxRate = .06;

getTotal.addEventListener("click", () => {
    let subTotal = quantityOne.value*10 + quantityTwo.value*12;
    let tax = subTotal * taxRate;
    let total = subTotal + tax;

    toolHeadings[0].innerText = `Subtotal: $ ${subTotal}`
    toolHeadings[1].innerText = `Tax: $ ${tax.toFixed(2)}`;
    toolHeadings[2].innerText = `Total: $ ${total}`;
});