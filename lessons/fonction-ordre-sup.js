/**
 * Les fonctions d'ordre supérieur
 */


/*
 1. on va créer un tableau de chiffres
 2. on crée un tableau vide
 3. Faire une fonction qui va trier dans le tableau de chiffres et récupérer tout les nombres supérieurs à 10 et puis les mettre dans le tableau vide
 */


// ex: Voici une manière de faire

const arrayNumber = [1, 5, 9, 7, 123, 2589, 324, 12, 39];
// console.log(arrayNumber);

const newArray = [];
// console.log(newArray);


console.log(`----------`);


for (let i = 0; i < arrayNumber.length; i++) {

    if (arrayNumber[i] > 12) {

        newArray.push(arrayNumber[i]);

    }

}

// console.log(newArray);

console.log(`----------`);

// ex: En voilà une autre avec une fonction d'ordre supérieur - tout va se passer dans cette fonction

function trier(arr, fn) {

    const newarray = [];

    for (let i = 0; i < arr.length; i++) {

        if (fn(arr[i]) > 300) {

            newArray.push(arr[i]);

        }

    }
    return newArray;

}

console.log(trier(arrayNumber, item => {
    if(item > 300) {
        return item;
    }
}));

