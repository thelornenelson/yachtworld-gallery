import { lowLevelInit, lowLevelGetOne, lowLevelHas, lowLevelSet } from 'limited-cache';

export default class SizeCache {
  constructor({ id }) {
    this.id = id;
    const loadedCache = JSON.parse(window.localStorage.getItem(id));

    const options = {
      maxCacheSize: false,
      maxCacheTime: 1000 * 60 * 60 * 24 * 30, // 30 days
    };

    this.cacheMeta = lowLevelInit(loadedCache || options);
  }

  set(key, value) {
    lowLevelSet(this.cacheMeta, key, value);
  }

  get(key) {
    return lowLevelGetOne(this.cacheMeta, key);
  }

  has(key) {
    return lowLevelHas(this.cacheMeta, key);
  }

  save() {
    window.localStorage.setItem(this.id, JSON.stringify(this.cacheMeta));
  }
}
