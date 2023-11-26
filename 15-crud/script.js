let form = document.getElementById("form");
let input = document.getElementById("input");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
  acceptData();
};

let data = {};

let acceptData = () => {
  data["text"] = input.value;
  createPost();
  console.log(data);
};

let createPost = () => {
  posts.innerHTML += `<div>
    <p>${data.text}</p>
    <span>
        <i onclick = "edit(this)" class="fa-solid fa-pen-to-square"></i>
        <i onclick = "trash(this)" class="fa-solid fa-trash"></i>  
    </span>
</div> `;
  //this keyword refers to the element that triggered the onclick event. 
  //In this case, the this keyword would refer to the <i> element

  input.value = "";
};

let trash = (e) => {
  e.parentElement.parentElement.remove();
};

let edit = (e) =>{
    input.value = e.parentElement.previousElementSibling.textContent;
    e.parentElement.parentElement.remove();
}
