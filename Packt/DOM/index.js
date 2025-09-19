const allParagraphs = document.querySelectorAll(".query-p");
for (let paragraph of allParagraphs) {
    paragraph.style.color = "#f3e011";
}

const button = document.querySelector("#my-button");
let counter = 0;
button.addEventListener("click", () => {
    counter++;
    button.style.backgroundColor = "#f3e011"
    alert(`You Clicked Me ${counter} Times!`)
});

const userName = document.querySelector("#name");
const userEmail = document.querySelector("#email")
const nameButton = document.querySelector("#submit");
const nameMessage = document.querySelector("#message");

nameButton.addEventListener("click", () => {
    let name = userName.value;
    let email = userEmail.value;
    nameMessage.innerText = `Thank you ${name}. I appreciate you entering your email of ${email}.`
})

const colorChoice = document.querySelector("#color");
const mainTag = document.querySelector(".main");

colorChoice.addEventListener("change", () => {
    mainTag.style.backgroundColor = colorChoice.value;
});

