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
