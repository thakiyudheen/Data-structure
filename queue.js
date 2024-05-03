const nl= require('./practice')
class queue{
    constructor(){
        this.list=new nl()
    }
    push(data){
         this.list.push(data)
    }
    shift(){
        return this.list.shift()
    }
    getsize(){
        return this.list.getSize()
    }
    print(){
        this.list.print()
    }

    
}
const que=new queue()
que.push(1)
que.push(2)
que.push(3)
que.push(4)
que.push(5)
console.log("this is the shift",que.shift())
que.print()