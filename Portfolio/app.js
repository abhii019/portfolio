const display=document.getElementsByClassName('display');

console.log(display);



const increment=document.getElementById('increment');

console.log(increment);

const decrement=document.getElementById('decrement');

console.log(decrement);



let count=0;

// display[0].innerHTML="yashrbankar";



increment.addEventListener('click', ()=>{

count++;

display[0].innerHTML=`${count}`

});





decrement.addEventListener('click', ()=>{

if(count>0)

{

count--;

display[0].innerHTML=`${count}`

}

else{

console.log("your count is 0");

}

});

