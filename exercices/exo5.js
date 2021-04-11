// EXERCICE 5 : Boucles, mots clés, déclarations

// Question 1: Affichez à l'aide d'une boucle "for..in" toutes les valeurs des propriétés de cet objet dans la console.


const capitales = {
    autriche: "Vienne",
    argentine: "Buenos Aires",
    estonie: "Tallinn",
    australie: "Cambera"
}

// Réponse:

for (const elem in capitales) {
    console.log(capitales[elem]);
}




console.log("----------");




// Question 2: Idem mais avec une boucle "for..of" et ce tableau.

const fruits = ['Fraise', 'Cerise', 'Orange', 'Citron', 'Ananas'];

// Réponse:

for (const elem of fruits) {
    console.log(elem);
}



console.log("----------");


// Question 3: Créez une fonction qui sert à repérer si un texte qu'on lui passe en argument contient la lettre "z".
// si c'est le cas, la fonction écrit dans la console "Alerte: le texte contient la lettre Z".

// Réponse:

function getZWord(word) {

    for (const elem of word) {

        if (elem === "z") {
            console.log("Alerte: le texte contient la lettre Z");
            break;
        }
    }

}

getZWord("zulu");



