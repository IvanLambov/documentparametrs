'use strict';

const box =document.querySelector('.box'),
   btn = document.querySelector('button');
const width = box.offsetWidth;
const height = box.offsetHeight;
//pri najatii raskrivaet polnostiu text 
 btn.addEventListener('click', ()=>{
  //box.style.height = box.scrollHeight + 'px';
 //kol-vo otmotannih px 
  console.log (box.scrollTop);



});



console.log (box.getBoundingClientRect().top);
const style =  window.getComputedStyle(box );
console.log (style.display );

//global obiects 
console.log(document.documentElement.scrollTop);