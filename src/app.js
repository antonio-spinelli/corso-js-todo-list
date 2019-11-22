import { TodoElement } from './todo-element';

export class App {

  constructor(options) {
    this.list = [];
    this.listContainerId = options.listContainerId || null;
    this.todoInputId = options.todoInputId || null;
    this.addTodoBtnClass = options.addTodoBtnClass || null;
  }

  refreshList() {
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
  }

  addTodo(title) {
    this.list.push(new TodoElement(title));
    this.saveData();
  }

  removeTodo(todoElement) {
    this.list = this.list.filter(element => element.id !== todoElement.id);
    this.saveData();
  }

  insertTodoElementFromInput() {
    const inputElm = document.getElementById(this.todoInputId);
    if (!!inputElm) {
      const title = inputElm.value;
      if (!!title) {
        this.addTodo(title);
        inputElm.value = '';
      }
    } else {
      throw 'Attenzione: input non trovato';
    }
  }

  loadData() {
    const data = window.localStorage.getItem('todo-list');
    try {
      this.list = JSON.parse(data) || [];
    } catch (error) {
      this.list = [];
    }
    this.refreshList();
  }

  saveData() {
    const data = JSON.stringify(this.list);
    window.localStorage.setItem('todo-list', data);
    this.refreshList();
  }

  init() {
    this.loadData();

    const addBtns = document.getElementsByClassName(this.addTodoBtnClass);
    for (let i = 0; i < addBtns.length; i++) {
      const addBtn = addBtns[i];
      addBtn.innerHTML = 'Inserisci TODO';
      addBtn.onclick = this.insertTodoElementFromInput.bind(this);
    }
  }
}
