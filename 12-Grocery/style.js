const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

let editElement;
let editFlag = false;
let editID ="";

//Event Listeners

form.addEventListener("submit", addItem);

clearBtn.addEventListener("click", clearItems);

window.addEventListener("DOMContentLoaded", setupItems);

/*const deleteBtn = document.querySelector(".delete-btn");
console.log(deleteBtn); //null
//it null because when page loge there is no delete button
so we cannot use addeventListerner because we have no access to delete and edit button

solution:
1)event bubbling: set eventlisterner on parent -> grocery-list
check whether the button click is delete or edit
edit item or delete item

2) target button when we have access event
target the buttons when we have access to them -> after element.innerHTML
*/



//Function

function addItem(e){
    e.preventDefault();
    const value = grocery.value; //value in input
    const id = new Date().getTime().toString();
    //it is converted to a string because when it is returned it will be in the form of string
    // here date is used to set unique value but do not use it everywhere

    //on submit we have three cases

    //1. when user has entered the value but not editing
    // value should be added to list

   /* if(value !=="" && editFlag ===false){
    }*/

    if(value && !editFlag){
        
        createListItem(id, value);

        displayAlert("Item added to the list", "success")

        container.classList.add("show-container");

        //add to local storage
        addToLocalStorage(id,value);

        //set back to default
        setBackToDefault();
    }

    //value is there but we are editing
    /*else if(value !=="" && editFlag ===true){
    }*/

    else if(value && editFlag){
        editElement.innerHTML = value;
        displayAlert("Value Edited", "success");

        editLocalStorage(editID, value);
        setBackToDefault(); // call it at last

    }

    //empty value
    else{
        displayAlert("Please Enter Value", "danger");
    }
}

function displayAlert(text, action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    //remove alert after 1 seconds
    setTimeout(function() {
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);  
    },1000);
}

function setBackToDefault() {
    grocery.value = "";
    editFlag = false;
    editID = "";
    submitBtn.textContent = "Submit";
}

function clearItems(){
    const items = document.querySelectorAll(".grocery-item");

    if(items.length > 0 ){
        items.forEach(function (item){
            list.removeChild(item);
        });
    }

    container.classList.remove("show-container");
    displayAlert("Empty list", "danger");
    setBackToDefault();

    localStorage.removeItem("list");
}


function deleteItem(e){
    //on clicking delete button we will access the parent element -> to be deleted
    const element = e.currentTarget.parentElement.parentElement;
    list.removeChild(element);

    const id = element.dataset.id;

    /*console.log(e.currentTarget.parentElement); //btn-container
    console.log(e.currentTarget.parentElement.parentElement); //grocery-item
    */

    if(list.children.length===0){
        container.classList.remove("show-container");
    }
    displayAlert("Item removed", "danger");
    setBackToDefault();
    removeFromLocalStorage(id);
}

function editItem(e){
    const element = e.currentTarget.parentElement.parentElement; 
    editElement = e.currentTarget.parentElement.previousElementSibling; //title

    grocery.value = editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    submitBtn.textContent = "Edit";
}

function addToLocalStorage(id, value) {
    /*const grocery = {id:id, value:value}
    key name and value name is same*/

    const grocery = {id, value} //1526374859, eggs

    let items = getLocalStorage();

    items.push(grocery);
    localStorage.setItem("list", JSON.stringify(items));

}

function removeFromLocalStorage(id){
    let items = getLocalStorage();

    items = items.filter(function (item){
        if( item.id !== id){
            return item;
        }
    });
    localStorage.setItem("list", JSON.stringify(items));
}

function editLocalStorage(id, value){
    let items = getLocalStorage();
    items = items.map(function (item){
        if (item.id === id){
            item.value = value;
        }
        return item;
    });
    localStorage.setItem("list", JSON.stringify(items));
}

function getLocalStorage(){
    return localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];
}

function setupItems(){
    let items = getLocalStorage();
    if(items.length > 0){
        items.forEach(function(item){
            createListItem(item.id, item.value)
        })
        container.classList.add("show-container");
    }
}

function createListItem(id, value){
    //make dynamic elements
       /* <article class="grocery-item">
                    <p class="title">items</p>
                    <div class="btn-container">
                        <button type="button" class="edit-btn">
                            <i class="fa-solid fa-pen-to-square" style="color: #00750e;"></i>
                        </button>
                        <button type="button" class="delete-btn">
                            <i class="fa-solid fa-trash" style="color: #861313;"></i>
                        </button>
                    </div>
                </article>*/
                const element = document.createElement("article");
                element.classList.add("grocery-item");
        
                const attr = document.createAttribute("data-id");
                attr.value =id;
                element.setAttributeNode(attr);
        
                element.innerHTML =`<p class="title">${value}</p>
                <div class="btn-container">
                    <button type="button" class="edit-btn">
                        <i class="fa-solid fa-pen-to-square" style="color: #00750e;"></i>
                    </button>
                    <button type="button" class="delete-btn">
                        <i class="fa-solid fa-trash" style="color: #861313;"></i>
                    </button>
                </div>`
        
                const deleteBtn = element.querySelector(".delete-btn");
                const editBtn = element.querySelector(".edit-btn");
        
                deleteBtn.addEventListener("click", deleteItem );
                editBtn.addEventListener("click", editItem);
        
        
        
        
                //append child
        
                list.appendChild(element);
}


/*local Storage
methods:
setItem
getItem
removeItem

save as string -> JSON.stringify()

localStorage.setItem("orange", JSON.stringify(["item", "item2"]));
const fruit = JSON.parse(localStorage.getItem("orange"));
localStorage.removeItem("orange"); 
*/