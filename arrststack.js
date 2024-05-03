class stack{
    constructor(){
        this.arr=[]
        
    }
    push(data){
        this.arr.push(data)
    }
    pop(){
        return this.arr?this.arr.pop():null
    }
    print(){
        console.log(this.arr)
    }

    
}
const st=new stack()
st.push(10)
st.push(11)
st.push(12)
st.push(13)
st.pop()
st.print()