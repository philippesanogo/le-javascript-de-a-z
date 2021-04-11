/**
 * Fonction callback
 */

const tab = ["Dragon Ball", "Final Fantasy", "One Punch Man", "Jujutsu Kaisen"];

// je me créer une custom foreach()
// ex 1:
function CustomForEach(arr, callback) {

    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

CustomForEach(tab, (item) => {
    console.log(item);
});

console.log(`--------------`);

// mais on peut utiliser la native ci-dessous
// ex 2:
tab.forEach((item) => {
    console.log(item);
});

console.log(`--------------`);


// ex 3:
const pays = ["France", "Usa", "Vietnam", "Thaïlande", "Laos", "Brésil", "Maroc", "Dubaï"];

// utilisation de foreach()

pays.forEach((item) => {
    console.log(item);

})

console.log(`--------------`);


// ex 4:
// je créé une fonction de rappel custom
function ForEachCustom(arr, callbackFunc) {

    for (let i = 0; i < arr.length; i++) {
        callbackFunc(arr[i]);
    }
}

ForEachCustom(pays, (item) => {
    console.log(item);

});


