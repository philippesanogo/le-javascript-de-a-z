// Exo 3: Tableaux, Objets et évènements

// Question 1: Créer un tableau avec trois valeurs à l'intérieur - 5124, true et un objet avec une propriété

// Réponse:
const myarray = [5124, true, ordinateur = {
    ecran: "HD"
}];


// Question 2: Créer un objet avec trois propriétés

// Réponse:
const smartphone = {
    ecran: "HD",
    connexion: "USB",
    clavier: "AZERTY"
}

// console.log(smartphone.clavier);


// Question 3: Dans l'HTML, il y a un texte, rentrer cette élément dans une constante, puis changer la couleur de fond au clic en violet.

// Réponse:

const text = document.querySelector("p");
text.addEventListener("click", () => {
    text.style.backgroundColor = "violet";
 })