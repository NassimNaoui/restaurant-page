import RestaurantImage from "./carte-restaurant.jpeg";
const divContent = document.getElementById('content');
const image = document.createElement("img");

export function addMenu () {
    
    // Définir la source de l'image
    image.src = RestaurantImage;
    
    // Ajouter l'image à imgContainer
    divContent.appendChild(image);
    
    // Ajouter la classe 'image' à l'image
    image.classList.add("image-menu");
}

