console.log('Conditionals statements and loops');
// 1. Write a JavaScript program that accept two integers and display the larger.
const dueIntegers = (num1, num2) => {
  return (num1 > num2) ? num1 : num2;
}
//Accept + 2 numbers
const biggestIngeger = (...nums) => {
  return Math.max(...nums);
}
//--------------------------------------------------------------------
// 2. Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign.
const numberSign = (num1, num2, num3) => {
  return (num1) > 0 && (num2) > 0 && (num3) > 0 ? '+' : '-' ;
}
numberSign(5 ,7 , 8);
//-------------------------------------------------------------------
// 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.
const displayNumbers = (arr) => {
  return arr.sort(function(a,b){
    return b - a;
  });
}
displayNumbers([4,9,3]);
//loops    ------------------------------------
const usingLoops = (arr) => {
  for (let i = 0; i <arr.length -1; i++){
  for (let j in arr)
  if(arr[i] < arr[j]){
    const change = arr[i];
    arr[i] = arr[j];
    arr[j] = change;
    return arr.join(',');
    }
  }
}
usingLoops([4,9,3]);
//--------------------------------------------------------------------
// 4. Write a JavaScript conditional statement to find the largest of five numbers.
const largestOfFive = ([...nums]) =>{
  const result = [...nums].sort(function(a,b){
    return b - a;
  });
  return result[0];
}
//loops & Conditionals
const usingLoopsII = ([...nums]) =>{
  let result = [...nums];
  for (let i = 0; i< result.length -1; i++){
    for (let j in result)
    if(result[i] < result[j]){
      const polymorph = result[i];
      result[i] = result[j];
      result[j] = polymorph;
      return result[0];
    }
  }
}
console.log(usingLoopsII([4,9,3]));
//--------------------------------------------------------------------
// 5. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
const oddEvener = () => {
  for (let i = 0; i <= 15; i++){
    (i % 2 == 0) ? console.log(`${i} is even`) :     console.log(`${i} is odd`)
  }
}
oddEvener();
//--------------------------------------------------------------------
// 6. Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade.
const students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];
const grades = () =>{
  for (let i = 0;  i< students.length; i++){
    (students[i][1] >90) ? console.log(`${students[i][0]} got A`) :   (students[i][1] >80) ? console.log(`${students[i][0]} got B`) :
    (students[i][1] >70) ? console.log(`${students[i][0]} got C`) :
    (students[i][1] >60) ? console.log(`${students[i][0]} got D`) :
  console.log(`${students[i][0]} failed the test`) ;
}
  let result = (students[0][1] + students[1][1] + students[2][1] + students[3][1] + students[4][1])/5;
return `The average grade of the class is: ${result}`
}
//--------------------------------------------------------------------
// 7. Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
const printer = () =>{
  for (let i = 0;  i <= 100;  i++){
    (i%3 == 0 && i%5 == 0) ? console.log('FizzBuzz') :
    (i%3 == 0) ? console.log('Fizz') :
    (i%5 == 0) ? console.log('Buzz') : console.log(i);
  }
}
// printer();
//-------------------------------------------------------------------
// 9. Write a JavaScript program to find the armstrong numbers of 3 digits.
function armstrongNumber()
{
 for (var i = 1; i < 10; ++i)
 {
   for (var j = 0; j < 10; ++j)
     {
        for (var k = 0; k < 10; ++k)
        {
          var pow = (Math.pow(i,3) + Math.pow(j,3) + Math.pow(k,3));
          var plus = (i * 100 + j * 10 +  k);
          if (pow == plus)
           {
             console.log(pow);
            }
         }
       }
    }
  }
// armstrongNumber();
//-------------------------------------------------------------------
// 10. Write a JavaScript program to construct the following pattern, using a nested for loop.
const drawing = () => {
  let accumulator = '';
  for (let i = 0;  i <= 5 -1;  i++){
    accumulator += ('*');
    console.log(accumulator);
  }
}
//-------------------------------------------------------------------
// 11. Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers.
const greatestd = (num1, num2) => {
  for (let i = 0; i <= 100;  i++) {
    if(num1%i == 0  && num2%i == 0){
      console.log(i);
    } else {''}
  }
}
//-------------------------------------------------------------------
// 12. Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
const summator = () => {
  let sum = 0;
  for (let x = 0;  x < 1000; x++){
    if (x % 3 === 0 || x % 5 === 0)
   {
      sum += x;
   }
  }
  console.log(sum);
}
summator();
//-------------------------------------------------------------------
