// class node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//         this.prev=null;
//     }
// }
// class doublelinkedlist{
//     constructor(){
//         this.head=null;
//         this.tail=null;
//     }
//     addnode(data){
//         const newnode=new node(data)
//         this.temp= this.head;
//         if(this.temp!=null){
//             this.tail.next=newnode
//             newnode.prev=this.tail
//             this.tail=newnode
//             return
//         }else{
//             this.head=newnode
//             this.tail=newnode
//             return;

//         }

//     }
//     delete(data){
//        this.current=this.head
//        this.pre=null;
//        if(this.current==null){
//         console.log("no values");
//     }
//     while(this.current!=null&&this.current.data!=data){
//         this.pre=this.current;
//         this.current= this.current.next;

//     }
//     if( this.current==this.tail){
//         this.tail=this.pre
//         this.tail.next=null;
//         return;
//     }
//     if(this.current==this.head){
//         this.head =this.current.next
//         this.prev=null
//         return;
//     }
//     this.pre.next=this.current.next
//     this.current.next.prev=this.pre
//     }
//     pripend(data){
//       const newnode=new node(data)
//       this.temp=this.head;
//       if(this.temp== null){
//         this.head=newnode
//         this.tail=newnode
//         return;
//       }else{
//         this.head.prev=newnode
//         newnode.next=this.head
//         this.head=newnode
//         return;
//       }
//     }
//     insertbefore(data,t){
//         const newnode=new node(data)
//         this.temp=this.head
//         if(this.temp==null){
//             console.log("not available");
//         }
//         while(this.temp!=null&&this.temp.data!=t){
//             this.temp=this.temp.next;

//         }
//         if(this.temp==null){
//             return;
//         }
//         if(this.temp==this.head){
//             newnode.next=this.head
//             this.head.prev=newnode
//             this.head=newnode
//             return
//         }
//         if(this.temp==this.tail){
//             newnode.next=this.tail;
//             newnode.prev=this.tail.prev
//             newnode.prev.next=newnode
//             this.tail.prev=newnode
//             return;
//         }
//         newnode.prev=this.temp.prev
//         newnode.next=this.temp
//         this.temp.prev=newnode
//         newnode.prev.next=newnode

//     }
   
//     display(){
//         this.temp=this.head;
//         while(this.temp!=null){
//             console.log(this.temp.data);
//             this.temp=this.temp.next
//         }
//     }
//     displayr(){
//         this.temp=this.tail;
//         while(this.temp!=null){
//             console.log(this.temp.data);
//             this.temp=this.temp.prev
//         }
//     }
// }

// const add=new doublelinkedlist()
// add.addnode(10)
// add.addnode(11)
// add.addnode(12)
// add.addnode(13)
// add.addnode(14)
// add.pripend(1)
// add.delete(12)
// add.insertbefore(33,14)

// add.display()
// console.log("end")
// add.displayr()

// var h= "hello"
// var hi=h.split("")

// hi.splice(3,0,"h")
// console.log(hi);

class node{
    constructor(data){
        this.data=data
        this.next= null
        this.pre=null
    }
    
}

class nl{
    constructor(){
        this.head=null 
        this.tail=null
    }
    add(data){
        const newnode= new node(data)
        this.temp=this.head
        if(this.temp!=null){
            this.tail.next=newnode
            newnode.pre=this.tail
            this.tail= newnode
            return;

        }else{
            this.head=newnode
            this.tail= newnode
            return;
        }
       
        
    }
    display(){
        this.temp =this.tail ;
        while(this.temp!=null){
            console.log(this.temp.data)
            this.temp=this.temp.pre
        }
    }
}

const sl=new nl()
sl.add(3)
sl.add(4)
sl.add(5)
sl.add(7)

sl.display()