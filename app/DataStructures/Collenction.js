const mySet = function () {
    let collection = [];
  
    this.has = function (value) {
      return (collection.indexOf(value) == -1);
    }
  
    this.add = function (value) {
      if (this.has(value)) {
        collection.push(value);
      }
    }
  
    this.value = () => {
      return collection;
    }
  
    this.remove = function (value) {
      if (this.has(value))
        return;
  
      collection.splice(
        collection.indexOf(value), 1
      )
    }
  
    this.union = () => {
      const arr = [3];
  
      for (let row in arr) {
        if (this.has(arr[row])) {
          collection.push(arr[row]);
        }
      }
    }
  
    this.diff = () => {
      const arr = [1, 2, 5, 3, 8];
      const diff = [];
  
      arr.forEach((v) => {
        if (this.has(v)) {
          diff.push(v);
        }
      });
      console.log('Diffs:', diff);
    }
  
    this.size = () => {
      console.log('Size of Collenction:', collection.length);
    }
    
    this.intersection = function (otherSet) {
      let first = this.value();
  
      return first.every((v) => {
        return !otherSet.has(v);
      })
    }
  }
  let set = new mySet();
  set.add(1);
  set.add(2);
  set.remove(1);
  set.union();
  set.diff();
  set.size();
  
  let setB = new mySet();
  setB.add(2);
  setB.add(3);
  console.log('Intersencion:', set.intersection(setB));
  
  console.log('Set', set.value());
  console.log('SetB', setB.value());
  
  