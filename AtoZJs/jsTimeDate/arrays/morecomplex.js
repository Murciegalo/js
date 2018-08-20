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
// Write a JavaScript program to find the number which appears most in a given array of integers.
function maxFreq(arr) {

const counts = {};

arr.forEach(num => {
  //Object.keys() returns an array of an object's Property names.
if (Object.keys(counts).indexOf(num.toString()) === -1) {
  counts[num] = 1; }
  else {
    counts[num] += 1;
  }
});
  // Object.entries() returns object's own proprty values in an array
const maxPair = Object.entries(counts).reduce((accumulator, item) =>{
  if (item[1] > accumulator[1])
  { return item; }  return accumulator
});

return maxPair[0];
}

console.log(maxFreq([3,4,5,44,44,6,11,23,11,44])); // 44
//-------------------------------------------------------------------
// 75.
// Write a JavaScript program to replace all the numbers with a specified number of a given array of integers.
const replaceNumbersArray = (arr, a, b) => {

return arr.map((item) => {
if (item === a) return b;
return item;
});
}
console.log(replaceNumbersArray([3,4,5,7,1,6,2,1,9,1,9], 1, 444)); // [3,4,5,7,444,6,2,444,9,444,9]
//-------------------------------------------------------------------
// 76.
// Write a JavaScript program to compute the sum of absolute differences of consecutive numbers of a given array of integers.
const sum_adjacent_difference = (arr) => {
	let result = 0;
	for (let i = 1; i < arr.length; i++) {
		result += Math.abs(arr[i] - arr[i - 1]);
	}
	return result;
}
console.log(sum_adjacent_difference([1, 2, 3, 2, 5]));
//-------------------------------------------------------------------
// 77.
// Write a JavaScript program to switch case of the minimum possible number of letters to make a given string written in the upper case or in the lower case.
// Fox example "Write" will be write and "PHp" will be "PHP"
const uniformCase = (str) => {
const uppercase = /[A-Z]/g; //regular expresion
const testCase = str.match(uppercase);
 return (testCase.length > str.length / 2) ? str.toUpperCase() : str.toLowerCase();
}
console.log(uniformCase('Php'));
console.log(uniformCase('PHp'));
//-------------------------------------------------------------------
// 78.
// JavaScript: Check if there is at least one element which occurs in two given sorted arrays of integers
const icomparedArrays = (arra1, arra2) => {
  for (let i = 0; i < arra1.length; i++)
  {
    if (arra2.includes(arra1[i]))
      return true;
  }
  return false;
}
console.log(icomparedArrays([1,2,3], [0,5,4]));
//-------------------------------------------------------------------
// 79.
//Write a JavaScript program to find two elements of the array such that their absolute difference is not greater than a given integer but is as close to the said integer.
function closeTo(arr, x) {
  return arr.reduce((accumulator, item, index, list) => {
    for (let i = index; i < arr.length; i++) {
      if ( (Math.abs(item - list[i]) < x) &&
        (Math.abs( item - list[i]) >
        Math.abs(accumulator[0] - accumulator[1]) ) )
       {
        accumulator[0] = item;
        accumulator[1] = list[i];
      }
    }
    return accumulator;
  },[0,0]);
}
console.log(closeTo([9,5,5,1], 8)); // [9, 5]
//-------------------------------------------------------------------
// 80.
// Find the number of times to replace a given number with the sum of its digits until it convert to a single digit number
function reduceToOneDigitIn(num) {
  let count = 0;
  while(num.toString().split('').length > 1) {
      num = num.toString().split('').reduce((accumulator, item) => {
        return accumulator + parseInt(item);
      },0);
      console.log(num);
      count++;
    }
return count;
}

console.log(reduceToOneDigitIn(1129)); // 2
//-------------------------------------------------------------------
// 81.
//Write a JavaScript program to divide an integer by another integer as long as the result is an integer and return the result.
const divideVsIntegers = (num1, num2) => {
  return (num1%2 == 0) && (num2%2 == 0) &&  (num1%num2 == 0) ? num1/num2 : 'Sorry, wrong numbers';
}
divideVsIntegers(2, 5,6);
//-------------------------------------------------------------------
// 82.
// Write a JavaScript program to find the number of sorted pairs formed by its elements  such that one element in the pair is divisible by the other one.
function divisiblePairs(arr){
  const pairs = arr.reduce((accumulator, item, index, list) => {
    for (let i = index + 1; i < arr.length; i++) {
      if (item % list[i] == 0 || list[i] % item === 0) {
        accumulator.push( {[item]: list[i]} );
      }
    }
    return accumulator;
  },[]);
return pairs.length;
}
console.log(divisiblePairs([20,4,5])); // 7
//-------------------------------------------------------------------
// 83.
// Create the dot products of two given 3D vectors
function dotVectors(vector1, vector2){
  return Object.keys(vector1).reduce((accumulator, item) => {
    return accumulator + (vector1[item] * vector2[item]);
  },0);
}
console.log(dotVectors({x:4, y: 5, z: 0}, {x: 3, y: 1, z: 8})); // 17
//-------------------------------------------------------------------
// 84.
// Write a JavaScript program to sort an array of all prime numbers between 1 and a given integer.
function primes(num)
{
let result = [];
for (let i = 2; i <= num; i++) {

for (let j = 2; j <= i; j++) {
if ( i !== 2 && i % j === 0) { break; }
if ( i === 2 || j === i - 1 ) { result.push(i); }
}

}
return result;

}
console.log(primes(34)); // [2,3,5,7,11,13,17,19,23,29,31]
//-------------------------------------------------------------------
// 85.
//-------------------------------------------------------------------
// 86.
//-------------------------------------------------------------------
// 87.
//-------------------------------------------------------------------
// 88.
//-------------------------------------------------------------------
// 89.
//-------------------------------------------------------------------
// 90.
//-------------------------------------------------------------------
// 91.
