const text = [
  `In the heart of the bustling city, amidst the towering skyscrapers and bustling streets, 
  I found solace in a small park tucked away from the urban chaos. The chirping of birds, 
  the rustling of leaves, and the distant sound of traffic created an unexpected oasis of tranquility,
   offering a momentary escape from the relentless pace of city life.`,

  `Beneath a star-studded sky, we sat by the crackling campfire, our faces illuminated by the dancing flames. 
  The serene wilderness surrounded us, and as we shared stories of our adventures, the night seemed to stretch
   on forever, a timeless moment of bonding in the great outdoors.`,

  `In the dimly lit library, row upon row of ancient books lined the shelves, each one holding the knowledge 
  and stories of centuries past. As I turned the pages of a weathered tome, I embarked on a journey through 
  time and imagination, discovering the wisdom of generations long gone.`,

  `At the pinnacle of the mountain, I gazed out at a breathtaking vista that extended as far as the eye could 
  see. Snow-capped peaks kissed the sky, and the crisp mountain air filled my lungs. I felt like I was on top
   of the world, a triumphant conqueror of nature's grandeur.`,

  `Amidst the crashing waves and golden sands, we built intricate sandcastles on the sun-kissed beach.
   The salty sea breeze enveloped us, and the laughter of children echoed joyfully. It was a day filled 
   with nostalgia and the simple pleasures of life, a reminder of the timeless appeal of the seashore.`,

  `Beneath the towering canopy of ancient trees, a hidden waterfall cascaded into a crystal-clear pool. 
  Nature's beauty revealed itself in this secluded oasis, where the harmony of life's rhythms and the gentle
   melodies of flowing water created a sanctuary for those who sought solace in the heart of the forest.`,

  `In the bustling market, the air was infused with the rich aroma of exotic spices, and the vibrant colors 
  of fruits from distant lands were a visual feast. The lively market street hummed with the sounds of 
  bartering and conversation, a sensory journey into the heart of a culture deeply rooted in tradition.`,

  `As the music filled the air, I danced with abandon on the crowded floor, lost in the rhythm and the 
  company of kindred spirits. In that fleeting moment, nothing else mattered but the joy of movement, 
  the shared enthusiasm of the crowd, and the euphoric energy of the music pulsating through our souls.`,

  `In the quaint cafe nestled on a quiet corner, the aroma of freshly brewed coffee wafted through the air. 
  The gentle hum of conversations, punctuated by the clinking of cups and saucers, created a cozy atmosphere 
  that invited introspection and relaxation. It was a place where time seemed to slow down, allowing for a 
  peaceful respite from the world's hustle and bustle.`,

  `In the heart of the arid desert, endless sand dunes stretched as far as the eye could see. 
  The silence of the desert was both eerie and captivating, a vast expanse of solitude where time 
  seemed to stand still. It was a world of its own, an awe-inspiring testament to the grandeur of nature's 
  stark beauty.`
];

const form =document.querySelector(".lorem-form");
const amount = document.getElementById("amount");
const result = document.querySelector(".lorem-text");


//use submit event 
//they have a default dehaviour and i.e. to submit to a server
form.addEventListener("submit", function(e) {
    e.preventDefault();

    //access the value from input
    //console.log(amount.value) //5 (in black color -> string, even when the input type is number)
    const value = parseInt(amount.value);  //number in blue color

    //random number from 0-9
    const random = Math.floor(Math.random() * text.length);
    //empty string -> converted to integer -> NaN
    //isNaN a function -> return true or flase
    if(isNaN(value) || value <= 0 || value>10 ){
        result.innerHTML = `<p class="result"> ${text[random]}</p>`
    }

    else{
        let tempText = text.slice(0, value);
        tempText = tempText.map(function (item){
            return `<p class="result"> ${item}</p>`;
        }).join("");
        result.innerHTML =tempText;
    }
})