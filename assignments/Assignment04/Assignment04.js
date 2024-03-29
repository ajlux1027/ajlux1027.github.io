//make an array of random numbers between 100 and 1000
const Arr1 = [];
for(var i = 0; i < 11; i++){
  Arr1[i] =100 + Math.floor(Math.random()*1001);
}

//make an array of random numbers between -200 and 200
const Arr2 = [];
  for(var i = 0; i < 11; i++){
    Arr2[i] = -200 + Math.floor(Math.random()*200)
        }
//make an array of objects filled with objects(fname, lname, title, suffix, age.) 
const Arr3 = [
   {firstName:"John", 
    lastName:"Doe", 
    title: "Mr. ",
    suffix: "jr. ",
    age:46},
  {firstName:"Jane", 
    lastName:"Doe", 
    title: "Ms. ",
    suffix: "III",
    age:16},
  {firstName:"Ryan", 
    lastName:"Willett", 
    title: "Mr. ",
    suffix: "",
    age:22},
  {firstName:"Alex", 
    lastName:"Lux", 
    title: "Ms. ",
    suffix: "",
    age:19},
  {firstName:"Betsy", 
    lastName:"Jones", 
    title: "Mrs. ",
    suffix: "Sr. ",
    age:65}
];
//make an array of years
const years = [-100, 0, 100, 1900, 1904, 2000];
//make two seperate arrays of numbers
const r = [1, 4, 5, 7];
const distances = [2, 4, 6, 8, 10];


//arrow functions

//Pythagorean Theorm arrow function
let Pythagorean = (Sidea, Sideb) => 
Math.sqrt(((Math.pow(Sidea,2)) + (Math.pow(Sideb,2))));

//Roots of quadratic equation arrow function (inner code copied from https://www.programiz.com/javascript/examples/quadratic-roots
let quads = (a, b, c) => {
  let discriminant = b * b - 4 * a * c;
  if (discriminant >= 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    // result
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
} else if(discriminant < 0){
  let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    // result
    console.log(`The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
  );
}
  }
//Volume of a sphere given radius arrow function
let SphereVolume = (radius) => 
((4/3) * Math.PI * (Math.pow(radius, 3)))

//Degrees Kelvin, given degrees Fahrenheit
let KelvinConvert = (Fahrenheit) => ((Fahrenheit - 32 ) * 5 / 9 ) + 273.15

//Arctan of “pi” plus another value (in radians) arrow function
let PiArctan = (value) => (Math.atan(Math.PI, value))

//The sum of a number and its square, i.e. n + n * n arrow function
let sumSquare = (number) => (number + (number*number))

// isleapyear(year) returns true if year is a leapyear arrow function
let isleapyear = (year) =>{
  if(year < 0){
    return false
  }else if(year%4 == 0){
    return true
  } 
}

//timeFallen(distance) returns time in seconds that an object takes to fall a given distance (at sea level on planet Earth) arrow function
let fallTime = (distance) => {
  return Math.sqrt(2 * distance/9.8)
}

//make event listener to listen for leap button to be clicked and then call the sum of leap function
document.getElementById("LeapButton")
        .addEventListener("click", LeapSum);

//make a sum of leap year function to calculate the total of the leap years
function LeapSum(){
let sum = 0
years.map(year => {
	if (isleapyear(year) === true){
      sum += year
      }
})
   document.getElementById("Leap").value 
            = sum
}

//make an event listener to listen for full name finder button to be clicked
document.getElementById("NameFind")
        .addEventListener("click", FullName);

function FullName(){
  let name = ""
  Arr3.map(person =>{
    name+= person.firstName + " " + person.lastName + '\n';
   document.getElementById("Names").value = name; 
  })
}
//make an event listener to listen for dot product button to be clicked
document.getElementById("ProductFind")
        .addEventListener("click", DotProduct); 
  
function DotProduct(){
let product = Arr1.map((x, i) => Arr1[i] * Arr2[i]).reduce((m, n) => m + n);
	
	document.getElementById("Product").value = product;
}
	
//make an event listener to listen for Sum product button to be clicked
document.getElementById("SumFind")
        .addEventListener("click", EvenSum); 
  
function EvenSum(){
let sum = 0;
Arr2.map(number =>{
if(number%2 === 0){
sum += number
}
})
document.getElementById("SumOfEvens").value = sum;
}

//make an event listener to listen for volume button to be clicked
document.getElementById("Volume")
        .addEventListener("click", DisplayVolumes);

function DisplayVolumes(){
let volumeString ="";
let volume = 0;
r.map(radii => {
volume = SphereVolume(radii)
volumeString += volume + '\n'
})
document.getElementById("Volumes").value = volumeString
}

//make an event listener to listen for distance button to be clicked
document.getElementById("FallFind")
        .addEventListener("click", DisplayFall);

function DisplayFall(){
let fallString ="";
let fall = 0;
distances.map(distance => {
fall = fallTime(distance)
fallString += fall + '\n'
})
document.getElementById("FallTimes").value = fallString
}

//make an event listener to listen for arctans button to be clicked
document.getElementById("SumArcs")
        .addEventListener("click", DisplayArcs);

function DisplayArcs(){
let arcTotal =0;
let arc = 0;
r.map(number => {
arc = PiArctan(number)
arcTotal += arc
})
document.getElementById("Arctans").value = arcTotal
}

//API Caller
//Make event listeners for the buttons
document
  .getElementById("loadjson")
  .addEventListener("click", loadJson);
document
  .getElementById("loadpriorcountry")
  .addEventListener("click", loadpriorcountry);
document
  .getElementById("loadnextcountry")
  .addEventListener("click", loadnextcountry);


let country = 0
let json

//make a funtion to load the JSON
function loadJson() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange 
    = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("coviddata").innerHTML 
            = "JSON data loaded.";
          json = JSON.parse(this.responseText);
        }
      };
  xhttp.open("GET", "https://api.covid19api.com/summary", true);
  xhttp.send();
}

//make a function to load the previous country and its statistics
function loadpriorcountry () {
  country--
  if (country < 0) 
    country = 0
  document.getElementById("ID").value 
            = json.Countries[country].ID
   document.getElementById("Country").value 
            = json.Countries[country].Country
  
   document.getElementById("CountryID").value 
            = json.Countries[country].CountryCode
   
  document.getElementById("Slug").value 
            = json.Countries[country].Slug
  
  document.getElementById("NewConfirmed").value 
            = json.Countries[country].NewConfirmed
  
   document.getElementById("TotalConfirmed").value 
            = json.Countries[country].TotalConfirmed
  
   document.getElementById("NewDeath").value 
            = json.Countries[country].NewDeath
  
   document.getElementById("TotalDeath").value 
            = json.Countries[country].TotalDeath
  
   document.getElementById("NewReco").value 
            = json.Countries[country].NewRecovered
  
   document.getElementById("TotalReco").value 
            = json.Countries[country].TotalRecovered
  
   document.getElementById("Date").value 
            = json.Countries[country].Date
}

//make function to load next country and its statistics
function loadnextcountry () {
  country++
  if (country > json.Countries.length - 1) 
    country = json.Countries.length - 1
  document.getElementById("ID").value 
            = json.Countries[country].ID
   document.getElementById("Country").value 
            = json.Countries[country].Country
  
   document.getElementById("CountryID").value 
            = json.Countries[country].CountryCode
   
  document.getElementById("Slug").value 
            = json.Countries[country].Slug
  
  document.getElementById("NewConfirmed").value 
            = json.Countries[country].NewConfirmed
  
   document.getElementById("TotalConfirmed").value 
            = json.Countries[country].TotalConfirmed
  
   document.getElementById("NewDeath").value 
            = json.Countries[country].NewDeaths
  
   document.getElementById("TotalDeath").value 
            = json.Countries[country].TotalDeaths
  
   document.getElementById("NewReco").value 
            = json.Countries[country].NewRecovered
  
   document.getElementById("TotalReco").value 
            = json.Countries[country].TotalRecovered
  
   document.getElementById("Date").value 
            = json.Countries[country].Date
}

