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

//make function for 3e
//make variables for the turn and the boxes
let turn = 0;
let boxes = document.getElementsByClassName("ticBox");
// Function called whenever user tab on any box

//Listen for boxes
addGlobalEventListener("click", ".ticBox", e => {ticTac(e.target)})

//let User action be evaluated
function ticTac(userSelection) {
    if(winState())
        return;
    console.log("it is turn " + turn);
    //User Moves
    let character = 'X';
    let input = 0;
    if(turn % 2 == 0) {	//Checks if turn count is even or odd for user
        character = 'X';
       for(i = 0;i < 9;i++) {
            console.log(boxes[i]);
            console.log(userSelection)
            if(boxes[i] == userSelection)
                break;
            input++;
        }
       console.log("You've chosen box " + input)
        if(input >= 0 && input <= 8) {
           //find if the spot is already taken
            if (boxes[input].innerText == 'X' || boxes[input].innerText == 'O') 
                 turn--;
            else {
                boxes[input].innerText = character;
                boxes[input].style.backgroundColor = "antiquewhite";
            }
           //userSelection.innerText = "X"
            console.log(userSelection)
        }
        turn++;
        /* console.log("Turn = " + turn);
        console.log();
        console.log();
        console.log(); */
        if(winState() || turn == 9)
            return;
        }
        if(turn % 2 == 1) {
            console.log("Robot is Making its move");
            let temporary = -1;
            xo = 'O';		//O placed on odd turns
            input = -1;
        	input = ticTacBrain('O');        //Possible wins checked first
            console.log("Robot input is " + input);
       		temporary = ticTacBrain('X');    //Defensive moves checked if no wins present
            console.log("Robot temp is " + temporary);
       		
       		if(input == -1 && temporary > -1) input = temporary;
           
            if(input == -1) input = ticTacBackup(); //Advacned strategy accessed if no drasic moves exist
            
            
            while(input == -1) {
            	input = Math.floor(Math.random() * 9);         //Last resort random #
                if(boxes[input].innerText != '') input = -1;
			} 
    		
        boxes[input].innerText = xo;
        boxes[input].style.color = "#2C68FF";
        boxes[input].style.backgroundColor = "antiquewhite";
		turn++;
        }

        //Switch to check if a spot is open. Called whenever any player attempts a move
        
        winState();			//Check for possible win after each move

}
function ticTacBrain(spotlight) {
    //Robot painfully checks every possible win/loss condition on the board
    //Called twice - once for X, once for O - hence 'spotlight' parameter
	if(((boxes[1].innerText == boxes[2].innerText && boxes[2].innerText == spotlight) || (boxes[3].innerText == boxes[6].innerText && boxes[6].innerText == spotlight) || (boxes[4].innerText == boxes[8].innerText && boxes[8].innerText == spotlight)) && boxes[0].innerText == '') {
         return 0;
     }
      else if(((boxes[0].innerText == boxes[2].innerText && boxes[2].innerText == spotlight) || (boxes[4].innerText == boxes[7].innerText && boxes[7].innerText == spotlight)) && boxes[1].innerText == '') {
          return 1;
      }
      else if(((boxes[0].innerText == boxes[1].innerText && boxes[1].innerText == spotlight) || (boxes[5].innerText == boxes[8].innerText && boxes[8].innerText == spotlight) || (boxes[4].innerText == boxes[6].innerText && boxes[6].innerText == spotlight)) && boxes[2].innerText == '') {
          return 2;
      }
      else if(((boxes[0].innerText == boxes[6].innerText && boxes[6].innerText == spotlight) || (boxes[4].innerText == boxes[5].innerText && boxes[5].innerText == spotlight)) && boxes[3].innerText == '') {
          return 3;
      }
      else if(((boxes[0].innerText == boxes[8].innerText && boxes[8].innerText == spotlight) || (boxes[2].innerText == boxes[6].innerText && boxes[6].innerText == spotlight) || 
              (boxes[3].innerText == boxes[5].innerText && boxes[5].innerText == spotlight) || (boxes[1].innerText == boxes[7].innerText && boxes[7].innerText == spotlight)) && boxes[4].innerText == '') {
          return 4;
      }
     else if(((boxes[2].innerText == boxes[8].innerText && boxes[8].innerText == spotlight) || (boxes[3].innerText == boxes[4].innerText && boxes[4].innerText == spotlight)) && boxes[5].innerText == '') {
         return 5;
     }
     else if(((boxes[0].innerText == boxes[3].innerText && boxes[3].innerText == spotlight) || (boxes[7].innerText ==  boxes[8].innerText && boxes[8].innerText == spotlight) || (boxes[2].innerText == boxes[4].innerText && boxes[4].innerText == spotlight)) && boxes[6].innerText == '') {
         return 6;
     }
     else if(((boxes[1].innerText == boxes[4].innerText && boxes[4].innerText == spotlight) || (boxes[6].innerText == boxes[8].innerText && boxes[8].innerText == spotlight)) && boxes[7].innerText == '') {
         return 7;
     }
    else if(((boxes[2].innerText == boxes[5].innerText && boxes[5].innerText == spotlight) || (boxes[6].innerText == boxes[7].innerText && boxes[7].innerText == spotlight) || (boxes[0].innerText == boxes[4].innerText && boxes[4].innerText == spotlight)) && boxes[8].innerText == '') {
    	return 8;
	}
     	else return -1;
}

function ticTacBackup() {
    if(boxes[4].innerText == '') {
        return 4;
    }
    else if(turn == 1 && boxes[4].innerText == 'X') return 0;
    else if(turn <= 3 && boxes[4].innerText == 'X' && (boxes[0].innerText == 'X' || boxes[2].innerText == 'X' || boxes[6].innerText == 'X' || boxes[8].innerText == 'X')) {
        if(boxes[0].innerText == '') return 0;
        else if(boxes[2].innerText == '') return 2;
        else if(boxes[6].innerText == '') return 6;
        else if(boxes[8].innerText == '') return 8;
    }
        
    else if(boxes[0].innerText == 'X' && boxes[8].innerText == 'X') {
        return 1;
    }
    else if(boxes[2].innerText == 'X' && boxes[6].innerText == 'X') {
        return 1;
    }
    else if(boxes[0].innerText == 'O' && boxes[8].innerText == '' && (boxes[2].innerText == '' || boxes[6].innerText == '')) {
        return 8;
    }
    
    else return -1;
}

function winState() {	//Compares current inputs. All win conditions independently checked
    
    if((boxes[0].innerText == boxes[3].innerText) && (boxes[3].innerText == boxes[6].innerText))  		      //Win on Left Column
        if(declareWinner(boxes[0].innerText)) {
            showWin(boxes[0], boxes[3], boxes[6]);
            return true;
        }								  
    
    if((boxes[1].innerText == boxes[4].innerText) && (boxes[4].innerText == boxes[7].innerText)) 		  //Win on Middle Column
        if(declareWinner(boxes[1].innerText)) {
            showWin(boxes[1], boxes[4], boxes[7]);
            return true;
        }

    if((boxes[2].innerText == boxes[5].innerText) && (boxes[5].innerText == boxes[8].innerText)) 	      //Win on Right Column
        if(declareWinner(boxes[2].innerText)) {
            showWin(boxes[2], boxes[5], boxes[8]);
            return true;
        }
    
    if((boxes[0].innerText == boxes[1].innerText) && (boxes[1].innerText == boxes[2].innerText))		  //Win on Top Row
        if(declareWinner(boxes[0].innerText)) {
            showWin(boxes[0], boxes[1], boxes[2]);
            return true;
        }
    
    if((boxes[3].innerText == boxes[4].innerText) && (boxes[4].innerText == boxes[5].innerText))         //Win on Middle Row
        if(declareWinner(boxes[3].innerText)) {
            showWin(boxes[3], boxes[4], boxes[5]);
            return true;
        }

    if((boxes[6].innerText == boxes[7].innerText) && (boxes[7].innerText == boxes[8].innerText)) 	      //Win on Bottom row
        if(declareWinner(boxes[6].innerText)) {
            showWin(boxes[6], boxes[7], boxes[8]);
            return true;
        }
    
    if((boxes[0].innerText == boxes[4].innerText) && (boxes[4].innerText == boxes[8].innerText)) 	 	//Win On '\' Diagonal
        if(declareWinner(boxes[0].innerText)) {
        showWin(boxes[0], boxes[4], boxes[8]);
        return true;
    }
    
    if((boxes[2].innerText == boxes[4].innerText) && (boxes[4].innerText == boxes[6].innerText))		//Win on '/' Diagonal
        if(declareWinner(boxes[2].innerText)) {
            showWin(boxes[2], boxes[4], boxes[6]);
            return true;
        }
        
    if(turn == (9)) {											//Tie game declared when all spaces filled without full row/column/diagonal
    	console.log("tie game")
        document.getElementById("result").innerHTML = "Tie Game!";
    	input = 0;													//end game
    	return true;
	}
    return false;
}

function declareWinner(val) {		                              //Displays the Winner and the final board
    switch(val) 
    {
        case 'X': 
        	console.log("X wins!");
            document.getElementById("result").innerHTML = "X Wins!";
            break;
        case 'O': 
            console.log("O wins!");
            document.getElementById("result").innerHTML = "O Wins!";
            break;
        case '':
            return false;
    }
    input = 0;                              // end game
    return true;
}

function showWin(box1, box2, box3) {
    console.log(box1.innerText);
    color = (box1.innerText == 'X') ? "darkred" : "#000080";
    box1.style.backgroundColor = color;
    box2.style.backgroundColor = color;
    box3.style.backgroundColor = color;
}

function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
      if (e.target.matches(selector)) callback(e)
    })
  }




}
