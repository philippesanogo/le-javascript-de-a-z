// La propagation des évènements
const btn = document.querySelector("button");

document.body.addEventListener('click', ()=>{
    console.log("event BODY");
});

// avec param "e" + stopPropagation(), on empêche le "bubbling" (eviter de declencher le parent, dans le cas présent "body")
btn.addEventListener('click', (e) => {
    e.stopPropagation(); // on stoppe la propagation
    console.log("event BTN");
});