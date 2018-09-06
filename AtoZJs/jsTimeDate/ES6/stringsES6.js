// 1. Write a JavaScript function to check whether an `input` is a string or not.
const stringCheck = input => {
  return(typeof(input) === 'string') ? true : false ;
}
stringCheck('true');
//-----------------------------------------------------------------------
// 2. Write a JavaScript function to check whether a string is blank or not.
const stringEmpty = input => {
  while(typeof(input) === 'string'){
      return(input.length === 0 ) ? true : false;
  }
}
console.log(stringEmpty('hola'));
console.log(stringEmpty(''));
//-----------------------------------------------------------------------
// 3. Write a JavaScript function to split a string and convert it into an array of words
const stringConverter = str => { return str.trim().split(' '); }
console.log(stringConverter("Robin Singh"));
//-----------------------------------------------------------------------
// 4. Write a JavaScript function to extract a specified number of characters from a string.
const stringExtractor = (str, n) => {
  return(typeof(str) === 'string' && n > 0) ? str.slice(0,n) : false;
}
console.log(stringExtractor("Robin Singh",4));
//-----------------------------------------------------------------------
// 5. Write a JavaScript function to convert a string in abbreviated form.
const stringAbbreviated = (str) =>{
   let splitted = str.trim().split(' ');
   let modf1 = splitted[0].charAt(0).toUpperCase() + splitted[0].slice(1).toLowerCase();
   let modf2 = splitted[1].charAt(0).toUpperCase()  //splitted[1].slice(1).toLowerCase();
   return `${modf1} ${modf2}.`;
}
console.log(stringAbbreviated('robin singh'));
//-----------------------------------------------------------------------
// 6. Write a JavaScript function to hide email addresses to protect from unauthorized user.
const mailHider = str => {
  return `${str.slice(0,4)}...${str.replace(str.slice(0) , '@example.com')}`;
}
console.log(mailHider("raulmv_01@hotmail.com"));
//-----------------------------------------------------------------------
// 7. Write a JavaScript function to parameterize a string.
const parameterizeString = str => {
  return str.split(' ').join('-').toLowerCase();
}
console.log(parameterizeString("Robin Singh from USA."));
//-----------------------------------------------------------------------
// 8. Write a JavaScript function to capitalize the first letter of a string.
const oneCapitalizer = str => {
  let result = str.trim();
  return result.charAt(0).toUpperCase()+result.slice(1);
}
console.log(oneCapitalizer('js string exercises'));
//-----------------------------------------------------------------------
// 9. Write a JavaScript function to capitalize the first letter of each word in a string.
const complexCapitalizer = str => {
  let result = str.trim().split(' ');
  let capitalized = [];
  for (let i = 0;  i < result.length; i++){
    capitalized.push(result[i].charAt(0).toUpperCase() + result[i].slice(1) );
  }
  return capitalized.join(' ');
}
console.log(complexCapitalizer('js string exercises'));
//-----------------------------------------------------------------------
// 10. Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case.
const swapCase = str => {
  let modified = str.split('');
  let result = [];
  for( let i = 0;  i < modified.length; i++){
    (modified[i].toUpperCase() === str.charAt(i)) ?
      result.push(modified[i].toLowerCase()) :
      result.push(modified[i].toUpperCase());
  }
  return result.join('').toString();
}
console.log(swapCase('AaBbc'));
//-----------------------------------------------------------------------
// 11. Write a JavaScript function to convert a string into camel case.
const camelCase = str => {
  let modified = str.split(' ');
  let result = [];
  for( let i = 0;  i <modified.length;  i++){
    result.push(modified[i].charAt(0).toUpperCase() + modified[i].slice(1) );
  }
  return result.join('');
}
// console.log(camelCase("JavaScript exercises"));
//---------------- BETTER WAY--------
//-----------------BETTER WAY-------
const camelize = str => {
  return str.replace(/\W+(.)/g, (match, chr) => {
    return chr.toUpperCase();
  });
}
console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));
console.log('------------');
//-----------------------------------------------------------------------
// 12. Write a JavaScript function to uncamelize a string.
const uncamelize = (str, n) => {
  let res = str.replace(/[A-Z]/g, n + 'w');
  if(typeof n === 'undefined') {
    return str.replace(/[A-Z]/g, ' ' + 'w')
  }
  return res;
};
console.log(uncamelize('helloWorld'));
console.log(uncamelize('helloWorld','-'));
console.log(uncamelize('helloWorld','_'));
//-----------------------------------------------------------------------
// 13. Write a JavaScript function to concatenates a given string n times (default is 1).
const concatenator = (str, n) => {
  return (n > 1) ? str.repeat(n) : str.repeat(1);
}
console.log(concatenator('Ha!',2));
console.log(concatenator('Ha!',3));
//-----------------------------------------------------------------------
// 14. Write a JavaScript function to insert a string within a string at a particular position (default is 1)
const replacer = (str, addition, pos) => {
  let result = str.split('');
  result.splice(pos, 0, addition);
  return result.join('');
}
console.log(replacer('We are doing some exercises.','JavaScript ',18));
//-----------------------------------------------------------------------
// 15. Write a JavaScript function to humanized number with the correct suffix such as 1st, 2nd, 3rd or 4th.
function humanize_format(num) {
    let ordinal = ["th","st","nd","rd"];
    if (num === undefined) {return "";}
    let lstDg = num % 10;
    return  lstDg < 4? num + ordinal[lstDg] : num + ordinal[0];
}
console.log(humanize_format(1));
console.log(humanize_format(8));
console.log(humanize_format(301));
console.log(humanize_format(402));
//-----------------------------------------------------------------------
// 16. Write a JavaScript function to truncates a string if it is longer than the specified number of characters.
const truncator = (str, n, str2) => {
    if(typeof n === 'undefined'){ return str; }
    else{
      return str.substr(0, n-3) + '...' + str2;
    }
};
console.log(truncator('We are doing JS string exercises.',15,'!!'))
console.log(truncator('We are doing JS string exercises.',19))
//-----------------------------------------------------------------------
// 17. Write a JavaScript function to chop a string into chunks of a given length.
const stringChop = (str, n) =>{
  if(str == null) return [];
  return (n > 0) ? str.match(new RegExp('.{1,' + n + '}', 'g')) : [str];
  }
console.log(stringChop('w3resource',2));
//-----------------------------------------------------------------------
// 18. Write a JavaScript function to count the occurrence of a substring in a string.
const countSubs = (str, substr) => {
    str = str.split(" ");
    console.log(str)
    return str.filter(value => value.toLowerCase() === substr).length;
}
console.log(countSubs("The quick brown the fox jumps over the lazy dog", 'the'));
//-----------------------------------------------------------------------
// 20. Write a JavaScript function that can pad (left, right) a string to get to a determined length.
const formatString = (topping, string, pos) =>{
  if(typeof string === 'undefined'){ return topping;}
  return (pos.toLowerCase() === 'l') ?
      (topping + string).slice(-topping.length) :
      (string + topping).slice(0, topping.length);
}
console.log(formatString('0000',123,'l'));
console.log(formatString('00000000',123,''));
//-----------------------------------------------------------------------
// 21. Write a JavaScript function to repeat a string a specified times.
const repeater = (str, n) =>{
  if ((str == null) || (n < 0) || (n === Infinity) ||
  (n == null)) {
      return('Error in string or count.');
  }
  return str.repeat(n);
}
console.log(repeater('Loca', 5));
//-----------------------------------------------------------------------
// 22. Write a JavaScript function to get a part of a string after a specified character.
const specificChop = (str, c) => {
  return str.slice(0 ,str.indexOf(c));
}
console.log(specificChop('w3resource: JavaScript Exercises', ':'));
console.log(specificChop('w3resource: JavaScript Exercises', 'E'));
//-----------------------------------------------------------------------
// 23. Write a JavaScript function to strip leading and trailing spaces from a string.
const trailing = str => { return str.trim(); }
trailing('  w3resource    ');
//-----------------------------------------------------------------------
// 24. Write a JavaScript function to truncate a string to a certain number of words.
const stringTruncator = (str, n) =>{
    return str.split(' ').slice(0, n).join(' ');
}
console.log(stringTruncator('The quick brown fox jumps over the lazy dog', 4));
//-----------------------------------------------------------------------
// 25. Write a JavaScript function to alphabetize a given string.

//-----------------------------------------------------------------------

//-----------------------------------------------------------------------

//-----------------------------------------------------------------------

//-----------------------------------------------------------------------

//-----------------------------------------------------------------------

//-----------------------------------------------------------------------

//-----------------------------------------------------------------------

//-----------------------------------------------------------------------

//-----------------------------------------------------------------------

//-----------------------------------------------------------------------

//-----------------------------------------------------------------------

//-----------------------------------------------------------------------


//-----------------------------------------------------------------------

//-----------------------------------------------------------------------

//-----------------------------------------------------------------------

//----------------------------------------------------------------------

//-----------------------------------------------------------------------

//----------------------------------------------------------------------

//-----------------------------------------------------------------------
