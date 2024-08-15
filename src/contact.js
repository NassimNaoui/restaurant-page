const divContent = document.getElementById('content');

export function addContact () {
    
    const infContact = Object.assign(document.createElement('div'), { className: 'inf-contact' });
    divContent.appendChild(infContact);
    
    const numberOfDivs = 2;

    for (let i = 0; i < numberOfDivs; i++) {
        const newDiv = document.createElement('div');

        // Ajouter une classe à la div
        newDiv.classList.add(`block-contact-${i + 1}`);

        // Ajouter la div au conteneur
        infContact.appendChild(newDiv);
    }

    const heading1 = document.createElement('h2')
    heading1.textContent = 'Contact Us';
    document.querySelector(".block-contact-1").appendChild(heading1);

    const par1 = document.createElement('h3')
    par1.textContent = 'goodneighbour@fakemail.com';
    document.querySelector(".block-contact-2").appendChild(par1);

    const par2 = document.createElement('h3')
    par2.textContent = '555-555-5554';
    document.querySelector(".block-contact-2").appendChild(par2);
}