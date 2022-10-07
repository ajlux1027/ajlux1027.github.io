//The function for 3B
function GCDFinder() {
   var numOne = parseInt(document.getElementById("inputNumOne").value);
   var numTwo = parseInt(document.getElementById("inputNumTwo").value);
   var Gcd = 1;
  while(numTwo) {
    Gcd = numTwo;
    numTwo = numOne % numTwo;
    numOne = Gcd;
  }
document.getElementById("output").innerHTML= Gcd;
  }

//the function for 3C
function AddDigits(){
var value = parseInt(document.getElementById("inputNum").value);
    sum = 0;

while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
 }
document.getElementById("total").innerHTML= sum;
}
