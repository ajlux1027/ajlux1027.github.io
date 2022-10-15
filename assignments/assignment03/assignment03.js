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


//make function for 3D
function MakeString(){
   let prefix = document.getElementById("prefix").value
   let fName = document.getElementById("fname").value
   let lName = document.getElementById("lname").value
   let suffix =  document.getElementById("suffix").value
    if(suffix == "none")
        suffix = "";

    if(first.length > 0)
        first += " ";
    if(last.length > 0)
        last += " ";
    if(title == "none")
        title = "";
    else title += " ";

    if(first.length == 0 || last.length == 0) {
        document.getElementById("Completename").innerHTML = "Please fill out required items";
        document.getElementById("fname").style.borderColor = "red";
        document.getElementById("lname").style.borderColor = "red";
    }
    else {
        document.getElementById("fullName").innerHTML = prefix + fName + lName + suffix;
    }
    
}


//make function for 3E
// Function called whenever user tab on any box
function myfunc() {
    
function reset() {
    location.reload();
    document.getElementById('box1').value = '';
    document.getElementById("box2").value = '';
    document.getElementById("box3").value = '';
    document.getElementById("box4").value = '';
    document.getElementById("box5").value = '';
    document.getElementById("box6").value = '';
    document.getElementById("box7").value = '';
    document.getElementById("box8").value = '';
    document.getElementById("box9").value = '';
}
