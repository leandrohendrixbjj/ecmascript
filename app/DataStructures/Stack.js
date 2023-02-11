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

   this.peek = () => {
      console.log(Object.keys(this.object).length);
   }

   this.show = () => {
      console.log(this.object);
   }
}

let stack = new Stack()
stack.add(1)
stack.add(2)
stack.add(3)
stack.delBegin()
stack.delEnd()
stack.show()
stack.peek()