// 1
// Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one.
const compareObjects = (ob1, ob2) => {
  let comparisons = Object.values(ob2).toString();
  let compare = Object.values(ob1).toString();
  console.log(comparisons);
  return(comparisons == compare) ? true : false;
}
console.log(compareObjects({name: 'raul', age: 23}, {name: 'raul', age: 23}));
//2   ---------------------------------------------------------------
// Write a JavaScript function that reverse a number.
const reverseNumber = number => {
  while(number){
      return number.toString().split('').reverse().join('');
  }
}
reverseNumber(956);
//3  ---------------------------------------------------------------
// Write a JavaScript function that checks whether a passed string is palindrome or not?
const palindrome = str => {
  let palind = str.split('').reverse().join('');
  return (str == palind) ? true : false;
}
palindrome('madam');
//4  ---------------------------------------------------------------
// Write a JavaScript function that returns a passed string with letters in alphabetical order.
const abcOrder = str => {
  return str.split('').sort().join('');
}
abcOrder('cholo');
//5  ---------------------------------------------------------------
// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
const uppercase = (str) =>
str.split(' ').map(
  (v) =>
v.charAt(0).toUpperCase() + v.slice(1)
  ).join(' ');

console.log(uppercase("the quick brown fox"));
//6  ---------------------------------------------------------------
// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
const longestStr = str =>
  str.split(' ').sort((a,b) =>(b.length - a.length))[0]
console.log(longestStr('Web Development Tutorial'));
//7  ---------------------------------------------------------------
// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
const vowelsCounter = str => {
  return str.match(/[aeiou]/gi).length;
  }
console.log(vowelsCounter('abecedario'))
//8  ---------------------------------------------------------------
 // Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
 const primeChecker = number =>{
   return (number%2 != 0) ? true : false ;
 }
 primeChecker(5);
//9  ---------------------------------------------------------------
// Write a JavaScript function which accepts an argument and returns the type.
const typeCataloguer = arg => {
  return typeof(arg);
}
typeCataloguer(1);
typeCataloguer({});
//10  ---------------------------------------------------------------
// Build a matrix constructor
function matrix(n) {
        let i , j;
        for (i=0; i < n; i++) {
          for (j=0; j < n; j++) {
               if (i === j) {
                 console.log(' 1 ');
               } else {
                 console.log(' 0 ');}
              }
             console.log('----------');
           }
       }
// matrix(4);
//11  ---------------------------------------------------------------
// Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
const lowestGreatest = arr => {
  arr.sort();
  let b = `${arr[1]} - ${arr[arr.length-2]}`;
  return b;
}
lowestGreatest([1,2,3,4,5,6,7,8,9]);
//12  ---------------------------------------------------------------
// Write a JavaScript function to compute the factors of a positive integer.
const factors = number => {
  let caja = [];
  for (let i = 0;  i <= number;   i++) {
    if (number%i == 0) {
      caja.push(i);
    }
  }
  return caja;
}
factors(15);
//13  ---------------------------------------------------------------
// Write a JavaScript function to convert an amount to coins.
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1

//14  ---------------------------------------------------------------
// Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result
function exp(b,n) {
  let ans = 1;
  for (let i =1; i <= n; i++) {
    ans = b * ans;
  }
  return ans;
}
console.log(exp(2, 4));
// ANOTHER OPTION
function expo(b, n) {
return Math.pow(b, n);
}
console.log(expo(2,4));
//15  ---------------------------------------------------------------
// Write a JavaScript function to extract unique characters from a string.
function test(s) {
  var res = "";
  for (let i = 0; i < s.length; i++) {
    if (res.indexOf(s[i]) == -1) {
      res += s[i];
    }
  }
  return res;
}
test('abecedariosoloconuniques');
//16  ---------------------------------------------------------------
// Write a JavaScript function to  get the number of occurrences of each letter in specified string.
function occurrences(str) {
  let valores = {}
  str.toLowerCase().split('').sort().forEach( e => {
    valores[e] = valores[e] ? valores[e]+1 : 1
  });
  return valores;
}
occurrences('Isitgoingtowork?');
//17  ---------------------------------------------------------------
// Write a function for searching JavaScript arrays with a binary search.
const arraySearcher = (elem, arr) => {
  let result = [];
  for (let i = 0;  i<arr.length;  i++){
    if(elem == arr[i]){
      result.push(arr[i])
      return result;
    }
  }
}
arraySearcher('buscar', ['ala', 'ijaputa', 'falsa','buscar']);

//BEST OPTION
const binarySearch = (target, arr) => {
  if (arr.length === 1) { return arr[0]; }
  if ( arr.slice(0, arr.length / 2 ).indexOf(target) === -1 ) {
    arr = arr.slice(arr.length / 2 ) }
    else {
      arr = arr.slice(0, arr.length / 2 ); }
      return binarySearch(target, arr);
}
(binarySearch('v', ['l','b','g','t','u','i','h','a','r','e','s','w','d','c','v','b','n','m','s','w','i']));

//18  ---------------------------------------------------------------
// Write a JavaScript function that returns array elements larger than a number.
const largerThanNumber = (number, arr) => {
  let result = [];
  for (let i = 0; i < arr.length;  i++) {
    if(arr[i].length > number){
      result.push(arr[i]);
    } else{'Sorry, choose another option' ;}
  }
  console.log(result);
}
largerThanNumber(7, ['ara', 'abecedario' , 'test1', 'fuckingfinalTest' , 'right?']);
//19  --------------------------------------------------------------
// Write a JavaScript function that generates a string id (specified length) of random characters.  Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
function makeid(l){
  let text = "";
  let char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for(let i=0; i < l; i++ ){
    text += char_list.charAt(Math.floor(Math.random() *           char_list.length));
  }
return text;
}
console.log(makeid(8));
// BEST OPTION
const randomIdAssignator = (str) => {
  let randomId = 'l';
  for (let i = 0;  i < str.length;  i++){
    randomId += str.charAt(Math.floor(Math.random()* str.length));
  }
  return randomId;
}
randomIdAssignator('asdfad11654983dfh4gfd6af21ADRBA');
//20  --------------------------------------------------------------
// Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
const letterCounter = (letter, str) => {
  let counter = 0;
  let modified = str.toLowerCase().split('');
  for (let i = 0;  i <modified.length; i++){
    (letter.toLowerCase() === modified[i]) ? counter++ : counter;
  }
  return counter;
}
letterCounter('a', 'esta es una tia buena bro');

//OTHER OPTION, USING REDUCE
function elCounter(needle, haystack) {
   return haystack.split('').reduce((acc, item, indx, list)=>{
     return item===needle ? acc+1 : acc ;
  },0);
}
elCounter('a', 'esta es una tia buena bro');
//21 ----------------------------------------------------------------
// Write a JavaScript function to find the first not repeated character.
const noRepeat = str => {
  for (let i = 0; i < str.length; i++) {
    let res = str.charAt(i);
    if (str.indexOf(res) == i && str.indexOf(res, i + 1) == -1) {
      return res;
    }
  }
return null;
}
console.log(noRepeat("aabwwbxb"));
//22 ----------------------------------------------------------------
// Write a JavaScript function to apply Bubble Sort algorithm.
// "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order".
const arrayOrder = (arr)  =>{
      arr.sort(function(a ,b){
        return b - a;
      });
      return arr;
}
arrayOrder([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]);
//23 ----------------------------------------------------------------
// Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
const longestString = (arr) => {
  return arr.reduce((accumulator, item, index, list) =>{
    return accumulator.length > item.length ? accumulator : item;
    },
0);
}
longestString(["Australia", "Germany", "United States of America"]);
//24 ---------------------------------------------------------------
// Write a JavaScript function that returns the longest palindrome in a given string.
// function palindromeII(str){
// let palindo = str.split('').reverse().join('');
//   (str == palindo) ? true : false;
// }
// const megaFunction = arr => {
//   let outcome = [];
//   for (let i = 0;  i < arr.length;  i++){
//     (arr[palindromeII(i)]) ? outcome.push(arr[palindromeII(i)]) : false;
//   }
//   return outcome.reduce((accumulator, item, index, list) => {
//     return accumulator.length > item.length ? accumulator : item;
//   }, 0);
// }
// megaFunction(['madam', 'monja' , 'dog', 'mum']);
//25.  --------------------------------------------------------------
// Write a JavaScript program to pass a 'JavaScript function' as parameter.
function secondfunction(arr){
  for (let i =0;  i<arr.length; i++){console.log(arr[i])};
}
const passJsfunction = parameter => {
  secondfunction(parameter);
}
passJsfunction( ['la','lo']);
//26. ---------------------------------------------------------------
// Write a JavaScript function to get the function name.
function abc() {
    console.log( arguments.callee.name );
}
abc();
