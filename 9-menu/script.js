const menu = [
  {
    id: 1,
    title: "Pancakes",
    category: "Breakfast",
    price: "$10.99",
    img: "https://www.foodiesfeed.com/wp-content/uploads/2023/06/pouring-honey-on-pancakes.jpg",
    desc: "Delicious fluffy pancakes served with maple syrup.",
  },
  {
    id: 2,
    title: "Beef Stew",
    category: "Dinner",
    price: "$13.99",
    img: "https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Hearty beef stew with tender meat and vegetables.",
  },
  {
    id: 3,
    title: "Grilled Chicken Salad",
    category: "Lunch",
    price: "$11.99",
    img: "https://www.foodiesfeed.com/wp-content/uploads/2023/04/delicious-steak-with-herbs-cut-on-slices.jpg",
    desc: "Freshly grilled chicken served on a bed of mixed greens.",
  },
  {
    id: 4,
    title: "Margherita Pizza",
    category: "Dinner",
    price: "$14.99",
    img: "https://images.pexels.com/photos/16803393/pexels-photo-16803393/free-photo-of-pizzas-on-the-table-at-the-restaurant.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Classic pizza topped with tomatoes, mozzarella, and basil.",
  },
  {
    id: 5,
    title: "French Toast",
    category: "Breakfast",
    price: "$9.99",
    img: "https://images.pexels.com/photos/920220/pexels-photo-920220.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Golden brown French toast served with powdered sugar and berries.",
  },
  {
    id: 6,
    title: "Grilled Salmon",
    category: "Dinner",
    price: "$16.99",
    img: "https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Freshly grilled salmon fillet served with steamed vegetables.",
  },
  {
    id: 7,
    title: "Caesar Salad",
    category: "Lunch",
    price: "$10.99",
    img: "https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Classic Caesar salad with romaine lettuce, croutons, and Caesar dressing.",
  },
  {
    id: 8,
    title: "Egg Fried Rice",
    category: "Dinner",
    price: "$11.99",
    img: "https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Fried rice cooked with eggs, vegetables, and your choice of protein.",
  },
  {
    id: 9,
    title: "Omelette",
    category: "Breakfast",
    price: "$8.99",
    img: "https://www.foodiesfeed.com/wp-content/uploads/2021/01/fried-egg-and-guacamole-sandwiches.jpg",
    desc: "Fluffy omelette with your choice of fillings and toast.",
  },
  {
    id: 10,
    title: "Strawberry Milkshake",
    category: "Shakes",
    price: "$12.99",
    img: "https://hips.hearstapps.com/hmg-prod/images/delish-202104-strawberrymilkshake-020-1654018781.jpg?crop=0.762xw:0.916xh;0.0463xw,0.0759xh&resize=980:*",
    desc: "Fresh Strawberry milkshake with some freshly whipped cream.",
  }
  
];

/*const sectionCenter = document.querySelector(".section-center");
const filterBtns = document.querySelectorAll(".filter-btn");

/*window.addEventListener("DOMContentLoaded", function(){
    let displayMenu = menu.map(function(item){
      console.log(item); // each object
      return `<h2>hello world</h2>`;
    });
    console.log(displayMenu) //10 times <h2>hello world</h2>
  });*/

/*window.addEventListener("DOMContentLoaded", function(){
    let displayMenu = menu.map(function(item){
      return `<h2>${item.title}</h2>`;
    });
    console.log(displayMenu) //all titles
  });*/

/*window.addEventListener("DOMContentLoaded", function(){
    let displayMenu = menu.map(function(item){
      return `<article class="menu-item">
      <img src= ${item.img}
          class="photo" alt="logo">

      <div class="item-info">
          <header>
              <h2>${item.title}</h2>
              <h3 class="price">${item.price}</h3>
          </header>

          <p class="item-text">
          ${item.desc}
          </p>
      </div>
  </article>`;
    });
    //join all these array into one string
    displayMenu = displayMenu.join("");
    //"" is written so that we do not get , in between articles

    sectionCenter.innerHTML = displayMenu;
  });*/

////////////////////////////////////////////////////////////////

//since we will use filter, so make a function

/*window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
});

filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    //console.log(e.currentTarget.dataset.id)  //after clicking Lunch button console will show -> Lunch

    const category = e.currentTarget.dataset.id;

    const menuCategory = menu.filter(function (menuItem) {
      if (menuItem.category === category) {
        return menuItem;
      }
    });
    //menuCategory is an array since displayMenuItems function is expecting an array

    if (category === "all") {
      displayMenuItems(menu);
    } else {
      displayMenuItems(menuCategory);
    }
  });
});

function displayMenuItems(MenuItems) {
  let displayMenu = MenuItems.map(function (item) {
    return `<article class="menu-item">
      <img src= ${item.img}
          class="photo" alt="logo">

      <div class="item-info">
          <header>
              <h2>${item.title}</h2>
              <h3 class="price">${item.price}</h3>
          </header>

          <p class="item-text">
          ${item.desc}
          </p>
      </div>
  </article>`;
  });

  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}*/

/////////////////////////////////////////////////////////////////

/* what if the category given in array is different e.g. shakes
In that case we can only see this category in all*/

const sectionCenter = document.querySelector(".section-center");
const conatiner = document.querySelector(".btn-container")


/*Make Dynamic buttons*/

// Get unique category

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);

  const categories = menu.reduce(    // categories is the array with unique categories
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"] //initial array
  );
  const categoryBtns = categories.map(function (category) {
    return `<button class="filter-btn" 
    data-id=${category}>${category}</button>`;
  }).join("");
  conatiner.innerHTML = categoryBtns;

  /*we are placing this filterBtns here because if we write it on top then it will be empty
   as button will not be made at that time
   select the button once they have added to the dom and then add event listener*/
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      //console.log(e.currentTarget.dataset.id)  //after clicking Lunch button console will show -> Lunch
  
      const category = e.currentTarget.dataset.id;
  
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      //menuCategory is an array since displayMenuItems function is expecting an array
  
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
});



function displayMenuItems(MenuItems) {
  let displayMenu = MenuItems.map(function (item) {
    return `<article class="menu-item">
      <img src= ${item.img}
          class="photo" alt="logo">

      <div class="item-info">
          <header>
              <h2>${item.title}</h2>
              <h3 class="price">${item.price}</h3>
          </header>

          <p class="item-text">
          ${item.desc}
          </p>
      </div>
  </article>`;
  });

  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}
