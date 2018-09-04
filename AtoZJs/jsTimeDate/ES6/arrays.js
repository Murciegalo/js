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
          return arr.indexOf(value) == index;
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
