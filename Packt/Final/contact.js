const allForm = document.querySelector("#contact-form");
const returnMessage = document.querySelector("#message");

allForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(allForm);

    if (data.get("preferredMethod") == "email") {
        returnMessage.innerText = `Thank You ${data.get("userName")}. We will contact you by Email at ${data.get("userEmail")} around ${data.get("userTime")}.`
    } else {
        returnMessage.innerText = `Thank You ${data.get("userName")}. We will contact you by Phone at ${data.get("userPhone")} around ${data.get("userTime")}.`
    }
});