const linkedlist=require('./stack')

class quie{
    constructor(){
        this.list= new linkedlist()
    }
    push(data){
        this.list.append(data)
    }
    shift(){
        return this.list.shift()
    }
    peak(){
        return this.list.peak()
    }
    print(){
        this.list.print()

    }
}

const que=new quie()


que.push(1)
que.push(2)
que.push(3)
que.push(4)
que.push(5) 

console.log("this is peak",que.peak());
que.shift()

que.print()