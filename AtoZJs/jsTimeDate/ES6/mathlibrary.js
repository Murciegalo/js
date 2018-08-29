// 1. Write a JavaScript function to convert a binary number to a decimal number.
const decimalConverter = (num) =>{
  return parseInt(num, 2);   //parseInt(x, base);
}
decimalConverter('110011');
//-------------------------------------------------------------------
// 2. To convert a binary / hexadecimal / octogonal
const binaryConverter = (num, base) =>{
  return (base === 'B') ? parseInt(num, 10).toString(2) :
  (base === 'H') ?  parseInt(num, 10).toString(16) :
  (base === 'O') ?  parseInt(num, 10).toString(8) :
  'Sorry';
}
binaryConverter(120, 'B');
//--------------------------------------------------------------------
// 4. Write a JavaScript function to generate a random integer.
const random = num =>{
  return Math.floor(Math.random() * num);
}
//--------------------------------------------------------------------
// 5. Write a JavaScript function to format a number up to specified decimal places.
const formatDecimals = (num , y) =>{
  return  num.toFixed(y);  //to Fixed decimals on numbers
}
formatDecimals(5432 , 2);
//--------------------------------------------------------------------
// 6. Write a JavaScript function to find the highest value in an array.
const highestValue = arr =>{
  const cleaned = [];
  for (let item of arr) {
    if (/[0-9]/g.test(item)) { cleaned.push(parseInt(item)); }
  }
  return cleaned.reduce((accumulator, item, index, list) => {
      return Math.max(accumulator, item);
  }, 0)
}
highestValue([2,6,7,'a', 'b']);
//--------------------------------------------------------------------
// 7. Write a JavaScript function to find the lowest value in an array.
const lowestValue = arr =>{
  return Math.min(...arr);
}
lowestValue([1,0, -1, 8]);
//--------------------------------------------------------------------
// 8. Write a JavaScript function to get the greatest common divisor (gcd) of two integers.
const greatestCD = (a, b) =>{
  let max = Math.max(a,b);
  let min = Math.min(a,b);
  return (max%min === 0) ? min: greatestCD(max,min-1);
}
greatestCD(3,9);
//--------------------------------------------------------------------
// 10. Write a JavaScript function to get the least common multiple (LCM) of two numbers.
const smallestCM = (a,b) => {
  return (Math.min(a,b)%Math.min(a,b) === 0) ?
  (Math.min(a * b)/Math.min(a,b)) : 'NaN';
}
smallestCM(3,9);
//--------------------------------------------------------------------
// 11. Write a JavaScript function to find out if a number is a natural number or not.
const naturalNumber = n => {
  return (n > 0 && Number.isInteger(n)) ? n : "Not natural number";
}
naturalNumber(5);
naturalNumber(4.3);
//--------------------------------------------------------------------
//12. Write a JavaScript function to test if a number is a power of 2.
const multipleDue = nr => {
  while(typeof nr == 'number' && nr > 1){
      return (Math.log(nr)/ Math.log(2)) % 1 === 0;
  }
}
multipleDue(5);
//--------------------------------------------------------------------
// 13. Write a JavaScript function to round a number to a given decimal places
const roundi = (number, fix) =>{
  while(typeof number == 'number' && typeof fix == 'number'){
      return number.toFixed(fix);
    }
}
roundi(34.5673, 2);
//--------------------------------------------------------------------
// 14. Write a JavaScript function to check whether a value is an integer or not.
const integerCheck = num =>{
  while( typeof num == 'number'){
      return (Number.isInteger(num)) ? true : false;
    }
}
integerCheck(4);
//--------------------------------------------------------------------
// 15. Write a JavaScript function to check to check whether a variable is numeric or not.
const isNumeric = x =>{
    return (typeof x == 'number') ? true : false;
}
isNumeric('ab');
isNumeric(4);
//-------------------------------------------------------------------
// 16. Write a JavaScript function to calculate the sum of values in an array.
const arrSum = arr =>{
    let counter = 0;
    for (let i = 0; i < arr.length ;  i++){
      counter += arr[i];
      // console.log(arr[i]);
    }
    return counter;
}
arrSum([1,2,3]);
// OTHER BETTER WAY
const arrSumII = arr =>{
  return arr.reduce((accumulator, item, index, list) =>{
    return accumulator + item;
  }, )
}
arrSumII([1,2,3]);
//-------------------------------------------------------------------
// 17. Write a JavaScript function to calculate the product of values in an array.
const arrMulti = arr =>{
  return arr.reduce((accumulator, item, index, list) =>{
    return accumulator * item;
  }, )
}
arrMulti([2,2,3]);
//-------------------------------------------------------------------
// 18. Create a Pythagorean function in JavaScript.
const Pythagorean = (a, b) =>{
  let h =  Math.sqrt(a * a + b * b);
  return h;
}
Pythagorean(2,4);
//------------------------------------------------------------------
// 19. Program which turns decimals into roman numbers
function integer_to_roman(n) {
    if (!Number.isInteger(n)) return false;
    var i, r, decimal , roman;
    r = "";
    decimal = [1,   4,   5,   9,  10,  40,  50,  90, 100, 400, 500, 900,1000];
    roman = ["I","IV", "V","IX", "X","XL", "L","XC", "C","CD", "D","CM", "M"];
    for (i = 12; i >= 0; i--) {
        while (n >= decimal[i]) {
            r += roman[i];
            n -= decimal[i];
        }
    }
return r;
}
 console.log(integer_to_roman(27));  //  XXVII
//-------------------------------------------------------------------
//20. Write a JavaScript function that Convert Roman Numeral to Integer.
function roman_to_Int(num){
    let roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
	  let value = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    let str = 0;
	  for (let i=12; i >= 0; i--){
		    while (num.indexOf(roman[i]) === 0){
			       let reg = new RegExp(roman[i])
			       num = num.replace(reg,'');
			       str += value[i];
		         }
	          }
	return str;
}
console.log(roman_to_Int('XXVI'));
console.log(roman_to_Int('CI'));
//-------------------------------------------------------------------
// 23. Write a JavaScript function to create a UUID identifier.
const generateUuid = () => {
    function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16)   .substring(1);
  };
    return function(){
      return `${s4()}${s4()} - ${s4()} - ${s4()} - ${s4()} - ${s4()}${s4()}`
    };
};
generateUuid()();
//-------------------------------------------------------------------
 // Write a JavaScript function to calculate the nth root of a number.
 const nthRoot = (base, root) => {
   return Math.pow(base, 1 / root);
 }
 nthRoot(64, 2);
//-------------------------------------------------------------------
// Write a JavaScript function to round up an integer value to the next multiple of 5.
const five = num =>{return Math.ceil(num/5)*5;};
five(133);
//-------------------------------------------------------------------
// Write a JavaScript function to convert a positive number to negative number.
const negativeConverter = number =>{
  while(number > 0){
    return -number;
  }
}
negativeConverter(5);
//-------------------------------------------------------------------
// Write a JavaScript function to get the highest number from three different numbers.
const maxNumber = (n1,n2,n3) =>{
    return Math.max(n1,n2,n3);
}
maxNumber(2,6,0);
//-------------------------------------------------------------------
//Check for decimal numbers or not
const decimalsChecker = n =>{
  let result = (n - Math.floor(n)) !== 0;
  return result ? 'Number has decimals' : "It's a whole number";
}
//-------------------------------------------------------------------
// Write a JavaScript function to print an integer with commas as thousands separators.
const commas = num =>{
   let num_parts = num.toString().split(".");
   num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
   return num_parts.join(".");
}
commas('5165432');
//-------------------------------------------------------------------
