// we store the collection on the object itself 
console.clear();

const collections = {
  add(...data) {
    return [].push.call(this, ...data)
  }
}

collections.add(10, 20)

for (let row in collections) {
  if (typeof collections[row] != 'function') {
    console.log(collections[row]);
  }
}
