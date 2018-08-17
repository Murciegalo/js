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
// 30.
// Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.
function same_last_digit(p, q, r) {
    return (p % 10 === q % 10) ||
           (p % 10 === r % 10) ||
           (q % 10 === r % 10);
}
// console.log(same_last_digit(22,32,42));
console.log(same_last_digit(20,22,45));
//-------------------------------------------------------------------
// 31.
//Write a JavaScript program to reverse a given string
const reverseaString = (string) => {
  //array output
  console.log(string.split('').reverse()); //reverse =>Array method
  //string output                            //turn array to string
  console.log(string.split('').reverse().join(''));
}
reverseaString('pajarito');
//-------------------------------------------------------------------
//32.
// Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.
function replace(str) {
let newstr = '';
for (let i = 0; i < str.length; i++) {
                     //GET ASCII char code from str
let code = str.charCodeAt(i);
                  // +1 to every char. and bring the newcharacter
let newletter = String.fromCharCode(code + 1);
                  //create the new string , containing new chars.
newstr += newletter;
}
return newstr;
}
replace('abcd');
//-------------------------------------------------------------------
//33.
// Write a JavaScript program to capitalize the first letter of each word of a given string.
const capitalizeLetter = function(string) {
  let firstLetter = string.slice(0,1).toUpperCase() + string.slice(1, string.length);
  console.log(firstLetter);
}
capitalizeLetter('burro');
//------------------------------------------------------------------
//34.
// Write a JavaScript program to convert a given number to hours and minutes.
const givenNumber = (num) =>
 {
  const hours = Math.floor(num / 60);
  const minutes = num % 60;
  return `${hours}:${minutes}`;
}
givenNumber(240);
//-------------------------------------------------------------------
//35.
// Write a JavaScript program to convert the letters of a given string in alphabetical order.
const alphabeticalOrder = (string) => {
  return string.split('').sort().join();
}
alphabeticalOrder('cuando');
//------------------------------------------------------------------
//36.
// Write a JavaScript program to check if the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.
const ab_Check = (str) =>
 {                      //test method
    return (/a...b/).test(str) || (/b...a/).test(str);
 }
 ab_Check('Barcelona');
 ab_Check('abussadora');
//-------------------------------------------------------------------
//37.
 // Write a JavaScript program to count the number of vowels in a given string.
 const vowel_Count = (str) =>
{               //search-value , /(escap) '^'all line 'g' all matches
  return str.replace(/[^aeiou]/g, "").length;
}
console.log(vowel_Count("Pythaeon"));
//-------------------------------------------------------------------
//38.
// Write a JavaScript program to check if a given string contains equal number of p's and t's present.
const numbertp = (string) => {
  ((string.replace(/[^p]/g, "").length) === (string.replace(/[^t]/g, "").length)) ? console.log(true) : console.log(false);
}
numbertp('papagallotutureador');
//-------------------------------------------------------------------
//39.
// Write a JavaScript program to divide two positive numbers and return a string with properly formatted commas
const stringFormatted = (num1, num2) => {
  let number1 = (num1/2).toString();
  let number2 = (num2/2).toString();
  let string = `${number1} , ${number2}`;
  console.log(string);
}
stringFormatted(2,9);
//-------------------------------------------------------------------//40.
// Write a JavaScript program to create a new string of specified copies (positive number) of a given string.
const makeCopies = (str, n) => {
  (n < 0) ?  false : console.log(str.repeat(n));
}
makeCopies('pajaro', 5);
//-------------------------------------------------------------------
//41
// Write a JavaScript program to create a new string of 4 copies of the last 3 characters of a given original string. The length of the given string must be 3 and above.
const makeFcopies = (str, n) => {
  let finalcopy = str.slice(str.length-3);
  (str.length >= 3) ? console.log(finalcopy.repeat(n)) : false;
}
makeFcopies('arevalo', 4);
//------------------------------------------------------------------
//42
// Write a JavaScript program to extract the first half of a string of even length.
const evenLength = (str) => {
  (str.length%2 === 0) ? console.log(str.slice(0, str.length/2)) : console.log("Please type an even string");
}
evenLength('Arevalo');
evenLength('Areval');
//-------------------------------------------------------------------
//43
 // Write a JavaScript program to create a new string without the first and last character of a given string.
const moreStrings = (str) => {
  return str.slice(1, str.length -1);
}
moreStrings('vacaciones');
//-------------------------------------------------------------------
//44.
// Write a JavaScript program to concatenate two strings except their first character.
const concatenateStrings = (str1, str2) => {
  let first = str1.slice(1, str1.length);
  let second = str2.slice(1, str2.length);
  return `${first}${second}`
}
concatenateStrings('Car','aacnido');
//-------------------------------------------------------------------
//45.
// Write a JavaScript program to move last three character to the start of a given string. The string length must be greater or equal to three.
const lastTcharacters = (str) => {
  let lasThree = str.slice(str.length -3);
  return `${lasThree}${str.slice(0, -3)}`
}
lastTcharacters('alibaba');
//-------------------------------------------------------------------
//46.
// Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater or equal to three.
const middle_three = (str) => {
   if (str.length % 2!= 0) {
    mid = (str.length + 1)/2;
    return str.slice(mid - 2, mid + 1);
    }
  return str;
}
//------------------------------------------------------------------
//47.
// Write a JavaScript program to concatenate two strings and return the result. If the length of the strings are not same then remove the characters from the longer string.
const concatreturnstrings = (str1, str2) => {
  //minimun value from both lengths
  const m = Math.min(str1.length, str2.length);
  //apply that m
  return str1.slice(str1.length - m) + str2.slice(str2.length - m);
}
concatreturnstrings('ala', 'porca');
concatreturnstrings('alab', 'porc');
//-------------------------------------------------------------
//48.
// Write a JavaScript program to test if a string end with "Script". The string length must be greater or equal to 6.
const sixstring = (str) => {
  (str.length >= 6 && (str.slice(-6) == 'Script' )) ?
    console.log(true) : console.log(false)
}
sixstring('javalcript');
//---------------------------------------------------------
//49.
// Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.
const cityNames = (str) => {
  return (str.slice(0,3) == 'Los') || (str.slice(0,3) == 'New') ?  str : ' '
}
cityNames('New York');
cityNames('Barcelona');
//-------------------------
//49.1
// ANOTHER WAY
function cityStart(city) {
return city.startsWith('Los') ? city : city.startsWith('New') ? city : '';
}
//-----------------------------------------------------------
// 50.
// Write a JavaScript program to create a new string from a given string, removing the first and last characters of the string if the first or last character are 'P'. Return the original string if the condition is not satisfied.
const fromAString = (str) => {
  return (str.startsWith('P')) ? str.slice(1) :
  (str.endsWith('P')) ? str.slice(0, str.length - 1) : str;
}
fromAString('Palau');
//----------------------------------------------------------
// 51.
// Write a JavaScript program to create a new string using the first and last n characters from a given sting. The string length must be greater or equal to n.
const cortadoEn = (str, n) => {
  return (str.length >= n) ? str.slice(0, n) + str.slice(str.length - n) : 'String too short';
}
cortadoEn('Caracas', 3);
//-------------------------------------------------------------
// 52.
// Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.
const sumOftree = (...nums) => {
  nums.length = 3;
  return nums[0] + nums[1] + nums[2];
}
sumOftree(4,5,6);
//--------------------------------------------------------------
// 53.
// Write a JavaScript program to rotate the elements left of a given array of integers of length 3.
const rotateArray = (array) => {
let first = array[0];
for (let i = 0; i < array.length; i++) {
if (i === array.length - 1) {
array[array.length - 1] = first;
} else {
array[i] = array[i+1];
}
}
return array;
}
rotateArray([3, 4, 5]);
//-------------------------------------------------------------
// 54.
// Write a JavaScript program to check if 1 appears in first or last position of a given array of integers. The array length must be greater or equal to 1.
const arrayCheck = (arr) => {
  return (arr[0] == 1) ? true : (arr[arr.length] == 1) ? true : false;
}
arrayCheck([1,2,3]);
//---------------------------------------------------------------
// 55.
// Write a JavaScript program to check if the first and last elements are equal of a given array of integers length 3.
const arrayCheckII = (arr) => {
  return (arr[0] === arr[arr.length - 1]) ? true : false;
}
arrayCheckII([1,2,3]);
//-----------------------------------------------------------------
// 56.
 // Write a JavaScript program to reverse the elements of a given array of integers length 3.
 const reversedArray = (arr) => {
   return (arr.length >= 3) ? arr.reverse() : false;
 }
 reversedArray([1,2,3]);
 //------------------------------------------------------------------// 57.
// Write a JavaScript program to find the larger value between the first or last and set all the other elements with that value. Display the new array.
const biggestValue =  arr => {
  //fill() method fills all elements in an array with a static value.
  return arr.fill(Math.max(arr[0], arr[arr.length -1])) }
console.log(biggestValue([1,2,3,9]));
//-------------------------------------------------------------------
// 58.
 // Write a JavaScript program to create a new array taking the middle elements of the two arrays of integer and each length 3.
const arrayNeoCreated = (arr1, arr2) => {
return (arr1.length == 3 && arr2.length == 3)? [arr1[1], arr2[1]] : false;
}
console.log(arrayNeoCreated([1, 2, 3], [4, 5, 6]));
//-------------------------------------------------------------------
// 59.
// Write a JavaScript program to create a new array taking the first and last elements from a given array of integers and length must be greater or equal to 1.
const takeMidToArray = (arr1) => {
return (arr1.length >= 1) ? [arr1[0], arr1[arr1.length -1]] : false;
}
console.log(takeMidToArray([1, 2, 3]));
//-------------------------------------------------------------------
// 60.
// Write a JavaScript program to test if an array of integers of length 2 contains 1 or a 3.
const neoContainumb = (arr) => {
  return (arr.includes(1)) ? true : (arr.includes(3))  ? true : false;
}
neoContainumb([1,9]);
//-------------------------------------------------------------------
// 61.
// Write a JavaScript program to test if an array of integers of length 2 does not contain 1 or a 3
const is13 = (nums) => {
  return (nums.indexOf(1) == -1) ? true : (nums.indexOf(3) == -1) ?
  true : false;
}
is13([7, 8]);
//-------------------------------------------------------------------
// 62.
// Write a JavaScript program to swap the first and last elements of a given array of integers.
const flipArray = arra => {
  [arra[0], arra[arra.length - 1]] = [arra[arra.length - 1], arra[0]];
   return arra;
}
flipArray([1,2,3,5,6,7,8]);
//-------------------------------------------------------------------
// 63.
// Write a JavaScript program to add two digits of a given positive integer of length two.
const add_two_digits = (n) => {
      return n % 10 + Math.floor(n / 10);
   }
console.log(add_two_digits(21));
//-------------------------------------------------------------------
// 64.
//Write JavaScript to find the longest string from an given array of strings.
const test = arr => {
return arr.reduce((a, b) => a.length > b.length ? a : b);
}
console.log(test(['aaa4', 'aaaaa6','vccdcdcs9', ' aaaa 12']))
//-------------------------------------------------------------------
// 65.
// Write JavaScript to replace each character of a given string by the next one in the English alphabet.
const attemptReplace = str => {
  let newString = '';
  for (let i = 0; i < str.length; i++) {
    // For a & z replacement
    const addition = str[i] === 'z' ? 'a' : str[i] === 'Z' ? 'A' :
    // For rest of abcedary
    String.fromCharCode(str.charCodeAt(i) + 1);
    newString += addition;
}
return newString;
}
console.log(attemptReplace('AbCDzZ')); // BcDEaA
//-------------------------------------------------------------------
// 66.
// Write a JavaScript code to divide an given array of positive integers into two parts. First element goes to first part, second element goes to second part, and third element goes to first part and so on. Now compute the sum of two parts and store into an array of size two.
function sumArrayParts(arr) {
                  //total/current value/current index/array
return arr.reduce((accumulator, item, index, list) => {
if (index % 2 === 0) { accumulator[0] = accumulator[0] + item; }
else { accumulator[1] = accumulator[1] + item; }

return accumulator;

}, [0, 0]);
};
// The reduce() method reduces the array to a single value.
// The return value of the function is stored in an accumulator (result/total).
console.log(sumArrayParts([1,2,3,4,5,6]));
//-------------------------------------------------------------------
// 67.
// Write a JavaScript program to find the types of a given angle.
// Acute angle: An angle between 0 and 90 degrees.
// Right angle: An 90 degree angle.
// Obtuse angle: An angle between 90 and 180 degrees.
// Straight angle: A 180 degree angle.
const typeAngles = (degrees) => {
  (degrees > 0 && degrees < 90) ? console.log('Acute Angle') : (degrees === 90) ? console.log('Right Angle') : (degrees === 180) ? console.log('Straight Angle') : (degrees > 90 && degrees < 180) ? console.log('Obtuse Angle') : false;
}
typeAngles(90);
//-------------------------------------------------------------------
// 68.
// Write a JavaScript program to check whether two arrays of integers of same length are similar or not. The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements.
const checkSameArrays =  (myArray1, myArray2) => {
return (myArray1.join() == myArray2.join()) ? true : false;
}
checkSameArrays([1,2,3,4], [1,2,3,4]);
checkSameArrays([1,2,3,4], [1,2,3,5]);
//-------------------------------------------------------------------
// 69.
const equalDividendsornot = (dividend1, dividend2, divisor) => {
  return (dividend1%divisor === dividend2%divisor)? true : false;
}
equalDividendsornot(5,10,5);
equalDividendsornot(5,10,2);
//-------------------------------------------------------------------
// 70.
// Write a JavaScript program to find the kth greatest element of a given array of integers
function greatest_k(arr, k) {
arr.sort((a, b) => b - a);
return arr[k - 1]
}
console.log(greatest_k([5300, 3889, 4895, 2648, 9862, 6739], 2));
//-------------------------------------------------------------------
// 71.
// Write a JavaScript program to find the maximum possible sum of its k consecutive numbers (numbers that follow each other in order.) of a given array of positive integers.
function maxPartArray(arr, k) {
let maxSum = 0;
for (let i = 0; i < arr.length - k + 1; i++) {
  const partSum = arr.slice(i, i+k).reduce((accumulator, item) => {
    return accumulator + item;
    },0);
    maxSum = Math.max(maxSum, partSum);
  }
  return maxSum;
}
console.log(maxPartArray([884, 772, 066, 12, 567, 456, 874], 3));// 1897
//-------------------------------------------------------------------
// 72.
 // Write a JavaScript program to find the maximal difference between any two adjacent elements of a given array of integers.
 function maxDiff(arr) {
   return arr.reduce((accumulator, item, index, list) => {
     if (index < list.length-1) {
       return Math.max(accumulator, Math.abs(item - list[index+1]));
     }
     return accumulator;
   },0);
 }
 console.log(maxDiff([3,4,5,2,6,11])); // 5
//-------------------------------------------------------------------
// 73.
// Write a JavaScript program to find the maximal difference among all possible pairs of a given array of integers.
function maxxDiff(arr) {
const max = Math.max(...arr);
const min = Math.min(...arr);

return Math.abs(max - min);
}
console.log(maxxDiff([3,4,5,2,6,11,23,11,44])); // 42
//-------------------------------------------------------------------
// 74.
