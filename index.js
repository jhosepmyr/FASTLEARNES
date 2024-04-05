// ELEMENTOS DEL DOM
const slash  = document.querySelector("img#slash");

const allSections = document.querySelectorAll("main > section");

const sectionSlash = document.querySelector("section.slash");
const sectionMainPage = document.querySelector("section.mainPage");
const sectionAboutUs = document.querySelector("section.aboutUs");
const sectionConoceMas = document.querySelector("section.conoce-mas");
const sectionPlanes = document.querySelector("section.planesSubcripcion");

const slashOpcions = document.querySelector(".slash__opcions");


//EVENTOS
slash.addEventListener('click', openSlash);
slashOpcions.addEventListener('click', openSection);


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

function openSection(e){
    hideAllSections();
    const isLi  = e.target.nodeName =  'LI';
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





