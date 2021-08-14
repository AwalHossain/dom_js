const list = document.querySelectorAll('.item');


const unorder = document.getElementsByClassName('unorder')[0]
console.log(unorder);
const btn = document.querySelector('.btn');

unorder.addEventListener('click', (e)=>{
console.log(e.target);
e.target.parentNode.removeChild(e.target)
})

// for(const li of list){
//     li.addEventListener('click',(e)=>{
//         e.target.parentNode.removeChild(e.target)
 
//     })
// }

btn.addEventListener('click', (e)=>{
    console.log(e.target.parentNode);
   const li = document.createElement('LI')
   unorder.appendChild(li)
   li.innerText="item-6"
   console.log(li);
})