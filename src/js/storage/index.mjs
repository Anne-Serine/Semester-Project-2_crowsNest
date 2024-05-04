export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function load(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch {
      return null;
  }
}

export function remove(key) {
  localStorage.removeItem(key);
}