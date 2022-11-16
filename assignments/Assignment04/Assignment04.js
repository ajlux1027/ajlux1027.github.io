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



//API Caller
//Make event listeners for the buttons
document
  .getElementById("loadjson")
  .addEventListener("click", loadJson);
document
  .getElementById("loadpriorcountry")
  .addEventListener("click", loadPriorCountry);
document
  .getElementById("loadnextcountry")
  .addEventListener("click", loadNextCountry);
