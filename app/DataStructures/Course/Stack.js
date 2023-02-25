console.clear();

const Stack = function () {
   this.index = 0;
   this.object = {}

   this.add = (value) => {
      this.object[this.index++] = value
   }

   this.delEnd = () => {
      if (this.index < 0)
         return undefined
      return delete this.object[--this.index]
   }

   this.delBegin = () => {
      if (this.index < 0)
         return undefined

      let keys = Object.keys(this.object)
      return delete this.object[keys[0]]
   }

   this.size = () => {
      console.log(`Size: ${Object.keys(this.object).length}`);
   }

   this.all = () => {
      console.log(this.object);
   }

   this.first = () => {
      let key = Object.keys(this.object)
      console.log(
         `First: ${this.object[key[0]]} `
      );
   }

   this.last = () => {
      let size = Object.keys(this.object).length;
      console.log(
         `Last: ${this.object[size]} `
      );
   }
}

let stack = new Stack()
stack.add(1)
stack.add(2)
stack.add(3)
stack.delBegin()
stack.delEnd()
stack.size()
stack.add(5)
stack.first()
stack.last()
stack.all()