// ELEMENTOS DEL DOM
const slash  = document.querySelector("img#slash");
const logoHome = document.querySelector("#home");

const allSections = document.querySelectorAll("main > section");

const sectionSlash = document.querySelector("section.slash");
const sectionMainPage = document.querySelector("section.mainPage");
const sectionAboutUs = document.querySelector("section.aboutUs");
const sectionConoceMas = document.querySelector("section.conoce-mas");
const sectionPlanes = document.querySelector("section.planesSubcripcion");

const slashOpcions = document.querySelector(".slash__opcions");

const headerOpcions = document.querySelector(".header__sections");


//EVENTOS
slash.addEventListener('click', openSlash);
headerOpcions.addEventListener('click', openSection);
slashOpcions.addEventListener('click', openSection);
logoHome.addEventListener('click', home);

// FUNCIONES
function openSlash(){
    const isClick = sectionSlash.classList.contains("hidden");
    hideAllSections();
    if (isClick) {
        sectionSlash.classList.remove("hidden");
    } else {
        sectionMainPage.classList.remove("hidden");
    }
}

function home(){
    hideAllSections();
    sectionMainPage.classList.remove("hidden");
}

function openSection(e){
    const isLi  = e.target.nodeName =  'LI';
    if (isLi) {
        hideAllSections();
    };
    if (e.target.classList.contains("slash__aboutus") && isLi) {
        sectionAboutUs.classList.remove("hidden");
    }
    if (e.target.classList.contains("slash__knowmore") && isLi) {
        sectionConoceMas.classList.remove("hidden");
    }
    if (e.target.classList.contains("slash__plans") && isLi) {
        sectionPlanes.classList.remove("hidden");
    }
}

function hideAllSections(){
    allSections.forEach((section) => {
        section.classList.add("hidden");
    })
}





