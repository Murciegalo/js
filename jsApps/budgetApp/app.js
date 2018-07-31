// BUDGET CONTROLLER-------------------------------------------------------MODULE 1 BEGINS
var budgetController =  function() {
      // VARIABLE 1//--------------------------------------------------------------
//Expenses constructor
      let Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
        // add
        this.percentage = -1;
      };
      //  METHODs FOR EXPENSE OBJECT'S INTANCES
      Expense.prototype.calcPercentage = function(totalIncome) {
            if (totalIncome > 0){
                  this.percentage =Math.round((this.value / totalIncome) * 100) ;
            } else {
              this.percentage = -1;
            }
      };
      Expense.prototype.getPercentage = function() {
            return this.percentage;
      };
      // VARIABLE 2//--------------------------------------------------------------
//Income constructor
      let Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
      };
      // VARIABLE 3//--------------------------------------------------------------
      let calculateTotal = function(type){
        let sum = 0;
        data.allItems[type].forEach(function(cur) {
                sum += cur.value;
        });
        data.totals[type] = sum;
      };
      //VARIABLE 4 DATA STOCK//---------------------------------------------
//Sorting out Expenses, Income and Overall balance
      let data = {
        allItems: {
          exp: [],
          inc: []
        },
        totals: {
          exp: 0,
          inc: 0
        },
        budget:  0,
        percentage: -1, //Without values, there's no %
        // percentages: []                                                                     //to be removed if wrong
      };
      // RETURN
      return{
        // PROPERTY 1//--------------------------------------------------------------
        addItem: function(type, des, val) {
          let newItem , ID;
// Create new ID for evey new item pushed to DATA Object
          if(data.allItems[type].lenght > 0) {
          ID = data.allItems[type][data.allItems[type].length -1].id +1;
        } else {
          ID = 0;
        }
//Create new Item based on type (exp or inc)
          if(type === 'exp'){
          newItem = new Expense(ID, des, val);
        } else if(type === 'inc'){
          newItem = new Income(ID, des, val);
        }
//Passing/stocking newItem(user input) to my DATA structure
        data.allItems[type].push(newItem);
//Making new user input available for rest of controllers
        return newItem;
      },
        // PROPERTY 2//--------------------------------------------------------------
        deleteItem : function(type, id) {
          let ids, index;
          //Move input from user into a new array
          ids = data.allItems[type].map(function(current) {
                      return current.id;
                    });
          //find out what index is assigned to id clicked to 'delete' on my eventListener
         index = ids.indexOf(id);
         //If , look for something that is not located on array, index will = -1 so
        if (index.endsWith(-1)) {    //ES6
              //remove element from array on Index provided
              data.allItems[type].splice(index, 1);
        }
        },
        // PROPERTY 3//--------------------------------------------------------------
        calculateBudget: function(){
//Calculate total Income & Expenses
        calculateTotal('exp');
        calculateTotal('inc');
// Calculate the Budget
        data.budget = data.totals.inc - data.totals.exp;
// Calculate % of income which it's spent
          if (data.totals.inc > 0) { //(***expenses)
              data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
          } else{
                  data.percentage = -1;    //to avoid % calculation attempts on - values (***expenses)
          }
      },
      // PROPERTY 4//--------------------------------------------------------------
      getBudget: function() {
        return{
          budget: data.budget,
          totalsInc: data.totals.inc,
          totalsExp: data.totals.exp,
          percentage: data.percentage
        };
      },
      // PROPERTY 5//-------------------------------------------------------------
      calculatePercentages: function() {
        //Calculate % for every expense in our datastructure
        data.allItems.exp.forEach(function(current) {
           current.calcPercentage(data.totals.inc);
        });
      },
      // PROPERTY 6//-------------------------------------------------------------
      getPercentages: function() {
          let allPercentages = data.allItems.exp.map(function(curr){
                return curr.getPercentage();
          });
          return allPercentages;
      },
      // PROPERTY 7 [TESTER]--------------------------------------------------
      testing: function(){
        console.log(data);
      }
     };
}();
//MODULE USER INTERFACE---------------------------------------------------MODULE 2 BEGINS
//UI CONTROLLER
{

}
var UIController = function(){
      // VARIABLE 1
      let DOMstrings = {
        // UI User input fields
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        // UI Income column display
        incomeContainer: '.income__list',
        // UI Expenses column display
        expensesContainer: '.expenses__list',
        // UI Computed Overall Budget
        totalIncome: ".budget__income--value",
        totalExpenses: ".budget__expenses--value",
        totalPercentage: ".budget__expenses--percentage",
        totalBalance: ".budget__value",
        //Parent div for Event Delegation
        container:".container",
        //Expenses specific %
        individualpercentages: ".item__percentage",
        date: ".budget__title--month"
      };//--------------------------------------------------------------
      // VARIABLE 2
      let formatNumber = function(num, type) {
            var Thousand, integer, decimal, type;
            // + or - before number
            num = Math.abs(num); //math library method
            // 2 decimal points
            num = num.toFixed(2); //numbers prototype method

            Thousand = num.split('.'); //split a string
            //split outcome:
            integer = Thousand[0];
            if(integer.length > 3) {                                                                        //, to separate   thousand units
               integer = integer.substr(0, integer.length - 3)  +  ','  +  integer.substr(integer.length - 3,  3); //input 2310 = 2,310
            }
            decimal = Thousand[1];

            return  (type === 'exp' ?   '-' :  '+' )  +  ' '  +   integer   + '.'  +  decimal;
      };//------------------------------------------------------------------------
        // VARIABLE 3
      let nodeListForEach = function(list, callback){
            for (let i = 0; i < list.length; i++) {
                        //current //index
              callback(list[i], i);  //number of times callback function is going to be executed
            }
          };//----------------------------------------------------------------------
          // RETURN
         return {
           //PROPERTY 1
           getInput: function() {
           //When having multiple &  different inputs (best way -> to use an Object)
            return{
            type: document.querySelector(DOMstrings.inputType).value,  //type => inc or exp
            description: document.querySelector(DOMstrings.inputDescription).value,
            value: parseFloat(document.querySelector(DOMstrings.inputValue).value)  //to keep IT numeric
          };
          //Object for input ends
        },//----------------------------------------------------------------------------
        //PROPERTY 2
        addListItem: function(obj, type){
          let html, element;
          //1Create HTML string with placeholder text
          //for Income
          if(type === 'inc'){
              html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
              element = DOMstrings.incomeContainer;
          //for expenses
        } else if(type === 'exp') {
            html = `<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
            </div></div></div>`
            element = DOMstrings.expensesContainer;
        }
          //2Replace placeholders with real data from UI
          let newHtml;
          newHtml = html.replace('%id%', obj.id);
          newHtml = newHtml.replace('%description%', obj.description);
          newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));
          //3Insert the HTML into the DOM                                      //as a child
          document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },//----------------------------------------------------------------------
        //Clearing input fields after user has populated them and data has been processed and storaged
        // PROPERTY 3
        deleteListItem: function(selectorID) {
              let elementToBeRemoved = document.getElementById(selectorID);
              elementToBeRemoved.parentNode.removeChild(elementToBeRemoved);
        },
        // PROPERTY 4
        clearfields: function() {
          let fields;
          // querySelectorAll does NOT STOCK DATA AS AN ARRAY-LIKE  SO i WILL HAVE TO
          // CONVERT IT INTO AN ARRAY -> slice method
          fields = document.querySelectorAll(DOMstrings.inputDescription + ' ,  ' + DOMstrings.inputValue);
          // Tricking slice method into thinking fields is an array TO get a proper Array
          let fieldsArr;
          fieldsArr = Array.prototype.slice.call(fields);
          // I now remove/clear array
          fieldsArr.forEach(function(current, index, array) {
            current.value = "";
          });
          fieldsArr[0].focus();
        },//--------------------------------------------------------------------------
        //PROPERTY 5
        displayBudget: function(obj) {
          let type;
          obj.budget > 0 ? type = 'inc' : type = 'exp';
          document.querySelector(DOMstrings.totalBalance).textContent = formatNumber(obj.budget, type);
          document.querySelector(DOMstrings.totalIncome).textContent = formatNumber(obj.totalsInc, 'inc');
          document.querySelector(DOMstrings.totalExpenses).textContent = formatNumber(obj.totalsExp, 'exp');
          if(obj.percentage > 0) {
              document.querySelector(DOMstrings.totalPercentage).textContent = obj.percentage + '%';
          } else {
            document.querySelector(DOMstrings.totalPercentage).textContent = '---';
          }
        },//-------------------------------------------------------------------------------
        //PROPERTY 6
        displayPercentages: function(percentages) {
              //querySelectorAll because querySelector only selects the first element
              let fields = document.querySelectorAll(DOMstrings.individualpercentages);//nodeList
              //Solution 1 -> workaround (splice Method) to turn nodeList into an Array List
              //Solution 2 -> (most eficient) Create my own forEach function FOR nodelists
           nodeListForEach(fields, function(current, index){
             if(percentages[index] > 0){
                current.textContent = percentages[index] + '%';
             } else {
               current.textContent = '---';
             }
           });
        },//-----------------------------------------------------------------------------------
        // PROPERTY 7
        displayMonth: function() {
          let now , month, year , months;
          now = new Date();
          months = ['January' , 'February' , 'March' , 'April' , 'May' , 'June' , 'July' , 'August' , 'September', 'October' , 'November' , 'December']
          month = now.getMonth();
          year = now.getFullYear(); //Method inherited from object Date on JS
          document.querySelector(DOMstrings.date).textContent = months[month] + ' ' + year;
        },
        // PROPERTY 8
        changedType: function () {
          let styleInputExp;
          //this returns a nodeList
          styleInputExp = document.querySelectorAll(
            DOMstrings.inputType + ',' +
            DOMstrings.inputDescription + ',' +
            DOMstrings.inputValue);

          nodeListForEach(styleInputExp, function(cur) {
            cur.classList.toggle('red-focus');
          });

          document.querySelector(DOMstrings.inputBtn).classList.toggle('red');
        },
          // PROPERTY 8
        // Making available DOMstrings Public
        getDOMstrings: function() {
          return DOMstrings;
        }
  };
}();

//MODULE FOR DATA-----------------------------------------------------------MODULE 3 (BRIDGE)
//GLOBAL CONTROLLER
var controller = function(budgetController, UIController){
          // VARIABLE 1--------------------------------------------------------------
          let setupEventListeners=  function(){
                      //QUERY SELECTORS ON GLOBAL CONTROLLER SCOPE
                      let DOM = UIController.getDOMstrings();
                      //LISTENERS 1
                      document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem()); //TICK button
                      //LISTENERS 2
                      document.addEventListener('keypress', function(e) {
                        if(e.keyCode === 13 || e.which === 13) { //get data => 'enter' is pressed
                          ctrlAddItem();
                        }
                      });
                      //LISTENERS 3              (EVENT DELEGATION to be produced)
                      document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
                      //CHANGE event
                      document.querySelector(DOM.inputType).addEventListener('change', UIController.changedType);
        };
          // VARIABLE 2//--------------------------------------------------------------
          let updateBudget = function() {
//Calculate the budget
            budgetController.calculateBudget();
//Return the budget (to display it)
            let budget = budgetController.getBudget();
// Display UI
            UIController.displayBudget(budget);
          };
          // VARIABLE 3//--------------------------------------------------------------
          let updatePercentages = function(){
            //1. Calculate Percentages
            budgetController.calculatePercentages();
            //2. Read % from the budget controller
            let percentages = budgetController.getPercentages();
            //3. Update UI with new %
            UIController.displayPercentages(percentages);
          }
          // VARIABLE 4//--------------------------------------------------------------
          let ctrlAddItem = function() {
            let input, newItem;
            //1. Get input data collected on UI Module
            input = UIController.getInput();
//*****REGISTER INPUT WHEN CONDITIONS ARE MET*****
            if  (input.description !== " "  &&  !isNaN(input.value)  &&  input.value > 0) {
          //2. Add to budget controller
                  newItem = budgetController.addItem(input.type,  input.description, input.value);
          //3. Add to UI as well
                  UIController.addListItem(newItem, input.type);
          //4.Clear the fields
                  UIController.clearfields();
          //5. Calculate and Update budget
                  updateBudget();
          // 6. Calculate and Update percentages
                  updatePercentages();
                }
              };
          // VARIABLE 5 //--------------------------------------------------------------
            let ctrlDeleteItem = function(e){
              let itemID, splitID, type, ID;
            // Location & DOM TRAVERSING -> SELECT section reference and target in which
            //I want to trigger my eventListener => 'delete'
              itemID = e.target.parentNode.parentNode.parentNode.id;
              if(itemID) {
            // Catalogued HTML section to be erased on 'delete-click'
                  splitID = itemID.split('-'); //String method => returns an array splitted by '-'
                  type = splitID[0];
                  ID = parseInt(splitID[1]); //String converted to a rounded number.
            //1. Delete item from data structure
                  budgetController.deleteItem(type, ID);
            //2. Delete item from UI
                  UIController.deleteListItem(itemID);
            //3. Update new Total
                  updateBudget();
            // 4. Calculate and Update percentages
                  updatePercentages();
                }
            };
//I moved EventListeners whitin my Data CONTROLLER so they won't now get automatically
// invoked 'on click', I'll have to manually invoke it. PUBLIC
         return{
           init: function () {
             console.log('App has started');
             UIController.displayMonth();
             UIController.displayBudget({
               budget: 0,
               totalsInc: 0,
               totalsExp: 0,
             });
             setupEventListeners();
           }
         }
}(budgetController, UIController);      //GLOBAL APP CONTROLLER FUNCTION ENDS HERE
//Calling init on Global Scope to  eventListeners
controller.init();
