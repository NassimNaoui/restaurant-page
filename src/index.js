import "./styles.css";
import { loadFunction } from "./loading.js"
import { addMenu } from "./menu.js"
import { addContact } from "./contact.js"


const divContent = document.getElementById("content");
const Homebutton = document.getElementById("home-button")
const menubutton = document.getElementById("menu-button");
const contactButton = document.getElementById("contact-button");


Homebutton.classList.add('button-selected');
loadFunction()

// Nav to home 
Homebutton.addEventListener('click', function() {
    Homebutton.classList.add('button-selected');
    menubutton.classList.remove('button-selected');
    contactButton.classList.remove('button-selected');
    divContent.replaceChildren();
    loadFunction();
    }
)

// Nav to menu 
menubutton.addEventListener('click', function() {
    menubutton.classList.add('button-selected');
    Homebutton.classList.remove('button-selected');
    divContent.replaceChildren();
    addMenu();
})

// Nav to contact
contactButton.addEventListener('click', function () {
    contactButton.classList.add('button-selected');
    menubutton.classList.remove('button-selected');
    Homebutton.classList.remove('button-selected');
    divContent.replaceChildren();
    addContact();
})
