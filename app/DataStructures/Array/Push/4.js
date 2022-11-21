console.clear();

// we store the collection on the object itself 
const collections = {
    addElements(...data) {
        return [].push.call(this, ...data)
    }
}

collections.addElements(1, 2, 3);
console.log(collections);