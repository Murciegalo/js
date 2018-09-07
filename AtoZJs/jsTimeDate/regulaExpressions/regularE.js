// 1. Write a JavaScript program to test if the first character of a string is uppercase or not.
const firstChar = str => {
  // Rexp: Beginning, range from A to Z
  return(/^[A - Z]/.test(str)) ? true : false;
}
console.log(firstChar('Abcd'));
console.log(firstChar('abcd'));
//-----------------------------------------------------------------------
// 2. Write a JavaScript program to check a credit card number.
const creditCchecker = (number) => {
  let reg = /^(\d{4})\ - \1\ - \1\ - \1$/;
  return (reg.test(number)) ? true : 'Please provide Credit Card on referred format: XXXX-XXXX-XXXX-XXXX';
}
console.log(creditCchecker("1234 - 1234 - 1234 - 1234"));
console.log(creditCchecker("1234 - 1234 - 1234 - 1234 - 1234"));
//-----------------------------------------------------------------------
// 3. Write a pattern that matches e-mail addresses.
// Uppercase (A-Z) and lowercase (a-z) English letters.
// Digits (0-9).
// Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
// . (period, dot) provided not in the first or last character and not one after the other.
const mailValidator = (mail) =>{
}
//-----------------------------------------------------------------------
