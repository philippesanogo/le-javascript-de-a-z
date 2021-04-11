/**
 * Les Conditions
 */

// ex 1:
const password = 1234;

if (password === 1234) {

    console.log("ex 1:");
    console.log("access granted");

} else {

    console.log("access not granted");

}

console.log("-------------");



// ex 2:
const nb = 50;

if (nb !== 20) {

    console.log("ex 2:");
    console.log("condition vérifiée");

} else {

    console.log("condition non vérifiée");

}



console.log("-------------");



// ex 3 avec opérateur logique "&&":
const nb1 = 1500;

if (nb1 === 100) {

    console.log("ex 3:");
    console.log("NB égal à 100");

} else if (nb1 < 1000 && nb1 >= 101) {

    console.log("ex 3:");
    console.log("NB entre 999 et 102");

} else if (nb1 > 500) {

    console.log("ex 3:");
    console.log("NB supérieur à 500");

} else {
    console.log("résultat non prévu");
}



console.log("-------------");



// ex 4 avec opérateur logique "||":
const nb2 = 750;

if (nb2 > 1000 || nb2 === 750) {

    console.log("ex 4:");
    console.log("NB2 pas sup à 1000 ou égal à 750");

}



console.log("-------------");



// ex 5 avec opérateur logique "!" => pour inverse de...:

const bool = false;

if (bool === !bool) {

    console.log("ex 5:");
    console.log("condition vérifiée");

} else {

    console.log("ex 5:");
    console.log("inverse de ...");

}

console.log(!bool);





console.log("-------------");



// ex 6: Les valeurs "truthy" et "falsy"

// Les truthy
console.log("ex 6:");

const boolean = true;
console.log(Boolean(boolean));

const boolean1 = 1234;
console.log(Boolean(boolean1));

// Les falsy
const boolean2 = 0;
console.log(Boolean(boolean2));

const boolean3 = undefined;
console.log(Boolean(boolean3));


let modale = false;
console.log(modale);
modale = !modale;
console.log(modale);



console.log("-------------");


// Le switch
console.log("ex 7:");

let tShirt = "violet";

switch (tShirt) {
    case "rouge":
        console.log("prix: 30€");
        
        break;
    case "vert":
        console.log("prix: 40€");
        break;
    case "rose":
        console.log("prix: 20€");

    default:
        console.log(`désolé, nous n'avons pas ce t-shirt de couleur ${tShirt} dans notre magasin`);
}



console.log("-------------");

// Les ternaires

console.log("ex 8:");
const soleil = "jaune";
const couleur = soleil === "jaune" ? "vrai" : "faux" ;

// console.log(couleur);
console.log(`${couleur}, Le soleil est de couleur jaune`);

let price = 501;
const choice = price > 500 ? "premium" : "basique";

// console.log(choice);
console.log(`La paire de chaussure achetée est de type ${choice}`);