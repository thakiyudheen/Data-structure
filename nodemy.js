class Node{
    constructor(data){
        
        this.data=data;
        this.next=null;
    }
}
class singlenode{
    constructor(){
        this.head=null
        this.tail=null
    }
    appent(data){
        const newnode=new Node(data)
        this.temp=this.head
        if(this.temp!=null){
            this.tail.next =newnode
            this.tail=newnode
            return;
        }
        this.head=newnode;
        this.tail=newnode
    }
   preppent(data){
    const newnode=new Node(data)
    this.temp=this.head;
    if(this.temp!=null){
        newnode.next=this.head;
        this.head=newnode
        return;
    }else{
        this.head=newnode
        this.tail=newnode
        return;
    }

   }
   delete(n){
    // console.log(this.head.data);
     let pre=null
     let temp=this.head;
     let count=1;
     while(temp!=null&&n!=count){
        pre=temp;
        temp=temp.next
        count++;
     }
     if(temp==null){
        return;
     }
     if(temp==this.head){
        this.head=this.head.next 
        return 
   
     }
     if(temp==this.tail){
        this.tail=pre
        this.tail.next=null
        return;
     }
     pre.next=temp.next


    
    }


   cercleor(){
    let spointer=this.head
    let fpointer=this.head;
    while( fpointer!=null&&fpointer.next!=null){
        fpointer=fpointer.next.next
        spointer=spointer.next
        if(fpointer==spointer){
            return true;
        }
        return false;
    }
    
   }
   middle(){
    let sp=this.head;
    let fp=this.head;
    while(sp!=null&&fp!=null){
        sp=sp.next
        fp=fp.next.next
    }
    return sp.data ;
   }

   middledelete(){
    let pre=null;
    let sp=this.head
    let fp=this.head
    while(fp!=null&&fp.next!=null){
        pre=sp ;
        sp=sp.next;
        fp=fp.next.next
       
    }
    if(pre!=null){
        pre.next=sp.next;
    }else{
        this.head =sp.next;
    }
}
    delete1(t){
        this.current=this.head;
        this.pre=null;

        while(this.current!=null&&this.current.data!=t){
            this.pre=this.current;
            this.current=this.current.next;
        }
        if(this.current==null){
            return;
        }
        if(this.current==this.head){
            this.head=this.current.next;
            return;
        }
        if(this.tail==this.current){
            this.tail=this.pre;
            this.tail.next=null;
            return;
        }
      
        
        this.pre.next=this.current.next
    }
    insertAfter(data,t){
        const newnode=new Node(data)
        this.temp=this.head
        while(this.temp!=null&&this.temp.data!=t){
            this.temp=this.temp.next


        }
        if(this.temp==null){
            return;
        }
      
        if(this.temp==this.tail){

           
            this.temp.next=newnode;
            this.tail=newnode;
            return ;
        }
        

       
        newnode.next=this.temp.next
        this.temp.next=newnode
       
    }
    insertbefore(data,t){
        const newnode=new Node(data)
          this.temp=this.head
          this.pre=null;
          while(this.temp!=null&&this.temp.data!=t){
            this.pre=this.temp;
            this.temp=this.temp.next
          }
          if(this.temp==null){
            return null;
          }
          if(this.temp==this.head){
            newnode.next=this.head ;
            this.head=newnode;
            return;
          }
          newnode.next=this.temp
          this.pre.next=newnode

        }
        reverce(){
            let pre=null
            let current =this.head
            let next=null
            while(current!=null){
                next= current.next;
                current.next =pre ;
                pre=current;
                current=next;

            }
            this.head=pre
        }

   
    display(){
      
        this.temp=this.head;
        while(this.temp!=null){
            console.log(this.temp.data);
            this.temp= this.temp.next
        }
    }
}

const node1=new singlenode()
node1.appent(10)
node1.appent(11)
node1.appent(12)
node1.appent(13)


node1.appent(14)
node1.preppent(1)

node1.delete1(14)


node1.display()
node1.delete(1)
console.log("he;;");
// node1.insertAfter(67,1)
// node1.insertbefore(77,13)
// node1.reverce()
node1.display()

// node1.insertbefore(78,1)

