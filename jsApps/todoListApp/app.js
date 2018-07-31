// //STORAGE DATA ON LIST
const todoList = {
  todos: [],
  addTodos: function(todoText) {
    this.todos.push({
      Storage: todoText,  //text input/populated by User
      completed: false //task/event status
    });
    //this.displayTodos();
  }, //METHOD 2 ENDS
  changeTodos: function (index, todoText)
  {
    this.todos[index].Storage = todoText;
    //this.displayTodos();
  },  //METHOD 3 ENDS
  deleteTodos: function (indexremove)
  {
    this.todos.splice(indexremove,1);
    //this.displayTodos();
  },  //METHOD 4 ENDS
  toggleCompleted: function(index) {
    var todo = this.todos[index];
    todo.completed = !todo.completed;
    //this.displayTodos();
  },   //METHOD 5 ENDS
  toggleAll: function ()  {
    let completedTodos = 0;
    let totalTodos = this.todos.length;
      this.todos.forEach(function(todo){
        if (todo.completed === true) {
           completedTodos ++;
        }
      });
      this.todos.forEach(function(todo)  {
          if (completedTodos  === totalTodos) {
            //Adding off option
            todo.completed = false;
          } else {  //TOGGLE THEM ALL
            // Adding on option
            todo.completed = true;
          }
        });
  }  //METHOD 6 ENDS
};

// USER INTERFACE
// DOM MANIPULATIONS
var handlers = {
    addTodos: function() {
      let inputFromUser = document.getElementById("textInputFromUser");
      todoList.addTodos(inputFromUser.value);
      inputFromUser.value = " ";
      view.displayTodos();
    },
    changeTodo: function() {
      let changeTodoPosition = document.getElementById('changeTodoPositionInput');
      let changeTodoText = document.getElementById('changeTodoTextInput');
      todoList.changeTodos(changeTodoPosition.valueAsNumber, changeTodoText.value);
      changeTodoPosition.value = ' ';
      changeTodoText.value = ' ';
      view.displayTodos();
    },
    deleteTodo: function(position) {
      todoList.deleteTodos(position);
      view.displayTodos();
    },
    toggleDone: function() {
      let toggleToDo = document.getElementById('toggleTodo');
      todoList.toggleCompleted(toggleToDo.valueAsNumber);
      toggleToDo.value = ' ';
      view.displayTodos();
    },
    toggleAll: function() {
        todoList.toggleAll();
        view.displayTodos();
    }
};

var view = {
  displayTodos: function(){
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = ' ';
//forEach(callback, this)
    todoList.todos.forEach(function(todo , position)  {
       var todoLi = document.createElement('li');
       if(todo.completed === true){
          todoLi.textContent = '(x)' + todo.Storage;
      }  else {
          todoLi.textContent = '( )' + todo.Storage;
      }

      todoLi.id = position;
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
    }, this);
  },  //method 1 ends
  createDeleteButton: function() {
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  },
  setUpEventListeners: function() {
    var todosUl = document.querySelector('ul');
    todosUl.addEventListener('click', function(event){
      //console.log(event);
    //Get element was clicked on
      let elementClicked = event.target;
      // Check if element clicked is a delete button
      if(elementClicked.className === 'deleteButton') {
      handlers.deleteTodo (parseInt(elementClicked.parentNode.id))
      ;
      }
    });
  }
};
view.setUpEventListeners();
