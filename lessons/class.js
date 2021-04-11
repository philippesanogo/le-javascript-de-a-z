/**
 * Les class
 */

// ex:
class Pays {
    constructor(nom, population, president) {
        this.nom = nom;
        this.population = population;
        this.president = president;
    }
}


const france = new Pays("France", " 67,06 millions", "Emmanuel Macron");

console.log(`Nom: ${france.nom},
population: ${france.population},
président: ${france.president}`);

const australie = new Pays("Canberra", "25,36 millions", "David Hurley");

console.log(`Nom: ${australie.nom},
population: ${australie.population},
président: ${australie.president}`);
