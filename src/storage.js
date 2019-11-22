export class Storage {
  static getData(key, defaultValue) {
    let data = null;
    try {
      data = window.localStorage.getItem(key);
      data = JSON.parse(data) || defaultValue;
    } catch (error) {
      data = defaultValue;
    }
    return data;
  }
  static setData(key, data) {
    data = JSON.stringify(data);
    window.localStorage.setItem(key, data);
  }
}
