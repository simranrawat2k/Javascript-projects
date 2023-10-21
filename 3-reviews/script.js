const review = [
  {
    id: 1,
    name: "jon smith",
    job: "Web developer",
    img: "https://images.pexels.com/photos/8090137/pexels-photo-8090137.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "hey I'm jon smith.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quo corporis consectetur beatae eaque, saepe veritatis. Itaque omnis impedit aliquid?",
  },
  {
    id: 2,
    name: "Sara jones",
    job: "UI DESIGNER",
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "hey I'm Sara jones.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quo corporis consectetur beatae eaque, saepe veritatis. Itaque omnis impedit aliquid?",
  },
  {
    id: 3,
    name: "max smith",
    job: "Web developer",
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "hey I'm max smith.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quo corporis consectetur beatae eaque, saepe veritatis. Itaque omnis impedit aliquid?",
  },
];

//image author job info

const image = document.querySelector("#image img");

/*or you can give id to directly img of HTML
  <img src="https://......" alt="logo" id="image">
  and then use id selector*/

const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

/*Incorrect Image Element Selection: 
  Since image is a div containing an image, you should use .querySelector 
  instead of getElementById to select the image.
  const image = document.querySelector("#image img");
  document.querySelector is a more versatile method that allows you to select elements using CSS selectors.
  This can be an ID, class, element type, or a more complex CSS selector.
  */

const prevBtn = document.getElementsByClassName("prev-btn")[0];
const nextBtn = document.getElementsByClassName("next-btn")[0];
const randomBtn = document.getElementsByClassName("random")[0];

//when document load display the intial item

let currentItem = 0; //first array element

//eventListener ->DOMContentLoaded
// add this event listener on the window object
// this DOMContentLoaded event fires when initial HTML document has been completely loaded

window.addEventListener("DOMContentLoaded", function () {
  /* To access initial item we can use review array and pass currentItem
    But it will be a little faster if we assign it to a variable*/

  /* const item = review[currentItem];
    
    //image has src property
  
    image.src = item.img;  // review[currentItem].img
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;*/

  // instead make a function and then reuse it

  showPerson();
});

function showPerson() {
  const item = review[currentItem];
  image.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > review.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = review.length - 1;
  }
  showPerson();
});

randomBtn.addEventListener('click', function(){
  currentItem = Math.floor(Math.random() * review.length);
  console.log(currentItem);
  showPerson();
})


