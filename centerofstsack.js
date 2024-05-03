class stack{
    constructor(){
        this.stack=[]
    }
    push(data){
        this.stack.push(data)

    }
    delete(){
        let temp=[]
        let m=Math.floor(this.stack.length/2)
        for(let i=0;i<m;i++){
            temp.push(this.stack.pop())
        }
        this.stack.pop()
        while(temp.length>0){
            this.stack.push(temp.pop())
        }

    }
    print(){
        console.log(this.stack)
    }
}
const ad=new stack()
ad.push(1)
ad.push(2)
ad.push(3)
ad.push(4)
ad.push(5)
ad.push(6)
ad.delete()
ad.print()