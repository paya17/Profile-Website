'use strict'

//스크롤링 전에는 navbar 투명했는데, 스크롤링하면 navbar 진해지게, padding 작아지게(전반적으로 무엇을 하는지)
const navbar = document.querySelector('#navbar'); 
const navbarHeight = navbar.getBoundingClientRect().height; 
document.addEventListener('scroll',()=>{ 
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
}); 
 

//Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu'); 
navbarMenu.addEventListener("click", (event) => { 
    const link = event.target.dataset.link;
    if( link == null) {
        return;
    } 
        
    scrollIntoView(link); 
    
    navbarMenu.classList.remove('open'); 
})

//Handle click on "contact me" buttom on home
const homeContactBtn = document.querySelector('.home__contact'); 
homeContactBtn.addEventListener('click', () => { 
   scrollIntoView('#contact'); 
})

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector); 
    scrollTo.scrollIntoView( {behavior: "smooth"} ); 
} 


//Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector("#home");
const homeHeight = home.getBoundingClientRect().height; 
const homeContainer = document.querySelector(".home__container"); 
document.addEventListener('scroll',() => {
    homeContainer.style.opacity = 1 - window.scrollY / homeHeight;
})


 //Show "arrow up" button when scrolling down
 const arrowUp = document.querySelector(".arrow-up");
 document.addEventListener('scroll', ()=>{
     if(window.scrollY > homeHeight/2) {
        arrowUp.classList.add('visible'); 
     } else {
        arrowUp.classList.remove('visible');
     } 
 }) 

//Handle click on the "arrow up" button
arrowUp.addEventListener('click', ()=>{
    scrollIntoView('#home'); 
}) 


//Projects
const likeBtnContainer = document.querySelector('.like__categories'); 
const projectContainer = document.querySelector('.like__projects'); 
const projects = document.querySelectorAll('.project'); 
likeBtnContainer.addEventListener("click", (event)=>{

    const filter = event.target.dataset.filter || event.target.parentNode.dataset.filter; 
    if(filter == null) {
        return; 
    } 

    projectContainer.classList.add('anim-out'); 
    
    setTimeout(() => { 
        
        projects.forEach((project)=>{
            if(filter === '*' || filter === project.dataset.type) { 
                project.classList.remove('invisible'); 
            } else {
                project.classList.add('invisible');
            } 
        }) 
    
        projectContainer.classList.remove('anim-out'); 
   
    }, 300); 
    

    const actived = document.querySelector('.category__btn.active');
    actived.classList.remove('active'); 
    const target = event.target.nodeName === 'BUTTON' ? event.target : event.target.parentNode;
    target.classList.add('active'); 
    
})


//Navbar toggle button for small screen(화면 크기 작을 때, navbar의 toggle버튼 누르면 메뉴가 나타나고,사라지도록)
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
}) 








