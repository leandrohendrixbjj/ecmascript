const Queue = function(){
    const arr = [];

    this.add = (value) => {
        arr.unshift(value);
    }

    this.show = () => {
        console.log(arr);
    }

    this.delete = () => {
        arr.shift();
    }
}

let q = new Queue();
q.add(1);
q.add(2);
q.delete();
q.show();