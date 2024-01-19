const nameInput = document.querySelector(".drop input");
const dropdown = document.querySelector(".drop .dropdown");
const btn = document.querySelector(".flex .search");
const image = document.querySelector(".two .image img");
const title = document.querySelector(".two .title");
const content = document.querySelector(".content");

const arr = [
    "Antelope",
    "Alligator",
    "Armadillo",
    "Aardvark",
    "Albatross",
    "Ape",
    "Baboon",
    "Badger",
    "Bison",
    "Bear",
    "Beaver",
    "Buffalo",
    "Bat",
    "Bluebird",
    "Boa",
    "Camel",
    "Cat",
    "Cheetah",
    "Chimpanzee",
    "Cougar",
    "Coyote",
    "Crab"
];

let date = new Date();
let time = date.getTime();

const[timeStamp, apiKey, hashValue] = [ts, public, hash];

btn.addEventListener("click", () => {
    dropdown.style.display = "none";
    
    const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${hashValue}&name=${nameInput.value}`;
    fetch(url)
    .then(resp => resp.json())
    .then(x => {
        console.log(x.data["results"])
        title.textContent = x.data.results[0].name
        content.textContent =  x.data.results[0].description
        image.src = `${x.data.results[0].thumbnail.path}.${x.data.results[0].thumbnail.extension} `
    })
    .catch(error => console.log(error))
});

nameInput.addEventListener("keyup",()=>{
    if(nameInput.value.length < 4){
        return false;
    }

    const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${hashValue}&nameStartsWith=${nameInput.value}`;
    fetch(url)
    .then(resp => resp.json())
    .then(x => {
        console.log(dropUpdate(x.data["results"]))
    })
    .catch(error => console.log(error))   
    //updateArr(nameInput.value)
})
  
function updateArr(inputName){
    const inputLower = inputName.toLowerCase(); // Convert inputName to lowercase
    const newArr = arr.filter(x => x.toLowerCase().startsWith(inputLower)); // Convert x to lowercase for comparison
    if(inputLower){
        dropUpdate(newArr);
    }else{
        dropdown.innerHTML = ``; 
        dropdown.style.display = "none";
    }   
}

function dropUpdate(newArr){   
    dropdown.style.display = "block";
    dropdown.innerHTML = ``;
    newArr.forEach(x=>{
        const p = document.createElement("p");
        p.textContent = x.name;
        dropdown.append(p);
        p.addEventListener("click",()=>{
            nameInput.value = p.textContent;
            dropdown.style.display = "none";
        })
    })
}