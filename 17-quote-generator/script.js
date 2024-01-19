

const btn = document.querySelector(".input .search");
const box = document.querySelector(".box")

btn.addEventListener("click", ()=>{

    const grid = document.querySelector(".box .grid")
    if(grid){
        grid.remove();
    }
    const input = document.querySelector(".input .word").value;
    const url = `https://restcountries.com/v3.1/name/${input}?fullText=true`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        generate(input, data)
    })
    .catch(error => console.log(error));
})

let generate = (input, data) => {

    const grid = document.createElement("div");
    grid.className = "grid";

    grid.innerHTML = `<div class="header">
    <div class="flag">
        <img src="${data[0].flags.png}" alt="logo">
    </div>
    <div class="title">${input.toUpperCase()}</div>
</div>

<div class="content">
    
    <div class="capital">
        <span>Capital:</span>
        <span class="hi span-capital">${data[0].capital}</span>
    </div>

    <div class="contitent">
        <span>Contitent:</span>
        <span class="hi span-contitent">${data[0].continents}</span>
        
    </div>


    <div class="population">
        <span>Population:</span>
        <span class="hi span-population">${data[0].population}</span>
    </div>

    <div class="currency">
        <span>Currency:</span>
        <span class= "hi span-hello"> ${data[0].currencies[Object.keys(data[0].currencies)].name} </span>
        <span class="hi span-currency">${Object.keys(data[0].currencies)[0]}</span>
    </div>

    <div class="language">
        <span>Common Language: </span>
        <span class="hi span-language">${Object.values(data[0].languages).toString().split(",").join(", ")}</span>
    </div>

    
</div>`

box.append(grid);
    
//console.log(Object.values(data[0].languages))  //['English', 'Hindi', 'Tamil']

//console.log(Object.values(data[0].languages).toString()) //English,Hindi,Tamil

//console.log(Object.values(data[0].languages).toString().split(",")) //['English', 'Hindi', 'Tamil']

//console.log(Object.values(data[0].languages).toString().split(",").join(", "))  //English, Hindi, Tamil

//Object.values(data[0].languages).join(", ")

}