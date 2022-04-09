function set(key, data) {
  if (key !== false && data !== false) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
