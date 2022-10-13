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
if (document.getElementById("prefix").value != undefined || document.getElementById("suffix").value != undefined){
name = document.getElementById("prefix").value + ". " + document.getElementById("fname").value + " " + document.getElementById("lname").value + " " + document.getElementById("suffix").value;
}else if(document.getElementById("fname").value == undefined || document.getElementById("lname").value == undefined){
name = "error";
}
document.getElementById("name").innerHTML = name; 
}

//make function for 3E
//Used the website for reference for some code changed some to fit better: https://www.geeksforgeeks.org/simple-tic-tac-toe-game-using-javascript/
// Function called whenever user tab on any box
function myfunc() {
    let box1 = document.getElementById("box1").value;
    let box2 = document.getElementById("box2").value;
    let box3 = document.getElementById("box3").value;
    let box4 = document.getElementById("box4").value;
    let box5 = document.getElementById("box5").value;
    let box6 = document.getElementById("box6").value;
    let box7 = document.getElementById("box7").value;
    let box8 = document.getElementById("box8").value;
    let box9 = document.getElementById("box9").value;
 
    // Checking if Player X won or not and after
    // that disabled all the other fields
    if ((box1 == 'X') && (box2 == 'X') && (box3 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
        document.getElementById("box4").disabled = true;
        document.getElementById("box5").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box8").disabled = true;
        document.getElementById("box9").disabled = true;
        window.alert('Player X won');
    }
    else if ((box1 == 'X') && (box4 == 'X') && (box7 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
        document.getElementById("box2").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box5").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box8").disabled = true;
        document.getElementById("box9").disabled = true;
 
        window.alert('Player X won');
    }
    else if ((box7 == 'X') && (box8 == 'X') && (box9 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
        document.getElementById("box1").disabled = true;
        document.getElementById("box2").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box5").disabled = true;
        document.getElementById("box6").disabled = true;
        window.alert('Player X won');
    }
    else if ((box3 == 'X') && (box6 == 'X') && (box9 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
        document.getElementById("box1").disabled = true;
        document.getElementById("box2").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box5").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box8").disabled = true;
        window.alert('Player X won');
    }
    else if ((box1 == 'X') && (box5 == 'X') && (box9 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
        document.getElementById("box2").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box8").disabled = true;
        window.alert('Player X won');
    }
    else if ((box3 == 'X') && (box5 == 'X') && (box7 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
        document.getElementById("box1").disabled = true;
        document.getElementById("box2").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box8").disabled = true;
        document.getElementById("box9").disabled = true;
        window.alert('Player X won');
    }
    else if ((box2 == 'X') && (box5 == 'X') && (box8== 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
        document.getElementById("box1").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box9").disabled = true;
        window.alert('Player X won');
    }
    else if ((box4 == 'X') && (box5 == 'X') && (box6 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
        document.getElementById("box1").disabled = true;
        document.getElementById("box2").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box8").disabled = true;
        document.getElementById("box9").disabled = true;
        window.alert('Player X won');
    }
    // Checking for Player X finish
    // Checking for Player O starts, Is player 0 won or
    // not and after that disabled all the other fields
    else if ((box1 == 'O') && (box2 == 'O') && (box3 == 'O')) {
        document.getElementById('print').innerHTML = "Player O won";
        document.getElementById("box4").disabled = true;
        document.getElementById("box5").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box8").disabled = true;
        document.getElementById("box9").disabled = true;
        window.alert('Player O won');
    }
    else if ((box1 == 'O') && (box4 == 'O') && (box7 == 'O')) {
        document.getElementById('print').innerHTML = "Player O won";
        document.getElementById("box2").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box5").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box8").disabled = true;
        document.getElementById("box9").disabled = true;
 
        window.alert('Player O won');
    }
    else if ((box7 == 'O') && (box8 == 'O') && (box9 == 'O')) {
        document.getElementById('print').innerHTML = "Player O won";
        document.getElementById("box1").disabled = true;
        document.getElementById("box2").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box5").disabled = true;
        document.getElementById("box6").disabled = true;
        window.alert('Player O won');
    }
    else if ((box3 == 'O') && (box6 == 'O') && (box9 == 'O')) {
        document.getElementById('print').innerHTML = "Player O won";
        document.getElementById("box1").disabled = true;
        document.getElementById("box2").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box5").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box8").disabled = true;
        window.alert('Player O won');
    }
    else if ((box1 == 'O') && (box5 == 'O') && (box9 == 'O')) {
        document.getElementById('print').innerHTML = "Player O won";
        document.getElementById("box2").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box8").disabled = true;
        window.alert('Player O won');
    }
    else if ((box3 == 'O') && (box5 == 'O') && (box7 == 'O')) {
        document.getElementById('print').innerHTML = "Player X won";
        document.getElementById("box1").disabled = true;
        document.getElementById("box2").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box8").disabled = true;
        document.getElementById("box9").disabled = true;
        window.alert('Player O won');
    }
    else if ((box2 == 'O') && (box5 == 'O') && (box8 == 'O')) {
        document.getElementById('print').innerHTML = "Player O won";
        document.getElementById("box1").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box9").disabled = true;
        window.alert('Player O won');
    }
    else if ((box4 == 'O') && (box5 == 'O') && (box6 == 'O')) {
        document.getElementById('print').innerHTML = "Player O won";
        document.getElementById("box1").disabled = true;
        document.getElementById("box2").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box8").disabled = true;
        document.getElementById("box9").disabled = true;
        window.alert('Player O won');
    }
 
    // Checking of Player 0 finish
    // Here, Checking about Tie
    else if ((box1 == 'X' || box1 == 'O') && (box2 == 'X'
        || box2 == 'O') && (box3 == 'X' || box3 == 'O') &&
        (box4 == 'X' || box4 == 'O') && (box5 == 'X' ||
        box5 == 'O') && (box6 == 'X' || box6 == 'O') &&
        (box7 == 'X' || box7 == 'O') && (box8 == 'X' ||
        box8 == 'O') && (box9 == 'X' || box9 == 'O')) {
            document.getElementById('print').innerHTML = "Match Tie";
            window.alert('Match Tie');
    }
    else {
 
        // Here, Printing Result
        if (flag == 1) {
            document.getElementById('print').innerHTML = "Player X Turn";
        }
        else {
            document.getElementById('print').innerHTML = "Player O Turn";
        }
    }
}
// Function to reset game
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
let flag = 1;
function tic2() {
    if (flag == 1) {
        document.getElementById("box1").value = "X";
        document.getElementById("box1").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("box1").value = "O";
        document.getElementById("box1").disabled = true;
        flag = 1;
    }
}
 
function tic3() {
    if (flag == 1) {
        document.getElementById("box2").value = "X";
        document.getElementById("box2").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("box2").value = "O";
        document.getElementById("box2").disabled = true;
        flag = 1;
    }
}
 
function tic4() {
    if (flag == 1) {
        document.getElementById("box3").value = "X";
        document.getElementById("box3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("box3").value = "O";
        document.getElementById("box3").disabled = true;
        flag = 1;
    }
}
 
function tic5() {
    if (flag == 1) {
        document.getElementById("box4").value = "X";
        document.getElementById("box4").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("box4").value = "O";
        document.getElementById("box4").disabled = true;
        flag = 1;
    }
}
 
function tic6() {
    if (flag == 1) {
        document.getElementById("box5").value = "X";
        document.getElementById("box5").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("box5").value = "O";
        document.getElementById("box5").disabled = true;
        flag = 1;
    }
}
 
function tic7() {
    if (flag == 1) {
        document.getElementById("box6").value = "X";
        document.getElementById("box6").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("box6").value = "O";
        document.getElementById("box6").disabled = true;
        flag = 1;
    }
}
 
function tic8() {
    if (flag == 1) {
        document.getElementById("box7").value = "X";
        document.getElementById("box7").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("box7").value = "O";
        document.getElementById("box7").disabled = true;
        flag = 1;
    }
}
 
function tic9() {
    if (flag == 1) {
        document.getElementById("box8").value = "X";
        document.getElementById("box8").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("box8").value = "O";
        document.getElementById("box8").disabled = true;
        flag = 1;
    }
}
 
function tic10() {
    if (flag == 1) {
        document.getElementById("b9").value = "X";
        document.getElementById("b9").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("box9").value = "O";
        document.getElementById("box9").disabled = true;
        flag = 1;
    }
}
