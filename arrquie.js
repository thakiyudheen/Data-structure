class quie{
    constructor(){
        this.arr=[]
        
    }

    push(data){
       this.arr.push(data)
    }
    shift(){
        return this.arr?this.arr.shift():null
    }
    print(){
        console.log(this.arr)
    }
}

const qu=new quie()
qu.push(1)
qu.push(2)
qu.push(3)
qu.push(4)
// qu.shift()
qu.print()