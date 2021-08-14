
// function myF(){
//     document.body.innerHTML = 'red'
//     console.log("hi");
// }

// // click.addEventListerner('click', ()=>{
// //     document.body.style.color = 'red'
// // })

// const button = document.getElementById('myFunc');

// button.onclick = makeBlue;

// function makeBlue(){
//     document.body.innerText="leto meto"
// }

// button.addEventListener('click', ()=>{
//     document.body.style.backgroundColor = 'red';
// })

const btnInput = document.getElementById('btn-input');
const inputText = document.querySelector('input');

btnInput.addEventListener('click', ()=>{
    console.log("hi");
  
    btnInput.innerText = inputText.value;
    inputText.value=" "
})