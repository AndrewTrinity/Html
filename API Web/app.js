const form = document.querySelector("form");
const pokeImg = document.querySelector("#pokeImg");
const h2 = document.querySelector("h2");
const pokeId = document.querySelector("#id");
const pokeHeight = document.querySelector("#height");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const pokeName = form.elements.pokeName.value;
    fetch(` https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data)
            pokeImg.src = data.sprites.front_default;
            h2.innerText = data.name;
            pokeId.innerText = `Pokédex number: ${data.id}`;
            pokeHeight.innerText = `Heigth:${data.height}`;
        })
        .catch((e) => {
            console.log(e, "wrong input");
        })
    form.elements.pokeName.value = "";
})