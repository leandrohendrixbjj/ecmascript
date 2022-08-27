const Priority = function(){
    const arr = [];

    this.push = (value) => {
        arr.push(value)
    }

    this.show = () => {
        console.log(arr);
    }

    this.asc = (a,b) => {
        if (a[1] > b[1]) return 1;
        if (a[1] < b[1]) return -1;
        return 0;
    }

    this.desc = (element) => {       
       this.push(element);  

       for(let row in arr){
          arr.sort(this.asc);
        }
    } 
}

const p = new Priority();
p.desc(['Ribeiro',3]);
p.desc(['Soares',2]);
p.desc(['Leandro',1]);
p.desc(['Ana',5]);
p.desc(['Ellens',4]);
p.show();