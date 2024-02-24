// we store the collection on the object itself 
console.clear();

const collections = {
    length: 0,
    addElements(...data) {
        return [].push.call(this, ...data)
    },
    removeElements() {
        return [].pop.call(this)
    }
}

collections.addElements(1, 2, 3);
console.log(collections.length) // 3
collections.removeElements();
console.log(collections.length) // 2
