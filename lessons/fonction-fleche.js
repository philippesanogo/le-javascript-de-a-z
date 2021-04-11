/**
 * Fonction flèchée
 */

// ex:
const foo = () => {
    console.log("fonction flèchée");
}

foo();

// ex:

const num = () => {
    return 3;
}
console.log(num());

// on peut l'écrire de cette manière également:
const number = (num) => 4 * num;
console.log(number(5));