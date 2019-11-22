const utils = new Utils();

const opts = {
  listContainerId: 'list-container',
  todoInputId: 'todo-input',
  addTodoBtnClass: 'add-todo-btn'
};
const todoApp = new App(opts);

todoApp.addTodo('comprare il latte');
