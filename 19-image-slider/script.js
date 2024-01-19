const btn = document.querySelector(".select button");

const loader = document.querySelector(".loader")
const box = document.querySelector(".box")
let no = 0;
btn.addEventListener("click", ()=> {
  loader.style.display = "block";
  const text = document.querySelector(".select input").value;
  generate(text);
})

function generate(text){
  fetch("https://picsum.photos/v2/list")
  .then(data => data.json())
  .then(res => {
    console.log(res)

    addData(res, text);
  })
  .catch(err => console.log("error"))
}

const pics= document.querySelector(".box .pics")
const bar = document.querySelector(".bar")


function addData(res,text){
  pics.innerHTML =``;
  bar.innerHTML = ``;
  res.forEach((x, i)=> {
    console.log(text)
    if(i<text){
      const pi = document.createElement("p");
      pi.className = "inactive";
      if(i==0){
        pi.classList.add("active");
      }
      pi.innerHTML = `
      <img src="${x.download_url}" alt="">
      `
      pics.append(pi);
    }else{
      no=text;
      return;
    }
  })

  for(let f=0; f<text; f++){
    const div = document.createElement("div");
    div.className = "page";
    if(f==0){
      div.classList.add("col");
    }
    bar.append(div);
  }

  box.style.display = "flex";
  loader.style.display = "none";
}


const left = document.querySelector(".left");
const right = document.querySelector(".right");
let num =0;

left.addEventListener("click", ()=>{

  if(num==0){
    num = no-1;
  }else{
    num--;
  }
  const imag = document.querySelectorAll(".pics p");
  const page = document.querySelectorAll(".bar div");

  imag.forEach((x,i) => {
    if(x.classList.contains("active")){
      x.classList.remove("active")
    }
  })

  page.forEach((r) => {
    if(r.classList.contains("col")){
      r.classList.remove("col");
    }
  })

  imag.forEach((x,i) => {
    
    if(i==num){
      x.classList.add("active")
    }
  })

  page.forEach((r,i) => {
    if(i==num){
      r.classList.add("col");
    }
    
  })
})

right.addEventListener("click", ()=>{
  if(num==no-1){
    num = 0;
  }else{
    num++;
  }

  const imag = document.querySelectorAll(".pics p");
  const page = document.querySelectorAll(".bar div");

  imag.forEach((x,i) => {
    if(x.classList.contains("active")){
      x.classList.remove("active")
    }
  })

  page.forEach((r) => {
    if(r.classList.contains("col")){
      r.classList.remove("col");
    }
  })

  imag.forEach((x,i) => {
    
    if(i==num){
      x.classList.add("active")
    }
  })

  page.forEach((r,i) => {
    if(i==num){
      r.classList.add("col");
    }
    
  })
})