// JavaScript Searching and Sorting Algorithm
// 1. Write a JavaScript program to sort a list of elements using Quick sort.
const elSorter = (arr) =>{
  return arr.sort();
}
console.log(elSorter([3,0,2,5,-1,4,1]));
//---------------------------------------------------------------
// 2. Write a JavaScript program to sort a list of elements using Merge sort.
function merge_sort(left_part,right_part)
{
	let i = 0;
	let j = 0;
	let results = [];
	while (i < left_part.length || j < right_part.length) {
		if (i === left_part.length) {
			// j is the only index left_part
			results.push(right_part[j]);
			j++;
		}
      else if (j === right_part.length || left_part[i] <= right_part[j]) {
			results.push(left_part[i]);
			i++;
		} else {
			results.push(right_part[j]);
			j++;
		}
	}
	return results;
}
console.log(merge_sort([1,3,4], [3,7,9]));
//--------------------------------------------------------
