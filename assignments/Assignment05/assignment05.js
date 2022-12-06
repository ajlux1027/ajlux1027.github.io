//Use the template code provided to make the Javascript for the Loan calculator
// ===== GLOBAL VARIABLES =====

// default values
let loans = [
    { loan_year: 2020, loan_amount: 10000.00, loan_int_rate: 0.0453 },
    { loan_year: 2021, loan_amount: 10000.00, loan_int_rate: 0.0453 },
    { loan_year: 2022, loan_amount: 10000.00, loan_int_rate: 0.0453 },
    { loan_year: 2023, loan_amount: 10000.00, loan_int_rate: 0.0453 },
    { loan_year: 2024, loan_amount: 10000.00, loan_int_rate: 0.0453 }
]; 
let loanWithInterest = 0;
let int = 0;
let payments;

// ----- Plain JavaScript Functions -----

//Regular Expression Function to add a comma to inputted value
function toComma(value) {
    //make it so if the amount of money doesnt have a comma in it, then it adds a comma
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//regular expression function to make the inputted value be read as money. Making it so it is formatted 
let toMoney = (value) => {
  return `\$${toComma(value.toFixed(2))}`; 
}

//local storage function to save the input
let saveForm = () => {
  localStorage.setItem(`as06`, JSON.stringify(loans));
}

//local storage function to load previous input
let loadForm = () => {
    //make sure that there is a previously saved array to return
  if(localStorage.getItem(`as06`) != null){
     loans = JSON.parse(localStorage.getItem(`as06`));
     updateForm();
  } else {
      //otherwise give an error
     alert(`Error: no saved values`);
  }
}

// ----- JQUERY Functions -----


// display the entry form
function loadDoc() {
    
  // pre-fill defaults for first loan year
  var defaultYear = loans[0].loan_year;
  $("#loan_year0" + 1).val(defaultYear++);
  var defaultLoanAmount = loans[0].loan_amount;
  $("#loan_amt0" + 1).val(defaultLoanAmount.toFixed(2));
  var defaultInterestRate = loans[0].loan_int_rate;
  $("#loan_int0" + 1).val(defaultInterestRate);
  var loanWithInterest 
    = loans[0].loan_amount * (1 + loans[0].loan_int_rate);
  $("#loan_bal0" + 1).text(toMoney(loanWithInterest));
    
  // pre-fill defaults for other loan years
  for(var i=2; i<6; i++) {
    $(`#loan_year0${i}`).val(defaultYear++);
    $(`#loan_year0${i}`).attr("disabled","true");
    $(`#loan_year0${i}`).css({
      "backgroundColor":"grey","color":"white"
    });
    $(`#loan_amt0${i}`).val(defaultLoanAmount.toFixed(2));
    $(`#loan_int0${i}`).val(defaultInterestRate);
    $(`#loan_int0${i}`).attr("disabled","true");
    $(`#loan_int0${i}`).css({
      "backgroundColor":"grey","color":"white"
    });
    loanWithInterest 
      = (loanWithInterest + defaultLoanAmount) 
      * (1 + defaultInterestRate);
    $("#loan_bal0" + i).text(toMoney(loanWithInterest));
  } // end: "for" loop
    
    //make it so if the input box is being focused on then the background color is white
  $("input[type=text]").focus(function() {
    $(this).select();
    $(this).css("background-color", "white");
  }); 
  $("input[type=text]").blur(function() {
    $(this).css("background-color", "white");
    updateLoansArray();
  });
    
  // set focus to first year
  $("#loan_year01").focus();

} // end: function loadDoc()

//make function to update the array
function updateLoansArray() {
  
  // regex tester web site: https://www.regexpal.com/
  let yearP = /^(19|20)\d{2}$/;
  let amtP = /^([1-9][0-9]*)+(.[0-9]{1,2})?$/;
  let intP = /^(0|)+(.[0-9]{1,5})?$/;

  let valid = true;
  if(!yearP.test($(`#loan_year01`).val())){
    valid = false;
    $(`#loan_year01`).css("background-color", "red");
  }
  for (i = 1; i < 6; i++) {
    if(!amtP.test($(`#loan_amt0${i}`).val())) {
      valid = false;
      $(`#loan_amt0${i}`).css("background-color", "red");
    } 
  }
  if(!intP.test($(`#loan_int01`).val())) {
    valid = false;
    $(`#loan_int01`).css("background-color", "red");
  }

  if(valid) {
    loans[0].loan_year = parseInt($("#loan_year01").val());
    for(var i=1; i<5; i++) {
      loans[i].loan_year = loans[0].loan_year + i;
    }
    for(i = 1; i<6; i++){
      let amt = parseFloat($(`#loan_amt0${i}`).val()).toFixed(2);
      loans[i-1].loan_amount = amt;
    }
    let rate = parseFloat($("#loan_int01").val());
    for(i=0; i<5; i++){
      loans[i].loan_int_rate = rate;
    }
    
    updateForm();
    
  } // end: if
  
} // end: function updateLoansArray()
  
}

//make function to update form
let updateForm = () => {
  loanWithInterest = 0;
  let totalAmt = 0;
    
    //loop through the table
  for(i = 1; i < 6; i++) {
      //make the loan year match up to the table
    $(`#loan_year0${i}`).val(loans[i - 1].loan_year);
      //let the amount be the current amount in the array
    let amt = loans[i - 1].loan_amount;
      //let the table value equal the current amount of the loan
    $(`#loan_amt0${i}`).val(amt);
      //add the current amount to the total amount
    totalAmt += parseFloat(amt);
      //show the amount of interest on the table
    $(`#loan_int0${i}`).val(loans[i - 1].loan_int_rate);
      //calculate the amount of loan with interest
    loanWithInterest 
    //add the current amount to the current value of the loan with interest
      = (loanWithInterest + parseFloat(amt)) 
      //then multiply that value by the interest rate + 1 
      * (1 + loans[0].loan_int_rate);
      //make the current loan balance text value be the money format of the loanwithinterest
    $("#loan_bal0" + i).text(toMoney(loanWithInterest));
  }
    //calculate the value of interest accrued by subtracting total amount from the loan with interest amount
  int = loanWithInterest - totalAmt;
    //display the accrued interest by setting the accrued interest text value to the money format of the interest accrued.
  $(`#loan_int_accrued`).text(toMoney(int));
  
}
  

// ----- ANGULAR -----
var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
  $scope.payments = [];
  $scope.populate = function () {
    
    updateForm();
    
    let total = loanWithInterest;
    let iRate = loans[0].loan_int_rate;
    let r = iRate / 12;
    let n = 11;
    //loan payment formula
    //https://www.thebalance.com/loan-payment-calculations-315564
    let pay = 12 * (total / ((((1+r)**(n*12))-1)/(r *(1+r)**(n*12))));
    for (let i = 0; i < 10; i++) {
      total -= pay 
      let int = total * (iRate); 
      $scope.payments[i] = {
        "year":loans[4].loan_year + i + 1,
        "payment": toMoney(pay), 
        "amt": toMoney(int),
        "ye": toMoney(total += int)
      }
    }
    $scope.payments[10] = {
      "year":loans[4].loan_year + 11,
      "payment": toMoney(total),
      "amt": toMoney(0),
      "ye":toMoney(0)
    }
  }
});
