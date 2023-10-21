const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

/*let Date = new Date(); 
//current date and time
console.log(Date);
//Fri Oct 20 2023 13:40:53 GMT+0530 (India Standard Time)*/

//future date when we want to end the time
let futureDate = new Date(2023, 9, 20, 11, 36, 59);
//month -> 0 index based -> 9 = oct
//clock -> 0 -24 -> 0 = 12a.m

//extract values one by one

const year = futureDate.getFullYear();
const date = futureDate.getDate();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

//hard ones -> month and days (beacuse we get number) -> use array

let month = futureDate.getMonth(); //9
month = months[month]; //october

const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `Giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}pm`;

//to sow how many days, hours, mins, secs are left
// using millisecond

//find millisec of future date and current date and then subtract it
//then with that answer calculate days, hours, mins, secs left

const futureTime = futureDate.getTime(); // millisecond

function getRemainingTime() {
  const today = new Date().getTime(); //current time in millisec

  const t = futureTime - today;

  //1s = 100ms
  //1m = 60s
  //1hr = 60min
  //1d = 24hr

  //values in milliseconds
  const oneDay = 24 * 60 * 60 * 1000; // millisec in oneday
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  //calculate values

  let days = t / oneDay; // 2.34567 .34567 is hours, min and sec
  days = Math.floor(days); //integer value

  //let hours= t/ oneHour; //124.6795 hours but we are already calculating days

  // 9%2 -> 1
  // 8%3 -> 2
  // t%oneDay -> remainder 2.6795 // 2days

  let hours = Math.floor((t % oneDay) / oneHour); //2

  let minutes = Math.floor((t % oneHour) / oneMinute);

  let seconds = Math.floor((t % oneMinute) / 1000);

  //either place them directly or save them in array
  const values = [days, hours, minutes, seconds];


  //adding 0 for value less then 10
  function format(item){
    if(item < 10){
      return item = `0${item}`
    }
    return item; // if value is bigger than 10
  }
  //iterate over items to dynamically change values

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  }); 

  if(t<0){ // current time is greater than future time
    clearInterval(countdown);

    //clearInterval allows you to stop the repetitive execution of setTimeInterval 

    deadline.innerHTML = `<h4 class="expired">SORRY, this giveaway has expired!</h4>`;
  }
}


//to start time
let countdown = setInterval(getRemainingTime,1000); 
// callback getRemainingTime will be called after every 1 sec

getRemainingTime();
