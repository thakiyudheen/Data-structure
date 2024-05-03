// class que{
//     constructor(){
//         this.stack1=[]
//         this.stack2=[]
//     }
//     push(data){
//         this.stack1.push(data)
//     }
//     dequeue(){
//         if(this.stack2.length==0){
//             while(this.stack1.length>0 ){
//                 this.stack2.push(this.stack1.pop())
//             }
//             if(this.stack2.length>0){
//                 return this.stack2.pop()
//             }
//         }
//     }
//     print(){
//         console.log("Queue:",this.stack2)
//     }
//     peek(){
//         return this.stack2[this.stack2.length-1]
//     }
//     getSize(){
//         if(this.stack1.length==0&&this.stack2.length==0){

//         }
//     }

// }


// const que1=new que()
// que1.push(1)
// que1.push(2)
// que1.push(3)
// que1.push(4)
// que1.push(5)
// que1.push(6)
// console.log("stack:",que1.stack1)
// que1.dequeue()
// // console.log( "this is peek",que1.peek());
// console.log('Queue:',que1.print())

class stack{
    constructor(){
        this.stack1=[]
        this.stack2=[]
    }
    enqueue(data){
        this.stack1.push(data)
    }
    dequeue(){
        if(this.stack2.length==0){
            while(this.stack1.length>0){
                this.stack2.push(this.stack1.pop())
            }
        }
        if(this.stack2.length>0){
            
            return this.stack2.pop()
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
    isEmty(){
        return this.stack2.length==0||this.stack1.length==0
    }
    print(){
        console.log("stack",this.stack1)
        console.log("Queue",this.stack2)
    }
}
const st=new stack()
st.enqueue(1)
st.enqueue(2)
st.enqueue(3)
st.print()
st.dequeue()
st.print()