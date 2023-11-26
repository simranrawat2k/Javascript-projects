const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];

    // the .textContent property is used to get or set the text content of an HTML element. 
    /*
    var element = document.getElementById("myElement"); 
    var text = element.textContent; // Retrieve the text content of the element
    console.log(text); // Log the text content to the console
    */ 
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}