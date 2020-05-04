function setItem(name, value) {
  localStorage.setItem(name, value);
}

function getItem(name) {
  return localStorage.getItem(name);
}

function getArray(name) {
  const allItems = [];
  if (localStorage.getItem(name)) {
    const items = localStorage.getItem(name).split('},');
    for (let i = 0; i < items.length - 1; i ++) {
      allItems.push(JSON.parse(items[i] + "}"))
    }
    allItems.push(JSON.parse(items[items.length - 1]));
  }
  return allItems;
}