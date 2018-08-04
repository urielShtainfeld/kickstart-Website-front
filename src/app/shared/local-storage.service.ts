import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  storage: any;
  constructor() {
    if (window.localStorage) {
      this.storage = window.localStorage;
    } else {
      this.storage = {
        items: [],
        getItem: function (key) {
          return this.items[key];
        },
        setItem: function (key, value) {
          this.items[key] = value;
        }
      };
    }
  }

  get(key) {
    return this.storage.getItem(key);
  }

  set(key, value) {
    this.storage.setItem(key, value);
  }

  remove(key) {
    this.storage.removeItem(key);
  }

  clearAll() {
    this.storage.clear();
  }

}
