const form = document.querySelector("form");
const input = document.querySelector("input");

const div = document.createElement("div");
document.body.append(div);
const parrafo = document.createElement("p");
div.append(parrafo);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = input.value;
    const reversedValue = value.split("").reverse().join("");
    parrafo.innerText = reversedValue;
    input.value = "";
})

// function reverseName (name){
//     const reversed = name.split("").reverse().join("");
//     const lowerCase = reversed.toLowerCase();
//     return lowercase[0].toUpperCase()+lowerCase.slice(1);
// }


