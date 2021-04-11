// EXERCICE 7 : JavaScript moderne
console.log(`EXERCICE 7 : JavaScript moderne

`);


console.log(`Réponse 1:`);
// 1. Créez une fonction flêchée qui retourne "Hello World", elle doit être écrite dans sa syntaxe la plus courte possible.(élégante)


// Réponse 1:

const hello = () => "Hello World";
console.log(hello());

console.log(`
----------

`);

console.log(`Réponse 2:`);
// 2. Créez une classe Humain qui sert à créer des objets avec deux propriétés : poids et taille.

// Réponse 2:

class Humain {
    constructor(poids, taille) {
        this.poids = poids;
        this.taille = taille;
    }
}

const capucine = new Humain(58, 1.62);
console.log(`Capucine:
- poids: ${capucine.poids}kg
- taille: ${capucine.taille}m`);

console.log(capucine);