class quietostack{
    constructor(){
        this.quie=[]
    }
    push(data){
        this.quie.push(data)
    }
    dequie(){
        return this.quie.shift()
    }
    convert(){
        const stack=[]
    
        
        while(this.quie.length>0){
            stack.push(this.quie.shift())
        }
    
    return stack
    }
   
    
}

const quie=new quietostack()
quie.push(10)
quie.push(11)
quie.push(12)
quie.push(13)
quie.push(14)
console.log(quie.dequie())
const stack=quie.convert()
console.log(stack.pop())
