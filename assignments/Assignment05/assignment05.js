// --- global variables ---

var loans = [
  { loan_year: 2020, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2021, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2022, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2023, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2024, loan_amount: 10000.00, loan_int_rate: 0.0453 }
]; 


// --- function: loadDoc() ---

function loadDoc() {
  
  // pre-fill defaults for first loan year
  var defaultYear = loans[0].loan_year;
  // console.log(defaultYear) // debug: defaultYear starts at 2020
  // document.getElementById("loan_year0" + 1).value = defaultYear++; // js
  $("#loan_year01").val(defaultYear++); // jquery
  // console.log(defaultYear) // debug: defaultYear increments
  var defaultLoanAmount = loans[0].loan_amount;
  document.getElementById("loan_amt0" + 1).value 
    = defaultLoanAmount.toFixed(2);
  var defaultInterestRate = loans[0].loan_int_rate;
  document.getElementById("loan_int0" + 1).value 
    = defaultInterestRate;
  var loanWithInterest 
  = loans[0].loan_amount * (1 + loans[0].loan_int_rate);
  document.getElementById("loan_bal0" + 1).innerHTML 
    = toComma(loanWithInterest.toFixed(2));
  
  // pre-fill defaults for other loan years
  for(var i=2; i<6; i++) {
    document.getElementById("loan_year0" + i).value 
      = defaultYear++;
    document.getElementById("loan_year0" + i).disabled 
      = true;
    document.getElementById("loan_year0" + i).style.backgroundColor 
      = "gray";
    document.getElementById("loan_year0" + i).style.color 
      = "white";
    document.getElementById("loan_amt0" + i).value 
      = defaultLoanAmount.toFixed(2);
    document.getElementById("loan_int0" + i).value 
      = defaultInterestRate;
    document.getElementById("loan_int0" + i).disabled 
      = true;
    document.getElementById("loan_int0" + i).style.backgroundColor 
      = "gray";
    document.getElementById("loan_int0" + i).style.color 
      = "white";
   loanWithInterest 
     = (loanWithInterest + defaultLoanAmount) 
     * (1 + defaultInterestRate);
   document.getElementById("loan_bal0" + i).innerHTML 
     = toComma(loanWithInterest.toFixed(2));
    } // end: "for" loop
  
  // all input fields: ut {text-align: right;}
      #loan_table {background-color: pink;}
		</style>

	</head>

	<body onload="loadDoc();">

		<div class="container">

			<form>

				<h1>College Debt Estimator</h1>
				
				<br />

				<div class="row">      
					<div class="col-lg-6">
						<div class="form-group">
						
							<h2>Loans</h2>

							<table class="table" id="loan_table">
								<tr>
									<th>Year</th>
									<th>Amount</th>
									<th>Int Rate<a target="_blank" href="https://studentaid.ed.gov/sa/types/loans/interest-rates"><sup>1</sup></a></th>
									<th>YE Bal</th>
								</tr>
								<tr>
									<td><input type="text" class="form-control" placeholder="2020" id="loan_year01" /></td>
									<td><input type="text" class="form-control" placeholder="$10,000.00" id="loan_amt01" /></td>
									<td><input type="text" class="form-control" placeholder="0.0453" id="loan_int01" /></td>
									<td><span id="loan_bal01">$10,453.00</span></td>
								</tr>
								<tr>
									<td><input type="text" class="form-control" placeholder="2021" id="loan_year02" /></td>
									<td><input type="text" class="form-control" placeholder="$10,000.00" id="loan_amt02" /></td>
									<td><input type="text" class="form-control" placeholder="0.0453" id="loan_int02" /></td>
									<td><span id="loan_bal02">$21,379.52</span></td>
								</tr>
								<tr>
									<td><input type="text" class="form-control" placeholder="2022" id="loan_year03" /></td>
									<td><input type="text" class="form-control" placeholder="$10,000.00" id="loan_amt03" /></td>
									<td><input type="text" class="form-control" placeholder="0.0453" id="loan_int03" /></td>
									<td><span id="loan_bal03">$32,801.01</span></td>
								</tr>
								<tr>
									<td><input type="text" class="form-control" placeholder="2023" id="loan_year04" /></td>
									<td><input type="text" class="form-control" placeholder="$10,000.00" id="loan_amt04" /></td>
									<td><input type="text" class="form-control" placeholder="0.0453" id="loan_int04" /></td>select contents on focus (jquery) 
  $("input[type=text]").focus(function() {
    $(this).select();
    $(this).css("background-color", "yellow");
  }); 
  $("input[type=text]").blur(function() {
    $(this).css("background-color", "white");
  });
  
  // set focus to first year: messes up codepen
  // $("#loan_year01").focus();
  // update loans array when exiting "year" input field (jquery)
  $("#loan_year01").blur( function() {
    updateLoansArray();
  });
  
} // end: function loadDoc()


function toComma(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function updateLoansArray() {
  // update the loans array
  loans[0].loan_year = parseInt($("#loan_year01").val()); // jquery
  // update all the years in the "year" column
  for(var i=1; i<5; i++) {
    loans[i].loan_year = loans[0].loan_year + i;
    $("#loan_year0"+ (i+1) ).val(loans[i].loan_year); // jquery
  }
}
