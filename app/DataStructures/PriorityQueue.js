const Priority = function(){
    let arr = [];

    this.show = () => {
        console.log(arr);
    }

    this.push = (element) => {
        arr.push(element);    
    }

    this.order = (element) => {
        if (arr.length == 0){
           this.push(element)
        }else {
           for (let row = 0; row < arr.length; row++){
              if (element[1] < arr[row][1]){
                  arr.splice(row,0,element);
                  break;
              }
            }
        }
    }
}

const p = new Priority();
p.order(['Ribeiro',3]);
p.order(['Soares',2]);
p.order(['Leandro',1]);
p.show();