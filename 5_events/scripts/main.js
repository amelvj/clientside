var numOne=document.getElementById('no1');
var numTow=document.getElementById('no2');
var sum=document.getElementById('sum');

numOne.addEventListener("input",add);
numTow.addEventListener("input",add);


function add(){
var one=parseFloat(numOne.value)||0;
var two=parseFloat(numTow.value)||0;
sum.innerHTML=one+two;
}