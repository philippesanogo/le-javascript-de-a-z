/**
 * Les objets
 */

// Que peut-on mettre dans un objet ?
// ex:
console.log(`Leçon:

ex:
- Affiche certains données dans la console`);

let pays = {
    nom: "JAPON",
    population: 100000000,
    classement: 3,
    pib: 377915,
    villes: ["Tokyo", "Kyoto", "Osaka", "Sapporo"],
    quartier: {
        nomDuQuartier: "Shibuya"
    },
    direBonjour: function() {
        console.log("Hello");
    }
}
// affiche "Kyoto" dans la console
console.log(pays.villes[1]);

// affiche "Shibuya"
console.log(`${pays.quartier.nomDuQuartier}`);


console.log("");
console.log("--------------------------");
console.log("");

// Créer l'objet voiture et affiche infos dans la console.

const voiture = {
    brand: "Ford Mustang",
    price: "49 900 €",
    fuelConsumption: "12-14 L/100km mixte",
    engine: "V8 de 5,0 L",
    dimensions: "4 789 mm L x 1 916 mm L x 1 382-1 396 mm H",
    emission: "Classe G (268 à 311 g/km)",
    body: "Coupé cabriolet"
}

console.log(voiture.brand);
console.log(`Prix TTC : ${voiture.price}`);
console.log(`Consommation de carburant : ${voiture.fuelConsumption}`);
console.log(`Moteur : ${voiture.engine}`);
console.log(`Dimensions : ${voiture.dimensions}`);
console.log(`Émission de CO2 : ${voiture.emission}`);
console.log(`Carrosserie : ${voiture.body}`);