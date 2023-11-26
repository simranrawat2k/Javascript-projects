//target all whiteboxes and img box

const imgBox = document.querySelector(".imgBox");
const whiteBoxes = document.querySelectorAll(".whitebox");

imgBox.addEventListener("dragstart", (e)=>{

    //draging has start
    e.target.classList.add("hold"); 

    setTimeout(()=>{
        e.target.className = "hide";
    }, 0); 
    //it will run at last when of the functions are done executing
});

imgBox.addEventListener("dragend", (e)=>{
    //draging has ended

    e.target.className= "imgBox"; //remove border


});

whiteBoxes.forEach(function (whitebox) {
    whitebox.addEventListener("dragover", (e) => {

        //we cannot default drop any element over other
        e.preventDefault(); 
        // Prevent the default behavior to allow dropping elements
    });

    whitebox.addEventListener("dragenter",(e)=>{
        e.target.classList.add("dashed");
    });

    whitebox.addEventListener("dragleave",(e)=>{
        e.target.className= "whitebox";
    });

    whitebox.addEventListener("drop", (e) => {
        e.target.append(imgBox);
    });
});