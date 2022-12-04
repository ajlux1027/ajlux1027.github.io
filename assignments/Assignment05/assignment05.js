//use the provided template JS code

// --- global variables ---

var loans = [
  { loan_year: 2020, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2021, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2022, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2023, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2024, loan_amount: 10000.00, loan_int_rate: 0.0453 }
]; 


//Add a localStorage function to save the form details
let saveForm = () => {
  localStorage.setItem(`as06`, JSON.stringify(loans));
}

//Add a local Storage function to load in the pas
let loadForm = () => {
  //if there is currently a saved value then load the value
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
  }

  
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
