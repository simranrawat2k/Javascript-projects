const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

    /*if(hamburger.classList.contains("active")){
        hamburger.classList.remove("active"); 
    } else{
        navMenu.classList.add("active");
    }*/
});


/*This line toggles the presence of the "active" class on the hamburger element.
If the "active" class is already present, it will be removed. 
If it's not present, it will be added.*/ 


/*to make menu dissappear on clicking any of the item*/ 
document.querySelectorAll(".nav-item").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

//classList - shows/gets all classes
//contains - check classList for specific class
//add - add class
//remove - remove class
//toggle - toggles class

/* */ 
console.log(navMenu.classList.contains("nav-menu")) //true