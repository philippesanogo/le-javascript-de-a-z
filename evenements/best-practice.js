/**
 * Les évènements : La bonne pratique
 */


// Pas de javascript dans le fichier HTML!
/* Pas de onclick dans le fichier JS de cette manière:
- const btn = document.querySelector("button");
    btn.onclick = function () {
        console.log("hello");
    } */

// La bonne pratique à utiliser est: "addEventListener"

// ex 1:
// const btn = document.querySelector("button");
// const foo = () => {console.log("foo");}
// btn.addEventListener("click", foo);



// ex 2 avec le parametre "e":
// document.addEventListener("click", (e) => {console.log(e.clientX);})


// ex 3 avec le mot clé "load":
// window.addEventListener('load', () => {console.log("tout a bien chargé");})


// ex 4 : avec le mot clé "input"
// const inpt = document.querySelector("input");
// inpt.addEventListener('input', (e) => {console.log(inpt.value);})

