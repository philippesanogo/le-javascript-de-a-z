/**
 * Le DOM et les Évènements
 */

// ex 1 de manipulation du domavec l'élément (p): 
const phrase = document.querySelector("p");
phrase.style.fontSize = "2rem";
phrase.style.color = "red";

// ex 2 d'ajout d'un évènement sur le meme élément (p)
phrase.addEventListener("click", function() {

    console.log("hi");
  });
