

const shoppingItems = shopping.map((item, index) => {
  return { id: index + 1, ...item };
});


const cartNumber = document.querySelector(".cart .cart-number");

let basket = JSON.parse(localStorage.getItem("list")) || [];
/*
  {
    id:number.id,
    value: number.textcontent
  }
*/

const shopContainer = document.querySelector("main .shop");

let maxHeight = 0;

shoppingItems.forEach((item) => {
  let point = 0;
  basket.forEach((x) => {
    if (x.id == item.id) {
      point = x.value;
      console.log(point);
    }
  });

  const divElement = document.createElement("div");
  divElement.className = "card";

  const attr = document.createAttribute("id");
  attr.value = `product-id-` + item.id;
  divElement.setAttributeNode(attr);

  divElement.innerHTML = `<div class="card-img">
<img src="${item.img}"
    alt="logo">
</div>
<div class="card-title">${item.title}</div>
<div class="card-desc">${item.desc}</div>
<div class="card-bottom">
<div class="price">${item.price}</div>
<div class="counter">
    <div onclick="minusC(this)" class="minus">
        <i class="fa-solid fa-minus"></i>
    </div>
    <div class="number" id="${item.id}">${point}</div>
    <div onclick="plusC(this)" class="plus">
        <i class="fa-solid fa-plus"></i>
    </div>
</div>
</div>`;

  shopContainer.append(divElement);

  const cardHeight = divElement.clientHeight;
  if (cardHeight > maxHeight) {
    maxHeight = cardHeight;
  }

  let total = 0;
  basket.forEach((item) => {
    console.log(item.value);
    total = total + item.value;
  });

  if (total === 0) {
    cartNumber.style.display = "none";
  } else {
    cartNumber.textContent = total;
    cartNumber.style.display = "flex";
  }
});

document.querySelectorAll(".card").forEach((card) => {
  card.style.height = `${maxHeight}px`;
});


/*
minus.forEach((negative) => {
  negative.addEventListener("click", (event) => {
    const numberElement = negative.nextElementSibling;
    if (numberElement.textContent > 0) {
      numberElement.textContent--;
      total--;
      cartNumber.textContent = total;
    }
    if(total == 0){
      cartNumber.style.display = "none";
    }
  });
});


plus.forEach((positive) => {
  positive.addEventListener("click", (event) => {
    const numberElement = positive.previousElementSibling;
    numberElement.textContent++;
    total++;
    if(total>0){
      cartNumber.style.display = "flex";
      cartNumber.textContent = total;
    }
  });
});
*/

function plusC(e) {
  let number = e.previousElementSibling;
  let numberId = number.id;
  let numberValue = number.textContent;

  let flag = false;

  basket.forEach((item) => {
    if (item.id === numberId) {
      flag = true;
      return;
    }
  });

  if (flag) {
    basket.forEach((item) => {
      if (item.id === numberId) {
        item.value = parseInt(numberValue, 10) + 1;
        number.textContent = item.value;
      }
    });
  } else {
    let no = parseInt(numberValue) + 1;
    basket.push({ id: numberId, value: no });
    number.textContent = 1;
  }

  console.log(basket);

  let total = 0;
  basket.forEach((item) => {
    console.log(item.value);
    total = total + item.value;
  });

  cartNumber.textContent = total;
  cartNumber.style.display = "flex";

  localStorage.setItem("list", JSON.stringify(basket));
}

function minusC(e) {
  let number = e.nextElementSibling;
  let numberId = number.id;
  let numberValue = number.textContent;

  if (parseInt(numberValue, 10)) {
  } else {
    return;
  }

  basket.forEach((item, index) => {
    if (numberId === item.id) {
      item.value = item.value - 1;
      number.textContent = item.value;

      if (item.value === 0) {
        basket.splice(index, 1);
      }
    }
  });

  let total = 0;
  basket.forEach((item) => {
    total = total + item.value;
  });

  if (total === 0) {
    cartNumber.style.display = "none";
    localStorage.removeItem("list");
  } else {
    cartNumber.textContent = total;
    cartNumber.style.display = "flex";
    localStorage.setItem("list", JSON.stringify(basket));
  }
}
