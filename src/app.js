class App {
  list = [];
  listContainerId = null;
  todoInputId = null;
  addTodoBtnClass = null;

  constructor(options) {
    this.listContainerId = options.listContainerId;
    this.todoInputId = options.todoInputId;
    this.addTodoBtnClass = options.addTodoBtnClass;

    this.init();
  }

  refreshList = () => {
    const listContainer = document.getElementById(this.listContainerId);
    listContainer.innerHTML = '';

    this.list.forEach(todoElement => {
      if (listContainer) {
        const rowElm = document.createElement('li');
        rowElm.innerHTML = todoElement.title;

        const removeBtn = document.createElement('button');
        removeBtn.innerHTML = 'Rimuovi';
        removeBtn.onclick = this.removeTodo.bind(this, todoElement);
        rowElm.appendChild(removeBtn);
        listContainer.appendChild(rowElm);
      }
    });
  };

  addTodo = (title) => {
    this.list.push(new TodoElement(title));
    this.refreshList();
  };

  removeTodo = (todoElement) => {
    this.list = this.list.filter(element => element.id !== todoElement.id);
    this.refreshList();
  };

  insertTodoElementFromInput = () => {
    const inputElm = document.getElementById(this.todoInputId);
    if (!!inputElm) {
      const title = inputElm.value;
      if (!!title) {
        todoApp.addTodo(title);
        inputElm.value = '';
      }
    } else {
      throw 'Attenzione: input non trovato';
    }
  };

  init = () => {
    const addBtns = document.getElementsByClassName(this.addTodoBtnClass);
    for (let i = 0; i < addBtns.length; i++) {
      const addBtn = addBtns[i];
      addBtn.innerHTML = 'Inserisci TODO';
      addBtn.onclick = this.insertTodoElementFromInput;
    }
  };
}
