<<<<<<< HEAD
const add = document.querySelector(".add-task .add-plus");
const overlay = document.querySelector(".overlay");
const form = document.querySelector(".form")

add.addEventListener("click", ()=>{
    overlay.classList.add("show");
    form.classList.add("show");
})
//localStorage.clear();
const cross = document.querySelector(".form .cross")
const closeBtn = document.querySelector(".form .form-btns .close")

cross.addEventListener("click", ()=>{
    overlay.classList.remove("show");
    form.classList.remove("show");
})

closeBtn.addEventListener("click", ()=>{
    overlay.classList.remove("show");
    form.classList.remove("show");
})
const addBtn = document.querySelector(".form .form-btns .add")
let basket = JSON.parse(localStorage.getItem("list")) || [];


document.addEventListener("DOMContentLoaded", ()=>{
    basket.forEach(x=>{
        generate(x.id);
    })
})

addBtn.addEventListener("click", ()=>{
    const title = document.querySelector(".form-task .selected-title").value;
    let date = document.querySelector(".form-date .selected-date").value;
    
    let dateArr = date.split("-");
    let updatedArr ="";
    for(let i=0;i<3;i++){
        if(i==2){
            updatedArr += `${dateArr[dateArr.length-i-1]}`;
        }else{
            updatedArr += `${dateArr[dateArr.length-i-1]}-`;
        }      
    }
    date = updatedArr;
    const desc = document.querySelector(".form-desc .form-content").value;

    const id = new Date().getTime();
    basket.push({id, title, date, desc}) 

    localStorage.setItem("list", JSON.stringify(basket));

    generate(id);

    overlay.classList.remove("show");
    form.classList.remove("show");

    document.querySelector(".form-task .selected-title").value = "";
    document.querySelector(".form-date .selected-date").value = "";
    document.querySelector(".form-desc .form-content").value = "";
})

const tasks = document.querySelector(".tasks");


function generate(id){
    const obj = basket.find((x) => x.id===id);

    const divElement = document.createElement("div");
    divElement.className = "card";

    divElement.id = id;

    divElement.innerHTML = `<div class="title">${obj.title}</div>
    <div class="date">${obj.date}</div>
    <div class="desc">${obj.desc}</div>

    <div class="btns">
        <button class="edit">
            <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button class="delete">
            <i class="fa-solid fa-trash"></i>
        </button>
    </div>`;

    tasks.append(divElement);

    const editBtn = divElement.querySelector(".btns .edit");
    const trashBtn = divElement.querySelector(".btns .delete");

    editBtn.addEventListener("click", editTask);
    trashBtn.addEventListener("click", trashTask);
}

function trashTask(e){
    
    const cardDiv = e.currentTarget.parentElement.parentElement;
    const cardId = cardDiv.id;
    console.log(basket)

    if(basket.length===1){
        localStorage.removeItem("list");
        basket=[];
    }else{
        basket = basket.filter(x=>{
            return cardId!=x.id;
        })
        localStorage.setItem("list", JSON.stringify(basket));
    }

    cardDiv.remove();
}

function editTask(e){
    const cardDiv = e.currentTarget.parentElement.parentElement;
    const cardId = parseInt(cardDiv.id); //string
    overlay.classList.add("show");
    form.classList.add("show");


    const obj = basket.find((x) => x.id===cardId);

    console.log(obj);
    document.querySelector(".form-task .selected-title").value = obj.title;

    let d = obj.date;
    let dateArr = d.split("-");
    let updatedArr ="";
    for(let i=0;i<3;i++){
        if(i==2){
            updatedArr += `${dateArr[dateArr.length-i-1]}`;
        }else{
            updatedArr += `${dateArr[dateArr.length-i-1]}-`;
        }      
    }
    d = updatedArr;
    document.querySelector(".form-date .selected-date").value = d;
    document.querySelector(".form-desc .form-content").value = obj.desc;
    trashTask(e);
=======
const add = document.querySelector(".add-task .add-plus");
const overlay = document.querySelector(".overlay");
const form = document.querySelector(".form")

add.addEventListener("click", ()=>{
    overlay.classList.add("show");
    form.classList.add("show");
})
//localStorage.clear();
const cross = document.querySelector(".form .cross")
const closeBtn = document.querySelector(".form .form-btns .close")

cross.addEventListener("click", ()=>{
    overlay.classList.remove("show");
    form.classList.remove("show");
})

closeBtn.addEventListener("click", ()=>{
    overlay.classList.remove("show");
    form.classList.remove("show");
})
const addBtn = document.querySelector(".form .form-btns .add")
let basket = JSON.parse(localStorage.getItem("list")) || [];


document.addEventListener("DOMContentLoaded", ()=>{
    basket.forEach(x=>{
        generate(x.id);
    })
})

addBtn.addEventListener("click", ()=>{
    const title = document.querySelector(".form-task .selected-title").value;
    let date = document.querySelector(".form-date .selected-date").value;
    
    let dateArr = date.split("-");
    let updatedArr ="";
    for(let i=0;i<3;i++){
        if(i==2){
            updatedArr += `${dateArr[dateArr.length-i-1]}`;
        }else{
            updatedArr += `${dateArr[dateArr.length-i-1]}-`;
        }      
    }
    date = updatedArr;
    const desc = document.querySelector(".form-desc .form-content").value;

    const id = new Date().getTime();
    basket.push({id, title, date, desc}) 

    localStorage.setItem("list", JSON.stringify(basket));

    generate(id);

    overlay.classList.remove("show");
    form.classList.remove("show");

    document.querySelector(".form-task .selected-title").value = "";
    document.querySelector(".form-date .selected-date").value = "";
    document.querySelector(".form-desc .form-content").value = "";
})

const tasks = document.querySelector(".tasks");


function generate(id){
    const obj = basket.find((x) => x.id===id);

    const divElement = document.createElement("div");
    divElement.className = "card";

    divElement.id = id;

    divElement.innerHTML = `<div class="title">${obj.title}</div>
    <div class="date">${obj.date}</div>
    <div class="desc">${obj.desc}</div>

    <div class="btns">
        <button class="edit">
            <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button class="delete">
            <i class="fa-solid fa-trash"></i>
        </button>
    </div>`;

    tasks.append(divElement);

    const editBtn = divElement.querySelector(".btns .edit");
    const trashBtn = divElement.querySelector(".btns .delete");

    editBtn.addEventListener("click", editTask);
    trashBtn.addEventListener("click", trashTask);
}

function trashTask(e){
    
    const cardDiv = e.currentTarget.parentElement.parentElement;
    const cardId = cardDiv.id;
    console.log(basket)

    if(basket.length===1){
        localStorage.removeItem("list");
        basket=[];
    }else{
        basket = basket.filter(x=>{
            return cardId!=x.id;
        })
        localStorage.setItem("list", JSON.stringify(basket));
    }

    cardDiv.remove();
}

function editTask(e){
    const cardDiv = e.currentTarget.parentElement.parentElement;
    const cardId = parseInt(cardDiv.id); //string
    overlay.classList.add("show");
    form.classList.add("show");


    const obj = basket.find((x) => x.id===cardId);

    console.log(obj);
    document.querySelector(".form-task .selected-title").value = obj.title;

    let d = obj.date;
    let dateArr = d.split("-");
    let updatedArr ="";
    for(let i=0;i<3;i++){
        if(i==2){
            updatedArr += `${dateArr[dateArr.length-i-1]}`;
        }else{
            updatedArr += `${dateArr[dateArr.length-i-1]}-`;
        }      
    }
    d = updatedArr;
    document.querySelector(".form-date .selected-date").value = d;
    document.querySelector(".form-desc .form-content").value = obj.desc;
    trashTask(e);
>>>>>>> c094bbe36255384ace31adfc5cc1c42379a4fdb1
}