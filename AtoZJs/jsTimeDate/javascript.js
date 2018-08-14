console.log('works');

// JAVASCRIPT EXERCISES
// 1.                                                                 Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38
window.onload = () => {
// CURRENT DAY OF THE WEEK
document.getElementById('dayOfWeek').innerHTML = new Date().toLocaleString('en-us', { weekday: 'long' });
// CURRENT TIME
document.getElementById('currentTime').innerHTML = new Date().toLocaleString('en-us', { hour: '2-digit' }) + " : " + new Date().toLocaleString('en-us', { minute: '2-digit' }) + " : " + new Date().toLocaleString('en-us', { second: '2-digit' });
};

//--------------------------------------------------------------------

// 2.
// Write a JavaScript program to print the contents of the current window.
const print = document.querySelector('[name=print]');
print.addEventListener('click', function(){
  window.print();
});
//--------------------------------------------------------------------

//3.
// Write a JavaScript program to get the current date.
  const now = new Date();
  const dd = now.getDate(); //days
  const mm = now.getMonth() +1; //months []
  const yyyy = now.getFullYear(); //year
  // Requested format on exercise
console.log(`${dd}/${mm}/${yyyy}`);
console.log(`${dd}-${mm}-${yyyy}`);
// DOM
document.getElementById('computedDate').innerHTML = `${dd}/${mm}/${yyyy}`;
//--------------------------------------------------------------------

//4.
 // Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
 const test1 = document.querySelector('[name=side1]').value;
 const test2 = document.querySelector('[name=side2]').value;
 const test3 = document.querySelector('[name=side3]').value;

 const triangleBase = (side1, side2, side3) => {
   // Heron's Forumula
   side1 = test1;
   side2 = test2;
   side3 = test3;
   const perimeter = (side1 + side2 + side3)/2;
   const area =  Math.floor(Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3))));
   console.log(area);
   displayOutcome.innerHTML = `${area}`;
 }
 const displayOutcome = document.querySelector('[name=Calculate]');
 displayOutcome.addEventListener('click', triangleBase);
//--------------------------------------------------------------------

//5.
// Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.
var animateString = function(id){
  // Locate HTML element containing string
  const simpleString = document.getElementById('target');
  //I now get node-text: node-value
  const stringNode = simpleString.childNodes[0];
  // console.log(stringNode);
  let text = stringNode.data; //Just node-value
  console.log(text)
  setInterval(() => {
              // leave all but 1       + that added at the end
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    stringNode.data = text;
  }, 400);
}
const handrotate =document.querySelector('[name=flipMe]');
handrotate.addEventListener('click',animateString);
//--------------------------------------------------------------------

//6.
// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
// const year = window.prompt("Input a Year : ");
// x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// console.log(x);
//--------------------------------------------------------------------

//7.
// Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.
const sundayEve = () => {
  for (let year = 2014; year <= 2050; year++)
    {
    const d = new Date(year, 0, 1); //year/day/ month
    if ( d.getDay() === 0 )
        console.log(`1st January is being a Sunday  ${year}`);
    }
  }
sundayEve();
//--------------------------------------------------------------------

//8.
// Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".
const randomProgram = function() {
  let randomInteger = Math.floor(Math.random() * 10);
  let userRandomInteger = prompt('Choose a number from 0 to 10');
  (randomInteger === userRandomInteger) ? console.log('Good Work') : console.log('Not matched');
}
// randomProgram();
//-------------------------------------------------------------------

//9.
 // Write a JavaScript program to calculate days left until next Christmas.
const daysLeftChristmas = function() {
  let currentDate = new Date();
  let nextChristmas = new Date(2018, 11, 25);
  //one day value
  const one_day=1000*60*60*24;
  const daysLeft = (nextChristmas - currentDate);
  let outcome =Math.floor(daysLeft/one_day);
  console.log(`We got ${outcome} days left for Christmas`);
}
daysLeftChristmas();
//------------------------------------------------------------------
//10.
// Write a JavaScript program to calculate multiplication and division of two numbers (input from user).
const multiplyCalculus = function(){
  ((input1 >= 0) && (input2 >= 0)) ?
    $result.innerHTML = input1 * input2 :
    console.log('Cannot multiply negative numbers');
}
let input1 = document.getElementById('numberToOperate1').value;
let input2 = document.getElementById('numberToOperate2').value;

const divideCalculus = function(){
  ((input1 > 0) && (input2 > 0)) ?
    $result.innerHTML = input1/input2 :
    console.log('Cannot divide by 0');
}

//Handlers
const $multiplication = document.querySelector('#multiplication');
const $division = document.querySelector('#divide');
$result=document.querySelector('#result');
//listeners
$multiplication.addEventListener('click', multiplyCalculus);
$division.addEventListener('click', divideCalculus);
//-------------------------------------------------------------------
//11.
// Write a JavaScript program to get the website URL (loading page).
const getURL = () => {
  let urlSaver = document.URL;
  console.log(urlSaver);
}
getURL();
// Explanation>>> document.URL : The URL read-only property of the Document interface returns the document location as a string.
//-------------------------------------------------------------------
//12.
//Write a JavaScript exercise to get the extension of a filename.
const filesExtension = (parameter) => {
  console.log(parameter.split('.').pop());
}
filesExtension('index.html');

// .split() se aplica a strings para separarlos y crea un array
// .pop se aplica una vez el array es creado para return el ultimo element eliminado del array
//-------------------------------------------------------------------
//13.
// Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.
const difference = function(para) {
  let difference = para - 13;
  if(difference > 13) {
    return difference * 2;
}
};
difference(30);
//-------------------------------------------------------------------
//14.
// Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
const sum = function (para1, para2){
  if(para1 === para2){
      let sumatory = (para1 + para2) * 3;
  } else {
      sumatory = para1 + para2;
  }
}
//-------------------------------------------------------------------
//15.
// Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.
const checkFor = function(para1, para2) {
  let sume = para1+para2;
  (sume === 50 || (para1 === 50 || para2 === 50)) ?
    console.log(true) : console.log(false)
}
checkFor(0, 49);
//-----------------------------------------------------------------
//16.
 // Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.
 
