function showModal(){
    document.querySelector(".overlay").classList.add("showOverlay");

    document.querySelector(".loginForm").classList.add("showLoginForm");
}

const btnlogin = document.querySelector(".btn-login");
btnlogin.addEventListener("click", showModal);



function closeModal(){
    document.querySelector(".overlay").classList.remove("showOverlay");

    document.querySelector(".loginForm").classList.remove("showLoginForm");
}

const close = document.querySelector("span");
close.addEventListener("click", closeModal);

const btnclose = document.querySelector(".loginForm form button");
btnclose.addEventListener("click", closeModal);

const overlay = document.querySelector(".overlay");
overlay.addEventListener("click", closeModal);