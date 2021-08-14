document.getElementById('unorder').addEventListener('click', function (event){
    console.log("undorder clickied");
})

document.getElementById('list-2').addEventListener('click', function (event){
    console.log("list -item -2 clickied");
})

document.getElementById('list-1').addEventListener('click', function (event){
    // e.stopPropagation();
    console.log("list -item -1 clickied");
})

document.getElementById('list-3').addEventListener('click', function (event){
    event.stopImmediatePropagation();
    console.log("list -item -3 clickied");
})
document.getElementById('list-3').addEventListener('click', function (event){
    console.log("list -item -3 clickied");
})
document.getElementById('list-3').addEventListener('click', function (event){
    console.log("list -item -3 clickied");
})

document.getElementById('list-4').addEventListener('click', function (evente){
                  
    console.log("list -item -4 clickied");
})