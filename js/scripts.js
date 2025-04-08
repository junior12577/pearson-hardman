// selecionando elementos do menu Mobile
const menuBtn = document.querySelector("#menu");
const closeMenuBtn = document.querySelector("#close-menu");
const menu = document.querySelector("#mobile-navbar");

//Feito por Wallisson & Senna (=
//Fechar o menu, após clicar na opção sobre
const about = document.querySelector('#mobile-navbar [href="sobre.html"]');

// selecionar os elementos dos slides
const slides = document.querySelectorAll(".banner");
//
const dots = document.querySelectorAll(".dot");
// variavel de controle
let slideIndex = 1;

function showSlides(){
    // console.log(slides)
    for(let i=0; i < slides.length; i++){
        slides[i].classList.remove("active")
        dots[i].classList.remove("active")
    }

    slideIndex++; // avançando a variavel
    if (slideIndex > slides.length){
        slideIndex = 1;
    }
    // console.log(slideIndex)
    // console.log(slides[slideIndex -1])
    slides[slideIndex -1].classList.add("active")
    dots[slideIndex -1].classList.add("active")

    setTimeout(showSlides, 3000)

}

//Ativar Menu-Mobile
// arrow function
// () => {
//    }
// function default
// function () {
//}    
// menuBtn.addEventListener("click", (e) =>{
//     menu.classList.add("menu-active")
// })
// closeMenuBtn.addEventListener("click", (e) =>{
//     menu.classList.remove("menu-active")
// })
[menuBtn, closeMenuBtn].forEach( (btn) => {
    btn.addEventListener("click", (e) =>{
        menu.classList.toggle("menu-active")
    })
})


//Fechar o menu, após clicar na opção sobre
about.addEventListener("click", (e) =>{
    menu.classList.remove("menu-active")
});

//Inicialização do slides
showSlides()
