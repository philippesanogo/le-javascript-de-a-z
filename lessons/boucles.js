/**
 * Les boucles
 */

// La boucle for

// ex:
console.log("ex 1:");
for (let i = 0; i < 5; i++) {

    console.log(`Valeur de i : ${i}`);

}


console.log("-------------");

console.log("ex 2:");
// ex 2:
const myArray = [1, 2, 3, 4, 5, 6];

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);

}


console.log("-------------");


// La boucle for ... of
// ex 3:

console.log("ex 3:");

const text = "abcd";
for (const iterator of text) {
    console.log(iterator);
}

console.log("---");

const tableau = [1, 2, 3, 4];
for (const elem of tableau) {
    console.log(elem);
}

console.log("---");


const prenom = ["caen", "jibril", "paladin", "preux"];
for (const elem of prenom) {
    console.log(elem);
}


console.log("---");

const semaines = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
console.log(`Les jours de la semaine:`);
for (const elem of semaines) {
    console.log(`jour ${semaines.indexOf(elem) + 1}
    - ${elem}`);
}
// console.log(semaines[0]);

const chaineCarac = "je suis pragmatique au plus au point";
for (const elem of chaineCarac) {
    console.log(elem);
}



console.log("---");

const mois = ["janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "decembre"];

for (const elem of mois) {
    console.log(mois.indexOf(elem) + 1 + " - " + elem);
    console.log(mois.lastIndexOf(elem) + 1 + " - " + elem);
    console.log("");
}



console.log("-------------");



// La boucle for ... in (iteration à travers d'un objet)
// ex 4:

console.log("ex 4:");


const peugeot = {
    couleur: "grise",
    portes: 3,
    prix: 12000
}

for (const prop in peugeot) {
    console.log(`${prop}: ${peugeot[prop]}`);
}


