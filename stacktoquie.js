class quie{
    constructor(){
        this.stack1=[]
        this.stack2=[]
    }
    push(data){
        this.stack1.push(data)
    }
    // to cnveert
    dequeue(){
        if(this.stack2.length==0){
            while(this.stack1.length>0){
                this.stack2.push(this.stack1.pop());
            }
        }
        if(this.stack2.length>0){

            return this.stack2.pop();
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
   
    print(){
        console.log("this is stak 1",this.stack1)
        console.log("this is stak 2",this.stack2);
    }
    
}
const sta=new quie()
sta.push(1)
sta.push(2)
sta.push(3)
sta.push(4)
console.log("this is the ",sta.dequeue());

// console.log("this is peek",sta.peek());

sta.print()