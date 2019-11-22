class TodoElement {
  constructor (title) {
    this.id = utils.generateId();
    this.title = title;
    this.done = false;
  }
}
