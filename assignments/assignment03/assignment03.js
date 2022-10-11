//The function for 3B
function GCDFinder() {
   let numOne = parseInt(document.getElementById("inputNumOne").value);
   let numTwo = parseInt(document.getElementById("inputNumTwo").value);
   let Gcd = 1;
  while(numTwo) {
    Gcd = numTwo;
    numTwo = numOne % numTwo;
    numOne = Gcd;
  }
document.getElementById("output").innerHTML= Gcd;
  }

//the function for 3C
function AddDigits(){
let value = parseInt(document.getElementById("inputNum").value);
    sum = 0;

while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
 }
document.getElementById("total").innerHTML= sum;
}

function MakeString(){
if (document.getElementById("prefix").value != undefined || document.getElementById("suffix").value != undefined){
name = document.getElementById("prefix").value + ". " + document.getElementById("fname").value + " " + document.getElementById("lname").value + " " + document.getElementById("suffix").value;
}else if(document.getElementById("fname").value == undefined || document.getElementById("lname").value == undefined){
name = "error";
}
document.getElementById("name").innerHTML = name; 
}
