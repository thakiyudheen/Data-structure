// // class que{
// //     constructor(){
// //         this.queue1=[]
// //         this.queue2=[]
// //     }
// //     push(data){
// //         this.queue1.push(data)
// //     }
// //     pop(){
// //         while(this.queue1.length > 1){
// //             this.queue2.push(this.queue1.shift())
// //         }
// //        let popdata= this.queue1.shift()


// //         let temp=this.queue1
// //         this.queue1=this.queue2
// //         this.queue2=temp
// //         return popdata
        

// //     }
// //     delete(){
// //         let temp=[]
// //         let m=Math.floor(this.queue1.length/2)
// //         for(let i=0;i<m;i++){
// //             temp.push(this.queue1[i])
// //         }
// //         this.queue1.pop()
// //         while(temp.length>0){
// //             this.queue1.push(temp.pop())
// //         }
// //         console.log(this.queue1)
// //     }
    
// // }

// // const que1=new que()
// // que1.push(1)
// // que1.push(2)
// // que1.push(3)
// // que1.push(4)
// // // console.log(que1.pop());
// // que1.delete()
// // class Queue {
// //     constructor() {
// //         this.queue1 = [];
// //     }

// //     deleteCenter() {
// //         let temp = [];
// //         let m = Math.floor(this.queue1.length / 2);
// //         for (let i = 0; i < m; i++) {
// //             temp.push(this.queue1.shift()); // Use shift() to remove elements from the front of the queue
// //         }
// //         this.queue1.shift(); // Remove the center element
// //         while (temp.length > 0) {
// //             this.queue1.push(temp.shift()); // Use shift() to remove elements from the front of the temp array
// //         }
// //         console.log(this.queue1);
// //     }
// // }

// // // Example usage:
// // let queue = new Queue();
// // queue.queue1 = [1, 2, 3, 4, 5];
// // queue.deleteCenter();


// class stack{
//     constructor(){
//         this.stack=[]
//     }
//     push(data){
//         this.stack.push(data)
//     }
//     delete(){
//         let temp=[]
//         let mid=Math.floor(this.stack.length/2)
//         for(let i=0;i<m;i++){
//             temp.push(this.stack.pop())
//         }
//         this.stack.pop()
//         while(temp.length>0){
//             this.stack.push(temp.pop())
//         }
//     console.log(this.stack);
//     }
// }
// const que=new stack()
// // let arr=[32,43,42,56,21];
// que.push(1)
// que.push(2)
// que.push(3)
// que.push(4)
// que.push(5)
// que.push(6)
// que.delete()

class ht{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }
    hash(key){
        let totel=0;
        for(let i=0;i<key;i++){
            totel+=key.charCodeAt(i)
        }
        return totel % this.size
    }
    set(key,value ){
        const index=this.hash(key)
        const bucket=this.table[index]
        if(!bucket){
            this.table[index]=[[key,value]]

        }else{
            let match= bucket.find(el=> el[0]==key)
            if(match){
                match[1]=value
            }else{
                this.table[index].push([key,value])
            }
        }
    }
}