// EXERCICE 6 : Les évènements.


// 1. Changez la couleur du cercle en "crimson" quand votre souris le survole.



const circle = document.querySelector(".cercle");
circle.addEventListener('mouseover', () => {
    circle.style.backgroundColor = "crimson";
});



// 2. Changez la couleur du carré en "violet" quand vous cliquez dessus.

const carre = document.querySelector(".carre");
carre.addEventListener('click', () => {
    carre.style.backgroundColor = "violet";
});



// 3. Rajoutez l'évenement "click" au document, puis loggez la position(x,y) des clics que vous effectuez sur le document.


document.body.addEventListener('click', (e) => {
    console.log(`Position X: ${e.clientX}`);
    console.log(`Position Y: ${e.clientY}`);
});
