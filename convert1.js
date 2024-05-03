class stack{
    constructor(){
        this.queue=[]
    }
    push(data){
        this.queue.push(data)
    }
    shift(){
       return this.queue.shift()
    }
    tostack(){
        this.stack=[]
        while(this.queue.length>0){
            this.stack.unshift(this.queue.shift())
        }
        return  this.stack
    }
    print(){
        console.log("queue:",this.queue)
    }
}

const  sta=new stack()
sta.push(1)
sta.push(2)
sta.push(3)
sta.push(4)
sta.push(5)
sta.print()

const stacks=sta.tostack()
stacks.pop()
console.log("stack:",stacks)


  