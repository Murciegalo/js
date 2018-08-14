console.log('works');

// JAVASCRIPT EXERCISES
// 1.                                                                 Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38
window.onload = () => {
// CURRENT DAY OF THE WEEK
document.getElementById('dayOfWeek').innerHTML = new Date().toLocaleString('en-us', { weekday: 'long' });
// CURRENT TIME
document.getElementById('currentTime').innerHTML = new Date().toLocaleString('en-us', { hour: '2-digit' }) + " : " + new Date().toLocaleString('en-us', { minute: '2-digit' }) + " : " + new Date().toLocaleString('en-us', { second: '2-digit' });
};

//--------------------------------------------------------------------

// 2.
// Write a JavaScript program to print the contents of the current window.
const print = document.querySelector('[name=print]');
print.addEventListener('click', function(){
  window.print();
});
//--------------------------------------------------------------------

//3.
// Write a JavaScript program to get the current date.
  const now = new Date();
  const dd = now.getDate(); //days
  const mm = now.getMonth() +1; //months []
  const yyyy = now.getFullYear(); //year
  // Requested format on exercise
console.log(`${dd}/${mm}/${yyyy}`);
console.log(`${dd}-${mm}-${yyyy}`);
// DOM
document.getElementById('computedDate').innerHTML = `${dd}/${mm}/${yyyy}`;
//--------------------------------------------------------------------

//4.
 // Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
 const test1 = document.querySelector('[name=side1]').value;
 const test2 = document.querySelector('[name=side2]').value;
 const test3 = document.querySelector('[name=side3]').value;

 const triangleBase = (side1, side2, side3) => {
   // Heron's Forumula
   side1 = test1;
   side2 = test2;
   side3 = test3;
   const perimeter = (side1 + side2 + side3)/2;
   const area =  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
   console.log(area);
   displayOutcome.innerHTML = `${area}`;
 }
 const displayOutcome = document.querySelector('[name=Calculate]');
 displayOutcome.addEventListener('click', triangleBase);
//--------------------------------------------------------------------

//5.
// Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.
var animateString = function(id){
  // Locate HTML element containing string
  const simpleString = document.getElementById('target');
  //I now get node-text: node-value
  const stringNode = simpleString.childNodes[0];
  // console.log(stringNode);
  let text = stringNode.data; //Just node-value
  console.log(text)
  setInterval(() => {
              // leave all but 1       + that added at the end
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    stringNode.data = text;
  }, 400);
}
const handrotate =document.querySelector('[name=flipMe]');
handrotate.addEventListener('click',animateString);
