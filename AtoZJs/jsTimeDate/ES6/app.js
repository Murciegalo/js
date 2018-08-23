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
  for (var i =1; i <= n; i++) {
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

//16  ---------------------------------------------------------------
