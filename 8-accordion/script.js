//traversing the dom

// select button -> add click event -> look for the parent  -> toggle

// select all three buttons and then loop over them to add event listener to each button

/*const btns = document.querySelectorAll('.question-btn')

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        console.log(e.currentTarget);
        //it will give reference to the button that is clicked
        const ques = e.currentTarget.parentElement.parentElement;  //artile 
        ques.classList.toggle("show-text")
    });
});*/

//option 2 -> use selectors inside the element

const questions  = document.querySelectorAll(".question");

questions.forEach(function (ques){
    const btn = ques.querySelector(".question-btn");
    
    //console.log(btn) --> either of the three buttons 

    //now we do not have to look around the document

    btn.addEventListener("click", function(){


        //close previous one
        questions.forEach(function (item){
            if(item !== ques){
                item.classList.remove("show-text");
            }
        });

        ques.classList.toggle("show-text")
    });
});