/*add input fields
add event listeners
add the result to the DOM
*/

var billAmount=0;
var tip=0;
var tipRate=0;
var totalAmount=0;
var resultTip;
let button= document.querySelector("button");


button.addEventListener("click", tipCalculator);

function tipCalculator(){

  billAmount = document.getElementById('billAmount').value;
  tipRate = document.getElementById('tipRate').value;
  
 //window.alert(typeof((tipRate)));
  if(tipRate<100&&tipRate>0){
    tip= Math.round(billAmount*tipRate/100); 
    totalAmount=Number(billAmount)+Number(tip);
    resultTip = document.getElementById('tip');

  resultTip.innerHTML = `The value of tip is ${tip} CHF and the total amount of bill is ${totalAmount} CHF `;
  }else {
    alert("Please Control the Values");
    tip=0;
    totalAmount=0;
    resultTip.innerHTML = "";
  }

}










      
     