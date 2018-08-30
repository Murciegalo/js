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
//--------------------------------------------
// ANOTHER WAY----------------------
function switchCase(str) {
  return str.split('')
    .reduce((acc,item) =>
    acc += item === item.toUpperCase() ?
    item.toLowerCase() :
    item.toUpperCase(),'');
  }
console.log(switchCase('The Quick Brown Fox'));
//-----------------------------------------------------------------
