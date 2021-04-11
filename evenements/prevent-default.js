const sendBtn = document.querySelector("button");
const inp = document.querySelector('input');


sendBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(inp.value);
});