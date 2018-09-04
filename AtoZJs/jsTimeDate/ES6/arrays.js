//1. Write a JavaScript function to check whether an `input` is an array or not.
const inputChecker = data => {
  return(typeof data === 'object') ? true : false;
}
inputChecker(1);
//-------------------------------------------------------------------
// 2. Write a JavaScript function to clone an array.
const stars = [1,2,3,4,5];
const arrCloner = arr =>{
    return arr.slice(0);
}
arrCloner(stars);
// OTHER WAY -> MAP
function cloneArray(arr){
    return arr.map( x => x )
  }
console.log( cloneArray ( [ 1,2,3 ] ) )
//-------------------------------------------------------------------
// 3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
const arrGetter = (arr,n) => {
  return (n == null) || (arr == null) || (n < 0) ? [] :
  arr.splice(0, n);
}
arrGetter(['a','b','c','d','e'], 2);
//------------------------------------------------------------------
// 4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
const arrLater = (arr,n) => {
  return (n == null) ? arr.pop() : (arr == null) || (n < 0) ? [] : arr.slice(-n);
}
arrLater(['a','b','c','d','e'], 2);
//--------------------------------------------------------------------
// 5. Write a simple JavaScript program to join all elements of the following array into a string.
const joinToStr = arr => {
  return arr.toString()
}
joinToStr( ["Red", "Green", "White", "Black"]);
//-------------------------------------------------------------------
// 6. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers.
function ex6(nr){
  const arr = [];
  for(var i = 0; i < nr.length; i++){
    if((nr[i] % 2 === 0) && nr[i+1] % 2 === 0){
      arr.push(nr[i] + '-' )
      } else arr.push(nr[i])
    }
    return arr.join('');
}
console.log(ex6('025468'));
//------------------------------------------------------------------
// 7. Write a JavaScript program to sort the items of an array.
 const arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
const sorter = arr => {
  return arr.sort((a,b) =>{ return a - b; })
}
console.log(sorter(arr1));
//----------------------------------------------------------------
// 8. Write a JavaScript program to find the most frequent item of an array.
const itemCounter = arr => {
  let result = arr.filter( c => Math.max(c.length));
  return result.length;
}
console.log(itemCounter([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));
//------------------------------------------------------------------
// 9. Write a JavaScript program which accept a string as input and swap the case of each character.
swap = str => {
  let a = str.split('') //all splitted
  let s = a.map( c=>(c.toLowerCase() == c) ? c.toUpperCase() :   c.toLowerCase() );

  return s.join('')
}
console.log(swap('abcDED'));
//----------ANOTHER WAY---------
function switchCase(str) {
  return str.split('')
    .reduce((acc,item) =>
    acc += item === item.toUpperCase() ?
    item.toLowerCase() :
    item.toUpperCase(),'');
  }
console.log(switchCase('The Quick Brown Fox'));
//-----------------------------------------------------------------
// 10. Write a JavaScript program which prints the elements of the following array.
const a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
const arrLooperPrinter = (arr) =>{
  for (let i in a){
    console.log(`row ${i}`);
    for (let j in a[i]){
      console.log(" " + a[i][j]);
    }
  }
}
// arrLooperPrinter(a);
//------------------------------------------------------------------
// 11. Write a JavaScript program to find the sum of squares of a numeric vector.
const squareVector = (arr) =>{
  return arr.reduce((acc,itm,idx,list)=>{
    return acc += Math.pow(itm, 2);
  }, 0);
}
squareVector([0, 1, 2, 3, 4]);
//--------------------------------------------------------------------
// 12. Write a JavaScript program to compute the sum and product of an array of integers.
const sumOfArra = arr => {
  return arr.reduce((acc,itm,idx,list) =>{ return acc += itm;}, 0);}
const productOfArra = arr =>{
  return arr.reduce((acc,itm,idx,list)=>{ return acc* itm;},)}
productOfArra([1, 2, 3, 4, 5, 6]);
sumOfArra([1, 2, 3, 4, 5, 6]);
//----------------------------------------------------------------------
// 13. Write a JavaScript program to add items in an blank array and display the items.
// STOCK
const storage = {
  data : []
}
// UI SAVERS
const itemsU = document.querySelector('ul');
console.log(itemsU)
// ROUTINES
const stockmanager = () => {
    const items = document.querySelector('[name=text1]');
    storage.data.push(items.value);
    items.value = " ";
    console.log(storage);
    // a closure to be added
    // listMaker();
}
// UI DISPLAYER
const listMaker = () => {
  let node = document.createElement('LI');  // Li Node
  itemsU.appendChild(node).innerHTML = storage.data;
  // storage.data = [];
}

// HANDLERS
document.querySelector('#add').addEventListener('click', stockmanager);
document.querySelector('#display').addEventListener('click', listMaker);
//----------------------------------------------------------------------
// 14. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
const arrforDuplicates = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
const duplicateDeleter = arr => {
    return arr.filter(function(value, index){
          return arr.indexOf(value) == index; //filter
    });
}
duplicateDeleter(arrforDuplicates);
//---------------------------------------------------------------------------
// 15. We have the following arrays
color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th","st","nd","rd"]
// Write a JavaScript program to display:
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."
const todoPrinter = () =>{
let x;
  for (let i = 1; i <= color.length; i++){
    if ( i < 4) {x = i}
      else {x = 0}
console.log(`${i}${o[x]} choice is ${color[i-1]}`)
}}
todoPrinter(o, color);
//---------------------------------------------------------------------------
// 16. Find the leap years in a given range of years.
const leapYears = (arr) =>{
  for (let i in arr){
    (i%4 == 0) && (i%100 == 0) && (i%400 == 0) ? console.log(arr[i]) : ' Not leap years' ;
  }
}
leapYears([1000,3000]);
//---------------------------------------------------------------------------
// 17. Shuffle an Array
let shuffleArray = arr => arr.sort( () => (Math.random() - 0.5) );
shuffleArray(['a','b','c','d']);
//------------------------------------------------------------------------
// 18. Write a JavaScript program to perform a binary search.
const itemsB = [1, 2, 3, 4, 5, 7, 8, 9];
const binary_Search = (items, value) =>{
  let firstIndex  = 0,
        lastIndex   = items.length - 1,
        middleIndex = Math.floor((lastIndex + firstIndex)/2);
    while(items[middleIndex] != value && firstIndex < lastIndex)
    {
       if (value < items[middleIndex])
        {
            lastIndex = middleIndex - 1;
        }
      else if (value > items[middleIndex])
        {
            firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((lastIndex + firstIndex)/2);
    }
 return (items[middleIndex] != value) ? -1 : middleIndex;
}
console.log(binary_Search(itemsB, 7));
//--------------------------------------------------------------------------
// 19. There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.
const array1 = [1,0,2,3,4];
const array2 = [3,5,6,7,8,13];
const sumsob = (arr1, arr2) =>{
  let result = [];
  let i = 0; //starts here
  while(i < arr1.length && i < arr2.length){ //ends here
    result.push(arr1[i] + arr2[i]);
    i++; //runs here
  }
  return result;
}
sumsob([1,0,2,3,4], [3,5,6,7,8,13]);
//------------------------------------------------------------------------
// 20. Write a JavaScript program to find duplicate values in a JavaScript array.
const checkForDuplicates = arr =>{
  let result = [];
  let tofor = arr.sort();
  for (let i = 0; i <tofor.length; i++){
    if(tofor[i] == tofor[i+1]){ result.push(arr[i])}
  }
  return result;
}
checkForDuplicates([1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6]);
//--------------------------------------------------------------------------
// 21.
// 22. Write a JavaScript program to compute the union of two arrays.
const joinArr = (a, b) =>{
  return a.concat(b);
}
joinArr([1, 2, 3], [100, 2, 1, 10]);
//------------------------------------------------------------------------
// 23. Write a JavaScript function to find the difference of two arrays.
function differencesFinder(arr1, arr2) {
    let arr = arr1.concat(arr2);
    return arr.filter((val, index) =>
    arr.indexOf(val) === arr.lastIndexOf(val)); //filter applied
  }
differencesFinder([1, 2, 3], [100, 2, 1, 10]);
//------------------------------------------------------------------------
// 24. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
const sample = [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected: [15, -22, 47]
const mamaFilter = arr =>{
  return arr.filter((value) => value); //filter array just by its values
}
mamaFilter(sample);
//-------------------------------------------------------------------------
// 25. Write a JavaScript function to sort the following array of objects by title value.
const library = [
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
   ];
   function sortByTitle(arr) {
   return arr.sort((a, b) => {
   return a.title > b.title;
   });
   }
console.log(sortByTitle(library));
//--------------------------------------------------------------------------
// 26. Write a JavaScript function to retrieve the value of a given property from all elements in an array
const sampleDue = [NaN, 0, 15, false, -22, '',undefined, 47, null];
// Expected result : [15, -22, 47]
const mumFilter = arr =>{return arr.filter((value) => value);}
mumFilter(sampleDue);
//-------------------------------------------------------------------------
// 28. Write a JavaScript function to find the longest common starting substring in a set of strings.
function commonSubstring(arr) {
    let newStr = "";
    const str1 = arr[0];
    const str2 = arr[1];
    for (let i = 0; i < str1.length; i++) {
        while (str1[i] === str2[i]) {
            newStr += str1[i];
            break;
        }
    }
    return newStr;
}
console.log(commonSubstring(['go', 'google'])); // go
console.log(commonSubstring(['SQLInjection', 'SQLTutorial'])); // SQL
console.log(commonSubstring(['abcd', '1234']));
//--------------------------------------------------------------------------
// 29. Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds.
const filler = arr =>{
  let numeric = Math.floor(Math.random() * 97);
  arr += arr.push(numeric);
  arr.length = 20;
  return arr;
}
filler(['a', "z", 2]);
//--------------------------------------------------------------------------
// 30. Write a JavaScript function to merge two arrays and removes all duplicates elements
const merga1 = [1, 2, 3];
const merga2 = [2, 30, 1];
const mergiRemove = (arr1, arr2) =>{
  let result = arr1.concat(arr2);
  return result.filter((value,index) => {
    return result.indexOf(value) === index;
  });
}
mergiRemove([1, 2, 3],[2, 30, 1]);
//-------------------------------------------------------------------------
// 31. Write a JavaScript function to remove a specific element from an array.
const specificRemove = (arr, n) =>{
  let index = arr.indexOf(n);
  arr.splice(index,1);
  return arr
}
specificRemove([2,4,8,17,16, 5, 9, 6], 5);
//---------------------------------------------------------------------------
// 32. Write a JavaScript function to find where an array contains an specific element or not.
const elementFinder = (arr, n) =>{
  return (arr.indexOf(n) == -1) ? false : true;
}
elementFinder([2,4,8,17,16, 5, 9, 6], 5);
//--------------------------------------------------------------------------
// 34. Write a JavaScript function to get nth largest element from an unsorted array.
const specificG = (arr, n) =>{
  return arr.splice(n-1,1);
}
specificG([2,4,8,17,16, 5, 9, 6], 5);
//-------------------------------------------------------------------------
// 35. Write a JavaScript function to get a random item from an array.
const randomG = (arr, n) =>{
  n = Math.floor(Math.random()* arr.length);
  return arr.splice(n-1,1);
}
randomG([2,4,8,17,16, 5, 9, 6], );
//-------------------------------------------------------------------------
// 36. Write a JavaScript function to create a specified number of elements with pre-filled numeric value array.
const pusher = (num, val) =>{
  let a = new Array(num);
  return a.fill(val);
}
pusher(5, 8);
//-------------------------------------------------------------------------
// 37. Write a JavaScript function to create a specified number of elements with pre-filled string value array.
const pusherII = (num, val) => {
  if(typeof(val) === 'string'){
    let b = new Array(num);
    return b.fill(val);
  }
}
pusherII(5,'la');
//---------------------------------------------------------------------------
// 40. 
