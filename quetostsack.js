// class StackUsingQueues {
//     constructor() {
//         this.queue1 = [];
//         this.queue2 = [];
//     }

//     push(element) {
//         // Enqueue the new element to queue1
//         this.queue1.push(element);
//     }

//     pop() {
//         if (this.isEmpty()) {
//             return "Underflow";
//         }

//         // Move all elements from queue1 to queue2 except the last one
//         while (this.queue1.length > 1) {
//             this.queue2.push(this.queue1.shift());
//         }

//         // Dequeue the last element from queue1 (which is the top element of the stack)
//         const poppedElement = this.queue1.shift();

//         // Swap the names of queue1 and queue2
//         [this.queue1, this.queue2] = [this.queue2, this.queue1];

//         return poppedElement;
//     }

//     isEmpty() {
//         return this.queue1.length === 0;
//     }
// }

// // Example usage:
// const myStack = new StackUsingQueues();
// myStack.push(1);
// myStack.push(2);
// myStack.push(3);

// console.log(myStack.pop()); // Output: 3
// console.log(myStack.pop()); // Output: 2
// console.log(myStack.pop()); // Output: 1


class quetostack{
    constructor(){
        this.queue1=[];
        this.queue2=[];

    }
    push(data){
        this.queue1.push(data)
    }
    pop(){
        while(this.queue1.length>1){
            this.queue2.push(this.queue1.shift())
        }
        let popdata=this.queue1.shift()
        // [this.queue1, this.queue2] = [this.queue2, this.queue1];
            let temp=this.queue1
            this.queue1=this.queue2
            this.queue2=temp
            return popdata
            
        return this.queue1[this.queue1.length-1]
    }
}

const ad=new quetostack()
ad.push(1)
ad.push(2)
ad.push(3)
ad.push(4)
ad.push(5)
console.log(ad.pop());