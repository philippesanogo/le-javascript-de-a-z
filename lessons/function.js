/**
 * Les Fonctions
 */
//  fonction basique pour dire "hello"
function sayHello(prenom) {
    console.log(`hello ${prenom}`);
}
sayHello("philou");


// fonction avec return une valeur
function calculerSomme() {
    return 2 + 2;
}

// assigne la valeur de return dans une constante somme
const somme = calculerSomme();
// affiche la constante dans la console
console.log(somme);


// fonction avec parametre et return
function trouverLereste(a, b) {
    return a % b;
}

const reste = trouverLereste(10, 2);
console.log(reste);

const reste1 = trouverLereste(12, 7);
console.log(reste1);

console.log("----------------------------------");
// --------------------------------------------------- //
console.log(`Exo 2:`);
/**
 * Exo 2: Les opérateurs, chaînes et fonctions
 */


// Question 1: Écrire une fonction qui retourne un nombre multiplié par deux en utilisant un paramètre

// Réponse: 
function multiplierParDeux(nb) {
    return nb * 2;
}

const double = multiplierParDeux(8);
console.log(`Réponse 1: ${double}`);


// Question 2: Determiner ce qui est vrai ou faux
// Le code ci-dessous permet-il d'assigner la valeur 50 000 à solde. Vrai ou Faux ?

// Réponse 2: 
let solde = 150000;
solde += 50000;

console.log(`Réponse 2: Faux.
Car solde = ${solde} et non 50 000.
Le code permet d'ajouter et non de réassigner la valeur de solde.`);


