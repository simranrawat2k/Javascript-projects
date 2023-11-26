/*let count=0;
const value = document.getElementById("value");
const decrease = document.getElementsByClassName("btn")[0];
const reset = document.getElementsByClassName("btn")[1];
const increase = document.getElementsByClassName("btn")[2];

reset.addEventListener("click", function(){
    count=0;
    value.textContent = count;
    value.style.color = "black";
})

decrease.addEventListener("click", function(){
    count--;
    value.textContent = count;
    if(count>0){
        value.style.color = "green"
    }else if(count<0){
        value.style.color = "red"
    }else{
        value.style.color = "black";
    }
})

increase.addEventListener("click", function(){
    count++;
    value.textContent = count;
    if(count>0){
        value.style.color = "green"
    }else if(count<0){
        value.style.color = "red"
    }else{
        value.style.color = "black";
    }
})*/

//////////////////////////////////////////////////////////////////////////////////////

let count = 0;

const value = document.querySelector("#value");

const btns = document.querySelectorAll(".btn");
/*select all button that has class button
console.log(btns);
NodeList(3) [button.btn.decrease, button.btn.reset, button.btn.increase]
it's array like, there are some methods that you can perform on the NodeList e.g.forEach
But some method you cannot run on the NodeList so you need to transform it into array
*/

/*btns.forEach(function (btn){
    
    forEach -> callBack is passed, this function is called against each item
    using parameter "btn" we can access each item 

    //console.log(btn);
    
    button.btn.decrease
    button.btn.reset
    button.btn.increase
    

    btn.addEventListener("click", function(e){

        //console.log(e.currentTarget);
        //<button class="btn decrease"> Decrease </button>

        
        Instead of selecting buttons one by one using specific class
        we select all of them using .btn class
        event object e passed because we want to check which button is clicked
        on this event object e we have the current target
        

        //console.log(e.currentTarget.classList);
        //['btn', 'reset', value: 'btn reset']

        
        we can access list of classes using .classList whenever we click button

        if(styles.contains("decrease"));
        it checks if the variable contains specific class
        
    })
})*/

/*The forEach loop is run only once when it's initially executed, and it attaches event listeners to each button. 
After that, the event listeners are in place, and they respond to button clicks independently.
Each button has its own event listener attached to it. When a button is clicked, the corresponding event listener is executed.
The event listeners are aware of which button triggered the event through the btn parameter, which represents the current button in the iteration.
*/

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "black";
    }
    value.textContent = count;
  });
});


