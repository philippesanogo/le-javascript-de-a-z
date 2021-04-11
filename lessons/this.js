/**
 * THIS est utilisé ici pour illustrer de quelle manière on peut l'appeler selon le contexte "appelant"
 */


// ex:
/*
const myObj  = {
    prenom: "philou",
    presentation() {
        console.log(`hello ${this.prenom}`);
    }
}

myObj.presentation();
console.log(`Bonjour, je m'appelle ${myObj.prenom}`);
*/


// ex:
/*
function foo() {
    console.log(this);
}

foo();
*/


// ex:
// on utilise dans cet exemple le bouton "se connecter"

const btn = document.querySelector("button");
// console.log(btn);

// on ajoute un évènement et on log "this" et regarder ce qui se passe...
btn.addEventListener('click', function() {
    console.log(this);
    btn.style.backgroundColor = "violet";
    btn.style.outline = "none";
    btn.style.border = "none";
    btn.style.fontSize = "2rem";
});
// le contexte appelant est "btn", dont "this" prend référence