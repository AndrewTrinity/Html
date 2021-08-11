const p = document.querySelector("p");
const button = document.querySelector("button");
const img = document.querySelector("img");

// button.addEventListener("click", async () => {
//     try {
//         const res = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
//         p.innerText = res.data.id
//     } catch (e) {
//         console.log(e);
//     }
// })

// button.addEventListener("click", () => {
//     fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
//         .then((res) => {
//             console.log(res);
//             return res.json()
//         })
//         .then((data) => {
//             console.log(data)
//         })
// })

// button.addEventListener("click", async () => {
//     const url = " https://icanhazdadjoke.com/";
//     const config = { headers: { Accept: "application/json" } };
//     try {
//         const res = await axios.get(url, config);
//         p.innerText = res.data.joke;
//     } catch (e) {
//         console.log(e);
//     }
// })

button.addEventListener("click", async () => {
    const url = "https://meme-api.herokuapp.com/gimme";
    try {
        const res = await axios.get(url);
        console.log(res.data)
        img.src = res.data.url;
    } catch (e) {
        console.log(e);
    }
})