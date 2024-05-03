class quetostack{
    constructor(){
        this.queue=[]
    }

    push(data){
        this.queue.push(data)
    }
    tostack(){
         this.stack=[]
        while(this.queue.length>0){
            
             this.stack.push(this.queue.shift())            
        }
        return this.stack
    }
    peek(){
        // this.stack.shift()
    }
}

const stack=new quetostack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)

const st= stack.tostack()
st.pop()


console.log(st);