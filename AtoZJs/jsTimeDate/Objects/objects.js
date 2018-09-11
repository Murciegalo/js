// 1. Write a JavaScript program to list the properties of a JavaScript object.
const student = {
  name : 'David Rayy',
  sclass: 'VI',
  rollno: 12
};
const listObject = (obj) => {
  let x = Object.keys(obj); //Object.keys (LIST an Obj. properties)
  return x;
}
listObject(student);
//------------------------------------------------------------------
// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
const deletPropObj = (obj, str) =>{
  delete obj[str];   //delete an object Property
  return obj;
}
deletPropObj(student);
//------------------------------------------------------------------
// 3. Write a JavaScript program to get the length of an JavaScript object.
const objSize = (obj) => {
  return Object.keys(student).length;
}
objSize(student);
//------------------------------------------------------------------
// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
var library = [
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games',
       readingStatus: false
   }];
const booksDisplayer = (arr) => {
  for (let i in  arr){
      (arr[i]['readingStatus'] === true) ?
          console.log(`You read ${arr[i].title} by ${arr[i].author}`):
          console.log(`You have yet to read this ${arr[i].title}`);
        }
}
booksDisplayer(library);
//------------------------------------------------------------------
// 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
class Cylinder {
  constructor(r, h) {
    this.r = r;
    this.h = h
    this.v = Math.PI * Math.pow(this.r, 2) * this.h;
  }
   get volume() {
    return this.v.toFixed(4);
  }
}
console.log((new Cylinder(7,4)).volume);
//------------------------------------------------------------------
// 6. Write a Bubble Sort algorithm in JavaScript.
const bubbleSort = (arr) =>{
  return arr.sort((a,b) =>{ return a - b});
}
console.log(bubbleSort( [6,4,0, 3,-2,1]));
//------------------------------------------------------------------
// 7. Write a JavaScript program which returns a subset of a string.
const subsetStr = (str) =>{
    const subset = [];
    for (var m = 0; m < str.length; m++) {
      for (var n = m+1; n<str.length+1; n++) {
        subset.push(str.slice(m,n));
      }
    }
    return subset;
}
console.log(subsetStr('dog'));
//------------------------------------------------------------------
// 8.Write a JavaScript program to create a Clock.
const clock = () =>{
  let date = new Date; //current date
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let result = `${h}:${m}:${s}`;
  document.getElementById('clock').innerHTML = result;
  setTimeout('clock();', '1000');
  return true;
}
// clock();
//OBJECT WAY
class ClockTime {
  static timer() {
    const time = () => console.log((new Date()).toLocaleTimeString())
    setInterval(time,1000)
  }
}
// clockTime.timer();
//------------------------------------------------------------------
// 9.Write a JavaScript program to calculate the area and perimeter of a circle.
class Circle {
  constructor(r){
    this.r = r;
  }
  get area() {
    return (Math.PI * Math.pow(this.r, 2)).toFixed(4);
  }
  get perimeter() {
    return (2 * (Math.PI * this.r)).toFixed(4);
  }
}
console.log(new Circle(3).area);
//----------------------------------------------------------------
// 10.Write a JavaScript program to sort an array of JavaScript objects.
var libraryII = [
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];
const objSorter = (arr) =>{
  return arr.sort((a,b) => a.libraryID < b.libraryID)
}
console.log(objSorter(libraryII));
//---------------------------------------------------------------
// 11. Write a JavaScript function to print all the methods in an JavaScript object.
const allInOne = obj => { return Object.getOwnPropertyNames(obj)}
console.log(allInOne(Array));
console.log(allInOne(Object));
//---------------------------------------------------------------
// 12.Write a JavaScript function to retrieve all the names of object's own and inherited properties.
const propRetriever = obj => {
  let type = typeof obj;
  return type === 'function' || type === 'object' && !!obj;
}
console.log(propRetriever(student));
//-------------------------------------------------------------
// 14.Write a JavaScript function to retrieve all the values of an object's properties.
const valuesRetriever = obj => {return Object.values(obj);}
console.log(valuesRetriever(student));
//-----------------------------------------------------------
// 15.Write a JavaScript function to convert an object into a list of `[key, value]` pairs.
const pairs = obj => {
  let list = [];
  list = Object.entries(obj);
  return list;
}
console.log(pairs(student));
//---------------------------------------------------------
// 16.Write a JavaScript function to check if an object contains a given property.
const propertyChecker = (obj, [property]) =>{
  let compare = Object.getOwnPropertyNames(obj);
  for (let i = 0;  i< compare.length;  i++){
    return(compare[i] == property) ? true : false;
  }
}
console.log(propertyChecker(student, ['name']));
console.log(propertyChecker(student, ['roll']));
//-------------------------------------------------------------
