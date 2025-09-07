export function createElement() {
    const p = document.createElement("p");
    p.innerText = "Hello World";
    document.body.append(p);

    document.body.style.background ="palegoldenrod";
    p.style.color ="blue";

}

//This is a created module to import into index.js