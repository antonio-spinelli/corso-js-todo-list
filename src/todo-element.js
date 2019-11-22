import { Utils } from './utils';

export class TodoElement {
  constructor (title) {
    const utils = new Utils();
    this.id = utils.generateId();
    this.title = title;
    this.done = false;
  }
}
