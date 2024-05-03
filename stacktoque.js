class stacktoqueue{
    constructor(){
        this.stack1=[]
        this.stack2=[]
    }
    push(data){
        this.stack1.push(data)
    }
    dequequ(){
        if(this.stack2.length==0){
            while(this.stack1.length>0){
                this.stack2.push(this.stack1.pop())
            }
        }
        if(this.stack2.length>0){
            return this.stack2.pop()
        }else{
            return null;
        }
    }
    peek(){

        if(this.stack2.length==0){
            while(this.stack1.length>0){
                this.stack2.push(this.stack1.pop())
            }
        }

        return this.stack2[this.stack2.length-1]
    }
    getSize(){
        return this.stack2.length
    }
    
    
}
const nl=new stacktoqueue()
nl.push(1)
nl.push(2)
nl.push(3)
nl.push(4)
nl.push(5)
console.log(nl.dequequ());
// console.log(nl.)
console.log(nl.getSize())
console.log(nl.peek())
console.log(nl.stack2)
