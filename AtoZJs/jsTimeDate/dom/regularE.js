// 1. Write a JavaScript program to test if the first character of a string is uppercase or not.
const firstChar = str => {
  // Rexp: Beginning, range from A to Z
  return(/^[A - Z]/.test(str)) ? true : false;
}
console.log(firstChar('Abcd'));
console.log(firstChar('abcd'));
//--------------------------------------------------------------------
// 2. Write a JavaScript program to check a credit card number.
const creditCchecker = (number) => {
  let reg = /^(\d{4})\ - \1\ - \1\ - \1$/;
  return (reg.test(number)) ? true : 'Please provide Credit Card on referred format: XXXX-XXXX-XXXX-XXXX';
}
console.log(creditCchecker("1234 - 1234 - 1234 - 1234"));
console.log(creditCchecker("1234 - 1234 - 1234 - 1234 - 1234"));
//-------------------------------------------------------------------
//DOM
const selectorsDom = {
  paragraph: document.querySelector('#text'),
  table: document.querySelector('#sampleTable')
}
//-------------------------------------------------------------------
// 1. Here is a sample html file with a submit button. Now modify the style of the paragraph text through javascript code.
const js_style = () =>{
  selectorsDom.paragraph.style.fontFamily = 'Arial';
  selectorsDom.paragraph.style.fontSize = '18px';
  selectorsDom.paragraph.style.color = 'Red';
}
//Listener
document.querySelector('#jsstyle').addEventListener('click', js_style);
//--------------------------------------------------------------------
// 2. Write a JavaScript function to get the values of First and Last name of the following form.
const getFormvalue = () =>{
  let selector = document.querySelector('[name=fname]').value;
  let selector1 = document.querySelector('[name=lname]').value;
  console.log(`${selector} ${selector1}`);
}
// Listener
document.querySelector('[type=submit]').addEventListener('click', getFormvalue());
//--------------------------------------------------------------------
// 3. Write a JavaScript program to set the background color of a paragraph.
const backgroundP = () =>{
  selectorsDom.paragraph.style.background = 'blue';
}
document.querySelector('#jsstyle').addEventListener('click', backgroundP);
//--------------------------------------------------------------------
// 4. Here is a sample html file with a submit button. Write a JavaScript function to get the value of the href, hreflang, rel, target, and type attributes of the specified link.
const getAttributes = () =>{
  let selector = document.querySelector('#w3r').href;
  let selector1 = document.querySelector('#w3r').hreflang;
  let selector2 = document.querySelector('#w3r').rel;
  let selector3 = document.querySelector('#w3r').target;
  let selector4 = document.querySelector('#w3r').type;
  alert(`Website is ${selector}`);//...
}
//--------------------------------------------------------------------
// 5. Write a JavaScript function to add rows to a table.
const insert_Row = () =>{
  let nueRow = document.createElement('tr');
  let nueCell = document.createElement('td');
  nueRow.innerHTML = `New row`;
  nueCell.innerHTML = 'New cell';
  selectorsDom.table.appendChild(nueRow);
  nueRow.appendChild(nueCell);
}
//--------------------------------------------------------------------
// 6. Write a JavaScript function that accept row, column, (to identify a particular cell) and a string to update the content of that cell.
const changeContent = (row, column, string) =>{
  let stock = document.querySelector('#myTable').childNodes[1].childNodes[row].childNodes[column];
  // console.log(stock);
  stock.innerHTML = string;
}
changeContent(0,1,'la');
changeContent(2,0,'it works!');
//--------------------------------------------------------------------
// 7. Write a JavaScript function that creates a table, accept row, column numbers from the user, and input row-column number as content (e.g. Row-0 Column-0) of a cell.
const createTableI = () =>{
  let row = parseInt(prompt('write row number'));
  let col = parseInt(prompt('Write column number'));
  for (let i = 0; i < row; i++) {
      const newRow = document.getElementById('myTableII').insertRow(i);
      for (let j = 0; j < col; j++) {
        newRow.insertCell(j).innerHTML = `Row ${i} Column ${j}`;
      }
    }
}
//------------------------------------------------------------------
// 8. Write a JavaScript program to remove items from a dropdown list.
const removecolor = () =>{
  let select = document.getElementById('colorSelect'); //array
  select.remove(select.selectedIndex);
}
//-----------------------------------------------------------------
// 9. Write a JavaScript program to count and display the items of a dropdown list, in an alert window.
const getOptions = (e) => {
  let arr = [];
  let select = document.querySelector('#mySelect')
  select.querySelectorAll('option').forEach( x => arr.push(x.value) )
  alert(`No. of items : ${select.length}\nItem list :  ${arr.join(', ')}`)
}
//-------------------------------------------------------------------
// 10. Write a JavaScript program to calculate the volume of a sphere.
const calculateVolume = () =>{
  let radius = document.getElementById('radius').value;
  radius = Math.abs(radius);
  let volume = (4/3) * Math.PI * Math.pow(radius, 3);
  volume = volume.toFixed(4);
  document.getElementById('volume').value = volume;
  return false; //to brake reinit on site when clicking on submit button;
}
window.onload = document.getElementById('MyForm').onsubmit = calculateVolume;
//-------------------------------------------------------------------
// 11. Write a JavaScript program to display a random image (clicking on a button) from the following list.
const stock = ["http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
"http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg", "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg"];

const imageDisplayer = () =>{
    let displayer = document.getElementById('displayImages');
    let n = Math.floor(Math.random() * (stock.length))
    displayer.src = stock[n];
}
document.getElementById('display').addEventListener('click', imageDisplayer);
//---------------------------------------------------------------
// 12. Write a JavaScript program to highlight the bold words of the following paragraph, on mouse over a certain link.
const highlight = () =>{
  let letters =document.getElementsByTagName('strong');
  for (let i = 0;  i < letters.length; i++){
      letters[i].style.color = 'red';
  }
}
const return_normal = () => {
  let letters =document.getElementsByTagName('strong');
  for (let i = 0;  i < letters.length; i++){
  letters[i].style.color = 'black';
  }
}
//-----------------------------------------------------------
// 13. Write a JavaScript program to get the width and height of the window (any time the window is resized).
function getSize () {
  let w = document.documentElement.clientWidth;
  let h = document.documentElement.clientHeight;
// put the result into a h1 tag
 document.getElementById('wh').innerHTML = "<h1>Width: " + w + " â€¢ Height: " + h + "</h1>";
}
//-------------------------------------------------------
