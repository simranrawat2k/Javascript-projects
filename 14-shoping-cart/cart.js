<<<<<<< HEAD
let basket = JSON.parse(localStorage.getItem("list")) || [];

let label = document.getElementById("label");
let shoppingCart = document.getElementById("shopping-cart")

function calculate() {

  const cartNumber = document.querySelector(".cart .cart-number");
  let total = 0;
  basket.forEach((x) => {
    total = total + x.value;
  });

  if (total === 0) {
    cartNumber.style.display = "none";
  } else {
    cartNumber.textContent = total;
    cartNumber.style.display = "flex";
  }
}
calculate();

let generateCartItems=()=>{
    if(basket.length!==0){

    }else{
        shoppingCart.innerHTML =``;
        label.innerHTML = `
            <h2>Cart is Empty</h2>
            <a href="index.html">
                <button class="homeBtn">Back to home</button>
            </a>
        `;
    }
}

=======
let basket = JSON.parse(localStorage.getItem("list")) || [];

let label = document.getElementById("label");
let shoppingCart = document.getElementById("shopping-cart")

function calculate() {

  const cartNumber = document.querySelector(".cart .cart-number");
  let total = 0;
  basket.forEach((x) => {
    total = total + x.value;
  });

  if (total === 0) {
    cartNumber.style.display = "none";
  } else {
    cartNumber.textContent = total;
    cartNumber.style.display = "flex";
  }
}
calculate();

let generateCartItems=()=>{
    if(basket.length!==0){

    }else{
        shoppingCart.innerHTML =``;
        label.innerHTML = `
            <h2>Cart is Empty</h2>
            <a href="index.html">
                <button class="homeBtn">Back to home</button>
            </a>
        `;
    }
}

>>>>>>> c094bbe36255384ace31adfc5cc1c42379a4fdb1
generateCartItems();