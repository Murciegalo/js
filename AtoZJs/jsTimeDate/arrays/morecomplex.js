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
//-------------------------------------------------------------------
// 78.
//-------------------------------------------------------------------
// 79.
//-------------------------------------------------------------------
// 80.
//-------------------------------------------------------------------
// 81.
//-------------------------------------------------------------------
// 82.
//-------------------------------------------------------------------
// 83.
//-------------------------------------------------------------------
// 84.
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

