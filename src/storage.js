const getDataAsync = (key) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = window.localStorage.getItem(key);
      try {
        data = JSON.parse(data);
        resolve(data);
      } catch (error) {
        reject(error);
      }
    }, 1000);
  });
};

const setDataAsync = (key, data) => {
  return new Promise(resolve => {
    setTimeout(async () => {
      const toStore = JSON.stringify(data);
      await window.localStorage.setItem(key, toStore);
      resolve();
    }, 1000);
  });
};

export class Storage {

  static async getData(key, defaultValue) {
    let data = null;
    try {
      data = await getDataAsync(key);
    } catch (error) {
      data = defaultValue;
    }
    return data;
  }

  static async setData(key, data) {
    await setDataAsync(key, data);
  }

}
