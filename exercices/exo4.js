// EXERCICE 4 : Conditions, comparaisons, boucles ...

// Question 1: Loggez dans la console le résultat de l'expression d'une opération ternaire.

// réponse:
console.log("Réponse 1:");
const egalite = 47;
const test = egalite === 47 ? "vrai" : "faux";
console.log(test);
console.log(`- Le test ci-dessus est ${test}, car la constante egalite est égal à la constante test.`);

// Question 2: Si metreCarre est supérieur à 70, loggez "Grand logement", si c'est inférieur, loggez "Logement petit/moyen".
// Vous pouvez voir les résultats de la console sur codepen en bas à gauche.



console.log("--------------");



// Réponse:
console.log("Réponse 2:");
let metreCarre = 100;

if (metreCarre > 70) {
    
    console.log("Grand logement");

} else {

    console.log("Logement petit/moyen");

}




console.log("--------------");


// Question 3: Créez une boucle for qui affiche dans la console une suite de nombres de 100 à 0 en pas de 1.
// 100,99,98,97,96 ...

// Réponse:
console.log("Réponse 3:");

for(let i = 100; i >= 0; i--){
    console.log(i);
}