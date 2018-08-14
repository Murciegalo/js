console.log('works');
//Navigation
const addItems = document.querySelector('.add-items');
// ul
const itemsList = document.querySelector('.plates');
//Check if there's something in localStorage, then fallback to array
const items = JSON.parse(localStorage.getItem('items')) || [];

// FUNCTIONS

// 1. to storage data
const addItem = function(e) {
  e.preventDefault(); //no refresh when submitting form
  // input
  const text = (this.querySelector('[name=item]')).value;
// storage
  const item = {
    // text: 'Item Name', ES6
    text,
    done: false
  };
  items.push(item);
  // Show on UI
  populateList(items, itemsList);
            //convert my objects/arrays into a JSON string equivalent
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();   //reset this.form after input is submitted
}

// 2. to add data on screen    //items    //list Items
const populateList = function(item = [], itemsList){
  // To be added to html
  itemsList.innerHTML = item.map((plate, i) => {
    // return and Indexed array of plates and show it as a li
    return `
      <li>
        <input type="checkbox" data-index = ${i} id = "item${i}" ${plate.done ? 'checked' : ' ' }/>
        <label for = "item${i}">${plate.text}</label>
      </li>
      `;
  }).join(' '); //I want a huge strings from map instead of an Array
}

// 3. to keep toggle on page refresh  EVENT DELEGATION
const toggleDone = function (e) {
  if (!e.target.matches('input')) return; //skip it unless it's input
// console.log(e.target);
 const el = e.target;
 const index = el.dataset.index;
 // switcher
 items[index].done = !items[index].done;
 //save swticher outcome
 localStorage.setItem('items', JSON.stringify(items));
 // update UI
 populateList(items, itemsList);
}



// HANDLERS
// to storage data
addItems.addEventListener('submit', addItem);
// to kept toggled ones
itemsList.addEventListener('click', toggleDone);

//2 JSON to be included on load when array Items is empty
populateList(items, itemsList);
