// 1. Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one.
const comparator = (obj1, obj2) =>{
    let one = Object.keys(obj1).toString();
    let due = Object.keys(obj2).toString();
    return (one === due) ? true : false;
}
console.log(comparator({name: 'ra', age: 20}, {name: 'ra', age: 20}));
//------------------------------------------------------------------
// 2. Write a JavaScript program to converts a specified number to an array of digits.
const arrConverter = n => [...`${n}`].map(i => parseInt(i));
console.log(arrConverter(11231557));
//------------------------------------------------------------------
// 3. Write a JavaScript program to filter out the specified values from an specified array. Return the original array without the filtered values.
const arrFilter = (arr, filter) => {
  return arr.filter((value) =>{
    return  value !== filter})
}
console.log(arrFilter([1,2,3], 3));
//----------------------------------------------------------------
// 4. Write a JavaScript program to combine the numbers of a given array into an array containing all combinations.
const arrCombinator = arr =>
    arr.reduce((a, v) => a.concat(a.map(r => [v].concat(r)))
    , [[]]);
console.log(arrCombinator([1,2,3]));
//--------------------------------------------------------------
// 5. Write a JavaScript program to extract out the values at the specified indexes from an specified array.
const arrExtractor = (arr, pos,) => {
    return arr.filter((value)=>{
      return (arr.indexOf(value)) === pos;
    })
}
console.log(arrExtractor(['a','b','c','d','e','g'], 1));
//----------------------------------------------------------------
// 6. Write a JavaScript program to generate a random hexadecimal color code.
const colorGenerator = () => {
    let n = (Math.random() * 0xfffff  * 1000000).toString(16);
    return `#${n.slice(0,6)}`;
}
console.log(colorGenerator());
//----------------------------------------------------------------
// 12. Write a JavaScript program to removes non-printable ASCII characters from a given string.
const remover = str => {return str.replace( /[^\x20-\x7E]/g, '')};
console.log(remover('äÄçÇéÉêw3resouröceÖÐþúÚ'));
//------------------------------------------------------------
// 13. Write a JavaScript program to convert the length of a given string in bytes.
const bytesConverter = str =>   new Blob([str]).size;  //bytes
console.log(bytesConverter('123456'));
console.log(bytesConverter('Hello World'));
//------------------------------------------------------------
 // 14. Write a JavaScript program to return the minimum-maximum value of an array, after applying the provided function to set comparing rule.
 const obtainer = (arr, comparator = (a,b) => a - b) =>
    arr.reduce((a, b) => (comparator(a,b) >= 0 ? b : a ));
console.log(obtainer([1, 3, 2]));
console.log(obtainer([10, 30, 20], (a, b) => b - a));
//--------------------------------------------------------------
// 15. Write a JavaScript function that returns true if the provided predicate function returns true for all elements in a collection, false otherwise.
const truChecker = (arr, checker = Boolean) => arr.every(checker);
console.log(truChecker([4, 2, 3], x => x > 1));
console.log(truChecker([4, 2, 3], x => x < 1));
//------------------------------------------------------------
// 16. Write a JavaScript program to split values of two given arrays into two groups. If an element in filter is truthy, the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group.
const bifurcate = (arr, filter) =>
  arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);
console.log(bifurcate([1, 2, 3, 4], [true, true, false, true]));
console.log(bifurcate([1, 2, 3, 4], [true, true, true, true]));
//--------------------------------------------------------
// 17. Write a JavaScript program to remove specified elements from the left of a given array of elements.
const removeLeft = (arr, spec =1) =>{
  return arr.slice(spec);
}
console.log(removeLeft([1,2,3], 2));
// 18. Write a JavaScript program to remove specified elements from the right of a given array of elements.
const removeRight = (arr, spec =-1) =>{
  return arr.slice(spec);
}
console.log(removeRight([1,2,3], -2));
//-----------------------------------------------------------------
// 19. Write a JavaScript program to extend a 3-digit color code to a 6-digit color code.
const extender = num => {
  let n = (Math.random() * 0xfffff  * 1000000).toString(16);
  return `#${n.slice(0,3)}${num}`;
}
console.log(extender(546));
//------------------------------------------------------------
// 20. Write a JavaScript program to filter out the non-unique values in an array.
const uniqueFilter = arr =>{
  return arr.filter(value => arr.indexOf(value) === arr.lastIndexOf(value))
}
console.log(uniqueFilter([1, 2, 2, 3, 4, 4, 5]));
console.log(uniqueFilter([1, 2, 3, 4]));
//------------------------------------------------------------
// 21. Write a JavaScript program to dcapitalize the first letter of a string.
const firstdecap = str => {
  let one = str.charAt(0).toLowerCase() + (str.slice(1))
  return one;
}
console.log(firstdecap('Vamos a ver'));
//--------------OTHER WAY---------------------
const decapitalize = ([first, ...rest]) =>
    first.toLowerCase() + (rest.join(''));
console.log(decapitalize('W3resource'))
//------------------------------------------------------------
// 22. Write a JavaScript program to create a new array out of the two supplied by creating each possible pair from the arrays.
const creator = (a, b) => a.reduce((acc, item) => acc.concat(b.map(x => [x, item])), []);
console.log(creator([1, 2], ['a', 'b']));
console.log(creator([1, 2], [1, 2]));
//----------------------------------------------------------
// 23. Write a JavaScript program that will return true if the string is y/yes or false if the string is n/no.
const sino = str =>
    /^(yes|y)$/i.test(str) ? true : /^(n|no)$/i.test(str) ? false : 'Please we need a yes or no';
console.log(sino('Yes'));
console.log(sino('No'));
//----------------------------------------------------------
// 24. Write a JavaScript program to measure the time taken by a function to execute.
const time_taken = callback => {
  const result = callback();
  return result;
};
console.log("Time taken: " + time_taken(() => Math.pow(2, 10))+" ms");
//-----------------------------------------------------------
// 25. Write a JavaScript program to convert a value to a safe integer.
const safeInt = num => {return Math.round(num)};
console.log(safeInt(5.52))
//------------------------------------------------------
// 30. Write a JavaScript program to filter out the element(s) of an given array, that have one of the specified values.
const sorter = (arr, ...specs) =>
    arr.filter(value => !specs.includes(value))
console.log(sorter([2, 1, 2, 3], 2));
console.log(sorter([2, 1, 2, 3], 2, 3));
//-------------------------------------------------------
// 31. Write a JavaScript program to get the sum of an given array, after mapping each element to a value using the provided function.
const sam = arr => {
  let result = arr.map(x => Math.floor(Math.random() * arr.length));
  return result.reduce((acc, itm) => {
      acc += itm;
      return acc;
    },)
}
console.log(sam([2, 1, 2, 3]));
//---------------------------------------------------------
// 32. Write a JavaScript program to get a random number in the specified range.
const randomRange = (min, max) => Math.random() * (max - min) + min;
console.log(randomRange(2, 10));
//-----------------------------------------------------------
// 34. Write a JavaScript program to get a random integer in the specified range.
const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
console.log(randomInt(2, 10));
//-----------------------------------------------------------
// 35. Write a JavaScript program to get an array of given n random integers in the specified range.
const arrBuilder = (min, max, n = 1) =>
    Array.from({length : n} , () => Math.floor(Math.random() * (max - min)) + min);
console.log(arrBuilder(1, 20, 10));
//---------------------------------------------------------
