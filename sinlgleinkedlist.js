// class Node {
//     constructor(data) {
//       this.data = data;
//       this.next = null;
//     }
//   }

// class slink{
//     constractor(){
//         this.head = null;
//         this.tail=  null;
//     }

//     addnode(data) {
//         const newnode=new Node (data)
//         if(this.head==null){
//            this.head= newnode;
//            this.tail= newnode;
//            console.log("noooo")

//         }else{
//             console.log("ys");
//             this.tail.next=newnode;
//             this.tail=newnode;
//         }
//         console.log("value added");
//     }

//     display(){
//         this.temp=this.head;
//         if( this.temp==null){
//             console.log("empty");
//             return;
//         }
//       while( this.temp!=null){
//             console.log(this.temp.data)
//             this.temp = this.temp.next;
//       }
        
//       }

//     deletion(data){
//         this.current= this.head ;
//         this.previos=null;
//         if(this.head==null){
//             console.log("this is empty")
//             return;
//         }
//         while(this.current!=null&&this.current.data!=data){
//            this.previos=this.current;
//            this.current=this.current.next;
          
        
//         }
//         if(this.current== this.tail){
//             this.tail= this.previos;
//             this.tail.next=null;
//             return ;
//         }
//         this.previos.next=this.current.next;
//        console.log("this is deleted");
//     }
//     insertafter(data,t){

//         const newnode=new Node(data)
//         this.temp=this.head;
//         if(this.temp==null){
//             console.log("err mistake");
//             return ;
//         }
//         while(this.temp!=null&&this.temp.data!=t){
//             this.temp=this.temp.next;
//         }
//         if(this.temp==null){
//             console.log("not heare");
//             return;
//         }
//         if(this.temp==this.tail){
//             this.tail.next=newnode;
//             this.tail=newnode
//            console.log("reee");
//             return;
//         }
//         newnode.next=this.temp.next
//         this.temp.next=newnode;
//         console.log("inserted");

//     }
//     append(data){
//         const newnode=new Node(data)
//         this.temp=this.head;
        
//         if(this.temp==null){
//             this.temp=newnode;
//             this.head=newnode
//             this.tail= newnode
//             return;
//         }
//         if(this.temp!=null){
//             newnode.next=this.temp
//             this.head=newnode
//             return;
//         }
//     }
   
   
    

// }

// const add=new slink()


// add.addnode(60)
// add.addnode(60)
// add.addnode(60)
// add.addnode(60)
// add.append(744)
// add.append(80)
// add.display()
// add.insertafter(11,0)
// add.display()


class node{
    constructor(data){
        this.data=data;
        this.next=null;

    }
}
class slist{
    constructor(){
        this.head=null;
        this.tail=null;
    }
    addele(data){
        const newnode=new node(data)
        this.temp=this.head;
        if(this.temp!=null){
            this.tail.next=newnode
            this.tail=newnode
            
            return;
        }else{
            this.head=newnode;
            this.tail=newnode;
        }
        
    }
    display(){
        this.temp=this.head
        if(this.head==null){
            console.log("no ones heare");
        }

        while(this.temp!=null){
            console.log(this.temp.data)
            this.temp=this.temp.next
            
        }


    }
    pripend(data){
        const newnode=new node(data)
        this.temp=this.head;
        if(this.temp==null){
            console.log("err");
          
            this.head=newnode
            this.tail=newnode
            return ;

        }
            console.log("err");
            newnode.next=this.temp
            this.head= newnode;

      
    }

    insertafter(data,t){
        const newnode=new node(data)
        this.current=this.head;
        this.pre=null;
        if(this.current==null){
            console.log("this is not available");
            return;
        }
        while(this.current!=null&&this.current.data!=t){
           
            this.current=this.current.next
        }
        if(this.current==null){
            return
        }
       
        if(this.current==this.tail){
            this.tail.next=newnode
            this.tail=newnode;
            return;
        }
        newnode.next=this.current.next;
        this.current.next=newnode
        console.log("inserted");
    }
   delete(data){
    this.current=this.head
    this.pre=null;
    
    if( this.current==null){
        console.log("no value");
        return;
    }
    while(this.current!=null&&this.current.data!=data){
        this.pre=this.current
        this.current= this.current.next
    }
    if(this.current==null){
        return ;

    }
    if(this.current==this.head){
        this.head=this.current.next
        return;
        
    }
    if(this.current==this.tail){
        this.tail=this.pre;
        this.tail.next=null;
        return;
    }
    this.pre.next=this.current.next


   }
           
    
}

const add=new slist()
add.addele(10)
add.addele(20)
add.pripend(4)
add.insertafter(12,20)

add.display()
add.delete(4)
add.display()
