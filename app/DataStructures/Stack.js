const Stack = function(){
   this.index = 0;
   this.object = {};

   //Add
   this.add = function(value){
      this.object[this.index] = value;
      this.index++;
   }

   //Remove
   this.pop = () =>{
      if(this.index === 0){
         return undefined;
      }

      this.index--;
      delete this.object[this.index];
      return this.object[this.index];     
   }

   this.size = function() {
      return this.index;
   }

   this.peek = function(){
      return this.object[this.index--];
   }
}

const arr = new Stack();
arr.add(1);
arr.add(2);
arr.add(3);
arr.pop();
arr.peek();

console.log(arr.object);
console.log('Size', arr.size());
console.log('Peek', arr.peek());