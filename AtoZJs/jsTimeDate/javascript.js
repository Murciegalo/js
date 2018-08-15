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
 const addingStrings = function(para){
   let string = 'Py';
   ((para !== ' ') && (para === 'undefined')) ?
   console.log(`${string}${para}`) : console.log('Please input a string');
 }
addingStrings('thon');
//-------------------------------------------------------------------
//17.
// Write a JavaScript program to remove a character at the specified position of a given string and return the new string.
const removeString = (position,string) =>{
  var newString = string.substring(position);
  console.log(newString);
}
removeString(1 , 'Python');
//-------------------------------------------------------------------
//18.
// Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.
const benewString = function(string){
  let part1 = string.slice(0,1);
  console.log(`${part1}${string}${part1}`);
}
benewString('abusadora');
//----------------------------------------------------------------
//19.
// Write a JavaScript program check if a given positive number is a multiple of 3 or a multiple of 7.
const multiple = (number) =>{
  ((number % 3 == 0) || (number % 7 === 0)) ? console.log('It is multiple') : console.log('no');
}
multiple(3);
//------------------------------------------------------------------
//20.
// Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more.
const trecarsString = function(string){
  if(string.length >= 3){
    let outcome = string.slice(string.length -3);
    let finalOutcome = outcome + string + outcome;
    console.log(finalOutcome);
  } else{
    console.log("Write a bigger word");
  }
}
trecarsString('caraculo');
//-------------------------------------------------------------------//21.
// Write a JavaScript program to check if a string starts with 'Java' and false otherwise.
const startsOn = function(string){
  let checkVs = string.slice(0 , 4); //+1 to include last One always
  ('Java' == checkVs) ? console.log(string) :
  console.log('False');
}
startsOn('Javscript');
//-------------------------------------------------------------------
//22.
// Write a JavaScript program to check if a string "Script" presents at 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one.
const middleOn = function(string){
  ('Script' === string.slice(4)) ? console.log(string.slice(0,4)) :
  console.log(string);
}
middleOn('JavaScri');
//-------------------------------------------------------------------
//23.
// Write a JavaScript program to find the largest of three given integers.
const biggestInteger = (...nums) => {
  nums.length = 3; // remove extra elements
  console.log(Math.max(...nums));
}
biggestInteger(20, 30, 80);
//---------------------------------------------------------------
//24.
// Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.
const testRange = (a, b) => {
(a >= 40 && a <= 60 && b >= 40 && b <= 60) ? ( a > b ? console.log(a) : console.log(b)) : false ;
}
testRange(48, 50) ;
//-------------------------------------------------------------------
//25.
// Write a JavaScript program to count number of times a specified character is contained within a string
const samecharcounter = function(s, ch) {
var num = 0;
for (var i = 0; i < s.length; i++) {
  (s[i] == ch) ? num++ : num;
}
console.log(num);
}
samecharcounter('abeacaeadary', 'a');
//-------------------------------------------------------------------
//26.
// Write a JavaScript program to check if the last digit of the three given positive integers is same.
const lastThreeDigit = function(x, y, z) {
                  //a string, separado y cogido el last element
  var lastX=x.toString().split('').pop();
  var lastY=y.toString().split('').pop();
  var lastZ=z.toString().split('').pop();
    if (lastX == lastY && lastX == lastZ && lastY == lastZ){
      return true;
    }else{
        return false;
        }
      }
lastThreeDigit(23,43,53);
//-------------------------------------------------------------------
//27.
// Write a JavaScript program to create new string with first 3 characters are in lower case. If the string length is less than 3 convert all the characters in upper case.
const less3ToUppercase = (string) => {
  return (string.length >= 3) ? string.slice(0, 3).toLowerCase() + string.slice(3) :  string.toUpperCase();
}
less3ToUppercase('ABANICO');
//-------------------------------------------------------------------
//28.
// Write a JavaScript program to check the total marks of a student in various examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam." the student will get A+ grade where total marks must be greater than or equal to 90. Return true if the student get A+ grade or false otherwise.
const studentGrades = function(grades, finalexam) {
  finalexam = 'Final-exam';
     (finalexam && grades >=90) ? console.log(true) : console.log("Not the final exam so no worries!");
    return (grades >= 89 && grades <= 100) ? true: false;
}
// studentGrades(90,'Final-exam');
studentGrades(89);
//-------------------------------------------------------------------
//29.
// Write a JavaScript program to check from two given integers if either one is 8 or their sum or difference is 8.
const compareIntegers = (number1, number2) =>{
  (number1 == 8 || number2 == 8 || (number1 + number2) == 8 || number1 - number2 == 8) ? console.log(true) : console.log(false);
}
// compareIntegers(8, 21);
compareIntegers(15, 15);
//-------------------------------------------------------------------
//30.
// Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.
function same_last_digit(p, q, r) {
    return (p % 10 === q % 10) ||
           (p % 10 === r % 10) ||
           (q % 10 === r % 10);
}
// console.log(same_last_digit(22,32,42));
console.log(same_last_digit(20,22,45));
//-------------------------------------------------------------------
