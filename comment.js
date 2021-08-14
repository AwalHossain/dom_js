const button = document.getElementById('btn');
const commentBox = document.getElementById('comment');

const section = document.getElementById('section');

const deletBtn = document.getElementById('d-btn')


button.addEventListener('click', ()=>{
   let getcomment = commentBox.value;

    const para =document.createElement('p');
    section.appendChild(para);
    para.innerText=getcomment;
   commentBox.value = ' ';
})

commentBox.addEventListener('keyup', (event)=>{
   
  
    if(event.target.value === 'delete'){
        deletBtn.disabled =false;
        console.log("hi");
    
    } 
    else if(!event.target.value){


    }
    else{
        deletBtn.setAttribute('disabled', true)
    }

 })
 commentBox.addEventListener('blur', ()=>{
    deletBtn.setAttribute('disabled', true)
 })

 deletBtn.addEventListener('click', ()=>{
     section.removeChild(section.lastElementChild)
 })



