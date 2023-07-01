let menu = document.querySelector('#menubar');
let header = document.querySelector('header');

const themeToggle = document.querySelector('.themeToggle');
const themeBtn = document.querySelector('.themeBtn');
const themeIcon = document.querySelector('.themeIcon');


themeToggle.onclick =() => {
    themeBtn.classList.toggle('active');

    if(themeBtn.classList.contains('active'))
    {
        themeIcon.src = 'img/moon.jpg';
        document.body.classList.add('active');
    }
    else{
        themeIcon.src = 'img/sun.jpg';
        document.body.classList.remove('active');
    }
}

const skillsIntro = document.querySelector('.skillsIntro span');

const textAnimation = () => {

    setTimeout(() => {
        skillsIntro.innerHTML = "Front End Developer";
    }, 0);

    setTimeout(() => {
        skillsIntro.innerHTML = "Full Stack Developer";
    }, 5000);
}

textAnimation();
setInterval(textAnimation, 9800);





menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}
let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}
let links = document.querySelectorAll('a').forEach(links =>{
    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor1.classList.add('active');

    }
    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor1.classList.remove('active');

    }
});

//Get Data
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const lessage = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

//Validate Data
function validateForm(){

    clearMessages();

    if(nameInput.value.length < 1){
        errorNodes[0].innerText = "Name Cannot Be Blank";
        nameInput.classList.add("error-border");
    }

    if(!emailIsValid(email.value)){
        errorNodes[1].innerText = "Invalid email address";
        email.Input.classList.add("error-border");
    }
}
//Clear error/ success messages
function clearMessages(){
    for(let i=0; i < errorNodes.length; i++){
        errorNodes[i].innerText = "";
    }
    nameInput.classList.remove("error-border");
}