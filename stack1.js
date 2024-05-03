const linkedlist=require('./stack')

class stack{
    constructor(){
        this.list=new linkedlist()

    }

    push(data){
        this.list.append(data)
    }
    pop(){
     return this.list.pop()
    }
    shift(){
      return  this.list.shift()
    }
    print(){
        this.list.print()
    }
}

const li=new stack()
li.push(10)
li.push(11)
li.push(12)
 console.log("this is pop data",li.pop()); 
//  console.log("this  is shift data",li.shift())
li.print()
// li.pop()

// li.print()
