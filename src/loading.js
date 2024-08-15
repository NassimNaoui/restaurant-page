import RestaurantImage from "./Good Neighbour.jpeg";

const divContent = document.getElementById('content');

// Création de l'image
const image = document.createElement("img");

export function loadFunction() {
    
    // Créer et ajouter la div avec la classe 'inf-container'
    const infContainer = Object.assign(document.createElement('div'), { className: 'inf-container' });
    divContent.appendChild(infContainer);

    const numberOfDivs = 3;

    for (let i = 0; i < numberOfDivs; i++) {
        const newDiv = document.createElement('div');

        // Ajouter une classe à la div
        newDiv.classList.add(`block-text-${i + 1}`);

        // Ajouter la div au conteneur
        infContainer.appendChild(newDiv);
    }
    
    const heading1 = document.createElement('h2')
    heading1.textContent = 'The concept';
    document.querySelector(".block-text-1").appendChild(heading1);
    
    const par1 = document.createElement('p')
    par1.textContent = 'Located in the heart of the city, Good Neighbour offers a cozy and welcoming atmosphere where you can relax and enjoy delicious food. Our comfortable seating and friendly ambiance make it the perfect spot to unwind or catch up with friends.Our menu features a variety of tasty options, from fresh breakfasts and light lunches to indulgent desserts, all made with high-quality ingredients. Enjoy a cup of our expertly brewed coffee while experiencing the warm hospitality that makes Good Neighbour special. We look forward to welcoming you soon!';
    document.querySelector(".block-text-1").appendChild(par1);
    
    const heading2 = document.createElement('h2')
    heading2.textContent = 'Hours';
    document.querySelector(".block-text-2").appendChild(heading2);

    const par2 = document.createElement('p')
    par2.textContent = '08:00am - 03:00pm --- 7:00pm - 10:30pm';
    document.querySelector(".block-text-2").appendChild(par2);

    const heading3 = document.createElement('h2')
    heading3.textContent = 'Location';
    document.querySelector(".block-text-3").appendChild(heading3);

    const par3 = document.createElement('p')
    par3.textContent = '890 5th AveNew York, NY 10021, United-States';
    document.querySelector(".block-text-3").appendChild(par3);
    

    // Créer et ajouter la div avec la classe 'img-container'
    const imgContainer = Object.assign(document.createElement('div'), { className: 'img-container' });
    divContent.appendChild(imgContainer);
    
    // Définir la source de l'image
    image.src = RestaurantImage;

    // Ajouter l'image à imgContainer
    imgContainer.appendChild(image);
    
    // Ajouter la classe 'image' à l'image
    image.classList.add("image");
}

