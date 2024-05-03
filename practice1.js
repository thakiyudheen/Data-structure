const nlist= require('./practice')

class stack{
    constructor(){
        this.list=new nlist()
    }
    push(data){
      return  this.list.push(data)
    }
    pop(){
        return this.list.pop()
    }
    pop(){
        return this.list.pop()
    }
    getsize(){

    return this.list.getSize()
    }
    print(){
        this.list.print()
    }

}
const stack1=new stack()
stack1.push(1)
stack1.push(2)
stack1.push(3)
stack1.push(4)
stack1.push(5)
stack1.print()
console.log("this is pop",stack1.pop()); 
console.log("size is",stack1.getsize()); 
stack1.print()
